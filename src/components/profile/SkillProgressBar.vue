<template>
     <div class="container">
        <div class="columns pg-bar">
            <div class="column">
               <skill-pie-chart :data="chartData" :styles="myStyles" :options="options"></skill-pie-chart>
            </div>
            <div class="column">
              <div class="skill-progress-bars">
                <div class="pg-bar-wrapper">
                  <label class="has-text-white">PHP + Laravel + Symfony</label>
                  <progress class="progress is-link is-small" value="85" max="100" style="">85%</progress>
                </div>
                <div class="pg-bar-wrapper">
                  <label class="has-text-white">Node + Express</label>
                  <progress class="progress is-link is-small" value="65" max="100" style="">65%</progress>
                </div>
                <div class="pg-bar-wrapper">
                  <label class="has-text-white">Javascript + ES6</label>
                  <progress class="progress is-link is-small" value="65" max="100" style="">65%</progress>
                </div>
                <div class="pg-bar-wrapper">
                  <label class="has-text-white">Vue + React</label>
                  <progress class="progress is-link is-small" value="70" max="100" style="">70%</progress>
                </div>
                <div class="pg-bar-wrapper">
                  <label class="has-text-white">Bootstrap + Bulma + SASS</label>
                  <progress class="progress is-link is-small" value="80" max="100" style="">80%</progress>
                </div>
                <div class="pg-bar-wrapper">
                  <label class="has-text-white">SQL+ Mongo + Redis + Firebase </label>
                  <progress class="progress is-link is-small" value="65" max="100" style="">65%</progress>
                </div>
                <div class="pg-bar-wrapper">
                  <label class="has-text-white">Tooling + GIT + NPM + Webpack</label>
                  <progress class="progress is-link is-small" value="85" max="100" style="">85%</progress>
                </div>
              </div>
            </div>
        </div>
      </div>
</template>

<style>
.pg-bar .column{
    padding:20px 50px;
}
    /* bulma progress bar color */
progress {
  border: none;
  width: 400px;
  height: 60px;
  background: #ffffff !important;
}

progress {
  color: #555 !important;
  opacity: .9;
}

progress::-webkit-progress-value {
  background:#555 !important;
  opacity: .9;
}

progress::-moz-progress-bar {
  background: white !important;
}

progress::-moz-progress-value {
  background:#555 !important;
  opacity: .9;
}

progress::-webkit-progress-bar {
  background: white !important;
}
.skill-progress-bars{
  background: inherit;
}
.pg-bar-wrapper{
padding:7px 20px;
}
.pg-bar-wrapper label{
  text-align:left !important;
  display:block;
  margin-bottom:3px;
}
</style>

<script>

  import PieChart from '@/components/profile/PieChart.vue'

  export default {
  name: 'skillPB',
  components:{
    'skill-pie-chart':PieChart
  },
  data(){
      return {
        chartData: {
            labels: ["Backend", "Frontend", "Testing", "Tooling", "DevOps", "Management"],
            datasets: [
                {
                    label: "Skills",
                    backgroundColor: ["#3b10a0", "#a01122", "#dae5ef","#5fc669","#210f1d", "#4c3948"],
                    data: [45, 15, 10, 10, 15, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio:true,
            cutoutPercentage:45,
            legend: {
                display: true,
                position: "left",
                fullWidth: true,
                labels: {
                    boxWidth: 10,
                    fontSize: 17,
                    padding:42,
                    fontColor:'#fff',
                    fontFamily:'Quicksand'
                }
            },
            animation: {
                animateScale: true
            }
        }
    };
  },
  computed: {
    myStyles () {
      return {
        position: 'relative',
        height:'420px',
        width:'420px',
       
      }
    }
  }
}
</script>
