<template>
  <v-app>
    <v-content>
      <header-menu></header-menu>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HeaderMenu from './components/HeaderMenu';

export default {
  name: 'App',

  components: {
    HeaderMenu,
  },

  data: () => ({
    //
  }),
};
</script>
