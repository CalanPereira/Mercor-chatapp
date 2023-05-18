<template>
  <div id="app">
    <header>
      <h1>Vue Voxer</h1>
      <p>Realtime Chat application</p>
    </header>

    <routerView></routerView>
  </div>
</template>

<script>

import { auth } from "./firebase";

console.log(auth)

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
