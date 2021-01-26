<template>
  <v-row>
    <v-col cols="12" md="4" v-if="!right || !$vuetify.breakpoint.mdAndUp">
      <v-card height="8rem" :color="color" dark class="d-flex justify-center align-center">
        <v-card-title class="text-h3 text-md-h4 text-lg-h3" style="white-space: pre-line">
          {{ header }}
        </v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
      <v-card class="d-flex align-center" style="min-height: 8rem">
        <v-card-text class="text--primary text-body-1 text-lg-h6">
          <slot></slot>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" v-if="right && $vuetify.breakpoint.mdAndUp">
      <v-card height="8rem" :color="color" dark class="d-flex justify-center align-center">
        <v-card-title class="text-h4 text-lg-h3" style="white-space: pre-line">
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
