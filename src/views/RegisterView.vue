<template>
  <div>
    <RegisterForm />
    
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '../components/RegisterForm.vue'

export default {
  name: 'RegisterView',
  components: {RegisterForm},
  data() {
    return {};
  }
  
}
</script>