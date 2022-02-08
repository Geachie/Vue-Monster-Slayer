const getRandomVal = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

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
    },
    attackPlayer() {
      const attackVal = getRandomVal(8, 15);
      this.playerHealth -= attackVal;
    },
  },
});

app.mount("#monster");
