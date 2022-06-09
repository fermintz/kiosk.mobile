<template>
  <v-dialog v-model="visible" width="unset">
    <div class="modal">
      <span></span>
      <v-progress-circular color="#0077ff" width="5" size="50" indeterminate />
      
    </div>  
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  display:flex;
  align-items: center;
  justify-content: center;
  background:#fff;
  border-radius:100px;
  padding:10px;
  width:75px;
  height:75px;
  span{
    width:50px;
    height:50px;
    position: absolute;
    border:5px solid #e2e2e2;
    border-radius:50px;
  }
  
}
</style>