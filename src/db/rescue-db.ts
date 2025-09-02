import { Knex } from 'knex';

export class RescueeDB {
  private connection: Knex;

  constructor(config: Knex.Config) {
    this.connection = require('knex')(config);
  }

  table<T extends Record<string, any>>(tableName: string) {
    return this.connection<T>(tableName);
  }

  transaction() {
    return this.connection.transaction();
  }
}

// Unified config for databases
export const connect = (config: {
  client: 'pg' | 'mysql' | 'sqlite3';
  connection: Knex.Config['connection'];
}) => new RescueeDB(config);