<template>
  <v-dialog v-model="visible" width="unset">
    <div class="modal error-modal">
      <div class="cont">
        <v-icon>mdi-alert-circle</v-icon>
        <dl>
          <dt>결제실패</dt>
          <dd class="divider" />
          <dd>결제에 실패하였습니다 다시 시도하여주세요 다시 시도하여주세요  </dd>
        </dl>
      </div>
      <div class="btns">
        <v-btn text>닫기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible: false
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>
.modal{
  background:#fff;
  min-width:260px;
  padding:18px;
  border-radius:10px;
  .cont{
    display:flex;
    align-items: flex-start;

    .divider{
      height:1px;
      background:#e2e2e2;
      margin:10px 0;
    }

    .v-icon{
      margin-right:10px;
      font-size:32px;
      color:#d22828;
    }
    dl{
      margin-top:8px;
      dt{
        font-size:18px;
        font-weight:bold;
        line-height:1;
      }
      dd{
        font-size:14px;
        color:#797979;
      }
    }
  }

  .btns{
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-top:15px;
    .v-btn{
      min-height:36px;
      padding:0 20px;
      border:2px solid #292929;
      color:#292929;
      border-radius:20px;
    }
  }

  
}
</style>