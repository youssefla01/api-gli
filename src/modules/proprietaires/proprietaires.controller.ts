import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ProprietairesService } from './proprietaires.service';
import { CreateProprietaireDto } from './dto/create-proprietaire.dto';
import { UpdateProprietaireDto } from './dto/update-proprietaire.dto';

@ApiTags('proprietaires')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('proprietaires')
export class ProprietairesController {
  constructor(private readonly proprietairesService: ProprietairesService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau propriétaire' })
  @ApiResponse({ status: 201, description: 'Propriétaire créé avec succès.' })
  create(@Body() createProprietaireDto: CreateProprietaireDto) {
    return this.proprietairesService.create(createProprietaireDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les propriétaires' })
  @ApiResponse({ status: 200, description: 'Liste des propriétaires récupérée avec succès.' })
  findAll() {
    return this.proprietairesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un propriétaire par son ID' })
  @ApiResponse({ status: 200, description: 'Propriétaire trouvé.' })
  @ApiResponse({ status: 404, description: 'Propriétaire non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.proprietairesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un propriétaire' })
  @ApiResponse({ status: 200, description: 'Propriétaire mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Propriétaire non trouvé.' })
  update(@Param('id') id: string, @Body() updateProprietaireDto: UpdateProprietaireDto) {
    return this.proprietairesService.update(id, updateProprietaireDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un propriétaire' })
  @ApiResponse({ status: 200, description: 'Propriétaire supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Propriétaire non trouvé.' })
  remove(@Param('id') id: string) {
    return this.proprietairesService.remove(id);
  }
}