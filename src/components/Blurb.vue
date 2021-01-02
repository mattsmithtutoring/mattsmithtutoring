<template>
  <v-row>
    <v-col cols="4" v-if="!right">
      <v-card
        height="8rem"
        :color="color"
        dark
        class="d-flex justify-center align-center"
      >
        <v-card-title class="text-h3" style="white-space: pre-line">
          {{ header }}
        </v-card-title>
      </v-card>
    </v-col>
    <v-col cols="8">
      <v-card height="8rem" class="d-flex align-center">
        <v-card-text class="text--primary text-h6">
          <slot></slot>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4" v-if="right">
      <v-card
        height="8rem"
        :color="color"
        dark
        class="d-flex justify-center align-center"
      >
        <v-card-title class="text-h3" style="white-space: pre-line">
          {{ header }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Blurb',
  props: {
    color: String,
    header: String,
    right: Boolean
  }
}
</script>
