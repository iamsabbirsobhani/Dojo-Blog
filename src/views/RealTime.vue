<template>
  <h1>RealTime</h1>
  <div v-for="post in posts" :key="post">
      <h4>{{ post.title }}</h4>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config'
import { ref } from 'vue'
export default {
    setup(){
        const posts = ref([])

        projectFirestore.collection('posts')
            .orderBy('id')
            .onSnapshot((snap) => {
                let docs = snap.docs.map(doc => {
                    console.log(doc.data())
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                posts.value = docs
            })
            return { posts }
    }
}
</script>

<style>

</style>