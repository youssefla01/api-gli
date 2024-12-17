export declare class CreateBienDto {
    readonly type: string;
    readonly adresse: string;
    readonly description?: string;
    readonly etat?: string;
    readonly proprietaire_id: string;
    readonly surface?: number;
    readonly nb_pieces?: number;
    readonly prix?: number;
    readonly ref_compteur_eau?: string;
    readonly ref_compteur_electricite?: string;
    photos?: any[];
    documents?: any[];
}
