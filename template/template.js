const app = {
  data() {
    return {
      msg: 'message',
      url: 'https://source.unsplash.com/random'
    }
  },
  methods: {
    click() {
      if (this.msg === 'message') {
        this.msg = 'changed message';
      } else {
        this.msg = 'message';
      }
    }
  }
}

Vue.createApp(app).mount('#app');