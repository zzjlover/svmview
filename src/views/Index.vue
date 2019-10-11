<template>
  <div class="uk-container uk-container-center uk-margin-top">
    <ui-nav></ui-nav>
    <ui-grid></ui-grid>
    <people-card></people-card>
    <features></features>
    <Footer></Footer>
  </div>
</template>

<script>
import UiNav from '../components/UiNav.vue'
import UiGrid from '../components/UiGrid.vue'
import PeopleCard from '../components/PeopleCard.vue'
import Footer from '../components/Footer.vue'
import Features from '../components/Features.vue'
export default {
  name: 'index',
  components: {
    UiNav,
    UiGrid,
    PeopleCard,
    Features,
    Footer
  }
}
</script>

<style>
</style>
