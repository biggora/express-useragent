type NodeunitFn = (...args: unknown[]) => unknown;
type NodeunitSuite = Record<string, NodeunitFn>;

declare module './legacy/*.js' {
  const suite: NodeunitSuite;
  export default suite;
}
