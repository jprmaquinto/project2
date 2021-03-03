<template>
  <v-card>
    <v-card-title>Logs</v-card-title>
    <v-card-text>
      <v-container>
        <v-row class="py-5" justify="space-around">
          <v-list-item two-line  v-for="(log, i) in logs" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{log.actionMove}}</v-list-item-title>
              <v-list-item-subtitle>{{log.damageText}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: ["logs"],

    watch:{
        logs(value){
            console.log(value);
        }
    }
};
</script>

<style>
</style>