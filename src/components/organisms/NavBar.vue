<template>
  <nav>
    <div class="logo">
      <span>FINNANCE</span>
    </div>
    <div class="links">
      <ul>
        <li>entradas</li>
        <li>saidas</li>
        <li>movimentação</li>
        <li @click="logout">sair</li>
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
  },
};
</script>

<style lang="scss" scoped>
nav {
  // border: 1px solid;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;

  .logo{
      span{
          font-weight: 600;
          font-size: 1.3rem;
      }
  }

  .links {
    ul {
      display: flex;
      // border: 1px solid;
      li {
        list-style: none;
        margin: 0 0.8rem;
        cursor: pointer;
      }
    }
  }
}
</style>