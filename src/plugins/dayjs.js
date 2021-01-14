import Vue from 'vue'
import dayjs from 'dayjs'

Object.defineProperties(Vue.prototype, {
  $dayjs: {
    get() {
      return dayjs
    }
  }
})
