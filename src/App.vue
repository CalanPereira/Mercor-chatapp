<template>
  <div id="app">
    <header>
      <h1>Mercor chat App</h1>
      <p>Realtime Chating</p>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
header {
  text-align: center;
}
button, input {
  margin-bottom: 10px;
}

#app{
  background-color: rgba(85, 255, 6, 0.884);
  text-decoration-style: wavy;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgb(246, 0, 0);
}
</style>
