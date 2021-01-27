<template>
  <div class="home">
    <h1>Home</h1>
      <h2>Refs</h2>
      <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
      <button @click="updateNinjaOne">Update ninja</button>

      <h2>Reactive</h2>
      <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
      <button @click="updateNinjaTwo">Update ninja</button>
      <!-- ninjaTwo,ninjaOne is an object and name, age its property or key
      so, for accessing "name" key we should declare ninjaTwo.name or ninjaOne.name
      generally we do in JavaScript-->
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  name: "Home",
  setup() {
   const ninjaOne = ref({ name: 'mario', age: 30})
   const ninjaTwo = reactive({ name: 'luigi', age: 35 })

                                     //Note: ref() vs reactive()
   const nameOne = ref('mario')      //(a)we can use any values(primitive or reference type)
                                     //with ref()
   const nameTwo = reactive('luigi') //(b)we can't use "primitive values" with reactive
                                     //or "reactive()" loses its reactive power when it gets "primitive data type".
                                     //here 'luigi' is a String primitive date type
                                     //so we can't update this value or this
                                     //(c)reactive(primitive type) !== reacitve value
                                     //(d)reactive(reference type) === reactive value
                                     //One last feature is,
                                     //(d)we don't have to add ".value" extention to use reactive() data
                                     //example: for ref() we should use "ninjaOne.value.age"
                                     //(e)but for "reactive()" we can access value without ".value" extention
                                     //example: ninjaTwo.name, ninjaTwo.age
                                     //Otherwise both are Reactive values
   const updateNinjaOne = () => {
     ninjaOne.value.age = 40
   }

   const updateNinjaTwo = () => {
     ninjaTwo.age = 45
     nameTwo = 'mario'  //doesn't update value in the "<template>"
     nameTwo = reactive('mario') //it also doesn't update value in the "<template>" as well

   }

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      nameTwo
    };
  },
};
</script>

