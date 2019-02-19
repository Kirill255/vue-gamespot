<template>
  <div class="dashboard_form">
    <h1>Add posts</h1>
    <form @submit.prevent="submitHandler">

      <div
        class="input_field"
        :class="{invalid: $v.formdata.title.$error}"
      >
        <label>Title</label>
        <input
          type="text"
          @blur="$v.formdata.title.$touch()"
          v-model="formdata.title"
        >
        <p
          v-if="$v.formdata.title.$error"
          class="error_label"
        >
          This input is required
        </p>
      </div>

      <div
        class="input_field"
        :class="{invalid: $v.formdata.desc.$error}"
      >
        <label>Description</label>
        <input
          type="text"
          @blur="$v.formdata.desc.$touch()"
          v-model="formdata.desc"
        >
        <p
          v-if="$v.formdata.desc.$error"
          class="error_label"
        >
          This input is required
        </p>
        <p
          v-if="!$v.formdata.desc.maxLength"
          class="error_label"
        >
          Must not be greater than {{
          $v.formdata.desc.$params.maxLength.max
          }} characters
        </p>
      </div>

      <div class="input_field">
        <wysiwyg v-model="formdata.content" />
      </div>

      <div
        class="input_field"
        :class="{invalid: $v.formdata.rating.$error}"
      >
        <label>Rating</label>
        <select
          @blur="$v.formdata.rating.$touch()"
          v-model="formdata.rating"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <p
          v-if="$v.formdata.rating.$error"
          class="error_label"
        >
          You need to select at least one
        </p>
      </div>

      <button type="submit">Add post</button>
    </form>

    <!-- dialog -->
    <md-dialog :md-active="dialog">
      <p>
        your post has no content, are you sure you want to post this ?
      </p>
      <md-dialog-actions>
        <md-button
          class="md-primary"
          @click="dialogOnCancel"
        >Oop, I want to add it.</md-button>

        <md-button
          class="md-primary"
          @click="dialogOnConfirm"
        >Yes I am sure</md-button>
      </md-dialog-actions>

    </md-dialog>

    <!-- after submitting the form -->
    <div
      v-if="addpost"
      class="post_succesfull"
    >
      Your post was posted
    </div>

  </div>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      dialog: false,
      formdata: {
        title: "",
        desc: "",
        content: "",
        rating: ""
      }
    };
  },
  validations: {
    formdata: {
      title: {
        required
      },
      desc: {
        required,
        maxLength: maxLength(100)
      },
      rating: {
        required
      }
    }
  },
  computed: {
    addpost() {
      let status = this.$store.getters["admin/addPostStatus"];
      if (status) {
        this.clearPost();
      }

      return status;
    }
  },
  methods: {
    clearPost() {
      this.$v.$reset();
      this.formdata = {
        title: "",
        desc: "",
        content: "",
        rating: ""
      };
    },
    submitHandler() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // мы не валидировали поле content с помощью vuelidate, но при отправке формы, если это поле пустое, то спрашиваем, вы уверены что хотите опубликовать статью?
        if (this.formdata.content === "") {
          // show dialog with "Are your sure?"
          this.dialog = true;
        } else {
          this.addPost();
        }
      } else {
        alert("Something is wrong");
      }
    },
    dialogOnCancel() {
      this.dialog = false;
    },
    dialogOnConfirm() {
      this.dialog = false;
      this.addPost();
    },
    addPost() {
      this.$store.dispatch("admin/addPost", this.formdata);
    }
  }
};
</script>


<style scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

.input_field.invalid input,
.input_field.invalid select {
  border: 1px solid red;
}
</style>
