import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RelevesMensuelsService } from './releves-mensuels.service';
import { CreateReleveMensuelDto } from './dto/create-releve-mensuel.dto';
import { UpdateReleveMensuelDto } from './dto/update-releve-mensuel.dto';

@ApiTags('releves-mensuels')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('releves-mensuels')
export class RelevesMensuelsController {
  constructor(private readonly relevesMensuelsService: RelevesMensuelsService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau relevé mensuel' })
  @ApiResponse({ status: 201, description: 'Relevé mensuel créé avec succès.' })
  create(@Body() createReleveMensuelDto: CreateReleveMensuelDto) {
    return this.relevesMensuelsService.create(createReleveMensuelDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les relevés mensuels' })
  @ApiResponse({ status: 200, description: 'Liste des relevés mensuels récupérée avec succès.' })
  findAll() {
    return this.relevesMensuelsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un relevé mensuel par son ID' })
  @ApiResponse({ status: 200, description: 'Relevé mensuel trouvé.' })
  @ApiResponse({ status: 404, description: 'Relevé mensuel non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.relevesMensuelsService.findOne(id);
  }

  @Get('proprietaire/:id')
  @ApiOperation({ summary: 'Récupérer tous les relevés mensuels d\'un propriétaire' })
  @ApiResponse({ status: 200, description: 'Liste des relevés mensuels du propriétaire récupérée avec succès.' })
  findByProprietaire(@Param('id') id: string) {
    return this.relevesMensuelsService.findByProprietaire(id);
  }

  @Get('periode')
  @ApiOperation({ summary: 'Récupérer les relevés mensuels pour une période donnée' })
  @ApiQuery({ name: 'mois', type: Number })
  @ApiQuery({ name: 'annee', type: Number })
  @ApiResponse({ status: 200, description: 'Liste des relevés mensuels pour la période récupérée avec succès.' })
  findByPeriode(
    @Query('mois') mois: number,
    @Query('annee') annee: number,
  ) {
    return this.relevesMensuelsService.findByPeriode(mois, annee);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un relevé mensuel' })
  @ApiResponse({ status: 200, description: 'Relevé mensuel mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Relevé mensuel non trouvé.' })
  update(@Param('id') id: string, @Body() updateReleveMensuelDto: UpdateReleveMensuelDto) {
    return this.relevesMensuelsService.update(id, updateReleveMensuelDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un relevé mensuel' })
  @ApiResponse({ status: 200, description: 'Relevé mensuel supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Relevé mensuel non trouvé.' })
  remove(@Param('id') id: string) {
    return this.relevesMensuelsService.remove(id);
  }
}