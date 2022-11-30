export const isDifferent = <A = Record<string, unknown>>(
  a: Record<string, A>,
  b: Record<string, A>
) => {
  return JSON.stringify(a) !== JSON.stringify(b);
};
