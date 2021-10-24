<template>
  <div class="dash-board">
    <div class="container-dashboard">
      <div class="infos-top ultimaEntrada">
        <div class="title">
          <span>Última entrada</span>
        </div>
        <div class="content">
          <div class="valor">
            <span>valor</span>
            <span class="val">R$ 500,00</span>
          </div>
          <div class="data">
            <span>data</span>
            <span class="date">25/05/2021</span>
          </div>
        </div>
      </div>

      <div class="infos-top ultimaSaida">
        <div class="title">
          <span>Última saída</span>
        </div>
        <div class="content">
          <div class="valor">
            <span>valor</span>
            <span class="val">R$ 500,00</span>
          </div>
          <div class="data">
            <span>data</span>
            <span class="date">25/05/2021</span>
          </div>
        </div>
      </div>

      <div class="infos-top total">
        <div class="title">
          <span>Total</span>
        </div>
        <div class="content">
          <div class="valor">
            <span class="val">R$ 500,00</span>
          </div>
        </div>
      </div>

      <div class="graph dashBoard">
        <div class="block">
          <div class="dash" v-if="arrEntradas.length">
            <LineChart
              :chartData="arrEntradas"
              :options="chartOptions"
              label="Entradas"
            />
          </div>
        </div>
      </div>

      <!-- PODE SER UM COMPONENTE SEPARADO -->
      <ListaEntradaSaida :list="financas" class="infos-right infoRight" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { ListaEntradaSaida, LineChart } from "@/components/organisms";
export default {
  data() {
    return {
      financas: [],
      arrEntradas: [],
      arrSaidas: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  components: {
    ListaEntradaSaida,
    LineChart,
  },
  created() {
    this.initTodasFinancas();
  },
  methods: {
    async initTodasFinancas() {
      await this.$store.dispatch("getAllFinances");
      this.financas = await this.$store.getters.$allFinances;

      this.financas.forEach((d) => {
        const date = moment(d.data_movimentacao).format("MM/DD");

        if (d.tipo_movimentacao == "entrada") {
          this.arrEntradas.push({ date, totals: d });
        } else {
          this.arrSaidas.push({ date, totals: d });
        }
        // console.log(this.arrEntradas)
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dash-board {
  height: calc(100vh - 70px);
  padding: 2rem 1.5rem;

  .container-dashboard {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(1fr, 4);
    grid-template-columns: repeat(1fr, 3);
    gap: 1.5rem;
    grid-template-areas:
      "ultimaEntrada ultimaSaida total"
      "dashBoard dashBoard infoRight"
      "dashBoard dashBoard infoRight"
      "dashBoard dashBoard infoRight";

    .ultimaEntrada {
      grid-area: ultimaEntrada;
      overflow: hidden;
      .title {
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: -5px;
      }
      .content {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .valor {
          display: flex;
          flex-direction: column;
          .val {
            font-size: 1.5rem;
          }
        }
        .data {
          display: flex;
          flex-direction: column;
          .date {
            font-size: 1.5rem;
          }
        }
      }
    }
    .ultimaSaida {
      grid-area: ultimaSaida;

      .title {
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: -5px;
      }
      .content {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .valor {
          display: flex;
          flex-direction: column;
          .val {
            font-size: 1.5rem;
          }
        }
        .data {
          display: flex;
          flex-direction: column;
          .date {
            font-size: 1.5rem;
          }
        }
      }
    }
    .total {
      grid-area: total;

      .title {
        font-size: 1.3rem;
        font-weight: 500;
      }
      .content {
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;

        .valor {
          display: flex;
          flex-direction: column;
          .val {
            font-size: 1.5rem;
          }
        }
        .data {
          display: flex;
          flex-direction: column;
          .date {
            font-size: 1.5rem;
          }
        }
      }
    }
    .dashBoard {
      grid-area: dashBoard;
      // width: 100%;
      // position: relative;
      // margin: auto;
      // height: 80vh;
      // width: 80vw;
    }
    .infoRight {
      grid-area: infoRight;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 20px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgb(214, 217, 218);
        border-radius: 20px;
      }

      ul {
        .item {
          border: 1px solid #bebdbd;
          border-radius: 10px;
          padding: 0.5rem;
          margin: 0.5rem 0;
          .title {
            margin-bottom: 0.3rem;
            span {
              font-weight: 300;
            }
          }
          .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .valor {
              span {
                font-weight: 500;
              }
              .data {
                span {
                  font-weight: 500;
                }
              }
            }
          }
        }
      }
    }

    & > div {
      border: 1px solid #bebdbd;
      border-radius: 10px;
      padding: 0.5rem;
      background: white;
    }
  }
}

@media screen and (max-width: 850px) {
  .dash-board {
    min-height: calc(100vh - 70px);
    .container-dashboard {
      width: 100%;
     // border: 1px solid red !important;
      grid-template-rows: repeat(1fr, 5);
      grid-template-columns: repeat(1fr, 1);
      gap: 1.5rem;
      grid-template-areas:
        // "ultimaEntrada ultimaEntrada ultimaEntrada"
        // "ultimaSaida ultimaSaida ultimaSaida"
        // "total total total "
        // "dashBoard dashBoard dashBoard"
        // "infoRight infoRight infoRight"

        "ultimaEntrada ultimaEntrada"
        "ultimaSaida ultimaSaida"
        "total total"
        "dashBoard dashBoard"
        "infoRight infoRight" !important;

      .ultimaEntrada {
        height: 8rem;
        .title {
          span {
            font-size: 1rem;
          }
        }
        .content {
          .valor {
            .val {
              font-size: 1.2rem;
            }
          }
          .data {
            .date {
              font-size: 1.2rem;
            }
          }
        }
      }
      .ultimaSaida {
        height: 8rem;
        .title {
          span {
            font-size: 1rem;
          }
        }
        .content {
          .valor {
            .val {
              font-size: 1.2rem;
            }
          }
          .data {
            .date {
              font-size: 1.2rem;
            }
          }
        }
      }
      .total {
        height: 8rem;
      }
      .dashBoard {
        // height: 80vh;
        // width: 90vw;
      }
      .infoRight {
        height: 80vh;
      }
    }
  }
}
</style>