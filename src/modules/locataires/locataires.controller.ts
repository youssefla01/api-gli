import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  BadRequestException,
  UploadedFiles,
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
import { LocatairesService } from "./locataires.service";
import { CreateLocataireDto } from "./dto/create-locataire.dto";
import { UpdateLocataireDto } from "./dto/update-locataire.dto";
import { FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { FileHelper } from "../FilesModule/utils/file-helper.util";

@ApiTags("locataires")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("locataires")
export class LocatairesController {
  constructor(private readonly locatairesService: LocatairesService) {}

  @Post()
  @ApiOperation({ summary: "Créer un nouveau locataire avec documents" })
  @ApiResponse({ status: 201, description: "Locataire créé avec succès." })
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
    @Body() createLocataireDto: CreateLocataireDto,
    @UploadedFiles() files: Express.Multer.File[]
  ) {
    try {
      // Si des fichiers sont téléchargés, les traiter
      if (files && files.length > 0) {
        const fileObjects = files.map((file) => ({
          uid: file.filename,
          name: file.originalname,
          url: `./uploads/documents/${file.filename}`,
        }));
        createLocataireDto.piece_jointe = fileObjects;
      }

      // Appel du service pour créer le locataire
      const locataire = await this.locatairesService.create(createLocataireDto);

      return {
        status: 201,
        message: "Locataire créé avec succès.",
        data: locataire,
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error; // Cette exception est déjà gérée
      }
      // Retourner un message d'erreur spécifique si une autre erreur se produit
      throw new BadRequestException(
        error.message || "Une erreur s'est produite."
      );
    }
  }

  @Get()
  @ApiOperation({ summary: "Récupérer tous les locataires" })
  @ApiResponse({
    status: 200,
    description: "Liste des locataires récupérée avec succès.",
  })
  findAll() {
    return this.locatairesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Récupérer un locataire par son ID" })
  @ApiResponse({ status: 200, description: "Locataire trouvé." })
  @ApiResponse({ status: 404, description: "Locataire non trouvé." })
  findOne(@Param("id") id: string) {
    return this.locatairesService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Mettre à jour un locataire" })
  @ApiResponse({
    status: 200,
    description: "Locataire mis à jour avec succès.",
  })
  @ApiResponse({ status: 404, description: "Locataire non trouvé." })
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
  async update(
    @Param("id") id: string,
    @Body() updateLocataireDto: UpdateLocataireDto,
    @UploadedFiles() files: Express.Multer.File[] // Récupérer les fichiers envoyés
  ) {
    try {
      // Si des fichiers sont téléchargés, les traiter
      if (files && files.length > 0) {
        const fileObjects = files.map((file) => ({
          uid: file.filename,
          name: file.originalname,
          url: `./uploads/documents/${file.filename}`,
        }));
        updateLocataireDto.piece_jointe = fileObjects; // Ajouter les fichiers au DTO
      }

      // Appel du service pour mettre à jour le locataire
      const locataire = await this.locatairesService.update(
        id,
        updateLocataireDto
      );

      return {
        status: 200,
        message: "Locataire mis à jour avec succès.",
        data: locataire,
      };
    } catch (error) {
      // Gérer les erreurs spécifiques
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new BadRequestException(
        error.message || "Une erreur s'est produite."
      );
    }
  }

  @Patch(":id/status")
  @ApiOperation({ summary: "Mettre à jour le statut d’un locataire" })
  @ApiResponse({ status: 200, description: "Statut mis à jour avec succès." })
  @ApiResponse({ status: 404, description: "Locataire non trouvé." })
  async updateStatus(@Param("id") id: string, @Body("status") status: string) {
    try {
      const locataire = await this.locatairesService.updateStatus(id, status);
      return {
        status: 200,
        message: "Statut mis à jour avec succès.",
        data: locataire,
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new BadRequestException(
        error.message ||
          "Une erreur s'est produite lors de la mise à jour du statut."
      );
    }
  }

  @Delete(":id")
  @ApiOperation({ summary: "Supprimer un locataire" })
  @ApiResponse({ status: 200, description: "Locataire supprimé avec succès." })
  @ApiResponse({ status: 404, description: "Locataire non trouvé." })
  remove(@Param("id") id: string) {
    return this.locatairesService.remove(id);
  }
}
