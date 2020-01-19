<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'

export default {
  name: 'HelloWorld',
  components: {
    'ninjas': Ninjas
  },
  data() {
    return {
      title: 'Ninja App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
