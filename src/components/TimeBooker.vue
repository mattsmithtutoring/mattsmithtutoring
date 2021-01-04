<template>
  <div>
    <v-calendar color="primary">
      <template v-slot:day="{ date }">{{ date }}</template>
      <!-- <template v-slot:day-label="{ day }">
        <div class="blue">{{ day }}</div>
      </template> -->
    </v-calendar>
  </div>
</template>
