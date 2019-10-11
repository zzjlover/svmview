<template>
  <div class="uk-container uk-container-center loop-menu uk-animation-fade uk-animation-20">
    <div class="uk-width-1-1 uk-flex uk-flex-center">
      <ul id="menu-top2" class="lavaLampBottomStyle ">
        <li class="menu-item">
          <router-link to="">
            Language
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="">
            关于我们
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="">
            仓库地址
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="">
            文档
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="">
            项目导航
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/">
            首页
          </router-link>
        </li>
      </ul>
    </div>
    <div class="tm-main uk-block-large uk-width-1-1 uk-flex uk-flex-center">
      <h2 class="uk-margin-remove-top">我们是SVM团队</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiNav'
}
</script>

<style>
  .loop-menu {
    margin-top: 40px;
    padding-bottom: 10px;
    border-bottom: solid 1px #dbdcdc;
  }

  #menu-top2 {
    padding-left: 0;
  }

  .lavaLampBottomStyle {
    height: 35px;
    margin: 0;
  }

  #menu-top2 li {
    padding-top: 10px;
    font-weight: bold;
    margin: 0 50px 0 50px;
    float: right;
    padding-bottom: 0;
    width: auto;
  }

  a:link {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a,
  .uk-link {
    color: #001100;
    text-decoration-line: none;
    text-decoration: none;
    cursor: pointer;
  }

  .tm-main {
    padding-top: 40px;
  }
</style>
