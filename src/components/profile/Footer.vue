<template>
   <footer class="section is-primary is-small has-text-centered">
      <div class="container is-narrow" data-aos="anim1">
        <a class="logo" href="/">
          <img src="https://s.gravatar.com/avatar/017c2f452a5b71e2bb49cd8932d42e74?s=80" alt="Anil Sharma | Laravel developer, Back-end Developer &amp; Mentor" height="72px" width="72x">
        </a>
        <div class="columns is-centered"> 
          <div class="column is-one-third">
            <p class=" is-size-4-touch">Living, learning, &amp; leveling up one day at a time.</p>
          </div>
        </div>
        <div class="social-icons">
          <p class="field">
            <a class="button is-medium" href="https://facebook.com/tyagibhai" target="_blank"><span class="icon is-small"><i class="fab fa-facebook-f fa-fw"></i></span></a>
            <a class="button is-medium" href="https://twitter.com/realanilsharma" target="_blank"><span class="icon is-small"><i class="fab fa-twitter fa-fw"></i></span></a>
            <a class="button is-medium" href="https://instagram.com/anil_shrm" target="_blank"><span class="icon is-small"><i class="fab fa-instagram fa-fw"></i></span></a>
            <a class="button is-medium" href="https://linkedin.com/in/realanilsharma" target="_blank"><span class="icon is-small"><i class="fab fa-linkedin-in fa-fw"></i></span></a>
            <a class="button is-medium" href="https://angel.co/realanilsharma" target="_blank"><span class="icon is-small"><i class="fab fa-angellist fa-fw"></i></span></a>
            <a class="button is-medium" href="mailto:anela.kumar@gmail.com?subject=can%20we%20talk%3F&amp;body=Hello%20Anil%2C%0D%0A%0D%0Ayour%20message%20goes%20here.." target="_blank"><span class="icon is-small"><i class="far fa-envelope fa-fw"></i></span></a>
          </p>
        </div>
        <div class="copyright">Handcrafted by me<span class="icon has-white-text" style="vertical-align:middle;"><i class="far fa-copyright"></i></span>twentynineteen
        </div>
        <div class="made-by-bulma">
          <a href="https://bulma.io" target="_blank"><img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31">
          </a>
        </div>
      </div>
      <!-- modals -->
      <say-hello></say-hello>
    </footer>
</template>
<script>

import SayHello from '@/components/profile/modals/SayHello.vue'
export default {
  name: 'foot',
  components: {
    'say-hello':SayHello
  },
  data(){
      return {
          
      }
  },
}

</script>

<style>
/* footer section  */
footer .logo{
  padding:3px !important;
}
footer .logo:hover{
 background:none !important;
}
footer .logo img{
  border-radius:50% !important;
}
footer.section.is-primary {
    background-color: #293347;
    /* background-image: url("/tex007.jpg"); */
    color: #fff;
    padding-top:40px !important;
    padding-bottom:60px !important;
}
footer p{
  font-family: 'Quicksand', sans-serif !important;
  font-size:1.3rem;
  opacity:.8;
}
footer p:hover{
  opacity:1;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
footer .social-icons a.button {
    background-color: transparent;
    color: #fff;
    border-radius: 100%;
    margin: 0 .2rem;
    height: 47px;
    width: 47px;
    border: 2px solid rgba(255,255,255,0.3);
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
}
footer a:hover{
  background:#ff7f50 !important;
  color:#fff !important;
  border-color:#ff7f50 !important;
  opacity:1;
}
footer .copyright{
  font-family: 'Quicksand', sans-serif !important;
  margin-top:45px;
  opacity:.8;
}
footer .made-by-bulma{
  color:#f5f5f5;
  opacity:0.8;
}
footer .made-by-bulma:hover{
  opacity:0.95;
}
footer .made-by-bulma a:hover{
  background:none !important;
  opacity:.95;
}
/* Animations */
[data-aos="anim1"] {
  -webkit-transform: skewX(45deg);
          transform: skewX(45deg);
  opacity: 0;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
}
[data-aos="anim1"].aos-animate {
  -webkit-transform: skewX(0);
          transform: skewX(0);
  opacity: 1;
}

</style>