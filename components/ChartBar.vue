<template>
  <div class="single-chart episode-per-season" >
    <bar-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"
      />
  </div>
</template>

<script>

import BarChart from './charts-shape/ChartBar.vue'
import {getListAllEpisodes} from '../repository/apiRequests'

export default {
  name: 'BarChartContainer',

  components: { BarChart },
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
          backgroundColor: '#000180',
          data: this.data,
        }
      ]
    }

    this.options = {
      scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
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
