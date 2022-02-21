<template>
<div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >

    <div class="menu-logo center">
      <img class="menu-logo image" src="../static/img-menu.png">
      <hr>
    </div>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
 
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
</div>
</template>

<script>
export default {
name: 'DefaultLayout',

  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      items: [
        { icon: 'mdi-chart-bubble', title: 'List of episodes', to: '/list-episodes' },
        { icon: 'mdi-chart-bubble', title: 'Dashboard', to: '/dashboard' },
        { icon: 'mdi-chart-bubble', title: 'Todo App', to: '/TodoApp' },

      ],
      
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Rick and Morty NuxtApp'
    }
  }
}
</script>

<style>
  .center{
    text-align: center;
  }
  .menu-logo{
    margin: 5px 0px;
  }
  .menu-logo .image{
    width:50px;
  }
</style>