declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MODE: 'dev' | 'prod',
    }
  }
}

export { };
