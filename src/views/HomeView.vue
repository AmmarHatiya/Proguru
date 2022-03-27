<template>
  <div class="home">
    <BootstrapCard />
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import BootstrapCard from '../components/BootstrapCard.vue'

export default {
  name: 'HomeView',
  components:{
    BootstrapCard
  }
  //components: {
  //  HelloWorld
  //}
}
</script>
