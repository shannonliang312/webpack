<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      dark
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>View 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile avatar @click.stop="aboutDialogVisible =true">
          <v-list-tile-avatar>
            <v-icon dark>info</v-icon>
          </v-list-tile-avatar>         
          <v-list-tile-content>
            <v-list-tile-title>
              关于
            </v-list-tile-title>            
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-dialog v-model="aboutDialogVisible" width="500">
      <v-card>
        <v-card-media src='static/bg-login.jpg' height="200px"></v-card-media>
        <v-card-title primary-title >
          <div class="text-xs-center" style="width: 100%">
            <span class="headline">{{ name }}</span>
            <h6>Version: V1.0.0</h6>
            <span>Copyright 2017 Inspur Group</span><br />
            <span>All rights reserved</span>
          </div>
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['drawer'],
  data () {
    return {
      aboutDialogVisible: false
    }
  }
}
</script>
