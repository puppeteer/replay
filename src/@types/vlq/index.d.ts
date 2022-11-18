declare module 'vlq' {
  export function encode(data: number[]): string;
  export function decode(str: string): number[];
}
