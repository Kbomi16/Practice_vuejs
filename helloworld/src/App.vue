<template>
  <v-app>
    <v-main>
      <v-text-field v-model="message"></v-text-field>

      {{ message }}
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    message:"안녕하세요. 저는 김보미입니다."
  }),
}
</script>
