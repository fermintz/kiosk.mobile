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
      <span>적립금액 직접입<b>*</b></span>
      <input type="number" placeholder="5000">
      <dl>
        <dt>적립보너스 포인트</dt>
        <dd>
          <span>+400P</span>
        </dd>
      </dl>
    </form>
    <v-btn text>다음</v-btn>
  </div>
</template>

<style lang="scss" scoped src="./point.scss">

</style>