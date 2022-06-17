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
    <form>
      <h4>충전금액 직접입력<b>*</b></h4>
      <input type="number" placeholder="0" v-model="inputPrice">
      <div class="priceBtns">
        <v-btn text @click="inputPrice += 10000">+10,000원</v-btn>
        <v-btn text @click="inputPrice += 5000">+5,000원</v-btn>
        <v-btn text @click="inputPrice += 1000">+1,000원</v-btn>
        <v-btn text @click="inputPrice = 0">초기화</v-btn>
      </div>
      <dl>
        <dt>충전보너스 포인트</dt>
        <dd>
          <span>+400P</span>
        </dd>
      </dl>
    </form>
    <div class="bottom">
      <v-btn text>다음</v-btn>
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