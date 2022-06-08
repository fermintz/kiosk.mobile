<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal">
      <div class="cont">
        <strong>제목입니다</strong>
        <span>내용입니다.</span>
      </div>
      <div class="btns">
        <v-btn class="cancle">취소</v-btn>
        <v-btn class="ok">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false
    }
  },
  methods:{
    handle(value){

    }
  },
}
</script>

<style lang="scss" scoped>

</style>