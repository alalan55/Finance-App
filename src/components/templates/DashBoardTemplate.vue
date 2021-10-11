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

      <div class="graph dashBoard"></div>

      <!-- PODE SER UM COMPONENTE SEPARADO -->
      <div class="infos-right infoRight">
        <ul>
          <li class="item entrada">
            <div class="title">
              <span>Entrada</span>
            </div>
            <div class="content">
              <div class="valor">
                <span>R$ 300,00</span>
              </div>
              <div class="data">
                <span>25/05/2021</span>
              </div>
            </div>
          </li>

          <li class="item saida">
            <div class="title">
              <span>Saída</span>
            </div>
            <div class="content">
              <div class="valor">
                <span>R$ 300,00</span>
              </div>
              <div class="data">
                <span>25/05/2021</span>
              </div>
            </div>
          </li>

          <li class="item entrada">
            <div class="title">
              <span>Entrada</span>
            </div>
            <div class="content">
              <div class="valor">
                <span>R$ 300,00</span>
              </div>
              <div class="data">
                <span>25/05/2021</span>
              </div>
            </div>
          </li>

          <li class="item saida">
            <div class="title">
              <span>Saída</span>
            </div>
            <div class="content">
              <div class="valor">
                <span>R$ 300,00</span>
              </div>
              <div class="data">
                <span>25/05/2021</span>
              </div>
            </div>
          </li>

          <li class="item entrada">
            <div class="title">
              <span>Entrada</span>
            </div>
            <div class="content">
              <div class="valor">
                <span>R$ 300,00</span>
              </div>
              <div class="data">
                <span>25/05/2021</span>
              </div>
            </div>
          </li>

          <li class="item saida">
            <div class="title">
              <span>Saída</span>
            </div>
            <div class="content">
              <div class="valor">
                <span>R$ 300,00</span>
              </div>
              <div class="data">
                <span>25/05/2021</span>
              </div>
            </div>
          </li>

          <li class="item saida">
            <div class="title">
              <span>Saída</span>
            </div>
            <div class="content">
              <div class="valor">
                <span>R$ 300,00</span>
              </div>
              <div class="data">
                <span>25/05/2021</span>
              </div>
            </div>
          </li>

          <li class="item saida">
            <div class="title">
              <span>Saída</span>
            </div>
            <div class="content">
              <div class="valor">
                <span>R$ 300,00</span>
              </div>
              <div class="data">
                <span>25/05/2021</span>
              </div>
            </div>
          </li>

          <li class="item saida">
            <div class="title">
              <span>Saída</span>
            </div>
            <div class="content">
              <div class="valor">
                <span>R$ 300,00</span>
              </div>
              <div class="data">
                <span>25/05/2021</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


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
    }
  }
}
.entrada {
  border-left: 7px solid rgb(60, 238, 60) !important;
  //  background:rgb(112, 226, 112) ;
}
.saida {
  border-left: 7px solid rgb(238, 72, 60) !important;
}
</style>