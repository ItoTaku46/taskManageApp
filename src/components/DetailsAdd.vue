<template>
  <div>
    <form>
      <textarea class="details" type="text" v-model="details" placeholder="詳細入力" />
      <button type="submit" @click="detailsAddToList">追加・編集</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    // カードの識別をするために何かの情報が必要かも
    cardIndex: {
      type: Number,
      required: true,
    },

    listIndex: {
      type: Number,
      required: true,
    },
  },

  data: function () {
    return {
      details: "",
    };
  },

  methods: {
    detailsAddToList: function () {
      //イベント処理
      // this.$emit("details-notifi", this.details);
      this.$store.dispatch("detailsAddToList", {
        details: this.details,
        listIndex: this.listIndex,
        cardIndex: this.cardIndex,
      });
      this.details = "";
    },
  },
};
</script>
