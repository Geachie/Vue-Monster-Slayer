const getRandomVal = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackVal = getRandomVal(5, 12);
      this.monsterHealth -= attackVal;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackVal = getRandomVal(8, 15);
      this.playerHealth -= attackVal;
    },
  },
});

app.mount("#monster");
