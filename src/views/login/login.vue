<template>
    <div>
        <el-button
                class="login-button"
                @click.native.prevent="handleLogin"
        >登录
        </el-button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Login extends Vue {

        private handleLogin() {
            localStorage.setItem('access_token', 'dddd');
            location.href = '/';
        }


        //
        // activated() {
        //   //
        // }
        //
        // mounted() {
        //   //
        // }
        //
        // // 初始化函数
        // init() {
        //   //
        // }

    }
</script>


