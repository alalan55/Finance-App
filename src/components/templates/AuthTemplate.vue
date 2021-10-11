<template>
  <div class="auth-template">
    <div class="container-login">
      <div class="lado-esquerdo">
        <h1>Olá</h1>
        <span>Bem-vindo de volta</span>
      </div>
      <div class="lado-direito">
        <form action="">
          <label>
            Insira seu e-mail
            <div class="input">
              <input
                type="text"
                placeholder="example@louis.com"
                v-model="email"
              />
              <i class="far fa-envelope-open"></i>
            </div>
          </label>
          <label>
            Insira sua senha
            <div class="input">
              <input type="password" v-model="password" />
              <i class="fas fa-unlock-alt"></i>
            </div>
          </label>
          <div class="btn-entrar" @click="submit">
            <span>Entrar</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      let obj = {
        email: this.email,
        password: this.password,
      };
      let req = await this.$store.dispatch("login", obj);
      if (req.token) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-template {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-login {
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    width: 60vw;
    // overflow: hidden;

    & > div {
      flex: 1 1 400px;
      width: 100%;
    }

    .lado-esquerdo {
      // overflow: hidden;
      // background: url(https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) no-repeat;
      // background-position: center;
      // background-size: cover;
      // filter: blur(5px);
      // background: black;
      //   background-color: #000000;
      //   background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .lado-direito {
      display: flex;
      align-items: center;
      justify-content: center;
      form {
        width: 100%;
        // border: 1px solid red;
        display: flex;
        flex-direction: column;

        label {
          display: flex;
          flex-direction: column;
          font-weight: 500;

          .input {
            position: relative;
            width: 100%;
            border: 1px solid #bebdbd;
            border-radius: 10px;
            margin: 2rem 0;

            input {
              width: 100%;
              padding: 1rem 0 1rem 3rem;
              border: 10px solid;
              background: none;
              border: none;

              &:focus {
                outline: none;
                background: none;
              }
            }
            i {
              position: absolute;
              top: 17px;
              left: 15px;
            }
          }
        }
        .btn-entrar {
          span {
            border: 1px solid #bebdbd;
            padding: 0.5rem 1.5rem;
            border-radius: 10px;
            color: #bebdbd;
            cursor: pointer;
            transition: 0.2s ease-in;

            &:hover {
              background: #bebdbd;
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>