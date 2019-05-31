<template>
  <div>
    <h1>HelloTwo</h1>
    <p>我的名字是{{name}}</p>
    <button @click="fn1">修改</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
//   props: ["name"]
    computed:{
        ...mapState({
            'name':(state)=>
                state.twoName
            
        })
    },
    methods: {
    fn1(state) {
      this.$store.commit("changeThreeName",'大傻子');
    }
  },
    
};
</script>

