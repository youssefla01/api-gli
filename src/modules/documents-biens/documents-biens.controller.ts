import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { DocumentsBiensService } from './documents-biens.service';
import { CreateDocumentBienDto } from './dto/create-document-bien.dto';
import { UpdateDocumentBienDto } from './dto/update-document-bien.dto';

@ApiTags('documents-biens')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('documents-biens')
export class DocumentsBiensController {
  constructor(private readonly documentsBiensService: DocumentsBiensService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau document' })
  @ApiResponse({ status: 201, description: 'Document créé avec succès.' })
  create(@Body() createDocumentBienDto: CreateDocumentBienDto) {
    return this.documentsBiensService.create(createDocumentBienDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les documents' })
  @ApiResponse({ status: 200, description: 'Liste des documents récupérée avec succès.' })
  findAll() {
    return this.documentsBiensService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un document par son ID' })
  @ApiResponse({ status: 200, description: 'Document trouvé.' })
  @ApiResponse({ status: 404, description: 'Document non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.documentsBiensService.findOne(id);
  }

  @Get('bien/:id')
  @ApiOperation({ summary: 'Récupérer tous les documents d\'un bien' })
  @ApiResponse({ status: 200, description: 'Liste des documents du bien récupérée avec succès.' })
  findByBien(@Param('id') id: string) {
    return this.documentsBiensService.findByBien(id);
  }

  @Get('type/:type')
  @ApiOperation({ summary: 'Récupérer tous les documents d\'un type spécifique' })
  @ApiResponse({ status: 200, description: 'Liste des documents du type spécifié récupérée avec succès.' })
  findByType(@Param('type') type: string) {
    return this.documentsBiensService.findByType(type);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un document' })
  @ApiResponse({ status: 200, description: 'Document mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Document non trouvé.' })
  update(@Param('id') id: string, @Body() updateDocumentBienDto: UpdateDocumentBienDto) {
    return this.documentsBiensService.update(id, updateDocumentBienDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un document' })
  @ApiResponse({ status: 200, description: 'Document supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Document non trouvé.' })
  remove(@Param('id') id: string) {
    return this.documentsBiensService.remove(id);
  }
}