<template>
  <div id="app" data-server-rendered="true">
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
