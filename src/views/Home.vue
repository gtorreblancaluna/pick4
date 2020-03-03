<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1>Welcome to pick4</h1>
    URL: {{ url }}
    TITLE: {{ title }}
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      url: process.env.VUE_APP_URL_BASE_SERVICE,
      title: process.env.VUE_APP_TITLE
    }
  },
}
</script>
