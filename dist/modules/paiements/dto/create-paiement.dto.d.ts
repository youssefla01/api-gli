export declare class CreatePaiementDto {
    bail_id: string;
    montant_paiement: number;
    date_paiement: Date;
    methode_paiement: string;
    statut?: string;
    recu_document: string;
    commission_agence: number;
    revenu_net_proprietaire: number;
}
