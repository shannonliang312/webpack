<template>
  <v-layout row>
    <v-flex xs3 offset-xs8 class="mt-5">
      <v-card class="blue lighten-4 pa-3">
        <v-layout >
          <v-flex xs12 class="text-xs-center">
            <h2 style="color: #2d87be; margin: 20px 0">{{ name }}</h2>
          </v-flex>              
        </v-layout>
        <v-layout class="pl-3 pr-3">
          <v-flex xs12>
            <v-text-field
              v-model="formData.userName"
              name="userName"
              label="用户名"
              prepend-icon="perm_identity"
              @error="$v.formData.userName.$error"
              @input="$v.formData.userName.$touch"
              :error-messages="userNameErrorMessage"
              >
            </v-text-field>
          </v-flex>            
        </v-layout>
        <v-layout class="pl-3 pr-3">
          <v-flex xs12>
            <v-text-field
              type="password"
              v-model="formData.userPsw"
              name="userPsw"
              label="密码"
              prepend-icon="lock"
              @error="$v.formData.userPsw.$error"
              @input="$v.formData.userPsw.$touch"
              :error-messages="pswErrorMessage"                  
              >
            </v-text-field>
          </v-flex>            
        </v-layout>
        <v-layout class="pl-3 pr-3">
          <v-flex xs8>
            <v-text-field
              name="code"
              label="验证码"         
              v-model="formData.imgCode"
              prepend-icon="notifications"
              @error="$v.formData.imgCode.$error"
              @input="$v.formData.imgCode.$touch"
              :error-messages="imgCodeErrorMessage"    
              @keyup.native.enter="onLogin"
              >
            </v-text-field>
          </v-flex>
          <v-flex xs4 class="ml-2">
            <img width="90%" alt="验证码" onclick = "this.src='/api/imgcode?d='+new Date()*1" :src="imgSrc" />
          </v-flex>   
        </v-layout>
        <v-layout v-if="errorFlag" style="margin-top: -20px">
          <v-flex xs12 class="text-xs-center">
            <span class="red--text">{{errorMessage}}</span>
          </v-flex>
        </v-layout>
        <v-layout class="pl-3 pr-3">
          <v-btn block color="info" @click.native="onLogin" :loading="loadingFlag">登录</v-btn>  
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  data () {
    return {
      loadingFlag: false,
      errorFlag: false,
      errorMessage: '',
      imgSrc: '',
      formData: {
        userName: '',
        userPsw: '',
        imgCode: ''
      }
    }
  },
  computed: {
    /* 用户名错误信息 */
    userNameErrorMessage () {
      if (!this.$v.formData.userName.$error) {
        return []
      } else {
        return ['用户名不能为空']
      }
    },

    /* 密码错误信息 */
    pswErrorMessage () {
      if (!this.$v.formData.userPsw.$error) {
        return []
      } else {
        return ['密码不能为空']
      }
    },

    /* 验证码错误信息 */
    imgCodeErrorMessage () {
      if (!this.$v.formData.imgCode.$error) {
        return []
      } else {
        return ['验证码不能为空']
      }
    }
  },
  created () {
    this.getNewImgCode() // 进入页面获取验证码
  },
  methods: {
    /* 获取新验证码 */
    getNewImgCode () {
      this.imgSrc = '/api/imgcode?d=' + (+new Date())
    },

    /* 执行登陆 */
    onLogin () {
      // this.$v.formData.$touch()
      // this.errorFlag = false
      this.$router.push({path: '/view1'})
    }
  },
  validations: {
    formData: {
      userName: {required},
      userPsw: {required},
      imgCode: {required}
    }
  }
}
</script>

<style scoped>
.content{
	margin: 0;
	height: 340px;
}

#login-form{
	margin-top: 60px;
	padding: 30px 30px;
	background-color: rgba(255,255,255,0.5);
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
  border-radius: 5px;
}

</style>
