export interface Project {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  type?: string;
  project_status: string;
  status?: "in_development" | "completed";
  cover?: StrapiImage;
  tools: Tools[];
  project_tags: ProjectTags[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Tools {
  name: string;
}
export interface ProjectTags {
  name: string;
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

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface Block {
  __component: string;
  id: number;
  [key: string]: unknown;
}

/* Block Components */
export interface HeadingBlock extends Block {
  title: string;
}
