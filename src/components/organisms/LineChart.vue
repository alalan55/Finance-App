<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    label: { type: String },
    chartData: { type: Array },
    options: { type: Object },
  },
  data(){
    return{
      dados:[]
    }
  },
  mounted() {
    const dates = this.chartData.map((d) => d.date).reverse();
    const totals = this.chartData.map((d) => d.totals.valor_movimentacao).reverse();

    if(totals && this.options){

      this.renderChart(
        {
          labels: dates,
          datasets: [
            {
              label: this.label,
              data: totals,
            },
          ],
        },
        this.options
      );
    }
  },
  watch:{
    chartData(nv, ov){
      this.dados = nv
      console.log(nv, ov)
    }
  }
};
</script>