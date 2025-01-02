import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  UseInterceptors,
  BadRequestException,
  UploadedFile,
  UploadedFiles,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/jwt-auth.guard";
import { ProprietairesService } from "./proprietaires.service";
import { CreateProprietaireDto } from "./dto/create-proprietaire.dto";
import { UpdateProprietaireDto } from "./dto/update-proprietaire.dto";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { FileHelper } from "../FilesModule/utils/file-helper.util";

@ApiTags("proprietaires")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("proprietaires")
export class ProprietairesController {
  constructor(private readonly proprietairesService: ProprietairesService) {}

  @Post()
@ApiOperation({
  summary: "Créer un nouveau propriétaire avec plusieurs documents",
})
@ApiResponse({ status: 201, description: "Propriétaire créé avec succès." })
@ApiConsumes("multipart/form-data")
@UseInterceptors(
  FilesInterceptor("piece_jointe", 10, {
    storage: diskStorage({
      destination: "./uploads/documents",
      filename: (req, file, cb) => {
        const fileName = FileHelper.generateFileName(file);
        cb(null, fileName);
      },
    }),
    fileFilter: (req, file: any, cb) => {
      if (!FileHelper.isDocument(file)) {
        cb(new BadRequestException("Invalid file type."), false);
      }
      cb(null, true);
    },
  })
)
async create(
  @Body() createProprietaireDto: CreateProprietaireDto,
  @UploadedFiles() files: Express.Multer.File[]
) {
  try {
    // Vérification si le téléphone existe déjà
    const existingPhone = await this.proprietairesService.findByPhone(createProprietaireDto.telephone);
    if (existingPhone) {
      throw new ConflictException('Ce numéro de téléphone est déjà utilisé.');
    }

    // Si des fichiers sont téléchargés, les traiter
    if (files && files.length > 0) {
      const fileObjects = files.map((file) => ({
        uid: file.filename,
        name: file.originalname,
        url: `./uploads/documents/${file.filename}`,
      }));
      createProprietaireDto.piece_jointe = fileObjects;
    }

    // Appel du service pour créer le propriétaire
    const proprietaire = await this.proprietairesService.create(createProprietaireDto);

    return {
      status: 201,
      message: "Propriétaire créé avec succès.",
      data: proprietaire,
    };
  } catch (error) {
    if (error instanceof ConflictException) {
      throw error;  // Cette exception est déjà gérée
    }
    // Retourner un message d'erreur spécifique si une autre erreur se produit
    throw new BadRequestException(error.message || 'Une erreur s\'est produite.');
  }
}

  @Get()
  @ApiOperation({ summary: "Récupérer tous les propriétaires" })
  @ApiResponse({
    status: 200,
    description: "Liste des propriétaires récupérée avec succès.",
  })
  findAll(@Query("search") search?: string) {
    return this.proprietairesService.findAll(search);
  }

  @Get(":id")
  @ApiOperation({ summary: "Récupérer un propriétaire par son ID" })
  @ApiResponse({ status: 200, description: "Propriétaire trouvé." })
  @ApiResponse({ status: 404, description: "Propriétaire non trouvé." })
  findOne(@Param("id") id: string) {
    return this.proprietairesService.findOne(id);
  }

  @Patch(":id")
@ApiOperation({ summary: "Mettre à jour un propriétaire" })
@ApiResponse({
  status: 200,
  description: "Propriétaire mis à jour avec succès.",
})
@ApiConsumes("multipart/form-data")
@ApiResponse({ status: 404, description: "Propriétaire non trouvé." })
@UseInterceptors(
  FilesInterceptor("piece_jointe", 10, {
    // Limiter à 10 fichiers
    storage: diskStorage({
      destination: "./uploads/documents",
      filename: (req, file, cb) => {
        const fileName = FileHelper.generateFileName(file);
        cb(null, fileName);
      },
    }),
    fileFilter: (req, file: any, cb) => {
      if (!FileHelper.isDocument(file)) {
        cb(new BadRequestException("Invalid file type."), false);
      }
      cb(null, true);
    },
  })
)
async update(
  @Param("id") id: string,
  @Body() updateProprietaireDto: UpdateProprietaireDto,
  @UploadedFiles() files: Express.Multer.File[]
) {
  console.log(updateProprietaireDto);

  const proprietaire = await this.proprietairesService.findOne(id);
  if (!proprietaire) {
    throw new NotFoundException("Propriétaire non trouvé.");
  }

  if (files && files.length > 0) {
    // Mapper les fichiers téléchargés vers la structure attendue
    const fileObjects = files.map((file) => ({
      uid: file.filename, // Vous pouvez générer un UID unique si nécessaire
      name: file.originalname, // Le nom original du fichier
      url: `./uploads/documents/${file.filename}`, // Le chemin d'accès au fichier
    }));

    // Mettre à jour la propriété 'piece_jointe' si de nouveaux fichiers sont envoyés
    updateProprietaireDto.piece_jointe = fileObjects;
  }

  // Mettre à jour le propriétaire avec les nouvelles informations
  return this.proprietairesService.update(id, updateProprietaireDto);
}


  @Delete(":id")
  @ApiOperation({ summary: "Supprimer un propriétaire" })
  @ApiResponse({
    status: 200,
    description: "Propriétaire supprimé avec succès.",
  })
  @ApiResponse({ status: 404, description: "Propriétaire non trouvé." })
  remove(@Param("id") id: string) {
    return this.proprietairesService.remove(id);
  }
}
