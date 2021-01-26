<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++" >Add 1 to age</button>
    <!-- we can access directly setup() returned values with the click event
    or any event -->
    <input type="text" v-model="name">
    <!-- for accesing values from setup() don't need to add value after
      properties like name.value or age.value etc-->
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "Home",
  setup() {
    console.log("setup");
//Using Refs for Reactivity
//By default setup() values are not Reactive
//Using ref() we can make values reactive like
//Options API function data(){return{}}

    const name = ref("Mario") //v-model="name" is updating the "ref(value)" value
                              //not the "name". "name" is updating according to the
                              //return values of "ref()" into the "name" variable
                              //In "setup()", "this" token is "undefined"
    const age = ref(30)

const handleClick = () => {
  name.value = 'luigi'
  age.value = 35
}

    return {
      name,
      age,
      handleClick
    // in order to access all of the values of setup() function
    //all the values/properties should be returned
    };
  },
};
</script>

