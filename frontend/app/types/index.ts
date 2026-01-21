export interface Project {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  type?: string;
  projectStatus: string;
  status?: "in_development" | "completed";
  cover?: any;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Stack {
  id: number;
  documentId: string;
  title: string;
  description: string;
  stackId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  tools: Tool[];
}

export interface Tool {
  id: number;
  documentId: string;
  name: string;
  toolId: string;
  color: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Response<T> {
  data: T[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
