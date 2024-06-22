

<template>
  <div id="app">
    <h1>Lesson 2</h1>
    <p>login by Google</p>
  </div>
    <GoogleLogin :callback="callback" prompt/>
    <!-- <GoogleLogin :callback="callback"/> -->
    <p>
      {{ data }}
    </p>

</template>

<script setup>
import { ref } from 'vue'
const data = ref()

const callback = (response) => {
  // This callback will be triggered when user click on the One Tap prompt
  // This callback will be also triggered when user click on login button 
  // and selects or login to his Google account from the popup
  data.value = response
  console.log("Handle the response", response)
}
</script>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
