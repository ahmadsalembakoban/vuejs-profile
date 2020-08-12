<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>VueJs Framework</h1>
    <h5 class="text-center">Portfolio Front-End by Ahmad</h5>
    <!-- <button class="btn btn-success">View More</button> -->
    <router-link to="/about"><button class="btn btn-success">View More</button></router-link>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
    .btn {
      background: #34495E;
      color: #41B883;
      border: none;
    }
</style>
