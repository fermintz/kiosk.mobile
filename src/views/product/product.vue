<template>
  <div class="product">
    <div class="page-title">
      <h2>선택된 장비는 <b>A01세탁기</b> 입니다.</h2>
      <p>장비에 투입할 금액을 선택해주세요</p>
    </div>
    <div class="tabs">
      <div class="tab" 
        v-for="(item, index) in ['상품으로 선택하기', '투입금액 직접입력']" 
        :key="index"
        :class="{active:tab === index}"
        @click="tab = index"
        >
        <label>{{item}}</label>
      </div>
      <span :class="{right: tab === 1}">

      </span>
    </div>

    <div class="cont" v-show="tab === 0">
      <div class="items">
        <div class="items-top">
          <strong>상품<b>5</b>개</strong>
        </div>
        <GoodsItem v-for="item in 5" :key="item" />
      </div>
    </div>

    <div class="cont" v-show="tab === 1">
      <form>
        <span>투입금액 입력<b>*</b></span>
        <input type="number" placeholder="0" v-model="inputPrice" maxlength="5">
        <div class="priceBtns">
          <v-btn text @click="inputPrice += 10000">+10,000원</v-btn>
          <v-btn text @click="inputPrice += 5000">+5,000원</v-btn>
          <v-btn text @click="inputPrice += 1000">+1,000원</v-btn>
          <v-btn text @click="inputPrice = 0">초기화</v-btn>
        </div>
        <div class="bottom">
           <v-btn text :class="{active:buttonActive}">다음으로</v-btn>
        </div>
       
      </form>
    </div>

    <LoginSheet ref="loginSheet" />
    <FirstGuide ref="firstGuide" />
    
  </div>
</template>

<script>
import GoodsItem from '@/components/goods.vue'
import LoginSheet from '@/components/login.vue'
import FirstGuide from '@/components/firstGuide.vue'

export default {
  name:'product',
  components:{ 
    GoodsItem, LoginSheet, FirstGuide
  },
  data(){
    return{
      tab:0,
      inputPrice:null,
      buttonActive:false
    }
  },


  watch:{
    inputPrice(val){
      if(val.length > 3){
        this.buttonActive = true;
      }else{
        this.buttonActive = false;
      }
    }
  },

  methods:{

  },
}
</script>

<style lang="scss" scoped src="./product.scss" />
