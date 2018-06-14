<template>
  <div id="app">
    <v-slide-y-transition mode="out-in">
      <router-view></router-view>
    </v-slide-y-transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    }
  }
</script>
