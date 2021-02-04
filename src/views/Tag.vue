<template>
 <div class="tag home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="matchingTag" />
      <TagCloud  :posts="posts"/>
    </div>
    <div v-else><Spin/></div>
 </div>

</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import Spin from '../components/Spinner'
export default {
  components: { PostList, Spin, TagCloud },
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