import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
    const post  = ref(null)
    const error = ref(null)


    const load = async () => {
    try{
        const response = await projectFirestore.collection('posts').doc(id).get()

        post.value = { ...response.data(), id: response.id }

        if(!response.exists){
            throw Error('File can not find')
        }
    }catch(err){
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