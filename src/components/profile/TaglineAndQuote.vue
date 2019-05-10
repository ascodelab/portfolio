<template>
        <div class="tagline has-text-centered" >
            <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Web Artist, Laravel Developer, Instructor</h1>
            <h2 class="subtitle is-size-4-desktop">I focus on, <em>High scalability</em>, <em>low latency</em> and <em>good performance</em>.<br>I develop and code  beautifully simple things and<br> I enjoy pretty much what I do.</h2>
            <img class="avatar" src="~@/assets/mf-avatar.svg">
            <!-- terminal code starts -->
            <div class="text-editor-wrap">
              <div class="text-body has-text-centered">
                 <span id="typed">
                    <vue-typer
                        :text='[
                                "Expect problems and eat them for breakfast.",
                                "If you can dream it, you can do it.",
                                "Accept the challenges so that you can feel the exhilaration of victory.",
                                "Do not watch the clock; do what it does. Keep going.",
                                "I choose to listen to my inner voice, not the random opinion of others.",
                                "Surround yourself with people that inspire you.",
                                "Whatever you are,  be a good one.",
                                "The truly rich are those who enjoy what they have.",
                                "Give every day the chance to become the most beautiful day of your life.",
                                "Dreams and goals are coming attractions in your life."
                            ]'
                        :repeat='Infinity'
                        :shuffle='true'
                        erase-style='clear'
                        caret-animation='blink'
                    ></vue-typer> 
                </span>
              </div>
            </div>
            <!-- terminal code ends -->
        </div>
</template>

<style>
@keyframes fadein {
   0% {
    transform: translate3d(0,-50px,0);
  }
  100% {
    transform: translateX3d(0,0,0);
  }
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-15%);
  }
  100% {
    transform: translateX(0);
  }
}
/* animation ends */
.tagline{
  padding:70px 0px;
}
.title{
  font-weight: normal;
  font-family: 'Righteous', cursive;
  color:#ff7f50;
}
.subtitle{
  color: #f74a0a;
}
.avatar{
  margin:40px 0px;
  animation: fadein 2s cubic-bezier(.13,.79,.12,.06);
}
/* terminal css */
.text-editor-wrap {
    display: block;
    margin: auto;
    border-radius: 10px;
    clear: both;
    overflow: hidden;
    margin:20px auto;
}
.text-body {
    background: #fff;
    padding: 10px;
    text-align: left;
    overflow: hidden;
    color:#000;
}
.tagline .title{
    animation: fadein 2s ease-in;
}
.tagline .subtitle{
   /* duration,timing-function,delay,repeat */
    animation: 2s ease-out 0s 1 slideInFromLeft;
}
</style>

<script>

  import { VueTyper } from 'vue-typer'

  export default {
  name: 'index',
  components: {
    'vue-typer': VueTyper,
  },
  data(){
      return {
          
      }
  },
}
</script>