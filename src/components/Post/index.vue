<template>
  <div class="container post_container">
    <div
      v-if="post"
      class="top"
    >
      <div class="post_header">
        <h1>{{ post.title }}</h1>
        <div
          class="post_img"
          :style="{background: `url(${post.img})`}"
        ></div>
      </div>

      <div class="post_content">
        <div v-html="post.content"></div>
      </div>

      <div class="post_rating">
        Rating: <span>{{ post.rating }} / 5</span>
      </div>

    </div>
  </div>
</template>


<script>
// сразу скажу этот способ очень плохой, т.к. нам приходиться каждый раз делать запрос для каждого поста, хотя у нас уже есть весь список постов, который был загружен на главной странице, этот вариант только для демонстрации запроса одного поста в firebase
export default {
  computed: {
    post() {
      return this.$store.getters["posts/getPost"];
    }
  },
  created() {
    let id = this.$route.params.id;
    this.$store.dispatch("posts/getPost", id);
  },
  destroyed() {
    this.$store.commit("posts/clearPost");
  }
};
</script>

<style scoped>
</style>
