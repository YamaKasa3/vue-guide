const CounterApp = {
  data() {
    return {
      counter: 0,
      running: false,
    }
  },
  mounted() {
    setInterval(() => {
      if (this.running) this.counter++;
    }, 1000);
  },
  methods: {
    start: function() {
      this.running = true;
    },
    stop: function() {
      this.running = false;
    }
  }
}

Vue.createApp(CounterApp).mount('#counter');