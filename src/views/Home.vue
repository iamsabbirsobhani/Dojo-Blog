<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { computed, ref, watch, watchEffect } from "vue";
export default {
  components: { PostList },
  name: "Home",
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const showPosts = ref(true);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("no data available");
        }
        let res = await data.json();
        console.log(res);
        posts.value = res;
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    load();

    return {
      posts,
      error,
      showPosts,
    };
  },
};
</script>

