<template>
  <div class="notFound">
    <img src="@/assets/img/notFound.png">
    <div class="inner">
      <h2>
        <strong>404</strong>
        <span>error</span>
      </h2>
      <dl>
        <dt>요청하신 페이지를 찾을 수 없습니다</dt>
        <dd>
          방문하시는 페이지의 주소가 잘못 입력되었거나 페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </dd>
      </dl>

      <div class="btns">
        <v-btn text>
          <v-icon>mdi-arrow-u-right-top</v-icon>
          <span>뒤로 돌아가기</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notFound{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100vh;

  img{
    width:100%;
    object-fit: cover;
  }
  

  .inner{
    padding:35px;
    h2{
      text-align:center;
      strong{
        font-size:72px;
        font-weight:100;
        line-height:1;
      }
      span{
        margin-left:10px;
        color:#d22828;
      }
    }

    dl{
      margin-top:30px;
      text-align:center;

      dt{
        font-size:18px;
      }
      dd{
        margin-top:10px;
        font-size:14px;
        color:#797979;
      }
    }

    .btns{
      display:flex;
      justify-content: center;
      margin-top:50px;
      .v-btn{
        height:50px;
        padding:0 20px;
        border-radius:25px;
        background:#292929;
        color:#fff;

        .v-icon{
          color:#fff;
          font-size:18px;
          margin-right:5px;
        }
      }
    }
  }

  
}
</style>