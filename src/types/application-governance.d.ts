export enum OperationType {
  CURRENT_LIMITER,
  DEGRADE,
}

export interface SentinelInstance {
  ip?: string;
  port?: number;
  app?: string;
  operationType?: OperationType;
}
