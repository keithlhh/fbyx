<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  components:{
    Footer,Header
  }
}
</script>

<style>
  body{
    padding: 0; margin: 0;
  }
</style>
