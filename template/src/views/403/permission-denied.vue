<template>
  <div id="login">
    <div id="inspur"></div>
    <v-layout row > 
      <v-flex xs3  offset-xs8 >
        <h1 class="mt-5">403</h1>
        <div style="text-align: center; margin-bottom: 10px">
          <h2><i class="fa fa-times-circle" aria-hidden="true"></i>Permission Denied!</h2>
        </div>                
        <h3>
          <a href="#" @click.prevent="GoBack">&laquo; Go Back</a>
          <a href="#" @click.prevent="GoLogin">Go Login &raquo;</a>
        </h3>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'not-found',
  created () {

  },
  methods: {
    GoLogin () {
      this.$router.replace({ path: '/login' })
    },
    GoBack () {
      this.$router.go(-2)
    }
  }
}

</script>

<style scoped>
#login {
  position: relative;
  width: 100%;
  padding: 0;
  height: 478px;
  margin-top: 120px;
  background-color: #f5f5f5;
  background: url('../../assets/img/bg-login.jpg') no-repeat center #002754;
}

#inspur {
  margin-left: 13.33%;
  background-image: url('../../assets/img/inspur.png');
  position: absolute;
  top: -50px;
  width: 209px;
  height: 41px;
  overflow: hidden;
}

.content {
  margin: 0;
  height: 340px;
}

#text-content {
	margin-top: 60px;
	padding: 30px 30px;
	/*background-color: rgba(255,255,255,0.5);
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
  border-radius: 5px;*/
}

@font-face {
    font-family: Nosifer;
    src: url('/static/font/Nosifer-Regular.ttf');
  }

h1,
h2,
h3,
h4, h5 {
  color: white;
  font-family: Nosifer;
  text-align: center;
}

h1 {
  font-size: 80px;
}

h3 {
  font-size: 1.17em;
}


a {
  color: aqua;
}

i {
  margin-right: 5px;
}
</style>
