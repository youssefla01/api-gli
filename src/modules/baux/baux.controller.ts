import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { BauxService } from './baux.service';
import { CreateBailDto } from './dto/create-bail.dto';
import { UpdateBailDto } from './dto/update-bail.dto';

@ApiTags('baux')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('baux')
export class BauxController {
  constructor(private readonly bauxService: BauxService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau bail' })
  @ApiResponse({ status: 201, description: 'Bail créé avec succès.' })
  create(@Body() createBailDto: CreateBailDto) {
    return this.bauxService.create(createBailDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les baux' })
  @ApiResponse({ status: 200, description: 'Liste des baux récupérée avec succès.' })
  findAll() {
    return this.bauxService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un bail par son ID' })
  @ApiResponse({ status: 200, description: 'Bail trouvé.' })
  @ApiResponse({ status: 404, description: 'Bail non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.bauxService.findOne(id);
  }

  @Get('proprietaire/:id')
  @ApiOperation({ summary: 'Récupérer tous les baux d\'un propriétaire' })
  @ApiResponse({ status: 200, description: 'Liste des baux du propriétaire récupérée avec succès.' })
  findByProprietaire(@Param('id') id: string) {
    return this.bauxService.findByProprietaire(id);
  }

  @Get('locataire/:id')
  @ApiOperation({ summary: 'Récupérer tous les baux d\'un locataire' })
  @ApiResponse({ status: 200, description: 'Liste des baux du locataire récupérée avec succès.' })
  findByLocataire(@Param('id') id: string) {
    return this.bauxService.findByLocataire(id);
  }

  @Get('bien/:id')
  @ApiOperation({ summary: 'Récupérer tous les baux d\'un bien' })
  @ApiResponse({ status: 200, description: 'Liste des baux du bien récupérée avec succès.' })
  findByBien(@Param('id') id: string) {
    return this.bauxService.findByBien(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un bail' })
  @ApiResponse({ status: 200, description: 'Bail mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Bail non trouvé.' })
  update(@Param('id') id: string, @Body() updateBailDto: UpdateBailDto) {
    return this.bauxService.update(id, updateBailDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un bail' })
  @ApiResponse({ status: 200, description: 'Bail supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Bail non trouvé.' })
  remove(@Param('id') id: string) {
    return this.bauxService.remove(id);
  }
}