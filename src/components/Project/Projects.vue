<template>
  <v-container>
    <v-layout row wrap v-for="item in items" :key="item.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="secondary">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5>
                <v-card-media
                  :src="item.src"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">My Project</h5>
                    <div>{{ item.date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat primary v-bind:to="'/projects/' + item.id">
                    <v-icon left>arrow_forward</v-icon>
                    View Project
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'projects',
  computed: {
    items () {
      return this.$store.getters.loadedProjects
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
