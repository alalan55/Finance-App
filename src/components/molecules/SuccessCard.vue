<template>
  <div class="content-sucess">
    <div class="text">
      <span>Movimentação inserida com sucesso</span>
    </div>
    <div class="icon">
      <i class="far fa-check-circle"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content-sucess {
  color: rgb(64, 216, 64);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text {
       margin: 1rem 0;
    span {
      font-size: 1.1rem;
    }
  }

  .icon {
    margin: 1rem 0;
    i {
      font-size: 2.5rem;
    }
  }
}
</style>