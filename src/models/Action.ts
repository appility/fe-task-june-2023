export interface Action<A, B> {
    type: A;
    payload?: B;
  }
  