<template>
  <v-form v-model="valid" ref="form" @submit.prevent="sendForm" lazy-validation>
    <v-card class="pa-md-8">
      <v-card-title class="success--text" v-if="showSuccessMessage">Success!</v-card-title>
      <v-card-title v-else>Inquiry Form</v-card-title>
      <v-card-subtitle v-if="showSuccessMessage">
        Thank you for your inquiry! I'll reach out within 24 hours to set up our first lesson.
      </v-card-subtitle>
      <v-card-subtitle v-else>
        Please submit the below information and I will get back to you within 24 hours by email. The first lesson is
        free!
      </v-card-subtitle>
      <v-card-text v-if="!showSuccessMessage">
        <div class="mb-8">
          <div class="text-h6 black--text">Student Information</div>
          <v-row>
            <v-col cols="12" sm="10" md="5">
              <v-text-field
                v-model="formData.student.firstname"
                label="First name"
                :rules="[rules.required]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="10" md="5" v-if="$vuetify.breakpoint.mdAndUp">
              <v-text-field
                v-model="formData.student.lastname"
                label="Last name"
                :rules="[rules.required]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="4" md="2" v-if="$vuetify.breakpoint.mdAndUp">
              <v-text-field
                v-model="formData.student.age"
                label="Age"
                maxlength="3"
                type="number"
                min="10"
                max="120"
                :rules="[rules.required, rules.ageRange]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.smAndDown">
            <v-col cols="12" sm="10" md="5">
              <v-text-field
                v-model="formData.student.lastname"
                label="Last name"
                :rules="[rules.required]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.smAndDown">
            <v-col cols="6" sm="4" md="2">
              <v-text-field
                v-model="formData.student.age"
                label="Age"
                maxlength="3"
                type="number"
                min="10"
                max="120"
                :rules="[rules.required, rules.ageRange]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="10" md="5">
              <v-text-field
                v-model="formData.student.email"
                label="Email Address"
                :rules="[rules.required, rules.email]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div class="my-8">
          <div class="text-h6 black--text">Parent/Guardian Information</div>
          <div class="text-subtitle-2">Required if student is under 18 years old</div>
          <v-row>
            <v-col cols="12" sm="10" md="5">
              <v-text-field
                v-model="formData.parent.firstname"
                label="First name"
                :rules="[rules.requiredIfUnder18]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="10" md="5" v-if="$vuetify.breakpoint.mdAndUp">
              <v-text-field
                v-model="formData.parent.lastname"
                label="Last name"
                :rules="[rules.requiredIfUnder18]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.smAndDown">
            <v-col cols="12" sm="10" md="5">
              <v-text-field
                v-model="formData.parent.lastname"
                label="Last name"
                :rules="[rules.requiredIfUnder18]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="10" md="5">
              <v-text-field
                v-model="formData.parent.email"
                label="Email Address"
                :rules="[rules.requiredIfUnder18, rules.emailIfUnder18]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div class="mt-8">
          <div class="text-h6 black--text">Subject</div>
          <v-row>
            <v-col cols="12" sm="10" md="5">
              <v-select
                v-model="formData.subject"
                :items="subjects"
                label="Subject"
                :rules="[rules.required]"
                @change="setCourse"
                :disabled="sendingForm"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="10" md="5" v-if="$vuetify.breakpoint.mdAndUp">
              <v-text-field
                v-model="formData.otherSubjectDescription"
                label="Subject"
                v-if="formData.subject === 'Other'"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.smAndDown">
            <v-col cols="12" sm="10" md="5">
              <v-text-field
                v-model="formData.otherSubjectDescription"
                label="Subject"
                v-if="formData.subject === 'Other'"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="10" md="5">
              <v-select
                v-model="formData.course"
                :items="coursesBySubject"
                label="Course"
                :rules="[rules.required]"
                :disabled="coursesBySubject[0] === 'empty' || sendingForm"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="10" md="5" v-if="$vuetify.breakpoint.mdAndUp">
              <v-text-field
                v-model="formData.otherCourseDescription"
                label="Course"
                v-if="formData.course === 'Other'"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.smAndDown">
            <v-col cols="12" sm="10" md="5">
              <v-text-field
                v-model="formData.otherCourseDescription"
                label="Course"
                v-if="formData.course === 'Other'"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div class="mt-8">
          <div class="text-h6 black--text">(Optional) Additional Notes/Comments</div>
          <v-textarea
            v-model="formData.additionalNotes"
            outlined
            no-resize
            rows="4"
            :disabled="sendingForm"
          ></v-textarea>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn class="primary" @click="$emit('closeDialog')" v-if="showSuccessMessage">OK</v-btn>
        <v-btn class="primary" type="submit" :disabled="sendingForm" :loading="sendingForm" v-if="!showSuccessMessage">
          Submit
        </v-btn>
        <v-btn class="secondary" @click="$emit('closeDialog')" :disabled="sendingForm" v-if="!showSuccessMessage">
          Cancel
        </v-btn>
        <div class="error--text pl-4" v-if="showSubmitError">
          There was an error submitting the form. Please contact me directly at mattsmith@mattsmithtutoring.com.
        </div>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import axios from 'axios'
if (process.env.NODE_ENV === 'production') axios.defaults.baseURL = 'https://mattsmithtutoring.com/.netlify/functions'
else axios.defaults.baseURL = 'http://localhost:8888/.netlify/functions'

export default {
  data: () => ({
    valid: false,
    formData: {
      student: {
        firstname: '',
        lastname: '',
        age: '',
        email: ''
      },
      parent: {
        firstname: '',
        lastname: '',
        email: ''
      },
      subject: '',
      otherSubjectDescription: '',
      course: '',
      otherCourseDescription: '',
      additionalNotes: ''
    },
    subjects: ['Math', 'Computer Science', 'Physics', 'Japanese', 'Other'],
    courses: {
      math: ['Algebra', 'Geometry', 'Calculus', 'Other'],
      computerScience: ['Programming', 'Theory', 'Other'],
      physics: ['AP Physics B', 'AP Physics C', 'Other'],
      japanese: ['Beginner', 'Intermediate', 'Other'],
      other: ['Other']
    },
    rules: {
      required: true,
      requiredIfUnder18: true,
      email: true,
      emailIfUnder18: true,
      ageRange: true
    },
    sendingForm: false,
    showSubmitError: false,
    showSuccessMessage: false
  }),
  computed: {
    coursesBySubject: function () {
      var noSpaceSubjectName = this.formData.subject.replace(' ', '')
      if (noSpaceSubjectName) {
        var camelcaseSubjectName = noSpaceSubjectName[0].toLowerCase() + noSpaceSubjectName.substring(1)
        return this.courses[camelcaseSubjectName]
      } else {
        return ['empty']
      }
    }
  },
  methods: {
    setCourse: function () {
      if (this.formData.subject === 'Other') this.formData.course = 'Other'
      else this.formData.course = null
    },
    activateRules() {
      this.rules.required = (v) => !!v || 'Required'
      this.rules.requiredIfUnder18 = (v) => parseInt(this.formData.student.age) >= 18 || !!v || 'Required'
      this.rules.email = (v) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'Invalid e-mail'
      }
      this.rules.emailIfUnder18 = (v) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return parseInt(this.formData.student.age) >= 18 || pattern.test(v) || 'Invalid e-mail'
      }
      this.rules.ageRange = (v) => {
        return (parseInt(v) >= 10 && parseInt(v) <= 120) || 'Invalid age'
      }
    },
    sendForm(e) {
      this.activateRules()
      this.$nextTick(() => {
        if (this.$refs.form.validate()) {
          this.sendingForm = true
          this.showSubmitError = false
          axios
            .post('/send-email', this.formData)
            .then((response) => {
              console.log(response)
              this.$refs.form.reset()
              this.showSuccessMessage = true
              this.sendingForm = false
            })
            .catch((error) => {
              this.sendingForm = false
              this.showSubmitError = true
              console.log(error)
            })
        }
      })
    }
  }
}
</script>
