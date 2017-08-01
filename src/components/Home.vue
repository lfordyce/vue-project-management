<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn info router to="/projects">Explore Projects</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn info router to="/projects/new">Create Project</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel style="cursor:pointer">
          <v-carousel-item
            v-for="item in items"
            v-bind:src="item.src"
            :key="item.id"
            @click.native.stop="onLoadProject(item.id)">
            <div class="title">
              {{ item.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  // data () {
  //   return {
  //     items: [
  //       { src: '/static/new-york.jpeg', id: '123erfgt67u', title: 'Projects in New York' },
  //       { src: '/static/paris.jpeg', id: '09iuhgft543', title: 'Projects in Paris' },
  //       { src: '/static/germany.jpeg', id: '456trefg6kp', title: 'Projects in Germany' }
  //     ]
  //   }
  // },
  computed: {
    items () {
      return this.$store.getters.featuredProjects
    }
  },
  methods: {
    onLoadProject (id) {
      this.$router.push('/projects/' + id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only chelseaakaar -->
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #42b983;
  font-size: 2em;
  padding: 8px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
