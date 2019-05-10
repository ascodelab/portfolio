<template>
  <div class="modal hello-modal animated" v-bind:class="{'is-active':modal,'bounce':modal,'rollOut':modalEffect}">
    <form name="sayHelloForm" action="/" method="post" @submit="processForm">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            Let's catch up.
            <br>
            <span>Drop your message here. I will revert back to you shortly.</span>
          </p>
          <button class="delete" aria-label="close" v-on:click="modalSayHelloHide()"></button>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column">
              <div class="field">
                <div class="control">
                  <label class="label" for="sh-name" v-bind:class="{'fail':isNameOk===0,'pass':isNameOk===1}">Name</label>
                  <input class="input" id="sh-name" type="text" v-model="name" @keyup="isValidName()" required autocomplete="off">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <div class="control">
                  <label class="label" for="sh-email" v-bind:class="{'fail':isEmailOk===0,'pass':isEmailOk===1}">Email</label>
                  <input class="input" id="sh-emal" type="email" v-model="email" @keyup="isValidEmail()" required autocomplete="off">
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <div class="control">
                  <label class="label" for="sh-message" v-bind:class="{'fail':isMessageOk===0,'pass':isMessageOk===1}">Message</label>
                  <textarea id="sh-message" class="textarea" v-model="message" @keyup="isValidMessage()" required></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success hello-submit is-rounded" type="submit" :disabled=isSent>
            {{button.text}}&nbsp;
            <i class="fas" :class="button.iconClass"></i>
          </button>
        </footer>
      </div>
    </form>
  </div>
</template>

<style>
.modal-card-head {
  background: #ff7f50;
  color: #ff7f50;
}
.modal-card-title {
  color: #fff;
  opacity: 1;
  font-family: "Righteous", cursive;
}
.modal-card-title span {
  font-size: 14px;
  text-shadow: 3px 3px 5px #ff7f50;
}
.modal {
  font-family: "Righteous", cursive;
  color: #ff7f50 !important;
}
.modal label {
  font-family: "Righteous", cursive;
  color: #999 !important;
  text-align: left;
  text-indent: 2px;
  position:relative;
  z-index: 100;
  top:10px;
}
.hello-modal .input,
.hello-modal .textarea {
  border:none;
  border-bottom: 2px solid #ddd !important;
  outline: none !important;
  box-shadow: none;
  border-radius:0px !important;
  -webkit-transition:1s; /* Safari */
  transition:1s;
}
.hello-modal .input:focus,.hello-modal .textarea:focus {
  outline: none !important;
  box-shadow: 0px !important;
  border-bottom: 2px solid #ff7f50 !important;
}
.hello-modal .hello-submit {
  border: 2px solid #ff7f50;
  color: #ff7f50;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  font-family: "Righteous", cursive;
  background: #fff;
}
.hello-modal .hello-submit:hover, .hello-modal .hello-submit:focus {
  border: 2px solid #ff7f50;
  background: #ff7f50;
  color: #fff;
}
.hello-modal .hello-submit:disabled{
  background: #ff7f50;
  color:#fff;
}
.hello-modal .modal-card-foot {
  background: #fff;
  border-top: 0px;
}
/* validation css */
.is-danger {
  outline: 0px !important;
  box-shadow: 0px !important;
}
.modal .pass{
  color:green !important;
}
.modal .pass:after{
  content:'( Success! )';
  color:green !important;
  font-size: 12px;
  display:inline-block;
}
.modal .fail{
  color:red !important;
}
.modal .fail:after {
  content:'( Error! )';
  color:red !important;
  font-size: 12px;
  display:inline-block;

}

</style>

<script>
import { state, mapActions } from "vuex";

export default {
  data() {
    return {
      isNameOk: null,
      isEmailOk: null,
      isMessageOk: null,
      name: null,
      email: null,
      message: null,
      messageSubmitted:null,
      //[button proprrties]
      button:{
        text:'Say Hello!',
        iconClass:'fa-paper-plane'
      }
    };
  },
  computed: {
    modal() {
      return this.$store.state.sayHelloModal;
    },
    modalEffect() {
      return this.$store.state.sayHelloModalEffect;
    },
    isDisabled(){
      return !(this.isNameOk && this.isEmailOk && this.isMessageOk);
    },
    isSent(){
      return this.messageSubmitted;
    }
  },
  methods: {
    ...mapActions(["modalSayHelloHide", "initData", "sendSayHello"]),
    isValidEmail: function() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      re.test(this.email) ? (this.isEmailOk = 1) : (this.isEmailOk = 0);
    },
    isValidName: function() {
      var re = /^[a-zA-Z ]{2,30}$/;
      re.test(this.name.trim()) ? (this.isNameOk = 1) : (this.isNameOk = 0);
    },
    isValidMessage: function() {
      var re = /^[a-zA-Z0-9 /!/@/.]{10,260}$/;
      re.test(this.message.trim()) ? (this.isMessageOk = 1) : (this.isMessageOk = 0);
    },
    processForm: function(e) {
      //prevent default action
      e.preventDefault();
      // data to be pushed
      let data = {
        name: this.name.trim(),
        email: this.email.trim(),
        message: this.message.trim()
      };
      // console the data
      let r = this.sendSayHello(data);
      //changing message
      this.button.text="Message has been sent!"
      this.button.iconClass="fas fa-check"
      this.messageSubmitted=true;
      //resetting the form
      e.target.reset();
    }
  }
};
</script>
