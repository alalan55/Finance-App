<template>
  <div class="home">
    <NavBar/>
    <DashBoardTemplate/>

  </div>
</template>

<script>
import {NavBar} from '@/components/organisms'
import {DashBoardTemplate} from '@/components/templates'
export default {
  name: "Home",
  components: {
    NavBar,
    DashBoardTemplate
  }
};
</script>
