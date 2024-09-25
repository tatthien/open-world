declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_BASE_URL: string
      MONGO_DB_NAME: string
      MONGO_DB_URL: string
    }
  }
}

export type {}
