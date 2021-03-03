<template>
  <v-card>
    <v-card-title>Actions</v-card-title>
    <v-card-text>
      <v-container>
        <v-row class="py-5" justify="space-around">
          <v-card><v-btn :disabled="buttondis" @click="playerActionMove('Attack')">Attack</v-btn> </v-card>
          <v-card
            ><v-btn :disabled="buttondis" @click="playerActionMove('Focus')">Focus</v-btn>
          </v-card>
          <v-card><v-btn :disabled="buttondis" @click="playerActionMove('ShieldBash')">Shield Bash</v-btn> </v-card>
          <v-card><v-btn :disabled="buttondis" @click="playerActionMove('GreatScroll')">Great Scroll</v-btn> </v-card>
          <v-card><v-btn :disabled="buttondis" @click="playerActionMove('Execute')">Execute</v-btn> </v-card>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import aiMove from '@/actions/aiMove.js';
import playerMove from '@/actions/playerMove.js';


export default {
  methods: {
    playerActionMove(playerAction) {
      console.log("playerActionMove:"+playerMove);

      this.player["actionMove"] = playerAction;
      let updateplayer = playerMove.processMove(this.player,this.enemy);
      let updateenemy = aiMove.processMove(this.enemy);
      console.log(updateplayer);
      console.log(updateenemy);
      this.$emit('update:player', updateplayer);
      this.$emit('update:enemy', updateenemy);
      this.$emit('action');
    }
  },
  data: () => ({
    turn: 1
  }),
  props: ["buttondis","player","enemy"]
  

};
</script>

<style>
</style>