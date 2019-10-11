<template>
  <div>
    <vue-canvas-nest :config="config"></vue-canvas-nest>
    <router-view/>
  </div>
</template>

<script>
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import vueCanvasNest from 'vue-canvas-nest'
UIkit.use(Icons)
export default {
  name: 'App',
  components: { vueCanvasNest },
  data () {
    return {
      config: {
        color: '255, 0, 100',
        count: 100,
        opacity: 0.8,
        zIndex: -2
      }
    }
  }
}
</script>
<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
