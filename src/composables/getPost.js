import { ref } from 'vue'

const getPost = (id) => {
    const post  = ref(null)
    const error = ref(null)

    // const url = "https://my-json-server.typicode.com/iamsabbirsobhani/json-server-typicode/posts/"+id
    const url = "http://localhost:3000/posts/"+id

    const load = async () => {
    try{
        await new Promise(resolve => {
            setTimeout(resolve, 200);
          })
        let data = await fetch(url)
        if(!data.ok){
            throw Error('Data does not exist')
        }
        post.value = await data.json()
    }catch(err){
        console.log(err)
        error.value = err.message
    }
}

    return {
        post,
        error,
        load
    }
}

export default getPost