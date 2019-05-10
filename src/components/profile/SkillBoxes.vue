<template>
    <div class="container is-narrow">
        <div class="box">
          <div class="content">
            <div class="columns is-centered">
              <div class="column">
                <figure class="image animated infinite pulse"><img class="is-skill-icon" src="~@/assets/icon-tt.svg"></figure>
                <h1 class="title is-size-4 is-spaced">Laravel 5.4+</h1>
                <p>I, personally, Love laravel and it's official packages.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Things I enjoy doing:</p>
                <p>MVC, MVVM, APIs, Microservices </p>
                <p class="list-title has-text-primary has-text-weight-normal">Packages used:</p>
                <ul>
                  <li>Shoppingcart</li>
                  <li>Stripe</li>
                  <li>Socialite</li>
                  <li>Passport</li>
                  <li>Dusk</li>
                  <li>Horizon</li>
                  <li>Telescope</li>
                  <li>Laravel Mix(NPM)</li>
                </ul>
              </div>
              <div class="column">
                <figure class="image animated infinite pulse"><img class="is-skill-icon" src="~@/assets/icon-l.svg"></figure>
                <h1 class="title is-size-4 is-spaced">Tech and Tools</h1>
                <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p>HTML, CSS, JS, Pug, Blade, PHP, Node, Database, Sass</p>
                <p class="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                <ul>
                  <li>Sublime/MS Code</li>
                  <li>Bitbucket/Github</li>
                  <li>JMeter/Postman</li>
                  <li>Terminal</li>
                </ul>
                <p class="list-title has-text-primary has-text-weight-normal">Hosting:</p>
                <ul>
                  <li>AWS</li>
                  <li>Digital Ocean</li>
                  <li>Cpanel</li>
                </ul>
              </div>
              <div class="column column-last"> 
                <figure class="image animated infinite pulse"><img class="is-skill-icon" src="~@/assets/icon-mentor.svg"></figure>
                <h1 class="title is-size-4 is-spaced">Mentor</h1>
                <p>I genuinely care about people, and love sharing what I know.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Where I teach:</p>
                <p>Youtube &amp; Offline</p>
                <p class="list-title has-text-primary has-text-weight-normal">Mentor Stats:</p>
                <ul>
                  <li>3 years experience</li>
                  <li>10+ short courses</li>
                  <li>15+ workshops</li>
                  <li>4k+ students</li>
                  <li>100+ mentor sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<style>
.section.skills .box{
  /* padding:0px !important; */
  /* background-image: url("/tex011.jpg"); */
}
.section.skills .box .content .columns .column figure.image img.is-skill-icon {
    height: 48px;
    width: auto;
}
.content figure img {
    display: inline-block;
}
.section.skills .box .content .columns .column {
    padding: 70px 45px;
   
}
.section.skills .box .content .columns .column p.list-title {
    margin-top: 50px;
    margin-bottom: 8px;
    color:#8c43ff !important;
}
.section.skills .box .content .columns .column ul {
    list-style: none;
    margin-left: 0;
    margin-top: 0;
}
.content li+li {
    margin-top: 0.25em;
}
.section.skills .box .content .columns .column {
    border-bottom: 0px solid #E6ECF8;
    border-right: 1px solid #E6ECF8;
    padding: 60px 35px;
}
.section.skills .box .content .columns .column-last{
  border-right:none;
}
</style>
