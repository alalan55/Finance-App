<template>
  <div class="modal" v-if="showModal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-if="!success">
          <div class="error-message" v-if="error">
            <div class="text-error">
              <span>Ops, problemas para registrar movimentação</span>
            </div>
          </div>

          <div class="btn-close" @click="closeModal">
            <i class="far fa-window-close"></i>
          </div>
          <div class="form">
            <div class="title-form">
              <span>Insira as informações abaixo</span>
            </div>

            <form>
              <div class="titulo">
                <span class="title">Titulo da movimentação</span>
                <input type="text" v-model="tituloMovimentacao" />
              </div>
              <div class="select">
                <span class="title">Tipo da movimentação</span>
                <select v-model="tipoMovimentacao">
                  <option disabled>Opções</option>
                  <option value="entrada">Entrada</option>
                  <option value="saida">Saída</option>
                </select>
              </div>
              <div class="descricao">
                <span class="title">Descrição da apresentação</span>
                <textarea
                  cols="30"
                  rows="10"
                  v-model="descricaoMovimentacao"
                ></textarea>
              </div>

              <div class="data">
                <span class="title">Data da movimentação</span>
                <input type="date" v-model="dataMovimentacao" />
              </div>
              <div class="valor">
                <span class="title">Valor damovimentação</span>
                <input type="number" v-model="valorMovimentacao" />
              </div>
              <div class="btn" @click="cadastarMovimentacao">
                <span>Cadastrar</span>
              </div>
            </form>
          </div>
        </div>

        <div class="modal-container" v-if="success">
          <SuccessCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SuccessCard } from "@/components/molecules";
export default {
  data() {
    return {
      showModal: false,
      tipoMovimentacao: "",
      dataMovimentacao: "",
      valorMovimentacao: 0,
      descricaoMovimentacao: "",
      tituloMovimentacao: "",
      success: false,
      error: false,
    };
  },
  components: {
    SuccessCard,
  },
  props: {
    showOrClose: { type: Boolean },
  },
  methods: {
    closeModal() {
      this.$emit("closedModal");
    },
    async cadastarMovimentacao() {
      const form = {
        tipoMovimentacao: this.tipoMovimentacao,
        dataMovimentacao: this.dataMovimentacao,
        valorMovimentacao: +this.valorMovimentacao,
        descricaoMovimentacao: this.descricaoMovimentacao,
        tituloMovimentacao: this.tituloMovimentacao,
      };
      let contnet = JSON.stringify(form);

      try {
        let req = await fetch(`${process.env.VUE_APP_ROUTE}/movimentation`, {
          method: "POST",
          // Authorization: `bearer ${localStorage.getItem('token')}`,
          headers: new Headers({
            Authorization: `bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          }),
          body: contnet,
        });

        if (req.status == 200) {
          this.success = true;

          this.resetForm();

          setTimeout(() => {
            this.success = false;
          }, 3000);
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        }
      } catch (error) {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
        console.error(error);
      }
    },
    resetForm() {
      (this.tipoMovimentacao = ""),
        (this.dataMovimentacao = ""),
        (this.valorMovimentacao = 0),
        (this.descricaoMovimentacao = ""),
        (this.tituloMovimentacao = "");
    },
  },
  watch: {
    showOrClose(nv) {
      this.showModal = nv;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;

    .modal-wrapper {
      //   top: 50%; /* position the top  edge of the element at the middle of the parent */
      //   left: 50%; /* position the left edge of the element at the middle of the parent */

      //   transform: translate(-50%, -50%);
      //   z-index: 10;
      display: table-cell;
      vertical-align: middle;

      height: 100%;

      .modal-container {
        width: 400px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        transition: all 0.3s ease;
        position: relative;

        .error-message {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          height: 50px;
          z-index: 10;
          background: rgb(240, 88, 88);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-close {
          position: absolute;
          top: 20px;
          right: 15px;
          cursor: pointer;
        }

        .form {
          .title-form span {
            font-weight: 500;
            font-size: 1.2rem;
          }
          form {
            margin-top: 0.6rem;
            width: 100%;

            & > div {
              display: flex;
              flex-direction: column;

              input {
                border-radius: 15px;
                border: 1px solid #bebdbd;
                padding: 0.2rem 0.5rem;

                &:focus {
                  outline: none;
                }
              }
              select {
                border-radius: 15px;
                border: 1px solid #bebdbd;
                padding: 0.2rem 0.5rem;
              }
              textarea {
                border-radius: 15px;
                border: 1px solid #bebdbd;
                padding: 0.5rem 0.5rem;

                &:focus {
                  outline: none;
                }
              }
            }
            .descricao {
              textarea {
                max-width: 100%;
                min-width: 100%;
              }
            }
            .title {
              padding: 0.2rem 0;
            }

            .btn {
              margin-top: 0.5rem;
              border-radius: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgb(64, 216, 64);
              color: white;
              cursor: pointer;
              padding: 0.3rem 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .modal-container {
      width: 300px !important;
    }
  }
}
</style>