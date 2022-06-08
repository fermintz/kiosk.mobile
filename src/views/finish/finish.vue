<template>
  <div class="finish">
    <div class="inner">
      <div class="top">
        <div class="icon">
          <v-icon>
            mdi-check-circle
          </v-icon> 
        </div>

        <dl>
          <dt>결제가 완료되었습니다</dt>
          <dd>
            <b>A01세탁기</b>에 금액이 올바르게<br>투입되었는지 확인해주세요
          </dd>
        </dl>
      </div>

      <div class="btns">
        <div class="btn">
          <v-btn icon @click="$router.push('/mypage')">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <span>메인으로</span>
        </div>
        <!-- <div class="btn">
          <v-btn icon>
            <v-icon>mdi-book</v-icon>
          </v-btn>
          <span>이용내역</span>
        </div> -->
        <div class="btn">
          <v-btn icon @click="$router.push('/product')">
            <v-icon>mdi-login</v-icon>
          </v-btn>
          <span>한번더투입</span>
        </div>
      </div>
    </div>
    

    <div class="guide">
      <div class="image">
        <img src="https://picsum.photos/500/500">
      </div>
      <p>
        <b>A01세탁기</b>의 시작버튼을 눌러 사용해주세요
      </p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped src="./finish.scss">

</style>