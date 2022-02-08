const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackVal = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= attackVal;
    },
  },
});

app.mount("#monster");
