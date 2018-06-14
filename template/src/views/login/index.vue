<template>
  <v-app>
		<div id="login">
			<div id="inspur"></div>
			<login-form></login-form>
		</div>
	</v-app>	
</template>

<script>
import LoginForm from './LoginForm'

export default {
  name: 'Login',
  data () {
    return {}
  },
  components: {
    LoginForm
  }
}
</script>

<style scoped>
#login { 
	position: absolute;
	top: 120px;
	width: 100%;
	padding:0;
	height:478px;
	/*margin-top: 120px;*/
	background-color: #f5f5f5;
	background:url('../../assets/img/bg-login.jpg') no-repeat center #002754;
}

#inspur{
	margin-left:13.33%;
	background-image:url('../../assets/img/inspur.png');
	position: absolute;
	top: -50px;
	width: 209px;
	height: 41px;
  overflow:hidden;
}
</style>
