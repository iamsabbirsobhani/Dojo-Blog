<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spin /></div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts";
import Spin from "../components/Spinner.vue";

export default {
  components: { PostList, Spin, TagCloud },
  name: "Home",
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return {
      posts,
      error,
    };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}

@media (max-width: 425px) {
  .layout {
    display: flex;
    /* grid-template-columns: 3fr;
    gap: 20px; */
    flex-direction: column;
  }
  #app > div > div > div.tag-cloud{
    order: 0;
  }
  #app > div > div > div.post-list{
    order: 1;
  }
  header h1 {
    color: #dfdfdf;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
  }
  header a {
    font-size: 13px;
  }
}
</style>
