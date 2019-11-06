export interface ParsedQuery<T = string> {
  [key: string]: T | T[] | number | number[] | object | null | undefined;
}

interface ReqOptions {
  h?: object;
  params?: ParsedQuery;
  body?: object;
}
