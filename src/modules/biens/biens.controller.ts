import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { BiensService } from './biens.service';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';

@ApiTags('biens')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('biens')
export class BiensController {
  constructor(private readonly biensService: BiensService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau bien' })
  @ApiResponse({ status: 201, description: 'Bien créé avec succès.' })
  create(@Body() createBienDto: CreateBienDto) {
    return this.biensService.create(createBienDto);
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
  update(@Param('id') id: string, @Body() updateBienDto: UpdateBienDto) {
    return this.biensService.update(id, updateBienDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un bien' })
  @ApiResponse({ status: 200, description: 'Bien supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Bien non trouvé.' })
  remove(@Param('id') id: string) {
    return this.biensService.remove(id);
  }
}