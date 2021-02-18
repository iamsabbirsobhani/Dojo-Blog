<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">handleClick</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';
export default {
  name: "Home",
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])


    const stopWatch = watch(search, () => {
                                        //Note: watch() & watchEffect()
      console.log('watch function ran') //difference between them is
                                        //watch() active after everytime fire the callback
    })                                  //watchEffect() active after initialize then fire everytime with callback.
                                        //It is important,
                                        //watchEffect() Fires Once Initially after ⭐⭐⭐
                                        //Inside the watchEffect Function we pass another callback function
                                        //And, that callback function fires everytime, when inside the callback function there's a change ⭐
                                        //for whatever properties we use(inside the callback function). ⭐
                                        
                                        
    //Here I am giving an example of watchEffect() when I was developing Live Chat apps for unsubscribing from realtime snapshot: It can be found inside "getCollection.js"
    //files from "Live-Chat" repositories
    watchEffect((onInvalidate) => {
      // unsub from previous collection when watcher is stopped (component unmounted)
      onInvalidate(() => unsub)
    } 
    // End of example                                   
                                        
                                    
    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const matchingNames = computed(() => {   //computed property
      return names.value.filter((name) => {  //using this computed property
        return name.includes(search.value)   //here to return an updated value
        })                                   //based on all the values
    })

    const handleClick = () => {
      stopWatch()                           //to stop them we can add them to a variable and by calling/invoking them they can stop
      stopEffect()
    }
    //this is how we use computed properties inside setup() function
    return {
      names,
      search,
      matchingNames
    };
  },
};
</script>

