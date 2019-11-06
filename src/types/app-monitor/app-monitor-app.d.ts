export interface AppCpm {
  id: string;
  total: number;
  timeBucket: number;
  entityID: string;
  value: number;
}

export interface AppRespTime {
  id: string;
  count: number;
  timeBucket: number;
  entityID: string;
  value: number;
  summation: number;
}

export interface AppPxx {
  id: string;
  precision: number;
  timeBucket: number;
  entityID: string;
  value: number;
  detailGroup: string;
}

export interface AppProperties {
  type: string;
  instance: string;
  database: string;
}

export interface AppSla {
  id: string;
  total: number;
  fromTotal: number;
  toTotal: number;
  percentage: number;
  match: number;
  fromMatch: number;
  toMatch: number;
  timeBucket: number;
  entityID: string;
}

export interface AppMonitorApp {
  id: string;
  status: 'UP' | 'OFFLINE';
  sequence: number;
  heartbeatTime: number;

  /**
   * 节点类型
   * 0: 未知; 1: db; 2: rpc; 3: http; 4: mq; 5: cache
   */
  nodeType: 0 | 1 | 2 | 3 | 4 | 5;
  mappingLastUpdateTime: number;
  name: string;
  addressId: number;
  isAddress: number;
  mappingServiceId: number;
  registerTime: number;
  instanceCount: number;
  cpm?: AppCpm;
  cpmByHour?: AppCpm;
  cpmByDay?: AppCpm;
  respTime?: AppRespTime;
  respTimeByHour?: AppRespTime;
  respTimeByDay?: AppRespTime;
  p50?: AppPxx;
  p50ByHour?: AppPxx;
  p50ByDay?: AppPxx;
  p75?: AppPxx;
  p75ByHour?: AppPxx;
  p75ByDay?: AppPxx;
  p90?: AppPxx;
  p90ByHour?: AppPxx;
  p90ByDay?: AppPxx;
  p95?: AppPxx;
  p95ByHour?: AppPxx;
  p95ByDay?: AppPxx;
  p99?: AppPxx;
  p99ByHour?: AppPxx;
  p99ByDay?: AppPxx;
  sla?: AppSla;
  slaByDay?: AppSla;
  properties?: AppProperties;
}

export interface AppMonitorApps {
  count: number;
  totalPages: number;
  applications: AppMonitorApp[];
}

export interface AppPxxs {
  count: number;
  totalPages: number;
  contents: AppPxx[];
}

export interface AppRespTimes {
  count: number;
  totalPages: number;
  contents: AppRespTime[];
}

export interface AppCpms {
  count: number;
  totalPages: number;
  contents: AppCpm[];
}

export interface AppSlas {
  count: number;
  totalPages: number;
  contents: AppSla[];
}
