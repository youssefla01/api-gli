import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UploadedFile, UseInterceptors, InternalServerErrorException, UploadedFiles, BadRequestException } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { BiensService } from './biens.service';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { FilesService } from '../FilesModule/files.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { extname } from 'path';
import { FileHelper } from '../FilesModule/utils/file-helper.util';

@ApiTags('biens')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('biens')
export class BiensController {
  constructor(
    private readonly biensService: BiensService,
    private readonly filesService: FilesService,
  ) {
    // Créer les dossiers d'upload s'ils n'existent pas
    ['uploads', 'uploads/photos', 'uploads/documents'].forEach(dir => {
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
    });
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau bien' })
  @ApiResponse({ status: 201, description: 'Bien créé avec succès.' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'photos', maxCount: 10 },
      { name: 'documents', maxCount: 10 }
    ], {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const folder = file.fieldname === 'photos' ? 'photos' : 'documents';
          const uploadPath = `uploads/${folder}`;
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
          cb(null, `${uniqueSuffix}-${file.originalname}`);
        }
      })
    })
  )
  async create(
    @Body() createBienDto: CreateBienDto,
    @UploadedFiles() files: { photos?: Express.Multer.File[], documents?: Express.Multer.File[] }
  ) {
    return this.biensService.create(createBienDto, files?.photos, files?.documents);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les biens' })
  @ApiResponse({ status: 200, description: 'Liste des biens récupérée avec succès.' })
  findAll() {
    return this.biensService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un bien par son ID' })
  @ApiResponse({ status: 200, description: 'Bien trouvé.' })
  @ApiResponse({ status: 404, description: 'Bien non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.biensService.findOne(id);
  }

  @Get('proprietaire/:id')
  @ApiOperation({ summary: 'Récupérer tous les biens d\'un propriétaire' })
  @ApiResponse({ status: 200, description: 'Liste des biens du propriétaire récupérée avec succès.' })
  findByProprietaire(@Param('id') id: string) {
    return this.biensService.findByProprietaire(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un bien' })
  @ApiResponse({ status: 200, description: 'Bien mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Bien non trouvé.' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'photos', maxCount: 10 },
      { name: 'documents', maxCount: 10 }
    ], {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const folder = file.fieldname === 'photos' ? 'photos' : 'documents';
          const uploadPath = `uploads/${folder}`;
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
          cb(null, `${uniqueSuffix}-${file.originalname}`);
        }
      })
    })
  )
  async update(
    @Param('id') id: string,
    @Body() updateBienDto: UpdateBienDto,
    @UploadedFiles() files: { photos?: Express.Multer.File[], documents?: Express.Multer.File[] }
  ) {
    return this.biensService.update(id, {
      ...updateBienDto,
      photos: files?.photos,
      documents: files?.documents,
      existingPhotos: updateBienDto.existingPhotos || [],
      existingDocuments: updateBienDto.existingDocuments || [],
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un bien' })
  @ApiResponse({ status: 200, description: 'Bien supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Bien non trouvé.' })
  remove(@Param('id') id: string) {
    return this.biensService.remove(id);
  }
}

function uuidv4() {
  throw new Error('Function not implemented.');
}
