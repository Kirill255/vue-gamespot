<template>
  <div>
    <md-table>

      <md-table-row>
        <md-table-head>Title</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Rating</md-table-head>
        <md-table-head>Action</md-table-head>
      </md-table-row>

      <md-table-row
        v-for="(post, index) in posts"
        :key="index"
      >
        <md-table-cell>{{ post.title }}</md-table-cell>
        <md-table-cell>{{ post.desc }}</md-table-cell>
        <md-table-cell>{{ post.rating }}</md-table-cell>
        <md-table-cell>
          <div
            class="post_delete cursor_pointer"
            @click="deletePost(post.id)"
          >
            Delete
          </div>
        </md-table-cell>
      </md-table-row>

    </md-table>

    <!-- dialog confirm -->
    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Confirm delete?"
      md-content="Are you sure you want to delete this post? ( there is no turning back )"
      md-confirm-text="Yes, delete"
      md-cancel-text="No, do not delete it"
      @md-cancel="onCancel"
      @md-confirm="onConfirm"
    />

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      idDeletePost: null
    };
  },
  computed: {
    posts() {
      return this.$store.getters["admin/getAdminPosts"];
    }
  },
  methods: {
    onCancel() {
      this.active = false;
      this.idDeletePost = null;
    },
    onConfirm() {
      this.$store.dispatch("admin/deletePost", this.idDeletePost);
      this.active = false;
    },
    deletePost(id) {
      this.active = true;
      this.idDeletePost = id;
    }
  },
  created() {
    this.$store.dispatch("admin/getAdminPosts");
  }
};
</script>

<style scoped>
.cursor_pointer:hover {
  cursor: pointer;
}
</style>
