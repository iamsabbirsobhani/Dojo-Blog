<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <pre>{{ post.published }}</pre>
    <p class="pre">{{ post.body }}</p>
    <button class="btn3" @click="handleDelete">delete post</button>
  </div>
  <div v-else>
    <Spin />
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spin from "../components/Spinner";
import { projectFirestore } from "../firebase/config";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  components: { Spin },
  setup(props) {
    const { post, error, load } = getPost(props.id);

    const router = useRouter();

    load();

    const handleDelete = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();

      router.push({ name: "Home" });
    };

    return {
      post,
      error,
      handleDelete,
    };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
.btn3 {
  margin: 10px auto;
  cursor: pointer;
  background-color: red;
}
pre {
  color: #c5c5c5;
  white-space: pre-line;
}
</style>