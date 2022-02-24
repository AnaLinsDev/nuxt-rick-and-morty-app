<template>
  <div>
    <h1> Types of Charts  to Episodes/Season</h1>
    <div class="container dashboard" >
        <ChartBar />
        <ChartPie />
        <ChartLine />
        <ChartDoughnut />    
    </div>
  </div>
</template>

<script>
import ChartDoughnut from '@/components/charts-final/ChartDoughnut.vue'
import ChartBar from '@/components/charts-final/ChartBar.vue'
import ChartLine from '@/components/charts-final/ChartLine.vue'
import ChartPie from '@/components/charts-final/ChartPie.vue'

export default {
components: { 
  ChartDoughnut, 
  ChartPie, 
  ChartBar, 
  ChartLine 
  }
}

</script>


<style >
  .container .dashboard{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .single-chart {
    background-color: rgb(255, 254, 254);
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    width: 450px;
    height: auto;
  }
</style>