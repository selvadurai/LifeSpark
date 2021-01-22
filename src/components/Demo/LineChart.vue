<script>
  import { Line } from 'vue-chartjs'
  import axios from 'axios';

  export default {
    extends: Line,
    data () {
      return {
         caselist:[],
         datelist:[],
        chartData: {
          labels: '',
          datasets: [
            {
              label: 'Line Chart',
              data: '',
              fill: false,
              borderColor: '#2554FF',
              backgroundColor: '#2554FF',
              borderWidth: 1
            }
          ],

      }
      }
    },
    async created () {

      axios.get('https://api.opencovid.ca/timeseries?stat=cases&loc=ON')
          .then(res => {
             const data = res.data
             var i;
          
             for(i=0;i<data.cases.length;i++){
                this.caselist.push(data.cases[i].cases)
                this.datelist.push(data.cases[i].date_report)
             }         
             console.log(this.chartData.labels) 
              console.log(this.chartData.datasets[data])  
              
              
          this.chartData= {
             labels: this.datelist,
             datasets: [
               {
              label: 'Covid-19',
              data: this.caselist,
              fill: false,
              borderColor: '#2554FF',
              backgroundColor: '#2554FF',
              borderWidth: 1
               }
             ]
          }
            
          this.renderChart(this.chartData, this.options)
         })
        .catch(error => console.log(error))
    
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>