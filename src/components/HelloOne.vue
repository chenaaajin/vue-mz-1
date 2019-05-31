<template>
  <div>
    <h1>HelloOne</h1>
    <p>我的名字是{{name}}</p>
    <button @click="fn">修改two组件的名字</button>
    <HelloThree :name="threeName"/>
  </div>
</template>
<script>
import HelloThree from "@/components/HelloThree.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // threeName: "threeName"
    };
  },
  // props: ["name", "hello"],
  computed: {
    ...mapState({
      "threeName":'threeName',
      'name':(state)=>
        state.oneName
      
      })
  },
  components: {
    HelloThree
  },
  methods: {
    fn(state) {
      this.$store.commit("changeTwoName",'弟弟222');
    }
  },
  watch: {
    hello(newVal, oldVal) {
      this.threeName = newVal;
    }
  }
};
</script>

