interface BaseDTO {
  id?: number | null;
  gmtCreate?: number | null;
  gmtModified?: number | null;
}

export interface ServiceTemplateTypeDTO {
  id?: number | null;
  name?: string;
  buildIn?: boolean;
}

export interface ServiceTemplateDTO extends BaseDTO {
  name?: string;
  indicatorType?: number | null;
  buildIn?: number | null;
  paramPairs?: Pair[];
  type?: string;
}

export interface Pair {
  name?: string;
  value?: string;
  type?: string;
  required?: number | null;
}

export interface DomainDTO extends BaseDTO {
  tagDTOSet?: TagDTO[];
  name?: string;
  code?: string;
  token?: string;
  uri?: string;
  tagNames?: string[];
}

export interface TagDTO {
  id?: number | null;
  gmtCreate?: number | null;
  gmtModified?: number | null;
  name?: string;
}

export interface ServiceResourceDTO extends BaseDTO {
  templateName?: string;
  indicatorType?: number | null;
  indicatorAddress?: string;
  paramPair?: string;
  paramValue?: string;
  paramPairs?: Pair[];
  buildIn?: number | null;
  name?: string;
  type?: string;
}

export interface AppInfoDTO {
  groupName?: string;
  applicationName?: string;
}

export interface SystemDTO extends BaseDTO {
  name?: string;
  description?: string;
  applications?: ApplicationDTO[];
}

export interface ApplicationDTO extends BaseDTO {
  name?: string;
  description?: string;
  sysName?: string;
}

export interface ApplicationDetailDTO extends BaseDTO {
  code?: string;
  name?: string;
  description?: string;
  sysId?: number | null;
  sysName?: string;
  system?: SystemDTO;
  groups?: ApplicationGroupDTO[];
  instances?: InstanceEntity[];
}

export interface ApplicationGroupDTO {
  id?: number | null;
  name?: string;
  description?: string;
  appName?: string;
  token?: string;
  vailToken?: boolean;
  resources?: ServiceResourceDTO[];
  resourceNames?: string[];
}

export interface InstanceEntity {
  address?: string;
  port?: number | null;
  pid?: string;
  code?: string;
  status?: number | null;
  appGroupName?: string;
  period?: number | null;
  appName?: string;
  actuatorUrl?: string;
  sentinelPort?: number;
}

export interface ApplicationGroupResourceBindDTO {
  groupName?: string;
  resourceName?: string;
  appName?: string;
  string: string;
}

export interface ApplicationInstanceInfoDTO {
  ip?: string;
  port?: number | null;
  weight?: number | null;
  enable?: boolean;
  healthy?: boolean;
  metadata?: object;
}

export interface ConfigInfoDTO {
  configName?: string;
  description?: string;
  pattern?: string;
  content?: string;
  quoteCount?: string;
  configType?: string;
  apps?: AppInfoDTO[];
  resourceName?: string;
}

export interface ConfigTemplateDTO {
  id?: string;
  configTemplateName?: string;
  configTemplatePattern?: string;
  templateContent?: string;
}

export interface HistoryConfigDTO {
  configName?: string;
  contentName?: string;
  opType?: string;
  lastModifiedTime?: string;
  hid?: string;
}

export interface InstanceDTO extends BaseDTO {
  address?: string;
  port?: number | null;
  pid?: string;
  code?: string;
  status?: number | null;
  appGroupId?: number | null;
  period?: number | null;
  applicationDTO?: ApplicationDTO;
  applicationGroupDTO?: ApplicationGroupDTO;
}

export interface ServiceInfoDTO {
  applicationName?: string;
  group?: string;
  version?: string;
  metadata?: object;
}

export interface RegistrationDTO extends BaseDTO {
  address?: string;
  port?: number | null;
  pid?: string;
  token?: string;
  application?: string;
  group?: string;
  instance?: string;
  period?: number | null;
  actuatorUrl?: string;
}

export interface RegistryInfoDTO {
  appInfo?: AppInfoDTO;
  instanceInfos?: ApplicationInstanceInfoDTO[];
  instanceCount?: number | null;
  healthyInstanceCount?: number | null;
  metadata?: object;
}

export interface DomainBoxEntity extends BaseDTO {
  name?: string;
  metadata?: string;
}
