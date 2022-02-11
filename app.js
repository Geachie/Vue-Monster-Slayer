const getRandomVal = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let currentRound = 0;

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: `${this.monsterHealth}%` };
    },
    playerBarStyles() {
      return { width: `${this.playerHealth}%` };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomVal(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomVal(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomVal(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = getRandomVal(8, 20);
      this.playerHealth + healValue > 100
        ? (this.playerHealth = 100)
        : (this.playerHealth += healValue);
    },
  },
});

app.mount("#game");
