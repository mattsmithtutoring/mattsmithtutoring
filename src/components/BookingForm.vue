<template>
  <v-form v-model="valid" ref="form" @submit.prevent="sendForm" lazy-validation>
    <v-card class="pa-8">
      <v-card-title>Inquiry Form</v-card-title>
      <v-card-subtitle>
        Please submit the below information and I will get back to you within 24 hours by email. The first lesson is
        free!
      </v-card-subtitle>
      <v-card-text>
        <div class="mb-8">
          <div class="text-h6 black--text">Student Information</div>
          <v-row>
            <v-col cols="5">
              <v-text-field
                v-model="formData.student.firstname"
                label="First name"
                :rules="[rules.required]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field
                v-model="formData.student.lastname"
                label="Last name"
                :rules="[rules.required]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
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
            <v-col cols="5">
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
          <div class="text-h6 black--text">Parent/Gardian Information</div>
          <div class="text-subtitle-2">Required if student is under 18 years old</div>
          <v-row>
            <v-col cols="5">
              <v-text-field
                v-model="formData.parent.firstname"
                label="First name"
                :rules="[rules.requiredIfUnder18]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field
                v-model="formData.parent.lastname"
                label="Last name"
                :rules="[rules.requiredIfUnder18]"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
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
            <v-col cols="5">
              <v-select
                v-model="formData.subject"
                :items="subjects"
                label="Subject"
                :rules="[rules.required]"
                @change="setCourse"
                :disabled="sendingForm"
              ></v-select>
            </v-col>
            <v-col cols="5">
              <v-text-field
                v-model="formData.otherSubjectDescription"
                label="Subject"
                v-if="formData.subject === 'Other'"
                :disabled="sendingForm"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-select
                v-model="formData.course"
                :items="coursesBySubject"
                label="Course"
                :rules="[rules.required]"
                v-if="coursesBySubject"
                :disabled="sendingForm"
              ></v-select>
            </v-col>
            <v-col cols="5">
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
        <v-btn class="primary" type="submit" :disabled="sendingForm" :loading="sendingForm">Submit</v-btn>
        <v-btn class="secondary" @click="$emit('closeDialog')" :disabled="sendingForm">Cancel</v-btn>
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
    showSubmitError: false
  }),
  computed: {
    coursesBySubject: function () {
      var noSpaceSubjectName = this.formData.subject.replace(' ', '')
      if (noSpaceSubjectName) {
        var camelcaseSubjectName = noSpaceSubjectName[0].toLowerCase() + noSpaceSubjectName.substring(1)
        return this.courses[camelcaseSubjectName]
      } else {
        return null
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
              this.sendingForm = false
            })
            .catch((error) => {
              this.sendingForm = false
              this.showSubmitError = true
              console.log(error)
            })
          // TODO: Set up Axios with API call to Netlify function at /.netlify/functions/send-email
        }
      })
    }
  }
}
</script>
