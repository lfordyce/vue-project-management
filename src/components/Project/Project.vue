<template>
   <v-container>
     <v-layout row wrap>
       <v-flex xs12>
         <v-card class="secondary">
           <v-card-title>
             <h6 class="primary--text">{{ item.title }}</h6>
           </v-card-title>
           <v-card-media
             v-bind:src="item.src"
             height="400px"
           ></v-card-media>
           <v-card-text>
             <div class="info--text">{{ item.date }}</div>
             <div>
               Some text
             </div>
           </v-card-text>
           <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn primary id="custom-text">Register</v-btn>
           </v-card-actions>
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    item () {
      return this.$store.getters.loadedProject(this.id)
    }
  }
}
</script>

<style lang="css">
#custom-text {
  color: #181b1f
}
</style>
