<template>
  <v-card>
    <v-card-title>
      {{ barname }}
    </v-card-title>
    <v-card-text>
      <v-progress-linear v-model="percentbar" color="green" height="25">
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>
      <v-progress-linear v-model="manabar" color="blue" height="25">
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  name: "HealthBar",
  props: ["percentbar","manabar", "barname"],
};
</script>

<style>
</style>