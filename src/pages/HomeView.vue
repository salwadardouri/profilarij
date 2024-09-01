<template>
  <div>
    <Header />
    <Content />


    <Footer />
  </div>
</template>

<script>
import Header from './HomePage/HeaderComp.vue';

import Content from './HomePage/ContentComp.vue';

import Footer from './HomePage/FooterComp.vue';

export default {
  name: 'HomeView',
  components: {
    Header,

    Content,

    Footer
  },
};
</script>

<style scoped>
</style>
