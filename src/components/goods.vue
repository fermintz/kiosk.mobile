<template>
  <div class="goods" v-ripple @click="$router.push('detail')">
    <span></span>

    <dl>
      <dt>초 강력한 세탁</dt>
      <dd>50분</dd>
    </dl>
    
    <strong>5,000</strong>
  </div>
</template>

<script>
export default {
  name:'goods',

}
</script>t

<style lang="scss" scoped> 
.goods{
  position: relative;
  display:flex;
  justify-content: space-between;
  padding:14px;
  min-height:80px;
  border-radius:12.5px;
  border:1px solid #c2c2c2;
  box-shadow: 4px 4px 12px rgba(0,0,0,0.1);

  span{
    display:none;
    width:25px;
    height:3px;
    background:#0077FF;
    position: absolute;
    top:0px;
    border-radius:1.5px;
  }
  
  dl{
    dt{
      font-size:16px;
    }
    dd{
      font-size:12px;
      color:#898989;
    }
  }

  strong{
    display:flex;
    align-items: center;
    align-self: flex-end;
    font-size:22px;
    line-height:1;
    color:#0077FF;
    font-weight:800;

    &:after{
      content:'원';
      font-size:14px;
      margin-left:5px;
      font-weight:normal;
      color:#292929;
    }
  }

  
}
</style>