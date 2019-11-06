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

import { UserService } from '@/service/index';
import { ActionTree, Commit, MutationTree } from 'vuex';

export interface State {
  username: string;
  password: string;
}

const initState: State = {
  username: '',
  password: '',
};

// getters
const getters = {};

// mutations
const mutations: MutationTree<State> = {};

// actions
const actions: ActionTree<State, any> = {
  LOGIN(context: { commit: Commit; state: State }, params: any): Promise<unknown> {
    return new Promise((resolve, reject) => {
      UserService.login(params).then((res: any) => {
        if (res && res.code === 200) {
          resolve(res);
        } else {
          reject(res);
        }
      }).catch((res: any) => {
        reject(res);
      });
    });
  },
  LOGINOUT(context: { commit: Commit; state: State }, params: any): Promise<unknown> {
    return new Promise((resolve, reject) => {
      UserService.loginOut(params).then((res: any) => {
        if (res && res.code === 200) {
          resolve(res);
        } else {
          reject(res);
        }
      }).catch((res: any) => {
        reject(res);
      });
    });
  },
};

export default {
  namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
  state: initState,
  getters,
  actions,
  mutations,
};
