<template>
  <div class="order">
    <div class="header">
      <div class="left">
        <v-btn icon @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <div class="logo">
          워시프렌즈 광안점
        </div>
      </div>
      <div class="right">

      </div>
      
    </div>
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order{
  padding:0 20px;
  padding-bottom:40px;
}

.header{
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:70px;

  .left{
    display:flex;
    align-items: center;

    .v-btn{
      width:45px;
      height:45px;
      background:#f2f2f2;
      margin-right:15px;
    }

    .logo{
      display:flex;
      justify-content: center;
      align-items: center;
      background:#292929;
      height:32px;
      border-radius:16px;
      color:#fff;
      padding:0 20px;
    }
  }

  
}
</style>