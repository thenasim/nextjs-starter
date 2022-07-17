import { Maybe } from "$/types/common.types";

/**
 * Join strings
 * @param strings parameters of strings
 */
export const joinStrings = (...strings: Maybe<string>[]) => {
  return strings.filter(Boolean).join(" ");
};
