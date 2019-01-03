<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer'
export default {
  components:{
    Footer
  }
}
</script>

<style>
  body{
    padding: 0; margin: 0;
  }
</style>
