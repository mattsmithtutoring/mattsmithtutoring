<template>
  <span>
    <v-app-bar app dark color="orange">
      <v-toolbar-title>Matt Smith Tutoring</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>SIGN IN</v-btn>
      <v-btn color="light-blue">BOOK NOW</v-btn>
    </v-app-bar>
    <splash></splash>
    <div class="orange lighten-3">
      <mcs-header>About Me</mcs-header>
      <v-container>
        <v-row>
          <v-col cols="8" offset="2" class="dark text-center text-h5">
            Hi! I'm Mr. Smith, a certified math teacher and IT professional who
            helps students reach their full potentials in the subjects they
            struggle with the most. My approach is analytical: break down a
            problem, whether it be solving an equation or translating a
            sentence, into pieces and build on the fundamentals to piece the
            solution together. <br /><br />
            I'll meet you where you're at and help you reach where you need to
            be. Through consistent effort, you'll build confidence and overcome
            the struggle. See below for more details on my teaching philosophy.
            Or click "Book Now" in the top right to book a free introductory
            session today to get started on your journey.
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="cyan lighten-3">
      <mcs-header>Subjects I Tutor</mcs-header>
      <v-container>
        <v-row>
          <v-col cols="3">
            <tutor-subject subject="Mathematics" color="red">
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
          <v-col cols="3">
            <tutor-subject
              subject="Computer
          Science"
              color="blue"
            >
              Both programming and college-level theory. Experienced in the
              following languages:
              <ul>
                <li>Java (used in AP Computer Science A)</li>
                <li>Python</li>
                <li>PowerShell (.NET)</li>
                <li>HTML/JavaScript/CSS/Vue.js (web development)</li>
              </ul>
              <br />
              Fun fact: I wrote the code for this website. You can find it on my
              GitHub:
              <a
                href="https://github.com/mattsmithtaiko/"
                target="_blank"
                class="white--text"
              >
                https://github.com/mattsmithtaiko/
              </a>
            </tutor-subject>
          </v-col>
          <v-col cols="3">
            <tutor-subject subject="Physics" color="orange">
              Introductory Physics, including material covered in:
              <ul>
                <li>AP Physics B</li>
                <li>AP Physics C - Mechanics</li>
                <li>AP Physics C - Electricity and Magnetism</li>
                <li>College-level Introductory Physics (101 and 102)</li>
              </ul>
            </tutor-subject>
          </v-col>
          <v-col cols="3">
            <tutor-subject subject="Japanese" color="green">
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
    <div class="purple lighten-4">
      <mcs-header>My Philosophy</mcs-header>
      <v-container>
        <blurb header="Perseverence" color="red">
          By embracing and working through difficult problems, we learn to
          <span class="red--text font-weight-bold">persevere</span> through the
          challenge and not fear solving new problems with unknown answers.
        </blurb>
        <blurb header="Curiosity" color="blue" right>
          As we become more comfortable with the subjects that we struggle with,
          it unlocks our native
          <span class="blue--text font-weight-bold">curiosity</span> and puts us
          in a state where we are ready to learn and discover new things.
        </blurb>
        <blurb
          header="Analysis +
      Synthesis"
          color="orange"
        >
          Learning to properly
          <span class="orange--text font-weight-bold">analyze</span> a given
          problem trains our brains to be detail-oriented, while learning to
          <span class="orange--text font-weight-bold">synthesize</span> the
          results helps us to keep sight of the big picture in the process.
        </blurb>
        <blurb header="Creativity" color="green" right>
          We will encounter obstacles in solving any kind of problem, which
          gives us the opportunity to learn how to
          <span class="green--text font-weight-bold">creatively</span> navigate
          around those obstacles by reducing new problems to things we already
          know.
        </blurb>
      </v-container>
    </div>
    <div>
      <v-container class="pt-8">
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
                color="purple lighten-1"
                dark
              >
                <v-card-title class="text-center text-h4 font-weight-bold">
                  Embrace<br />
                  the Challenge
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
                color="yellow darken-3"
                dark
              >
                <v-card-title class="text-center text-h4 font-weight-bold">
                  Build<br />
                  Confidence
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="2">
              <div
                class="d-flex justify-center align-center"
                style="height: 12rem"
              >
                <v-icon size="8rem" color="black">
                  mdi-arrow-left-right-bold
                </v-icon>
              </div>
            </v-col>
            <v-col cols="4">
              <v-card
                class="d-flex justify-center align-center"
                height="12rem"
                color="red darken-2"
                dark
              >
                <v-card-title class="text-center text-h4 font-weight-bold">
                  Overcome<br />
                  the Fear
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
              color="cyan darken-1"
              dark
            >
              <v-card-title class="text-center text-h4 font-weight-bold">
                Sharpen the Mind
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="green lighten-3">
      <v-container>
        <v-row>
          <v-col cols="8" offset="2" class="dark text-center text-h4">
            Learn to appreciate the subjects you struggle with while improving
            your grades
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" offset="3">
            <v-btn
              block
              x-large
              dark
              color="light-blue"
              width="100%"
              class="text-h6"
            >
              BOOK NOW
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </span>
</template>

<script>
import Blurb from '../components/Blurb.vue'
import McsHeader from '../components/McsHeader.vue'
import Splash from '../components/Splash.vue'
import TutorSubject from '../components/TutorSubject.vue'
export default {
  components: {
    Blurb,
    McsHeader,
    Splash,
    TutorSubject
  },
  name: 'Home'
}
</script>
