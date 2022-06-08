<template>
  <v-snackbar v-model="visible" timeout="1000" rounded="pill" top class="mt-5" color="#0077ff">
    {{text}}
  </v-snackbar>
</template>

<script>
export default {
  props:['text'],
  data(){
    return{
      visible:false,
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
  
}
</script>