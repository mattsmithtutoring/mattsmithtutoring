<template>
  <div id="app">
    <v-app>
      <v-main transition="slide-x-transition">
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
