<template>
  <nav>
    <div class="logo" @click="goHome">
      <span>FINNANCE</span>
    </div>
    <div class="links">
      <ul>
        <router-link to="/entradas" class="link">entradas</router-link>
        <router-link to="/saidas" class="link">saidas</router-link>
        <li class="link" @click="showModal">movimentação</li>
        <li @click="logout" class="link">sair</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    showModal(){
      this.$emit('mostrarModal')
    },
    goHome(){
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;


  .logo{
    cursor: pointer;
      span{
          font-weight: 600;
          font-size: 1.3rem;
      }
  }

  .links {
    ul {
      display: flex;
      // border: 1px solid;
      .link {
        list-style: none;
        margin: 0 0.8rem;
        cursor: pointer;
        text-decoration: none;
        color: black;
      }
    }
  }
}
@media screen and (max-width:600px){
  .links{
    display: none;
  }
}
</style>