<template>
  <v-hover v-slot="{ hover }">
    <v-card height="16rem" :color="color" dark>
      <div class="d-flex justify-center align-center" style="position: absolute; width: 100%; height: 16rem">
        <v-expand-transition>
          <div :class="hoverStyle" v-if="hover">
            <v-container>
              <slot></slot>
            </v-container>
          </div>
        </v-expand-transition>
        <v-card-title class="text-center text-h4 font-weight-bold" style="white-space: pre-line">
          {{ subject }}
        </v-card-title>
      </div>
      <v-slide-y-reverse-transition>
        <div
          class="d-flex justify-center align-end"
          style="position: absolute; width: 100%; height: 16rem"
          v-if="!hover"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </div>
      </v-slide-y-reverse-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'TutorSubject',
  data() {
    return {
      isActive: false
    }
  },
  props: {
    color: String,
    subject: String
  },
  computed: {
    hoverStyle() {
      return 'd-flex v-card--reveal darken-3 ' + this.color
    }
  }
}
</script>

<style>
.v-card--reveal {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0.85;
  overflow: auto;
}
</style>
