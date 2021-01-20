<template>
  <div>
    <p>{{ details }}</p>
  </div>
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    },
    cardIndex: {
      type: Number,
      required: true,
    },
  },
  // ここでstoreからのデータを呼び出せれば問題なくなる。
  computed: {
    details() {
      return this.$store.state.lists[this.listIndex].cards[this.cardIndex][
        "details"
      ];
    },
  },
};
</script>