export type ApiError = {
  errors: { status: string; code: string; title: string; detail?: string }[];
};

export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export type Included<T> = {
  attributes: T;
  id: string;
  type: string;
};
