<template>
  <v-form v-model="valid">
    <v-card class="pa-8">
      <v-card-title>Inquiry Form</v-card-title>
      <v-card-subtitle>
        Please submit the below information and I will get back to you within 24 hours by email.
      </v-card-subtitle>
      <v-card-text>
        <div class="mb-8">
          <div class="text-h6 black--text">Student Information</div>
          <v-text-field v-model="student.firstname" label="First name" required></v-text-field>
          <v-text-field v-model="student.lastname" label="Last name" required></v-text-field>
          <v-text-field v-model="student.age" label="Age" required></v-text-field>
          <v-text-field v-model="student.email" label="Email Address" required></v-text-field>
        </div>
        <div class="my-8">
          <div class="text-h6 black--text">Parent/Gardian Information</div>
          <div class="text-subtitle-1">Required if student is under 18 years old</div>
          <v-text-field v-model="parent.firstname" label="First name" required></v-text-field>
          <v-text-field v-model="parent.lastname" label="Last name" required></v-text-field>
          <v-text-field v-model="parent.email" label="Email Address" required></v-text-field>
        </div>
        <div class="mt-8">
          <div class="text-h6 black--text">Subject</div>
          <v-select v-model="subject" :items="subjects" label="Subject" required @change="setCourse"></v-select>
          <v-text-field v-model="otherSubjectDescription" label="Subject" v-if="subject === 'Other'"></v-text-field>
          <v-select v-model="course" :items="coursesBySubject" label="Course" required></v-select>
          <v-text-field v-model="otherCourseDescription" label="Course" v-if="course === 'Other'"></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn class="primary">Submit</v-btn>
        <v-btn class="secondary">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
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
    subjects: ['Math', 'Computer Science', 'Physics', 'Japanese', 'Other'],
    otherSubjectDescription: '',
    course: '',
    courses: {
      math: ['Algebra', 'Geometry', 'Calculus', 'Other'],
      computerScience: ['Programming', 'Theory', 'Other'],
      physics: ['AP Physics B', 'AP Physics C', 'Other'],
      japanese: ['Beginner', 'Intermediate', 'Other'],
      other: ['Other']
    },
    otherCourseDescription: ''
  }),
  computed: {
    coursesBySubject: function () {
      var noSpaceSubjectName = this.subject.replace(' ', '')
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
      if (this.subject === 'Other') this.course = 'Other'
      else this.course = null
    }
  }
}
</script>
