<template>
  <div class="mypage">
    <div class="header">
      <div class="logo">
        <span>워시프렌즈 광안점</span>
      </div>

      <div class="right">
        <v-btn text rounded>
          <v-icon>mdi-logout</v-icon>
          <label>로그아웃</label>
        </v-btn>
      </div>
    </div>

    <div class="inner">
      <div class="page-top">
        <div class="box-top">
          <h3>반갑습니다 <b>4561</b>님</h3>
        </div>
        <div class="my-point-box">
          <span>내 포인트</span>
          <strong>5,900 P</strong>
        </div>

        <div class="my-point-btns">
          <v-btn text @click="$router.push('/')">
            <v-icon>mdi-qrcode</v-icon>
            <span>QR코드스캔</span>
          </v-btn>
          <v-btn text @click="$router.push('/point')">
            <v-icon>mdi-alpha-p-circle</v-icon>
            <span>포인트충전</span>
          </v-btn>
        </div>

        <div class="divider"></div>
        
        <div class="banner">
          <dl  v-ripple>
            <dt>
              <img src="@/assets/img/laundry.png">
            </dt>
            <dd>
              <div class="text">
                <strong>장비이용하기</strong>
                <span>매장의 장비와 상품을 이용할 수 있습니다.</span>
              </div>
              <v-icon>mdi-chevron-right</v-icon>
            </dd>
          </dl>
        </div>

        <div class="divider"></div>

        <div class="use-list">
          <div class="list-head">
            <h4> 이용내역<b>3건</b></h4>
          </div>

          <div class="list">
            <div class="no-data">
              이용하신 내역이 없습니다.
            </div>
            <div class="use-item">
              <div class="item-top">
                <label class="chage">포인트충전</label>
                <span>2022.06.07(화) 12:34</span>
              </div>
              <div class="eq-name">
                A01-세탁기
              </div>
              <div class="item-info">
                <dl>
                  <dt>결제금액</dt>
                  <dd>5,000원</dd>
                </dl>
                <dl>
                  <dt>사용포인트</dt>
                  <dd>5,000원</dd>
                </dl>
                <dl>
                  <dt>적립포인트</dt>
                  <dd>5,000원</dd>
                </dl>
                <dl class="last">
                  <dt>최종포인트</dt>
                  <dd>5,000원</dd>
                </dl>
              </div>
            </div>
            <div class="use-item" v-for="item in 10" :key="item">
              <div class="item-top">
                <label>장비결제</label>
                <span>2022.06.07(화) 12:34</span>
              </div>
              <div class="eq-name">
                A01-세탁기
              </div>
              <div class="item-info">
                <dl>
                  <dt>결제금액</dt>
                  <dd>5,000원</dd>
                </dl>
                <dl>
                  <dt>사용포인트</dt>
                  <dd>5,000원</dd>
                </dl>
                <dl>
                  <dt>적립포인트</dt>
                  <dd>5,000원</dd>
                </dl>
                <dl class="last">
                  <dt>최종포인트</dt>
                  <dd>5,000원</dd>
                </dl>
              </div>
            </div>

            <v-btn text class="more">
              <span>더보기</span>
              <v-icon>mdi-chevron-down</v-icon>
            </V-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./mypage.scss"> 

</style>