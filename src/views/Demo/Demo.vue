<template>

<div class="container">
  <BootStrap></BootStrap>
  <br>
  <ChartAPI></ChartAPI>
  <br> 
  <div class="small">
       <line-chart :chart-data="datacollection"></line-chart>
       <button @click="fillData()">Randomize</button>
  </div>

</div>


</template>

<script>
  import LineChart from '@/charts/LineChart.js'
  import ChartAPI from '@/components/Demo/LineChart.vue'
  import BootStrap from '@/components/Demo/BootStrap.vue'


  export default {
    components: {
      LineChart,
      ChartAPI,
      BootStrap
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
