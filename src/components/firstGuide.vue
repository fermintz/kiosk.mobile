<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal">
      <div class="image">
        <img src="https://picsum.photos/600/300">
      </div>
      <dl>
        <dt>사용전 주의사항</dt>
        <dd>사용장비에 세탁물을 모두 넣어두고 코스를 선택 후 장비의 문을 닫아주세요</dd>
      </dl>
      <div class="btns">
        <v-btn text rounded @click="handle(false)">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
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

<style lang="scss" scoped>
.modal{
  background:#fff;
  padding:20px;
  border-radius:15px;

  .image{
    img{
      width:100%;
      height:200px;
      border-radius:10px;
      object-fit: cover;
    }
  }

  dl{
    margin-top:10px;
    dt{
      font-size:18px;
      font-weight:bold;
    }
    dd{
      margin-top:5px;
      font-size:14px;
      color:#898989;
    }
  }

  .btns{
    display:flex;
    justify-content: center;
    margin-top:20px;
    .v-btn{
      width:120px;
      height:40px;
      color:#fff;
      background:#0077FF
    }
  }
}
</style>