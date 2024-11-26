export declare class CreateBailDto {
    bien_id: string;
    locataire_id: string;
    proprietaire_id: string;
    date_debut: Date;
    date_fin: Date;
    montant_loyer: number;
    depot_garantie: number;
    commission_agence?: number;
    statut?: string;
    document_bail: string;
}
