export type Maybe<T> = T | undefined | null;
export type Result<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };
