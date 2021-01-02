<template>
  <v-container fluid fill-height class="splash" style="max-height: 100vh">
    <v-layout justify-center align-center column pa-5>
      <v-container elevation-24 style="background: rgba(0, 0, 0, 0.5)">
        <div
          class="text-h1 font-weight-black text-center text--darken-2 red--text"
        >
          THE STRUGGLE IS REAL
        </div>
        <div
          class="text-h2 font-weight-black text-center mb-3 text--darken-1 orange--text"
        >
          BUT YOU CAN DO IT
        </div>
        <div
          class="display-1 font-weight-bold text-center text--darken-3 white--text"
        >
          Learn to embrace the challenge, build confidence, overcome the fear,
          and sharpen the mind all while improving your grades.
        </div>
      </v-container>
      <v-btn fab class="mt-5 brown darken-4" @click="downArrowClick">
        <v-icon large color="white">mdi-chevron-down</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Splash',
  methods: {
    downArrowClick: function () {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.splash {
  background: url('../assets/jeswin-thomas-hecib2an4T4-unsplash.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}

.backing {
  opacity: 0.25;
}
</style>
