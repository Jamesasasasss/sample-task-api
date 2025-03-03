export interface ICreateTaskPayload {
  name: string,
  details: JSON,
  createdAt: Date,
  updatedAt: Date,
};

export interface ITaskResponse {
  id: number,
  name: string,
  details: JSON,
  createdAt: Date,
  updatedAt: Date,
};

export interface IListSort {
  field: string,
  direction: string | 'asc' | 'desc'
};

export interface IListFilter {
  field: string,
  value: string | number
};

export interface IUpdateTaskPayload {
  name: string,
  details: JSON,
  createdAt: Date,
  updatedAt: Date,
};
