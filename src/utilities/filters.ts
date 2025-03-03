import { IListFilter, IListSort } from '../interfaces/taskInterfaces';

export const parseSortingParam = (sortBy?: string): IListSort => {
  if (!sortBy) {
    return {
      field: 'createdAt',
      direction: 'asc',
    }
  }

  const splittedParam = sortBy.split('_');

  return {
    field: splittedParam[0],
    direction: splittedParam[1] === 'asc' || splittedParam[1] === 'desc' ? splittedParam[1] : 'asc',
  }
};

export const parseFilterParam = (filterBy: string): IListFilter | null => {
  if (!filterBy) {
    return null;
  }

  const splittedFilter = filterBy.split('_');

  return {
    field: splittedFilter[0],
    value: splittedFilter[1],
  }
};
