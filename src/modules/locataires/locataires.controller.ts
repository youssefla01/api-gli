import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { LocatairesService } from './locataires.service';
import { CreateLocataireDto } from './dto/create-locataire.dto';
import { UpdateLocataireDto } from './dto/update-locataire.dto';

@ApiTags('locataires')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('locataires')
export class LocatairesController {
  constructor(private readonly locatairesService: LocatairesService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau locataire' })
  @ApiResponse({ status: 201, description: 'Locataire créé avec succès.' })
  create(@Body() createLocataireDto: CreateLocataireDto) {
    return this.locatairesService.create(createLocataireDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les locataires' })
  @ApiResponse({ status: 200, description: 'Liste des locataires récupérée avec succès.' })
  findAll() {
    return this.locatairesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un locataire par son ID' })
  @ApiResponse({ status: 200, description: 'Locataire trouvé.' })
  @ApiResponse({ status: 404, description: 'Locataire non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.locatairesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un locataire' })
  @ApiResponse({ status: 200, description: 'Locataire mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Locataire non trouvé.' })
  update(@Param('id') id: string, @Body() updateLocataireDto: UpdateLocataireDto) {
    return this.locatairesService.update(id, updateLocataireDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un locataire' })
  @ApiResponse({ status: 200, description: 'Locataire supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Locataire non trouvé.' })
  remove(@Param('id') id: string) {
    return this.locatairesService.remove(id);
  }
}