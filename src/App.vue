<template>
  <v-app>
    <v-app-bar
      app
      color="teal lighten-3"
      dense
      dark
    >
    <v-toolbar-title>Monster Slayer</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Project2/>
    </v-main>
  </v-app>
</template>

<script>
import Project2 from './pages/Project2';


export default {
  name: 'App',

  components: {
    Project2,
  },

  data: () => ({
    //
  }),
};
</script>
