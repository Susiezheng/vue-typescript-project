/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Option {
  key: string;
  label: string;
}

export interface Duration {
  start: Date;
  end: Date;
  step: string;
}

export interface DurationTime {
  start: string;
  end: string;
  step: string;
}

export interface SlowItem {
  key: string;
  label: string;
  value: number;
}

export interface APMInstance {
  label: string;
  key: string;
  name?: string;
  attributes?: object[];
  instanceUUID?: string;
}

export interface APMTopoNode {
  id: string;
  isReal: boolean;
  name: string;
  type: string;
}