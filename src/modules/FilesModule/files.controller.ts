import { Controller, Get, Param, Res } from "@nestjs/common";
import { FilesService } from "./files.service";
import { Response } from "express";
import { join, resolve } from "path";
import { existsSync } from "fs";

@Controller("files")
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  // Récupère la liste des fichiers
  @Get()
  getAllFiles() {
    return this.filesService.getDocumentStorage(); // Liste des fichiers
  }

  // Récupère un fichier spécifique
  @Get(":type/:fileName")
  getFile(
    @Param("type") type: string,
    @Param("fileName") fileName: string,
    @Res() res: Response
  ) {
    const basePath = process.cwd(); // Racine du projet
    const filePath =
      type === "photo"
        ? join(basePath, "uploads", "photos", fileName)
        : join(basePath, "uploads", "documents", fileName);

    console.log("Chemin du fichier:", filePath); // Vérifiez si le chemin est correct

    if (existsSync(filePath)) {
      return res.sendFile(filePath); // Si le fichier existe, on l'envoie
    } else {
      return res.status(404).json({ message: "Fichier non trouvé" }); // Retourner une erreur 404 si le fichier n'existe pas
    }
  }
}
