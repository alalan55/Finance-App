<template>
  <div class="infos-right infoRight">
    <ul>
      <li
        class="item"
        :class="[item.tipo_movimentacao == 'entrada' ? 'entrada' : 'saida']"
        v-for="item in list"
        :key="item.id"
      >
        <div class="title">
          <span>{{ $inicialMaiuscula(item.tipo_movimentacao) }}</span>
        </div>
        <div class="content">
          <div class="valor">
            <span>{{
              item.valor_movimentacao.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }}</span>
          </div>
          <div class="data">
            <span>{{ $dateFormat(item.data_movimentacao) }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      isEntrada: false,
    };
  },
  props: {
    list: { type: Array },
  },
  methods: {
    $dateFormat(val) {
      return moment(val).format("DD/MM/yyyy");
    },
    $inicialMaiuscula(e) {
      let val = e[0].toUpperCase() + e.substr(1);
      return val;
    },
  },
  computed: {
    $ehEntrada() {
      console.log(this.list.tipo_movimentacao);
      return this.list.tipo_movimentacao == "entrada";
    },
  },
};
</script>

<style lang="scss" scoped>
.infoRight {
  overflow-y: auto;
  //border: 1px solid blue;
  height: 75vh;
  //height: 100%;

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

@media screen and (max-width: 850px) {
  .infoRight {
    min-height: 80vh;
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