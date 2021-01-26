<template>
  <div class="py-4">
    <v-card outlined class="py-4 px-2" style="border-width: 10px; border-color: black">
      <v-row :dense="$vuetify.breakpoint.xs">
        <v-col cols="3" sm="4">
          <div class="d-flex justify-end align-end" :style="'height: ' + cardHeight">
            <v-icon :size="arrowSize" color="black"> mdi-arrow-top-right-bottom-left-bold </v-icon>
          </div>
        </v-col>
        <v-col cols="6" sm="4">
          <v-card class="d-flex justify-center align-center" :height="cardHeight" color="item1" dark>
            <v-card-title class="text-center text-sm-h5 text-md-h4 font-weight-bold" :class="cardTitlePadding">
              Embrace<br />
              Challenge
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="3" sm="4">
          <div class="d-flex justify-start align-end" :style="'height: ' + cardHeight">
            <v-icon :size="arrowSize" color="black"> mdi-arrow-top-left-bottom-right-bold </v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row :dense="$vuetify.breakpoint.xs">
        <v-col cols="5" sm="4" offset-sm="1">
          <v-card class="d-flex justify-center align-center pa-0" :height="cardHeight" color="item2" dark>
            <v-card-title class="text-center text-sm-h5 text-md-h4 font-weight-bold" :class="cardTitlePadding">
              Build<br />
              Confidence
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <div class="d-flex justify-center align-center" :style="'height: ' + cardHeight">
            <v-icon :size="arrowSize" color="black"> mdi-arrow-left-right-bold </v-icon>
          </div>
        </v-col>
        <v-col cols="5" sm="4">
          <v-card class="d-flex justify-center align-center" :height="cardHeight" color="item3" dark>
            <v-card-title class="text-center text-sm-h5 text-md-h4 font-weight-bold" :class="cardTitlePadding">
              Overcome<br />
              Fear
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-row dense>
      <v-col cols="12">
        <div class="d-flex justify-center align-center">
          <v-icon :size="arrowSize" color="black"> mdi-arrow-down-bold </v-icon>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8" offset="2" sm="6" offset-sm="3">
        <v-card class="d-flex justify-center align-center" :height="cardHeight" color="item4" dark>
          <v-card-title class="text-center text-sm-h5 text-md-h4 font-weight-bold"> Sharpen the Mind </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    arrowSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '4rem'
        case 'sm':
          return '6rem'
        default:
          return '8rem'
      }
    },
    cardHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '6rem'
        case 'sm':
          return '8rem'
        default:
          return '12rem'
      }
    },
    cardTitlePadding() {
      return this.$vuetify.breakpoint.smAndUp ? '' : 'px-0'
    }
  }
}
</script>
