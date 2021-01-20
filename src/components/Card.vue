<template>
  <div class="card-contena">
    <div class="card">
      <span class="handle"> 
        <img src="../assets/pic_27_dragdrop.png" alt="" width="30" height="30">
      </span>
      <button class="close-button" @click="removeCardFromList">×</button>
      <div class="body">
        {{ body }}
      </div>
    </div>
    <details-add :cardIndex="cardIndex" :listIndex="listIndex" />
      <!-- ここでstateのdetailsのデータを指定できれば動くはず、detailsコンポーネントだけで完結すればその必要もない。 -->
      <Details :cardIndex="cardIndex" :listIndex="listIndex" />
  </div>
</template>

<script>
import Details from "./Details.vue";
import DetailsAdd from "./DetailsAdd.vue";

export default {
  components: {
    DetailsAdd,
    Details,
  },
  props: {
    body: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
    cardIndex: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      details_notifi: "",
    };
  },
  methods: {
    removeCardFromList() {
      if (confirm("本当にこのカードを削除しますか？")) {
        this.$store.dispatch("removeCardFromList", {
          cardIndex: this.cardIndex,
          listIndex: this.listIndex,
        });
      }
    },
  },
};
</script>