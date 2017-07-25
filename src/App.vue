<template>
  <v-app dark id="my-app-background">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      dark
      overflow
      absolute
    >
      <v-list class="pt-0" dense>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="secondary">
      <v-toolbar-side-icon
        @click.native.stop="drawer = !drawer"
        class="hidden-sm-and-up"
        ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-chip label outline style="cursor: pointer" class="accent accent--text">Vue Projects</v-chip>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat primary
          v-for="item in items"
          :key="item.title"
          router
          :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        mini: false,
        items: [
          { title: 'Projects', icon: 'code', link: '/projects' },
          { title: 'Create New', icon: 'motorcycle', link: '/projects/new' },
          { title: 'Profile', icon: 'polymer', link: '/profile' },
          { title: 'Sign in', icon: 'face', link: '/signin' },
          { title: 'Sign up', icon: 'lock_open', link: '/signup' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  #my-app-background {
    background: #181b1f
  }
</style>
