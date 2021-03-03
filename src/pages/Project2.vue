<template>
  <v-card class="pa-5 ma-5">
    <v-card-title> Project 2 </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <health-mana-bar
              :percentbar.sync="player.hp"
              :manabar.sync="player.mana"
              barname="Goblin Slayer"
            />
          </v-col>
          <v-col>
            <health-mana-bar
              :percentbar.sync="enemy.hp"
              :manabar.sync="enemy.mana"
              barname="Ogre"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img :src="playerpic" v-show="player.hp > 0"></v-img>
          </v-col>
          <v-col>
            <v-img :src="enemypic" v-show="enemy.hp > 0"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <actions
              :player.sync="player"
              :enemy.sync="enemy"
              :buttondis.sync="buttonDisabled"
              @action="actionTurn()"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <logs :logs.sync="actionLogs" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import Actions from "../components/Actions.vue";
import HealthManaBar from "../components/HealthManaBar.vue";
import Logs from "../components/Logs.vue";

export default {
  components: {
    HealthManaBar,
    Actions,
    Logs,
  },
  data: () => ({
    player: {
      hp: 100,
      mana: 100,
    },
    enemy: {
      hp: 100,
      mana: 100,
    },
    playerpic: "../pics/goblinslayer/standing.jpg",
    enemypic: "../pics/ogre/standing.jpg",
    actionLogs: [],
    buttonDisabled: false,
  }),
  methods: {
    actionTurn() {
      console.log("actionTurn()");

      this.enemy.hp = this.player.hp - this.player.actionDmg;
      let winnerLog = {};

      if (this.player.hp > 0) {
        let playerLog = {};
        playerLog["actionMove"] = this.player.actionMove;
        playerLog["damageText"] = this.player.actionLog;
        let pic = this.player.actionPic;
        this.updateplayerpic(pic);
        this.actionLogs.push(playerLog);
      }

      if (this.enemy.hp <= 0) {
        this.enemy.hp = 0;
        winnerLog["actionMove"] = "Ogre died!! Goblin Slayer wins!!!";
        winnerLog["damageText"] = "Refresh page to start the game";
        this.buttonDisabled = true;
        this.actionLogs.push(winnerLog);
      }

      this.player.hp = this.player.hp - this.enemy.actionDmg;

      if (this.enemy.hp > 0) {
        let enemyLog = {};
        enemyLog["actionMove"] = this.enemy.actionMove;
        enemyLog["damageText"] = this.enemy.actionLog;
        this.actionLogs.push(enemyLog);
        let pic = this.enemy.actionPic;
        this.updateenemypic(pic);
      }

      if (this.player.hp <= 0) {
        this.player.hp = 0;
        winnerLog["actionMove"] = "Goblin Slayer died!! Ogre wins!!!";
        winnerLog["damageText"] = "Refresh page to start the game";
        this.buttonDisabled = true;
        this.actionLogs.push(winnerLog);
      }
      console.log(this.actionLogs);
      console.log(this.player);
      console.log(this.enemy);
      console.log(this.playerHealthBar);
      console.log(this.enemyHealthBar);
    },
    updateplayerpic(pic) {
      this.playerpic = "../pics/goblinslayer/" + pic + ".jpg";
    },
    updateenemypic(pic) {
      this.enemypic = "../pics/ogre/" + pic + ".jpg";
    },
  },
};
</script>

<style>
</style>