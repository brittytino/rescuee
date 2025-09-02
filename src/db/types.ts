export interface DatabaseConfig {
    client: 'pg' | 'mysql' | 'sqlite3' | 'mssql';
    connection: Record<string, any>;
    pool?: {
      min?: number;
      max?: number;
    };
  }
  
  export type QueryBuilder<T = any> = {
    where: (conditions: Partial<T>) => QueryBuilder<T>;
    select: (columns: string[]) => QueryBuilder<T>;
    insert: (data: Partial<T>) => QueryBuilder<T>;
    update: (data: Partial<T>) => QueryBuilder<T>;
    delete: () => QueryBuilder<T>;
    then: <U>(onFulfilled?: (value: T[]) => U) => Promise<U>;
  };