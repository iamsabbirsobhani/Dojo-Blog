import { ref } from "vue";
import { projectFirestore } from '../firebase/config'

const getPosts = () => {

    const posts = ref([]);
    const error = ref(null);

    // const url = "https://my-json-server.typicode.com/iamsabbirsobhani/json-server-typicode/posts"
    // const url = "http://localhost:3000/posts"

    const load = async () => {
      try {
      //Getting data using Fetch API
        // let data = await fetch(url);
        // if (!data.ok) {
        //   throw Error("no data available");
        // }
        // let res = await data.json();
        // console.log(res);
        // posts.value = res;

        //Getting data using Firebase
        const res = await projectFirestore.collection('posts').get()

        posts.value = res.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })

      } catch (err) {
        error.value = err.message;
        // console.log(error.value);
      }
    }

    return {posts, error, load}
}

export default getPosts