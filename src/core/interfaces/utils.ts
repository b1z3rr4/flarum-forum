export type ApiError = {
  errors: { status: string; code: string; title: string; detail?: string }[];
};
