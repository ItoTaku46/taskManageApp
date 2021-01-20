<template>
  <form :class="classList" @submit.prevent="addList">
    <input
      v-model="title"
      type="text"
      class="text-input"
      placeholder="Add new list"
      @focusin="startEditing"
      @focusout="finishEditing"
    />
    <button
      type="submit"
      class="add-button"
      Add
      v-if="isEditing || titleExists"
    >
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      title: "",
      isEditing: false,
    };
  },

  computed: {
    classList() {
      const classList = ["addlist"];

      if (this.isEditing) {
        // CSSの変更
        classList.push("active");
      }

      if (this.titleExists) {
        // CSSの変更
        classList.push("addable");
      }

      return classList;
    },

    titleExists() {
      return this.title.length > 0;
    },
  },

  methods: {
    addList() {
      // actions実行
      this.$store.dispatch("addlist", { title: this.title });
      this.title = "";
    },

    startEditing() {
      this.isEditing = true;
    },
    finishEditing() {
      this.isEditing = false;
    },
  },
};
</script>
