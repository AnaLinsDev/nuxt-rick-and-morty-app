<template>
  <div class="single-chart episode-per-season" >
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"
      />
  </div>
</template>

<script>

import LineChart from './charts-shape/ChartLine.vue'
import {getListAllEpisodes} from '../repository/apiRequests'

export default {
  name: 'LineChartContainer',

  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options: null,

    labels: ['S01', 'S02', 'S03', 'S04', 'S05'],
    data: [0, 0, 0, 0, 0],

  }),

  async mounted () {
    this.loaded = false
    try {

      let {userlist} = []
      
      await getListAllEpisodes()
          .then(resp => userlist = {resp})
          .catch(error => alert(error))

      
      await userlist.resp.forEach(elem => {
        let aux = elem.episode.split('E')[0]
        this.data[this.labels.indexOf(aux)]++
        console.log(this.data)
      });

      this.chartdata = {
      labels: this.labels,
      datasets: [
        {
          label: 'Episodes / Season',
          backgroundColor: '#f87979',
          data: this.data,
          borderColor: 'rgb(0, 0, 0)',
          fill: false,
        }
      ]
    }

    this.options = {
      scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min :0
            }
          }]
          }
    }


      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
