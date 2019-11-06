interface InstanceCpm {
  id: string;
  total: number;
  timeBucket: number;
  entityID: string;
  value: number;
  serviceID: number;
}

interface EndpointCpm {
  id: string;
  total: number;
  timeBucket: number;
  entityID: string;
  value: number;
  serviceID: number;
}

interface InstanceProperties {
  osName: string;
  hostName: string;
  processNo: number;
  language: string;
  ipv4s: string[];
}

interface InstanceRespTime {
  id: string;
  count: number;
  timeBucket: number;
  entityID: string;
  value: number;
  summation: number;
  serviceID: number;
}

interface EndpointRespTime {
  id: string;
  count: number;
  timeBucket: number;
  entityID: string;
  value: number;
  summation: number;
  serviceID: number;
}

interface InstanceSla {
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
  serviceID: number;
}

interface EndpointSla {
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
  serviceID: number;
}

export interface AppMonitorInstance {
  id: string;
  sequence: number;
  status: 'UP' | 'OFFLINE';
  heartbeatTime: number;
  serviceID: number;
  addressID: number;
  name: string;
  isAddress: number;
  instanceUUID: string;
  registerTime: number;
  properties?: InstanceProperties;
  cpm?: InstanceCpm;
  cpmByHour?: InstanceCpm;
  cpmByDay?: InstanceCpm;
  respTime?: InstanceRespTime;
  respTimeByHour?: InstanceRespTime;
  respTimeByDay?: InstanceRespTime;
  sla?: InstanceSla;
  slaByHour?: InstanceSla;
  slaByDay?: InstanceSla;
}

export interface AppMonitorEndpoint {
  id: string;
  sequence: number;
  heartbeatTime: number;
  serviceID: number;
  name: string;
  registerTime: number;
  cpm?: EndpointCpm;
  cpmByHour?: EndpointCpm;
  cpmByDay?: EndpointCpm;
  respTime?: EndpointRespTime;
  respTimeByHour?: EndpointRespTime;
  respTimeByDay?: EndpointRespTime;
  sla?: EndpointSla;
  slaByHour?: EndpointSla;
  slaByDay?: EndpointSla;
}

export interface AppMonitorInstances {
  count: number;
  totalPages: number;
  instance: AppMonitorInstance[];
}

export interface AppMonitorEndpoints {
  count: number;
  totalPages: number;
  endpoint: AppMonitorEndpoint[];
}

export interface InstanceRespTimes {
  count: number;
  totalPages: number;
  respTimes: InstanceRespTime[];
}

export interface InstanceCpms {
  count: number;
  totalPages: number;
  cpms: InstanceCpm[];
}

export interface InstanceSlas {
  count: number;
  totalPages: number;
  slas: InstanceSla[];
}

export interface JvmMetric {
  id: string;
  count?: number;
  timeBucket: number;
  entityID: string;
  serviceInstanceID: number;
  value: number;
  summation?: number;
}

export interface ResMetrics<T> {
  count: number;
  totalPages: number;
  contents: T[];
}
