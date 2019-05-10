<template>
    <div class="container is-fluid" data-aos="anim2" data-aos-easing="ease-in-sine">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">
               <span>Hi,&nbsp;</span><span>I’m Anil.</span><span>Nice to meet you.</span>
            </h1>
            <h1 class="subtitle is-size-5-desktop text-stylish ab-subt animated infinite rubberBand">What I am all about.</h1>
            <p class="subtitle is-size-5-desktop" >I started off my journey as a  full stack developer in 2016. I've done remote work for agencies, worked for for startups and collaborated with talented people to create digital products for both business and consumer use. I always push boundaries and try to do something innovative and new. This has allowed me to learn various new things and create masterpieces that are unique. I'm quietly confident, naturally curious, and perpetually improving my chops.</p>
          </div>
        </div>
      </div>
</template>

<style>
/*  about section*/
section.is-primary .title span {
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
}

section.is-primary .title span:first-of-type {   
  animation: showup 7s infinite;
}
section.is-primary .title span:nth-of-type(2) {   
  animation: showup 7s infinite;
}
section.is-primary .title span:last-of-type {
  width:0px;
  animation: reveal 7s infinite;
}

section.is-primary .title span:last-of-type span {
  margin-left:-355px;
  animation: slidein 7s infinite;
}

@keyframes showup {
    0% {opacity:0;color:#ff7f50;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-100px;color:#ff7f50;}
    20% { margin-left:-50px; }
    35% { margin-left:10px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;color:#ff7f50;}
    20% {opacity:1;width:0px;}
    30% {width:275px;}
    80% {opacity:1;}
    100% {opacity:0;width:275px;}
}
/* animation ends */
.section.is-primary .title {
    color: #fff;
}
.section.is-primary .subtitle {
    color: #fff;
}
.section.is-primary .subtitle {
    font-weight: 300;
    line-height: 1.5;
}
.section.is-primary h1.ab-subt {
    color: #ccc;
}

/* Animations */
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
[data-aos="anim2"] {
  -webkit-transform: rotate(120deg);
          transform: rotate(120deg);
  opacity: 0;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
}
[data-aos="anim2"].aos-animate {
  -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
  opacity: 1;
}


</style>

