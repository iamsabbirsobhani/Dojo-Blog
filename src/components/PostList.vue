<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post">
          <SinglePost :post="post"/>
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'
export default {
    components: { SinglePost },
    props: ['posts'],
    setup(props){
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
    },
    mounted() {
        console.log('mounted using mounted()') //we can use Option API's life cycle hooks as well
    }

}
</script>

<style>

</style>