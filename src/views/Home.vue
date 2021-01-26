<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    console.log("setup");
    let name = "Mario";
    let age = 30;
//we can perform any JavaScript coding into setup() function
//we can create function, variable, object, import function
//from other component by importing them etc..
//we can perform Option API as well as Composition API simulteneously
//Option API's generally think to for simple project
//Composition API think to complex and large project
//But both are useful under the circumstances

const handleClick = () => {
  console.log('you clicked me')
}

//we can return{} the values inside the setup() function
//if we want to make them accessible in the "<template>"

//This is the very basic of how to use the Compositon API
//We make a setup function or setup if you prefer to call it that way
//That alwasy runs first before created before mounted etc.
//And inside this setup(), we can run any JavaScript
//Such as create values or create functions
//Then at the end down(line 38) here in return{}, we just return whatever values
//or functions we want to make available to the component <template>.
    return {
      name,
      age,
      handleClick
    };
  },
};
</script>

