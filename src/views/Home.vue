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
    })                                  //watchEffect() active after initialize then fire everytime with callback
                                        //everytime watchEffect() run twice once with the given value and two without the value

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

