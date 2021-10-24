<template>
  <div id="app">
    <NavBar v-if="isLogged" @mostrarModal="closeOrshow" :closeModal="closeModal"/>
    <Modal :show="showModal" @closedModal="closeOrshow" :showOrClose="showOrClose" :teste="teste"/>
    <router-view />
  </div>
</template>
<script>
import {NavBar, Modal} from '@/components/organisms'
export default {
  components:{
    NavBar,
    Modal
  },
  data(){
    return{
      showModal: false,
      closeModal: false,
      showOrClose: false,
      teste: ''
    }
  },
  methods:{
    closeOrshow(){
       this.showOrClose == true ? this.showOrClose = false : this.showOrClose = true
    }
  },
  computed:{
    isLogged(){
    return this.$store.getters.$loggedIn
    }
  }
}
</script>

<style lang="scss">
#app{
 // background: #F8F8FF ;
 position: relative;
 min-height: 100vh;
}

</style>
