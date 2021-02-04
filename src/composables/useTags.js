import { ref } from 'vue'

const useTags = (posts) => {
    const tags = ref([])
    const set = new Set()

    posts.forEach(post => {
        post.tags.forEach(tag => {
            set.add(tag)
        })
    });

    tags.value = [...set] //spread syntax
                          //It  gets the set and it takes all of the
    return { tags }       //elements and spreads them out into this
}                         //So now we no longer have a set
                          //but we have all the individual elements from
export default useTags    //that set inside the array