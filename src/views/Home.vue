<template>
  <span>
    <v-app-bar app dark color="secondary">
      <v-toolbar-title>Matt Smith Tutoring</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="900" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on">BOOK NOW</v-btn>
        </template>
        <booking-form @closeDialog="dialog = false"></booking-form>
      </v-dialog>
    </v-app-bar>
    <splash></splash>
    <div class="primary lighten-5 py-8">
      <v-container>
        <mcs-header>About Me</mcs-header>
        <v-row>
          <v-col cols="12" class="dark text-center text-body-1 text-md-h6">
            Hi! I'm a Princeton University-trained mathematician and certified math teacher who helps students reach
            their full potential in the subjects they struggle with the most. My approach is analytical: break down a
            problem, whether it be solving an equation or translating a sentence, into pieces and build on the
            fundamentals to piece the solution together.
            <br />
            <br />
            I'll meet you where you're at and help you reach where you need to be. Through consistent effort, you'll
            build confidence and overcome the struggle. See below for more details on my teaching philosophy. Or click
            "Book Now" in the top right to book a free introductory session today to get started on your journey.
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="primary lighten-4 py-8">
      <v-container>
        <mcs-header>Subjects I Tutor</mcs-header>
        <v-row class="pt-2">
          <v-col cols="12" sm="6" lg="3">
            <tutor-subject subject="Mathematics" color="item1">
              Any subject from 6th grade through college, including:
              <ul>
                <li>Pre-Algebra</li>
                <li>Algebra 1</li>
                <li>Algebra 2</li>
                <li>Geometry</li>
                <li>Pre-calculus</li>
                <li>Calculus 1/2/3</li>
                <li>Linear Algebra</li>
                <li>Differential Equations</li>
              </ul>
            </tutor-subject>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <tutor-subject
              subject="Computer
            Science"
              color="item2"
            >
              Both programming and college-level theory. Experienced in the following languages:
              <ul>
                <li>Java (used in AP Computer Science A)</li>
                <li>Python</li>
                <li>PowerShell (.NET)</li>
                <li>HTML/JavaScript/CSS/Vue.js (web development)</li>
              </ul>
              <br />
              Fun fact: I wrote the code for this website. You can find it on my GitHub:
              <a href="https://github.com/mattsmithtaiko/" target="_blank" class="white--text">
                https://github.com/mattsmithtaiko/
              </a>
            </tutor-subject>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <tutor-subject subject="Physics" color="item3">
              Introductory Physics, including material covered in:
              <ul>
                <li>AP Physics B</li>
                <li>AP Physics C - Mechanics</li>
                <li>AP Physics C - Electricity and Magnetism</li>
                <li>College-level Introductory Physics (101 and 102)</li>
              </ul>
            </tutor-subject>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <tutor-subject subject="Japanese" color="item4">
              Beginner to Intermediate Japanese, such as material covered in:
              <ul>
                <li>Genki 1 & 2</li>
                <li>Nakama 1 & 2</li>
                <li>Tobira: Gateway to Advanced Japanese (上級へのとびら)</li>
              </ul>
            </tutor-subject>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="primary lighten-5 py-8">
      <v-container>
        <mcs-header>My Philosophy</mcs-header>
        <v-row>
          <v-col cols="12" class="dark text-center text-body-1 text-md-h6">
            I believe subjects like Math can teach so much more than just the math itself. These four transferable
            skills apply to all aspects of life:
          </v-col>
        </v-row>
        <blurb header="Perseverance" color="item1">
          By embracing and working through difficult problems, we learn to
          <span class="item1--text font-weight-bold">persevere</span>
          through the challenge and not fear solving new problems with unknown answers.
        </blurb>
        <blurb header="Curiosity" color="item2" right>
          As we become more comfortable with the subjects that we struggle with, our natural
          <span class="item2--text font-weight-bold">curiosity</span>
          is unlocked and puts us in a state where we are ready to learn and discover new things.
        </blurb>
        <blurb
          header="Analysis +
      Synthesis"
          color="item3"
        >
          Learning to properly
          <span class="item3--text font-weight-bold">analyze</span>
          a given problem trains our brains to be detail-oriented, while learning to
          <span class="item3--text font-weight-bold">synthesize</span>
          the results helps us to keep sight of the big picture in the process.
        </blurb>
        <blurb header="Creativity" color="item4" right>
          We will encounter obstacles in solving any kind of problem, which gives us the opportunity to learn how to
          <span class="item4--text font-weight-bold">creatively</span>
          navigate around those obstacles by reducing new problems to things we already know.
        </blurb>
      </v-container>
    </div>
    <div class="primary lighten-4 py-8">
      <v-container>
        <mcs-header>The Tutoring Cycle</mcs-header>
        <v-row>
          <v-col cols="12" class="dark text-center text-body-1 text-md-h6">
            Tutoring is most effective when done on a regular basis. The repeated act of embracing challenges in a safe
            environment helps to build confidence with the subject and overcome the fear of failure. Each of these
            enhances the other in a feedback loop I call the <span class="font-weight-bold">Tutoring Cycle</span>.
            Altogether, the cycle helps us reach the ultimate goal of sharpening the mind overall and sets us up to be
            successful in any challenges we face (which, naturally, will also lead to better grades in school).
          </v-col>
        </v-row>
        <tutor-cycle></tutor-cycle>
      </v-container>
    </div>
    <div class="accent lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12" sm="10" offset-sm="1" md="8" offset-md="2" class="dark text-center text-h5 text-md-h4">
            Learn to appreciate the subjects you struggle with while improving your grades
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" offset="3">
            <v-btn block x-large dark color="primary" width="100%" class="text-h6" @click="dialog = true">
              BOOK NOW
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-footer color="secondary" dark class="text-caption text-md-body-1">
      Contact me:
      <a href="#" class="white--text pl-2">mattsmith@mattsmithtutoring.com</a>
      <v-spacer></v-spacer>
      &copy; 2021 Matt Smith Tutoring
    </v-footer>
  </span>
</template>

<script>
import bodyScroll from 'body-scroll-toggle'

import Blurb from '../components/Blurb.vue'
import McsHeader from '../components/McsHeader.vue'
import Splash from '../components/Splash.vue'
import TutorCycle from '../components/TutorCycle.vue'
import TutorSubject from '../components/TutorSubject.vue'
import BookingForm from '../components/BookingForm.vue'
export default {
  components: {
    Blurb,
    McsHeader,
    Splash,
    TutorCycle,
    TutorSubject,
    BookingForm
  },
  data: () => ({
    dialog: false
  }),
  watch: {
    dialog: function () {
      if (this.dialog) bodyScroll.disable()
      else bodyScroll.enable()
    }
  },
  name: 'Home'
}
</script>

<style>
@media (min-width: 1904px) {
  .container {
    max-width: 1185px;
  }
}

.container--fluid {
  max-width: 100%;
}
</style>
