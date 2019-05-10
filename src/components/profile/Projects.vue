<template>
    <div class="project-grid">  
          <div class="columns is-multiline is-mobile">
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop"> 
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front pro-1">
                            <h1 class="title is-size-4-desktop">
                                <div class="icon animated infinite pulse"><i class="fas fa-cog"></i></div>
                                <div class="text">Micro Services</div>
                             </h1>
                        </div>
                        <div class="back">
                            <p>
                            Code for different <b><u>services</u></b> can be written in different languages <b><u>as per our need</u></b>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop"> 
              <div class="flip-container">
                    <div class="flipper">
                        <div class="front pro-2">
                             <h1 class="title is-size-4-desktop">
                                <div class="icon animated infinite pulse"><i class="fas fa-shopping-cart"></i></div>
                                <div class="text">Ecommerce</div>
                             </h1>
                        </div>
                        <div class="back">
                            <P>
                            Potential buyers are more likely to make purchases when they can place their order instantly, rather than waiting for a regular store to open.
                            </P>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front pro-3">
                            <h1 class="title is-size-4-desktop">
                                <div class="icon animated infinite pulse"><i class="fas fa-smile"></i></div>
                                <div class="text">Behavior and Emotions</div>
                             </h1>
                        </div>
                        <div class="back">
                            <p>
                            Determine which behaviors require change. Evaluate where you are now. Regularly review your progress.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front pro-4">
                              <h1 class="title is-size-4-desktop">
                                <div class="icon animated infinite pulse"><i class="fas fa-medkit"></i></div>
                                <div class="text">Insurance sector</div>
                             </h1>
                        </div>
                        <div class="back">
                            <p>
                            Insurance is a means of protection from financial loss. Health, travel, super mediclaim, fixed benefits etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front pro-5">
                              <h1 class="title is-size-4-desktop">
                                <div class="icon animated infinite pulse"><i class="fas fa-life-ring"></i></div>
                                <div class="text">Health and Lifestyle</div>
                             </h1>
                        </div>
                        <div class="back">
                            <p>
                            Strive for progress, not perfection.<br>
                            <b><u>Healthy Living:</u></b> Tips, Facts, Ideas, and Tools for Success.
                            </P>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front pro-6">
                            <h1 class="title is-size-4-desktop">
                                <div class="icon animated infinite pulse"><i class="fas fa-book"></i></div>
                                <div class="text">Education</div>
                             </h1>
                        </div>
                        <div class="back">
                            <p>Education is not just about going to school and getting a degree.<br> It's about widening your knowledge and absorbing the truth about life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </div>
</template>

<style>
.project-grid{
    padding:30px 30px;
    background:#f0f0f0;
    border-radius:50% 5% 50% 5% !important;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
}
.flipper, .front, .back {
	width: 100%;
	height: 340px;
    position: relative;
    cursor:pointer;
    
}
.front {
    background-color: blue;
    background-position: center;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}
.back {
    width:0%;
    top:0;
    opacity: .98;
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: .6s cubic-bezier(.42,0,1,1);
    color:#fff;
}
.flipper:hover .back{
    width:100%;
    padding:10px;
    background-image: url("~@/assets/tex002.jpg");
    transform: rotateZ(370deg);
    tOP:-10px;
    /* border-top-left-radius:10px; */
    border-radius:10px;
}
/* card css */
.pro-1{
    background-image: url("~@/assets/pro-1.png");
}
.pro-2{
     background-image: url("~@/assets/pro-2.jpeg");
}
.pro-3{
     background-image: url("~@/assets/pro-3.png");
}
.pro-4{
    background-image: url("~@/assets/pro-4.jpg");
}
.pro-5{
     background-image: url("~@/assets/pro-5.jpg");
}
.pro-6{
     background-image: url("~@/assets/pro-6.jpg");
}
.front h1{
    height:100%;
    width:100%;
    background:#293347;
    background-image: url("~@/assets/tex002.jpg");
    opacity:.92;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff ;
    text-shadow:0px 3px 9px #000;
}
.front h1 div{
    display:block;
    position:absolute;
}
div.icon{
    margin-top:-50px;
    margin-left:-20px;
    font-size: 64px;
}
div.text{
    margin-top:30px;
}
</style>