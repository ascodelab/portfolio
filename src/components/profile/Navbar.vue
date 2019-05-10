<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand animated zoomIn">
            <a class="navbar-item" href="https://ascodelab.github.io/-/#/">
                <div class="chip">
                    <img src="~@/assets/as-logo1.png" alt="Anil Sharma- software engineer" />
                    <b class="h-name"></b>
                </div>
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
            <div class="navbar-start">
                <a class="navbar-item" href="https://ascodelab.github.io/-/#/" target="_blank">
                    Home
                </a>
                <a class="navbar-item" href="#" v-scroll-to="{el: '.skills',duration:1000,easing: 'ease-in-out'}" target="_self">
                    Skills
                </a>
                <!-- <a class="navbar-item" href="/blogs" target="_blank">
                   Blogs
                </a> -->
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="#">
                    Connect
                    </a>
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item" href="https://linkedin.com/in/realanilsharma" target="_blank">
                           <span class="d-icon d-i-l"><i class="fab fa-linkedin-in"></i></span> Linkedin
                        </a>
                        <a class="navbar-item" href="https://facebook.com/tyagibhai" target="_blank">
                           <span class="d-icon d-i-f"><i class="fab fa-facebook"></i></span>  Facebook
                        </a>
                        <a class="navbar-item" href="https://twitter.com/realanilsharma" target="_blank">
                            <span class="d-icon d-i-t"><i class="fab fa-twitter"></i></span> Twitter
                        </a>
                        <a class="navbar-item" href="https://instagram.com/anil_shrm" target="_blank">
                            <span class="d-icon d-i-i"><i class="fab fa-instagram"></i></span> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <a class="bd-tw-button button is-rounded h-tw-button" data-social-network="Twitter" href="#" v-on:click="modalSayHelloShow()">
                            <span class="icon">
                                <i class="fas fa-heart animated infinite heartBeat"></i>
                            </span>
                            <span>
                                Say Hello!
                            </span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar-brand{
    animation-duration: 2.5s;
    animation-delay: 1s;
    animation-iteration-count:2;
}
.navbar-item img {
    max-height: 46px;
}
a:hover{
    color:#f74a0a !important;
}
a.h-tw-button{
    border:2px solid #ff7f50;
    color:#ff7f50;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    transition-timing-function: ease-out;
    -webkit-transition-delay: 0.2s; /* Safari */
    transition-delay: 0.2s;
    font-family: 'Righteous', cursive;
}
a.h-tw-button:hover{
    background:#ff7f50 !important;
    color:#fff !important;
    border:2px solid #ff7f50 !important;
}

.navbar-link:not(.is-arrowless)::after {
    border-color: #ff7f50;
    margin-top: -.375em;
    right: 1.125em;
}
.chip {
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background: #fff;
}
.chip img {
  float: left;
  margin: 0px 10px 0 0px;
  height: 46px;
  width: 46px;
  border-radius: 50%;
}
.h-name{
    
}
.d-icon{
    margin-right:7px;
}
.d-i-l{
    top:-1px;
    position:relative;
}
</style>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                showNav: false
            }
        },
        methods: mapActions([
            'modalSayHelloShow',
        ]),
    }
</script>