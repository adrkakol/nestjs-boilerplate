import { validateSync } from 'class-validator';

import { EnvVariables } from './env-variables';

export class EnvVariablesValidation {
  private static validateEnvs(
    envs: Partial<EnvVariables>,
  ): asserts envs is EnvVariables {
    const validationErrors = validateSync(envs as EnvVariables);

    if (validationErrors.length > 0) {
      throw Error(
        `Env variables validation error: ${validationErrors.join('\n')}`,
      );
    }
  }

  public static getValidEnvs(envsObject: Record<string, any>): EnvVariables {
    const parsedVariables: Partial<EnvVariables> = new EnvVariables(envsObject);
    EnvVariablesValidation.validateEnvs(parsedVariables);

    return parsedVariables;
  }
}
