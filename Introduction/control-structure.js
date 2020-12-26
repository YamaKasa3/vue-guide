const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  },
  methods: {
    click() {
      this.seen = !this.seen;
    }
  }
}

const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}

Vue.createApp(ConditionalRendering).mount('#condition-rendering');
Vue.createApp(ListRendering).mount('#list-rendering');