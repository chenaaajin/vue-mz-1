<template>
  <div id="app">
    <HelloOne  @a="twoName = $event" :hello="oneHello"/>
    <helloTwo  @b="oneHello = $event"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HelloOne from "@/components/HelloOne.vue";
import HelloTwo from "@/components/HelloTwo.vue";
export default {
  data() {
    return {
      // oneName:this.$store.state.oneName,
      // twoName:this.$store.state.twoName,
      oneHello: ""
    };
  },
  // mapStates辅助函数，是一个方法
  // computed: mapState(["oneName", "twoName"]),
  computed:{
    ...mapState([
      "oneName", 
      "twoName"
    ])
  },

  components: {
    HelloOne,
    HelloTwo
  }
};
</script>
