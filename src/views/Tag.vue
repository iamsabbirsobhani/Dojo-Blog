<template>
 <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="matchingTag" />
    </div>
    <div v-else><Spin/></div>
 </div>

</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Spin from '../components/Spinner'
export default {
  components: { PostList, Spin },
    setup(){
        const { posts,  error, load} = getPosts()
        const route = useRoute()

        load()

    const matchingTag = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(route.params.tag)
        })
    })

    return{
        matchingTag,
        error,
        posts
    }

    }
}
</script>

<style>

</style>