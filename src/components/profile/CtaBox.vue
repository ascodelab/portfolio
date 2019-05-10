<template>
    <div class="">
        <div class="box">
          <div class="columns level">
            <div class="column level-item">
              <h1 class="title">Have an Idea?</h1>
            </div>
            <div class="column level-item">
              <p>Interested in working together? We should queue up a chat.</p>
            </div>
            <div class="column level-item animated infinite pulse"><a class="button is-primary is-outlined is-rounded is-medium" href="#" v-on:click="modalSayHelloShow()">Let's do this</a></div>
          </div>
        </div>
      </div>
</template>

<style>
@keyframes color-change  {
    0% {color:rgb(236, 176, 176);}
    50% {color:#ff7f50;}
    100% {color:rgb(236, 176, 176);}
}
@-moz-keyframes color-change  {
    0% {color:rgb(236, 176, 176);}
    50% {color:#ff7f50;}
    100% {color:rgb(236, 176, 176);}
}

@-webkit-keyframes color-change {
    0% {color:rgb(236, 176, 176);}
    50% {color:#ff7f50;}
    100% {color:rgb(236, 176, 176);}
}
.section.call-to-action .box {
    padding: 5rem 3rem;
    margin-top: -9rem;
    background-color: #293347;
    /* background-image: url("/tex015.jpg"); */
    box-shadow: none;
    border-radius: 25% 70% 30% 15%;
}
.box {
    border-radius: 12px;
}
.box h1.title{
    font-family: 'Righteous' !important;
    animation:color-change 3s infinite cubic-bezier(.7,.8,.67,.17);
    -moz-animation:color-change 3s infinite cubic-bezier(.7,.8,.67,.17); 
    -webkit-animation:color-change 3s infinite cubic-bezier(.7,.8,.67,.17); 
}
.box {
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 5px 5px 0 rgba(233,240,243,0.5), 0 0 0 1px #E6ECF8;
    color: #293347;
    display: block;
    padding: 1.25rem;
}
.section.call-to-action .box p{
    color:#fff;
}
.box .button{
    border:2px solid #c7534a !important;
    color:#fff !important;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    font-family: 'Righteous', cursive;
}
.box .button:hover{
    background:#c7534a !important;
     border:1px solid #555 !important;
}
</style>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                
            }
        },
        methods: mapActions([
            'modalSayHelloShow',
        ]),
    }
</script>

