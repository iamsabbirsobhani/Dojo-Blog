<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { computed, ref, watch, watchEffect } from 'vue';
export default {
  components: { PostList },
  name: "Home",
  setup() {
    const posts = ref([
      {title: 'welcome to the blog', body: `Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo, nostrum quas blanditiis eveniet aut explicabo perspiciatis quis repellat ipsam ipsa nam placeat autem quidem quisquam modi distinctio repellendus. Minus nemo odit hic obcaecati distinctio illum delectus cumque, necessitatibus ipsam excepturi magnam eligendi aperiam harum nam quod quasi enim in vel sit incidunt debitis consequuntur voluptate doloribus similique! Labore ex vel iste explicabo nam dolore dolor tempora laboriosam, modi quibusdam? Fugit, cum. Quae recusandae ex natus vel optio perferendis nisi ullam, nulla sequi aut doloremque quos. Magni minus maiores quidem repellat incidunt. Culpa impedit dolorem voluptate soluta reiciendis tempore vero est harum nesciunt! Itaque eum corporis, accusamus laborum dignissimos nesciunt maxime molestiae cupiditate sint soluta eius architecto labore libero, numquam assumenda. Nulla, magni dolor nemo velit itaque voluptatum, qui odit repellat exercitationem expedita numquam pariatur architecto non ut, commodi amet rem maiores! Enim quam quia voluptates vel at ut placeat ad aspernatur eligendi commodi. Est aperiam illum nemo minima dolores unde laborum autem culpa doloremque, hic earum dolorem soluta, ipsa ipsum. Assumenda, fugiat porro suscipit qui repellat libero deserunt, nihil veritatis ducimus vero vel eos! Eligendi aliquam harum sed, deserunt iste voluptates veritatis, aperiam dolorum mollitia ratione tempora quidem porro nostrum vero? Sapiente quo perspiciatis aut aliquam modi, optio ratione natus iste nostrum suscipit fugiat qui expedita veniam explicabo et pariatur, maxime temporibus laboriosam rem deleniti! Voluptas distinctio ullam nulla iusto repellendus? Enim tempora aperiam voluptatibus laborum esse voluptas repudiandae commodi doloremque natus, obcaecati nihil possimus eaque mollitia cupiditate, corrupti voluptatem fuga laudantium at velit ut iusto odio sequi. Molestias, adipisci! Nemo saepe quaerat reiciendis reprehenderit, velit deserunt delectus atque accusantium error, tenetur dignissimos, exercitationem voluptates cupiditate voluptate. Voluptatem, porro explicabo amet harum eveniet nam. Mollitia quae molestias consequatur eaque. Tempora ipsum dolorem ipsam sunt repudiandae dolore officia iste ea. `, id: 1},
      {title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2}
    ])
    return {
      posts
    };
  },
};
</script>

