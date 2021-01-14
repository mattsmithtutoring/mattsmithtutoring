<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-date-picker v-model="calendarDate"></v-date-picker>
      </v-col>
      <v-col cols="4">
        <v-chip-group column>
          <v-chip
            v-for="timeslot in timeslots
              .filter(isTimeslotForCalendarDate)
              .filter((timeslot) => !this.selectedTimeslots.includes(timeslot))
              .sort(sortCalendarDates)"
            :key="timeslot.datetime"
            @click="selectTimeslot(timeslot)"
          >
            {{ formatTimeslot(timeslot) }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="4">
        <mcs-header>Selected Times</mcs-header>
        <v-chip-group column>
          <v-chip
            v-for="timeslot in selectedTimeslots"
            :key="timeslot.datetime"
            close
            @click="deselectTimeslot(timeslot)"
            @click:close="deselectTimeslot(timeslot)"
          >
            {{ formatSelectedTimeslot(timeslot) }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import McsHeader from './McsHeader.vue'
export default {
  components: { McsHeader },
  data() {
    return {
      calendarDate: this.$dayjs().format('YYYY-MM-DD'),
      selectedTimeslots: [],
      timeslots: [
        {
          datetime: '2021-01-09T19:00:00-05:00',
          duration: 1
        },
        {
          datetime: '2021-01-08T19:00:00-05:00',
          duration: 1
        },
        {
          datetime: '2021-01-10T19:00:00-05:00',
          duration: 1
        },
        {
          datetime: '2021-01-09T20:00:00-05:00',
          duration: 2
        },
        {
          datetime: '2021-01-10T15:00:00-05:00',
          duration: 1.5
        }
      ]
    }
  },
  methods: {
    formatTimeslot: function (timeslot) {
      if (!timeslot) return ''

      var datetime = this.$dayjs(timeslot.datetime)
      var startTime = datetime.format('h:mm a')
      var endTime = datetime.add(timeslot.duration, 'hour').format('h:mm a')
      return `${startTime}—${endTime}`
    },
    formatSelectedTimeslot: function (timeslot) {
      return `${this.$dayjs(timeslot.datetime).format(
        'ddd., M/D/YYYY'
      )} ${this.formatTimeslot(timeslot)}`
    },
    isTimeslotForCalendarDate: function (timeslot) {
      return this.$dayjs(timeslot.datetime).isSame(this.calendarDate, 'day')
    },
    sortCalendarDates: function (timeslot1, timeslot2) {
      return this.$dayjs(timeslot1.datetime).diff(
        this.$dayjs(timeslot2.datetime)
      )
    },
    selectTimeslot: function (timeslot) {
      this.selectedTimeslots.push(timeslot)
    },
    deselectTimeslot: function (timeslot) {
      this.selectedTimeslots = this.selectedTimeslots.filter(
        (ts) => !this.$dayjs(ts.datetime).isSame(this.$dayjs(timeslot.datetime))
      )
    }
  }
}
</script>
