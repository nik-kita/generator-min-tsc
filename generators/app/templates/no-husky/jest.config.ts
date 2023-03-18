import type { Config } from '@jest/types';
import { readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'comment-json';

const data = readFileSync(join(__dirname, 'tsconfig.json'), { encoding: 'utf-8' });
const { compilerOptions } = parse(data) as unknown as {
  compilerOptions: {
    baseUrl: string,
    paths: Record<string, string[] | string>
  },
};
const { baseUrl, paths } = compilerOptions;


export default async (): Promise<Config.InitialOptions> => {

  return {
    verbose: true,
    testEnvironment: 'node',
    detectOpenHandles: true,
    detectLeaks: true,
    preset: 'ts-jest',
    rootDir: baseUrl,
    globalSetup: '<rootDir>/src/__test__/jest.global-setup.ts',
    setupFiles: ['<rootDir>/src/__test__/jest.env.setup-file.ts'],
    testRegex: '.+\\.(test|spec|e2e)\\.ts$',
    moduleNameMapper: Object.entries(paths).reduce((acc, [alias, p]) => {
      (acc as any)[alias] = Array.isArray(p)
        ? p.map((_p) => `<rootDir>/${_p}`)
        :`<rootDir>/${p}`;

      return acc;
    }, {} as Record<string, string>),
  };
}
