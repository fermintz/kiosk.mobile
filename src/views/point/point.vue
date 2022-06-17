<template>
  <div class="point">
    <div class="page-title">
      <h2>포인트충전</h2>
      <p>충전할 금액을 입력해주세요</p>
    </div>
    <div class="myPoint">
      <span>내 포인트</span>
      <strong>5,000P</strong>
    </div>
    
    <div class="item-list">
      <h4>충전금액 선택</h4>
      <v-row>
        <v-col cols="6" v-for="item in 10" :key="item">
          <div class="item" v-ripple>
            <div class="top">
              <span>10,000 포인트충전</span>
              <strong>10,000원</strong>
            </div>
            
            <div class="bonus">
              <label>보너스적립</label>
              <span>+500P</span>
            </div>
            
          </div>
        </v-col>
      </v-row>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      inputPrice:0,
    }
  }
}
</script>

<style lang="scss" scoped src="./point.scss">

</style>