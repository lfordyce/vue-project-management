<template>
   <v-container>
     <v-layout row wrap>
       <v-flex xs12>
         <v-card class="secondary">
           <v-card-title>
             <h6 class="primary--text">Project</h6>
           </v-card-title>
           <v-card-media
             src="/static/new-york.jpeg"
             height="400px"
           ></v-card-media>
           <v-card-text>
             <div class="info--text">July 24, 2017</div>
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
}
</script>

<style lang="css">
#custom-text {
  color: #181b1f
}
</style>
