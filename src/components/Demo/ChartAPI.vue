<template>
  <div class="small">
       <line-chart :chart-data="datacollection"></line-chart> 
       {{ this.fillData()}}
       <button @click="fillData()">Generate</button>
  </div>
</template>

<script>
  import LineChart from '@/charts/LineChart.js'
  import axios from 'axios'
  

  export default {
    name: 'Graph',
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null,
        caselist:[],
        datelist:[]      
      }
    },
    mounted() {
       this.renderChart(this.chartdata)
    },
    created () {

      axios.get('https://api.opencovid.ca/timeseries?stat=cases&loc=ON')
          .then(res => {
             const data = res.data
             var i;
          
             for(i=0;i<data.cases.length;i++){
                this.caselist.push(data.cases[i].cases)
                this.datelist.push(data.cases[i].date_report)
             }         
             
         })
        .catch(error => console.log(error)),

        this.datacollection.cases
        this.fillData()

    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: this.datelist,
          datasets: [
            {
              label: 'Covid Cases Ontario',
              backgroundColor: '#f87979',
              data: this.caselist
            }
          ]
        }
        
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
