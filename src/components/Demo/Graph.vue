<template>
  <div class="small">
       <line-chart :chart-data="datacollection"></line-chart>
       <button @click="fillData()">Randomize</button>
  </div>

</template>

<script>
  import LineChart from '@/charts/LineChart.js'

  export default {
    name: 'Graph',
    components: {
      LineChart
    },
    data () {
      return {
        datacollection:null,
        caselist:[],
        datelist:[]
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
