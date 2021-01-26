<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    console.log("setup");
    let name = "Mario";
    let age = 30;

    return {
      name,
      age
    };
  },
};
</script>
