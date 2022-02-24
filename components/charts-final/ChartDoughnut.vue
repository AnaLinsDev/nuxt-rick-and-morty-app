<template>
  <div class="single-chart episode-per-season" >
    <doughnut-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"
      />
  </div>
</template>

<script>

import DoughnutChart from '../charts-shape/ChartDoughnut.vue'
import {getListAllEpisodes} from '../../repository/apiRequests'

export default {
  name: 'DoughnutChartContainer',

  components: { DoughnutChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options: null,

    labels: ['S01', 'S02', 'S03', 'S04', 'S05'],
    data: [0, 0, 0, 0, 0],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(154, 22, 235)',
      'rgb(025, 205, 86)'
    ],

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
          backgroundColor: this.backgroundColor 
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