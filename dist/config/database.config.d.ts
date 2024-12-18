declare const _default: (() => {
    dialect: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    autoLoadModels: boolean;
    synchronize: boolean;
    sync: {
        force: boolean;
        alter: boolean;
    };
    logging: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    pool: {
        max: number;
        min: number;
        acquire: number;
        idle: number;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    dialect: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    autoLoadModels: boolean;
    synchronize: boolean;
    sync: {
        force: boolean;
        alter: boolean;
    };
    logging: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    pool: {
        max: number;
        min: number;
        acquire: number;
        idle: number;
    };
}>;
export default _default;
