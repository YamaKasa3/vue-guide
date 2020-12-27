Vue.createApp({
  data() {
    return {
      a: 1
    }
  },
  created() {
    console.log('a is' + this.a);
  }
}).mount("#app");