<template>
    <div class="nl-wrapper container">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
              <div class="ns">
                    <div class="ns_icon is-centered">
                      <i class="fas fa-broadcast-tower is-centered animated infinite heartBeat"></i>
                    </div>
                    <div>
                      <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">
                      Want us to email you occasionally.
                      </h1>
                    </div>
                    <div class="columns is-centered">
                      <form name="subscribeform" id="subscribeform" action="/" method="post" @submit="processForm">
                        <div class="column ns-wrapper">
                            <div class="columns is-centered">
                              <div class="column is-four-fifths col-ns">
                                <div class="field">
                                  <div class="control control-ns">
                                    <input class="input input-ns" type="email" placeholder="you@mail.com" v-model="email" required>
                                  </div>
                                </div>
                              </div>
                              <div class="column">
                                <div class="control ns-btn-con">
                                  <button class="button is-rounded is-primary ns-btn-btn" :disabled=isSent>{{button.text}}</button>
                                </div>
                              </div>
                            </div>
                        </div>
                      </form>
                    </div>
              </div>
          </div>
        </div>
    </div>
</template>

<style>
.nl-wrapper{
    min-height:50px;
    padding:100px;
    padding-bottom:200px;
    padding-top:300px;
    position:relative;
}
.ns {
  /* background: #e55039; */
  color: #FFF;
  margin-top:-12.5rem;
  text-align: center;
  position: relative;
}
.ns_icon {
  margin:0px auto;
  border-radius: 50%;
  font-size:24px;
  position:relative;
  height:100px;
  width:100px;
  top:-40px;
  padding:20px;
}
.ns h1.title{
  margin-top:-50px;
  color:#fff;
  text-shadow: 1px 2px 5px #5d7b8a;
  font-size:24px !important;
}
.ns-wrapper{
  height:60px;
  border:2px solid #aaa;
  margin-top:50px;
  margin-bottom:50px;
  border-radius:10rem;
}
.col-ns{
  padding:0px !important;
  margin:0px !important;
}
#subscribeform{
  padding:0px;
  margin:0px;
  width:100%;
}
.input-ns{
  height:100%;
  background: #555b79;
  border:0px !important;
  box-shadow: 0px !important;
  outline: none !important;
  color:#f5f5f5;
}
.input-ns::placeholder {
  color: #aaa;
  font-size: 1.2em;
  font-style: italic;
}
.input-ns:focus,.control-ns:focus{
  border:0px !important;
  box-shadow: 0px !important;
  outline: none !important;
  color:#f5f5f5;
}
.control-ns{
  height: 56px;
  border:0px !important;
  box-shadow: 0px !important;
  outline: 0px !important;
  padding-left:24px; 
}
.ns-btn-con{
padding:0px !important;
margin:0px !important;
}
.ns-btn-btn{
    height: 51px;
    padding: 12px 25px !important;
    position: absolute;
    top: -10px;
    left: -20px;
}
.ns-btn-btn:disabled{
   position: absolute;
   left: -30px;
}
</style>

<script>
  import { state, mapActions } from "vuex";

  export default {
  name: 'newsletter',
  components: {

  },
  data(){
      return {
        isEmailOk: null,
        email: null,
        messageSubmitted:null,
        //[button proprrties]
        button:{
            text:'Subscribe ',
          }
      }
  },
  computed:{
    isDisabled(){
      return !( this.isEmailOk);
    },
    isSent(){
      return this.messageSubmitted;
    }
  },
  methods:{
       ...mapActions(["subscribe"]),
      isValidEmail: function() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(this.email) ? (this.isEmailOk = 1) : (this.isEmailOk = 0);
      },
      processForm: function(e) {
      //prevent default action
      e.preventDefault();
      // data to be pushed
      let data = {
        email: this.email.trim(),
      };
      // console the data
      let r = this.subscribe(data);
      //changing message
      this.button.text="Subscribed"
      this.messageSubmitted=true;
    }
  }
}
</script>