<template>
  <v-app>
    <v-main>
      <ChatApp />
    </v-main>
  </v-app>
</template>

<script>
import ChatApp from './components/ChatApp';

export default {
  name: 'App',

  components: {
    ChatApp,
  },

  data: () => ({
    //
  }),
};
</script>
