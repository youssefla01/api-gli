import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { AdministrateursService } from './administrateurs.service';
import { CreateAdministrateurDto } from './dto/create-administrateur.dto';
import { UpdateAdministrateurDto } from './dto/update-administrateur.dto';

@ApiTags('administrateurs')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('administrateurs')
export class AdministrateursController {
  constructor(private readonly administrateursService: AdministrateursService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel administrateur' })
  @ApiResponse({ status: 201, description: 'Administrateur créé avec succès.' })
  create(@Body() createAdministrateurDto: CreateAdministrateurDto) {
    return this.administrateursService.create(createAdministrateurDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les administrateurs' })
  @ApiResponse({ status: 200, description: 'Liste des administrateurs récupérée avec succès.' })
  findAll() {
    return this.administrateursService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un administrateur par son ID' })
  @ApiResponse({ status: 200, description: 'Administrateur trouvé.' })
  @ApiResponse({ status: 404, description: 'Administrateur non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.administrateursService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un administrateur' })
  @ApiResponse({ status: 200, description: 'Administrateur mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Administrateur non trouvé.' })
  update(@Param('id') id: string, @Body() updateAdministrateurDto: UpdateAdministrateurDto) {
    return this.administrateursService.update(id, updateAdministrateurDto);
  }

  @Patch(':id/change-password')
  @ApiOperation({ summary: 'Changer le mot de passe d\'un administrateur' })
  @ApiResponse({ status: 200, description: 'Mot de passe changé avec succès.' })
  @ApiResponse({ status: 404, description: 'Administrateur non trouvé.' })
  @ApiResponse({ status: 400, description: 'Mot de passe actuel incorrect.' })
  async changePassword(
    @Param('id') id: string,
    @Body() changePasswordDto: { currentPassword: string, newPassword: string }
  ) {
    return this.administrateursService.changePassword(
      id,
      changePasswordDto.currentPassword,
      changePasswordDto.newPassword
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un administrateur' })
  @ApiResponse({ status: 200, description: 'Administrateur supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Administrateur non trouvé.' })
  remove(@Param('id') id: string) {
    return this.administrateursService.remove(id);
  }
}