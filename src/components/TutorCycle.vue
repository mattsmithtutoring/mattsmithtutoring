<template>
  <div class="py-4">
    <v-card
      outlined
      class="py-4"
      style="border-width: 10px; border-color: black"
    >
      <v-row>
        <v-col cols="4">
          <div class="d-flex justify-end align-end" style="height: 12rem">
            <v-icon size="8rem" color="black">
              mdi-arrow-top-right-bottom-left-bold
            </v-icon>
          </div>
        </v-col>
        <v-col cols="4">
          <v-card
            class="d-flex justify-center align-center"
            height="12rem"
            color="item1"
            dark
          >
            <v-card-title class="text-center text-h4 font-weight-bold">
              Embrace<br />
              Challenge
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <div class="d-flex justify-start align-end" style="height: 12rem">
            <v-icon size="8rem" color="black">
              mdi-arrow-top-left-bottom-right-bold
            </v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" offset="1">
          <v-card
            class="d-flex justify-center align-center"
            height="12rem"
            color="item2"
            dark
          >
            <v-card-title class="text-center text-h4 font-weight-bold">
              Build<br />
              Confidence
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <div class="d-flex justify-center align-center" style="height: 12rem">
            <v-icon size="8rem" color="black">
              mdi-arrow-left-right-bold
            </v-icon>
          </div>
        </v-col>
        <v-col cols="4">
          <v-card
            class="d-flex justify-center align-center"
            height="12rem"
            color="item3"
            dark
          >
            <v-card-title class="text-center text-h4 font-weight-bold">
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
          <v-icon size="8rem" color="black"> mdi-arrow-down-bold </v-icon>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" offset="3">
        <v-card
          class="d-flex justify-center align-center"
          height="8rem"
          color="item4"
          dark
        >
          <v-card-title class="text-center text-h4 font-weight-bold">
            Sharpen the Mind
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
