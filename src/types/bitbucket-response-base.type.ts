export type BitBucketResponseBase = {
  pagelen: number;
  size: number;
  page: number;
  next?: string;
  previous?: string;
};