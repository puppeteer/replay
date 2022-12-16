export type ExcludeType<T, U> = {
  [K in keyof T]-?: T[K] extends U ? K : never;
}[keyof T];

export type PickType<T, U> = Pick<T, ExcludeType<T, U>>;

export type JSONValue =
  | null
  | string
  | number
  | boolean
  | JSONObject
  | JSONArray;

export interface JSONObject {
  [key: string]: JSONValue;
}

export type JSONArray = JSONValue[];

export type JSONSerializable<Object extends object> = PickType<
  Object,
  JSONValue
>;
