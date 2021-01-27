<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
  name: "Home",
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    const matchingNames = computed(() => {   //computed property
      return names.value.filter((name) => {  //using this computed property
        return name.includes(search.value)   //here to return an updated value
        })                                   //based on all the values
    })                                       //this is how we use computed properties inside setup() function
    return {
      names,
      search,
      matchingNames
    };
  },
};
</script>

