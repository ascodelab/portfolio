<template>
  <div class="index">
    <section>
      <div class="container">
        <div class="top-header">
          <!-- Navbar component -->
          <navbar></navbar>
        </div>
        <section>
        <!-- twitter widget -->
        <follow-on-twitter twitter-username="realanilsharma"></follow-on-twitter>
        </section>
        <div>
          <!-- Tagline and quote animation -->
          <tagline-and-quote></tagline-and-quote>
        </div>
      </div>
    </section>
    <!-- about box {container fluid} -->
    <section class="about-box section is-medium is-primary has-text-centered is-long">
      <about-me></about-me>
    </section>
    <!-- skill boxes section -->
    <section class="section skills has-text-centered">
      <skill-boxes></skill-boxes>
    </section>
    <!-- Skill progressbar box-->
    <section class="section skills-heading is-medium is-white has-text-centered">
      <div class="container">
        <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">SKILLS</h1>
        <h2 class="subtitle is-size-5-desktop">Progress bars, anyone?</h2>
        <i class="fas fa-sync fa-spin title"></i>
      </div>
    </section>
    <!-- Skill progressbar range-->
    <section class="pgbar-box section is-medium is-primary has-text-centered is-long">
      <skill-progressbar></skill-progressbar>
    </section>
    <!-- ends -->
    <!-- Projects Starts -->
    <section class="section projects is-medium is-white has-text-centered">
      <div class="container">
        <i class="fas fa-briefcase title animated infinite heartBeat"></i>
        <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">WORK AREAS</h1>
        <h2 class="subtitle is-size-5-desktop">Here it gets interesting ( <b>WHY?</b> )</h2>
        <!-- project list starts -->
        <div style="height:45px;"></div>
        <project-grid></project-grid>
      </div>
    </section>
    <!-- ends -->
     <!-- info card -->
    <section class="infocard is-medium is-primary has-text-centered is-long">
      <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">CONTACT</h1>
      <h2 class="subtitle is-size-5-desktop animated infinite jello">Call me, maybe.</h2>
      <info-card></info-card>
    </section>
    <!-- ends -->
    <!-- newsletter -->
    <section class="newsletter is-medium is-primary has-text-centered is-long">
      <newsletter></newsletter>
    </section>
    <!-- ends -->
    <!-- CTA BOX -->
    <section class="section call-to-action is-primary has-text-centered">
      <cta-box></cta-box>
    </section>
    <!-- ends -->
    <!-- footer section starts -->
    <footer-bar></footer-bar>
    <!-- ends -->
  </div>
</template>

<style scoped>
* {
  font-family: "Quicksand", sans-serif;
}
.text-bold {
  font-family: "Crimson Text", serif;
}
.text-stylish {
  font-family: "Satisfy", cursive;
}
.container.is-fluid {
  margin: 0px;
}
.control {
  background: #8c43ff;
}
.title {
  font-family: "Righteous", cursive !important;
}
.about-box {
  min-height: 300px;
  background: #8c43ff;
  background-image: url("~@/assets/t001.png");
  padding-bottom: 200px;
  padding-top: 100px;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  /* background-blend-mode:color; */
}
/* boxes */
.section.skills {
  margin-top: -10rem;
}
/* skills heading */
.skills-heading {
  padding-top: 40px;
  padding-bottom: 80px;
}
.pgbar-box {
  background: #5771f1;
  padding-bottom: 100px;
  padding-top: 100px;
  /* background-image: url("/tex007.jpg"); */
  background-image: url("~@/assets/t006.png");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
}
/* projects heading */
.projects {
  margin-top: -7rem;
  padding-top: 190px;
  padding-bottom: 190px;
}
.infocard{
  padding-bottom:7rem;
  margin-top:-7rem;
}
.newsletter{
  background: #555b79;
}
/* phone scrath card  */
.call-to-action {
  background: #293347;
  /* background-image: url("/tex007.jpg"); */
  min-height: 100px;
  padding-left:0px;
}
</style>

<script>
import Navbar from "@/components/profile/Navbar.vue";
import TwitterFollowWidget from "@/components/widgets/Twitter.vue";
import TaglineAndQuote from "@/components/profile/TaglineAndQuote.vue";
import AboutMe from "@/components/profile/AboutMe.vue";
import SkillBoxes from "@/components/profile/SkillBoxes.vue";
import SkillProgressBar from "@/components/profile/SkillProgressBar.vue";
import Projects from "@/components/profile/Projects.vue";
import InfoCard from "@/components/profile/InfoCard.vue";
import Newsletter from "@/components/profile/Newsletter.vue";
import CtaBox from "@/components/profile/CtaBox.vue";
import Footer from "@/components/profile/Footer.vue";

export default {
  name: "index",
  components: {
    "navbar": Navbar,
    "follow-on-twitter":TwitterFollowWidget,
    "tagline-and-quote": TaglineAndQuote,
    "about-me": AboutMe,
    "skill-boxes": SkillBoxes,
    "skill-progressbar": SkillProgressBar,
    "project-grid": Projects,
    "footer-bar": Footer,
    "cta-box": CtaBox,
    "newsletter":Newsletter,
    'info-card':InfoCard
  },
  data() {
    return {};
  }
};
</script>




