<template>
  <div class="list">
    <div class="listheader">
      <span class="handle"> 
      <img src="../assets/pic_27_dragdrop.png" alt="" width="30" height="30">
    </span>
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total: {{ totalCardList }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')"
     :options="{animation:300, handle:'.handle'}">
      <card
        v-for="(item, index) in cards"
        :body="item.body"
        :key="item.id"
        :cardIndex="index"
        :listIndex="listIndex"
      />
      <card-add :listIndex="listIndex" />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import CardAdd from "./CardAdd";
import Card from "./Card";

export default {
  components: {
    draggable,
    CardAdd,
    Card,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalCardList() {
      return this.cards.length;
    },
  },
  methods: {
    removeList: function () {
      if (confirm("本当にこのリストを削除しますか？")) {
        // アクションと紐付ける
        this.$store.dispatch("removelist", { listIndex: this.listIndex });
      }
    },
  },
};
</script>