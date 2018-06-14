<template>
  <v-toolbar
    clipped-left
    color="blue darken-3"
    dark
    app
    fixed
  >
    <v-toolbar-side-icon @click.stop="$emit('toggleDrawer')"></v-toolbar-side-icon>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">      
      <span class="hidden-sm-and-down">{{ name }}</span>
    </v-toolbar-title>
    <v-toolbar-items style="flex: 1">
      <v-menu offset-y :nudge-right="80" style="margin-left: auto;">
        <v-btn icon slot="activator" >
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="">
            <v-list-tile-title><v-icon class="mr-3">person</v-icon>信息修改</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="$router.push({path: '/login'})">
            <v-list-tile-title><v-icon class="mr-3">exit_to_app</v-icon>登出</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
    }
  }
}
</script>

