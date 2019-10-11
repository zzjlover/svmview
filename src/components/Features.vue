<template>
  <div>
    <div class="features-card uk-block-large uk-width-1-1 uk-flex">
      <div class="features-title">
        <h1>人事档案管理系统</h1>
      </div>
      <div class="features-img">
        <img src="" />
      </div>
      <div class="features-body">
        这是人事管理系统，完整的权限控制、后台管理、便捷更新SDS的S的S的f'jJFlksjlfjLSjfAJfljssfsf
      </div>
      <div class="features-href">
        <a href="#">进入</a>
      </div>
    </div>
    <div class="features-card uk-block-large uk-width-1-1 uk-flex">
      <div class="features-title">
        <h1>数据可视化平台</h1>
      </div>
      <div class="features-img">
        <img src="" />
      </div>
      <div class="features-body">
        这是数据可视化平台
      </div>
      <div class="features-href">
        <a href="#">进入</a>
      </div>
    </div>
    <div class="features-card uk-block-large uk-width-1-1 uk-flex">
      <div class="features-title">
        <h1>机器学习平台</h1>
      </div>
      <div class="features-img">
        <img src="" />
      </div>
      <div class="features-body">
        这是机器学习平台
      </div>
      <div class="features-href">
        <a href="#">进入</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',
  data () {
    return {
      features: [
        {
          name: '人事档案管理系统',
          img: '',
          text: '',
          animation: '',
          note: ''
        },
        {
          name: '',
          img: '',
          text: '',
          animation: '',
          note: ''
        },
        {
          name: '',
          img: '',
          text: '',
          animation: '',
          note: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
  .features-card {
    height: 18vh;
    padding: 10vh;
  }
</style>
