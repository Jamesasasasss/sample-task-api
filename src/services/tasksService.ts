import { Knex } from 'knex';
import {
  ICreateTaskPayload,
  IListSort,
  IListFilter,
  ITaskResponse,
} from '../interfaces/taskInterfaces';
import { parseSortingParam, parseFilterParam } from '../utilities/filters';

export default class TasksService {
  public db: Knex;

  // initialize knex db connection for single instance in a service class
  constructor (db: Knex) {
    this.db = db;
  }

  /**
   * Creates a task
   * @param {ICreateTaskPayload} payload
   * @returns {Promise<ITaskResponse>}
   */
  async create(payload: ICreateTaskPayload): Promise<ITaskResponse> {
    payload.createdAt = new Date();
    payload.updatedAt = new Date();
    try {
      const task = await this.db('tasks')
        .insert({
          ...payload,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .returning('*');
      
      if (task.length > 0) {
        return task[0];
      }
      
      const err = new Error('Error Creating Task.');
      throw err;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * List all task
   * @param {any} filters
   * @returns {Promise<ITaskResponse[]>}
   */
  async list(filters: any): Promise<ITaskResponse[]> {
    const sortBy: IListSort  = parseSortingParam(filters?.sort);
    const filter: IListFilter | null = parseFilterParam(filters?.filter);

    try {
      let query = this.db('tasks').orderBy(sortBy.field, sortBy.direction);

      if (filter) {
        query = query.where(filter.field, filter.value);
      }

      const tasks: ITaskResponse[] = await query.select('*');

      return tasks;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * Get a task matching the id provided
   * @param {string} id
   * @returns {Promise<ITaskResponse>}
   */
  async get(id: string): Promise<ITaskResponse> {
    try {
      const task = await this.db('tasks').where('id', id).select('*');

      if (task.length > 0) {
        return task[0];
      }

      const err = new Error('Task not found.');
      throw err;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * Updates a task
   * @param {string} id
   * @param {ICreateTaskPayload} payload
   * @returns {Promise<ITaskResponse>}
   */
  async update(id: string, payload: ICreateTaskPayload): Promise<ITaskResponse> {
    payload.updatedAt = new Date();
    try {
      let task = await this.db('tasks').where('id', id).select('*');

      if (task.length === 0) {
        const err = new Error('Error Task not found.');
        throw err;
      }

      task = await this.db('tasks').where('id', id)
        .update({
          ...payload,
          updatedAt: new Date(),
        })
        .returning('*');
      
      if (task.length > 0) {
        return task[0];
      }
      
      const err = new Error('Error Updating Task.');
      throw err;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * Deletes a task
   * @param {ICreateTaskPayload} payload
   * @returns {Promise<{ status: string }>}
   */
  async delete(id: string): Promise<{ status: string }> {
    try {
      await this.db('tasks').where('id', id).delete();

      return { status: 'ok' };
    } catch (error) {
      throw error;
    }
  }
};
