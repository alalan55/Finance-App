import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.getItem('user') || {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    USUARIO_LOAGDO(state, user){
      state.user = user
    },
    RETORNAR_TOKEN(state, token){
      state.token = token
    },
    APAGAR_TOKEN(state){
      state.token = null
    }
  },
  actions: {
    async login(context, usuario){
      try {

        let options ={
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        }

        let req = await fetch(`${process.env.VUE_APP_ROUTE}/auth`, options)
        let res = await req.json()
        
        localStorage.setItem('user', res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('expires_at', res.expires_at)

        context.commit('USUARIO_LOAGDO', res)
        context.commit('RETORNAR_TOKEN', res.token)

        return res
      } catch (error) {
          console.error(error)
          return error
      }
    },
    async logout(context){
      if(context.getters.$loggedIn){

        try {
          let req = await fetch(`${process.env.VUE_APP_ROUTE}/auth`,{
            method: 'DELETE',
            Authorization: localStorage.getItem('token')
          })
          
          
          if(req.status == 200){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('expires_at')
            context.commit('APAGAR_TOKEN')
          }
  
        } catch (error) {
          console.error(error)
        }


      }
    }
  },
  getters:{
    $loggedIn(state) {
      return state.token != null
    },
  }
});
