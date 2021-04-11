<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <pre>{{ post.published }}</pre>
    <div class="pre" v-html="post.body"></div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
.post {
  max-width: 900px;
  margin: 0 auto;
  word-wrap: break-word;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
  word-wrap: break-word;
  font-family: 'Montserrat', sans-serif;
  color: black !important;
  font-weight: 400 !important;
}
.pre {
  padding: 10px;
  white-space: pre-wrap;
}
.pre pre{
  max-width: 400px;
  color: rgb(248, 248, 248);
  background-color: rgb(48, 48, 48);
  padding: 10px;
  word-wrap: break-word;
  border-radius: 5px;
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