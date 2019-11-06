<template>
  <div class="errors-bg errors-bg-lan">
    <div class="errrors-con">
      <div class="errors-word-pic4">
      </div>
      <p>非常遗憾，您访问的页面不存在！</p>
      <el-button class="but-lan" type="primary" @click="onhome">
        返回首页
      </el-button>
      <div class="errors-pic4">
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'Page404',
        data() {
            return {};
        },
        computed: {
            message() {
                return '特朗普说这个页面你不能进......';
            },
        },
        methods: {
            onhome() {
                this.$router.push('/');
            },
        },
    };
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .errors-bg {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  .errors-bg-lan {
    background-color: #cde5f4;
  }

  .errors-bg-yellow {
    background-color: #f6ed54;
  }

  .errrors-con {
    width: 1000px;
    margin: 0px auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .errrors-con p {
    font-size: 20px;
    color: #35495d;
    margin: 30px;
  }

  .errors-word-pic4 {
    margin: 20px;
  }

  .errors-pic4 {
    margin: 30px;
  }

  .but-lan {
    width: 160px;
    margin: 10px auto;
  }

  .but-lan {
    display: block;
    text-align: center;
    background: #1890FF !important;
    border-color: #1890FF !important;
    color: #fff;
    border-radius: 5px;
  }

  .errors-content {
    width: 750px;
    margin: 0px auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .errors-left {
    float: left;
    text-align: left;
  }

  .errors-left p {
    font-size: 20px;
    color: #694b25;
    margin: 30px;
  }

  .but-yellow {
    width: 160px;
    height: 40px;
    line-height: 40px;
    margin: 30px;
  }

  .but-yellow a {
    display: block;
    text-align: center;
    background: #ea7e00;
    color: #fff;
    border-radius: 5px;
  }

</style>
