import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { PaiementsService } from './paiements.service';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';

@ApiTags('paiements')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('paiements')
export class PaiementsController {
  constructor(private readonly paiementsService: PaiementsService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau paiement' })
  @ApiResponse({ status: 201, description: 'Paiement créé avec succès.' })
  create(@Body() createPaiementDto: CreatePaiementDto) {
    return this.paiementsService.create(createPaiementDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les paiements' })
  @ApiResponse({ status: 200, description: 'Liste des paiements récupérée avec succès.' })
  findAll() {
    return this.paiementsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un paiement par son ID' })
  @ApiResponse({ status: 200, description: 'Paiement trouvé.' })
  @ApiResponse({ status: 404, description: 'Paiement non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.paiementsService.findOne(id);
  }

  @Get('bail/:id')
  @ApiOperation({ summary: 'Récupérer tous les paiements d\'un bail' })
  @ApiResponse({ status: 200, description: 'Liste des paiements du bail récupérée avec succès.' })
  findByBail(@Param('id') id: string) {
    return this.paiementsService.findByBail(id);
  }

  @Get('periode')
  @ApiOperation({ summary: 'Récupérer les paiements pour une période donnée' })
  @ApiQuery({ name: 'debut', type: Date })
  @ApiQuery({ name: 'fin', type: Date })
  @ApiResponse({ status: 200, description: 'Liste des paiements pour la période récupérée avec succès.' })
  findByPeriode(
    @Query('debut') debut: Date,
    @Query('fin') fin: Date,
  ) {
    return this.paiementsService.findByPeriode(debut, fin);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un paiement' })
  @ApiResponse({ status: 200, description: 'Paiement mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Paiement non trouvé.' })
  update(@Param('id') id: string, @Body() updatePaiementDto: UpdatePaiementDto) {
    return this.paiementsService.update(id, updatePaiementDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un paiement' })
  @ApiResponse({ status: 200, description: 'Paiement supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Paiement non trouvé.' })
  remove(@Param('id') id: string) {
    return this.paiementsService.remove(id);
  }
}