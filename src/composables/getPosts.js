import { ref } from "vue";

const getPosts = () => {

    const posts = ref([]);
    const error = ref(null);

    const url = "https://my-json-server.typicode.com/iamsabbirsobhani/json-server-typicode/posts"
    // const url = "http://localhost:3000/posts"

    const load = async () => {
      try {
        await new Promise(resolve => {
          setTimeout(resolve, 2000);
        })
        let data = await fetch(url);
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
    }

    return {posts, error, load}
}

export default getPosts