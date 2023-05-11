<template>
  <v-app>
    <div class="header">
      <v-layout align-center>
        <div class="logo">김보미의 게시판</div>
        <v-spacer></v-spacer>
        <div class="user" v-if="$store.state.loginUser">
          {{ $store.state.loginUser.name }}
        </div>
        <div><v-btn flat @click="logout">로그아웃</v-btn></div>
      </v-layout>
    </div>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted() {
    this.$axios.post("/api/user/info")
    .then(result => {
      if(result.data.result == "ok") {
        this.$store.commit("setLoginUser", result.data.user)
      }
    })
  },
  methods: {
    logout() {
      this.$axios.post("/api/user/logout")
      .then(result => {
        this.$store.commit("logout")
        this.$router.push("/")
      })
    }
  }
}
</script>
<style>
  .header {
    padding: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .header .logo {
    font-size: 20px;
    font-weight: 700;
    
  }
</style>