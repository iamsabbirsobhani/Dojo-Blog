<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <!-- ref is for accessing ref() from setup -->
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "Home",
  setup() {
    console.log("setup");
//Refs
    const p = ref(null) //getting reference of <p>
                        //cant use before return{} the value
    console.log(p, p.value) //it will be 'null'
                        //because it is not returned{} yet

    let name = "Mario";
    let age = 30;

const handleClick = () => {
  console.log(p, p.value)
  p.value.classList.add("test")
  p.value.textContent = 'Hello, ninjas'
  //we can perform regular JS using ref()
  //but not before return{} performed
  //handleClick is performing after click happened and return{} happended as well
}

    return {
      name,
      age,
      handleClick,
      p
    };
  },
};
</script>

