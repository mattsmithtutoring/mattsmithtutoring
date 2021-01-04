import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)

const vuetifyOptions = {
  theme: {
    themes: {
      light: {
        primary: colors.deepOrange,
        secondary: colors.blueGrey,
        accent: colors.cyan,
        success: colors.green,
        error: colors.red,
        info: colors.deepPurple,
        warning: colors.amber,
        item1: colors.purple.lighten1,
        item2: colors.yellow.darken3,
        item3: colors.red.darken2,
        item4: colors.cyan.darken1
      },
      dark: {
        primary: colors.deepOrange,
        secondary: colors.blueGrey,
        accent: colors.cyan,
        success: colors.green,
        error: colors.red,
        info: colors.deepPurple,
        warning: colors.amber,
        item1: colors.purple.lighten1,
        item2: colors.yellow.darken3,
        item3: colors.red.darken2,
        item4: colors.cyan.darken1
      }
    }
  }
}

export default new Vuetify(vuetifyOptions)
