<template>
<div class="tw-widget-wrapper" :class="{'tw-widget-hide':disabled}">
      <a :href=followLink class="twitter-follow-button" data-show-count="true" data-size="large" data-show-screen-name="false"></a>
      <button class="delete tw-close-btn" @click="hideWidgit()"></button>
    </div>
</template>

<style>
.tw-widget-wrapper{
    position:fixed;
    z-index:10000;
    left:0px;
    top: 50%;
    background:#f5f0f0;
    padding:11px 10px 5px 10px;
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
}
.tw-widget-hide{
    display:none;
}
.tw-close-btn{
    position:absolute;
    top:-8px;
    right:-4px;
    background:#2e84ce;
    opacity:.85;
}
.tw-close-btn:hover{
    opacity:1;
    background:#2e84ce;
}
</style>

<script>

  export default {
  name: 'twitter',
  props: ['twitterUsername'],
  data(){
      return {
          disabled:false,
          followLink:"https://twitter.com/"+this.twitterUsername+"?ref_src=twsrc%5Etfw"
      }
  },
  methods:{
    hideWidgit:function(){
        this.disabled=true;
    }
  },
  mounted() {
    let twsdk = document.createElement('script')
    twsdk.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    twsdk.setAttribute('charset', 'utf-8')
    document.head.appendChild(twsdk)
  },
}
</script>