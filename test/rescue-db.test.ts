import { connect } from '../src/db/rescue-db';
import knex from 'knex';

jest.mock('knex');

describe('RescueeDB', () => {
  test('connects to SQLite', () => {
    connect({
      client: 'sqlite3',
      connection: { filename: ':memory:' }
    });
    expect(knex).toHaveBeenCalled();
  });
});