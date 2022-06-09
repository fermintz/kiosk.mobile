<template>
  <div class="detail">
    <div class="page-title">
      <h2>마지막으로 확인해주세요</h2>
      <p>선택하신 정보가 맞는지 확인해주세요</p>
    </div>

    <div class="contents">
      <dl class="userInfo">
        <dt>
          <h4>사용자</h4> 
        </dt>
        <dd>010-8525-4561</dd>
      </dl>
      <dl class="selected_goods">
        <dt>
          <h4>선택된 장비&상품</h4>
        </dt>
        <dd>
          <div class="left">
            <strong>A01 세탁기</strong>
            <span>초강력 세탁</span>
          </div>
          <div class="right">
            5,000
          </div>
        </dd>
      </dl>

      <div class="divider"></div>

      <dl class="point"> 
        <dt>
          <h4>포인트사용</h4>
          <v-btn text @click="$router.push('point')">포인트충전</v-btn>
        </dt>
        <dd class="myPoint">
          <span>나의 포인트</span>
          <strong>7,800P</strong>
        </dd>
         <dd class="pointUse">
          <input type="tel" value="0">
          <v-btn text @click="$refs.errorModal.handle(true)">전액사용</v-btn>
        </dd>
      </dl>

      <div class="divider"></div>

      <dl class="credit">
        <dt>
          <h4>결제정보</h4>
        </dt>
        <dd>
          <div class="item total">
            <span>총 결제금액</span>
            <strong>4,000</strong>
          </div>
          <div class="items">
            <div class="item">
              <span>상품금액</span>
              <strong>5,000원</strong>
            </div>
            <div class="item">
              <span>사용포인트</span>
              <strong>-1,000P</strong>
            </div>
            <div class="item add">
              <span>적립예상 포인트</span>
              <strong>400P</strong>
            </div>
          </div>
        </dd>
      </dl>

      <div class="divider"></div>

      <div class="agree">
        <ul>
          <li>
            <span>개인정보 판매자 제공에 대한 동의</span>
            <v-icon>mdi-chevron-right</v-icon>
          </li>
          <li>
            <span>개인정보 수집 및 이용동의</span>
            <v-icon>mdi-chevron-right</v-icon>
          </li>
        </ul>
        <div class="checkItem" v-ripple @click="checkOn = !checkOn" :class="{active:checkOn}">
          <v-icon>mdi-check-circle</v-icon>
          <span>위 내용을 확인하였으며 결제에 동의합니다</span>
        </div>
      </div>

      <div class="btns" @click="$router.push('finish')">
        <v-btn text :class="{active:checkOn}">결제하기</v-btn>
      </div>
    </div>

    <Progress />
    <ErrorModal ref="errorModal"/>
  </div>
</template>

<script>
import Progress from '@/components/progress.vue'
import ErrorModal from '@/components/errorModal.vue'

export default {
  components:{
    Progress,ErrorModal
  },
  data(){
    return{
      checkOn:false,
    }
  },
  methods:{

  },
}
</script>

<style lang="scss" scoped src="./detail.scss" />
