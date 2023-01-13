import {TypeOrmModuleOptions} from "@nestjs/typeorm";

type DbEnvs = {
    dbHost: string;
    dbPort: number;
    user: string;
    password: string;
    dbName: string;
}

export class TypeormConfigService {
    private static validateEnvs(envs: Partial<DbEnvs>): asserts envs is DbEnvs {
        if (!envs.dbHost || !envs.dbPort || !envs.user || !envs.password || !envs.dbName) {
            throw new Error("Database env variables are missing");
        }
    }

    private static getDbEnvs(): DbEnvs {
        const envs: Partial<DbEnvs> = {
            dbHost: process.env.DB_HOST,
            dbPort: parseInt(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            dbName: process.env.DB_NAME,
        }

        TypeormConfigService.validateEnvs(envs);
        return envs;
    }

    public static getConfig (): TypeOrmModuleOptions {
        const envs = TypeormConfigService.getDbEnvs();

        return {
            type: 'postgres',
            host: envs.dbHost,
            port: envs.dbPort,
            username: envs.user,
            password: envs.password,
            database: envs.dbName,
            entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
            synchronize: false,
            migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
            migrationsRun: true,
            migrationsTransactionMode: 'each',
        };
    }
}