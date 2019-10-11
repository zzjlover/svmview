<template>
  <div class="uk-container uk-container-center uk-block uk-text-center uk-text-lighter tm-center bounceIn"
  style="margin-top: 80px; height: 92vh;" >
    <div class="uk-animation-toggle uk-animation-kenburns"
    uk-scrollspy="cls: uk-animation-fade; target: > h1 > .uk-card; delay: 500; repeat: true">
      <h1>努力学习</h1>
      <h1>热爱分享</h1>
      <h1>勤于实践</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiGrid'
}
</script>

<style scoped>
  h1,
  .uk-h1 {
    font-size: 36px;
    line-height: 1.5;
  }

  .tm-center {
    display: -moz-box;
    /*兼容Firefox*/
    display: -webkit-box;
    /*兼容FSafari、Chrome*/

    -moz-box-align: center;
    /*兼容Firefox*/
    -webkit-box-align: center;
    /*兼容FSafari、Chrome */

    -moz-box-pack: center;
    /*兼容Firefox*/
    -webkit-box-pack: center;
    /*兼容FSafari、Chrome */
  }
</style>
