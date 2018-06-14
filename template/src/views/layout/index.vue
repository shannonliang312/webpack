<template>
  <v-app>
    <side-bar
      :drawer=drawer
    ></side-bar>
    <top-bar
      @toggleDrawer="onToggleDrawer"
    ></top-bar>
    <v-content>
      <v-container fluid class="pa-4">        
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>  
</template>

<script>
import TopBar from './TopBar'
import SideBar from './SideBar'

export default {
  name: 'Layout',
  data () {
    return {
      drawer: true
    }
  },
  methods: {
    /* 关闭、打开侧边栏 */
    onToggleDrawer () {
      this.drawer = !this.drawer
    }
  },
  components: {
    TopBar,
    SideBar
  }
}
</script>
