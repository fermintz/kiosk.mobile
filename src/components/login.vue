<template>
  <div class="loginWrap"
    v-show="visible"
    :class="{active:visible}"
  >
    <div class="login">
      <div class="head" v-for="(item, index) in headText" :key="index" v-show="show === index">
        <div class="top">
          <div class="logo">
            <img src="@/assets/img/logo_b_eng.png">
          </div>
          <v-btn icon @click="visible = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
  
        <h3>
          {{item.title}}
        </h3>
        <p>{{item.sub}}</p>
      
      </div>
      <!-- <div class="divider"/> -->
      <div class="form user_check" v-show="show === 0">
        <dl>
          <dt>전화번호 입력</dt>
          <dd>
            <input type="tel" placeholder="'-' 제외 입력">
          </dd>
        </dl>
        <div class="btns">
          <v-btn text class="finish" @click="show = 1">다음으로</v-btn>
        </div>
      </div>

      <div class="form phone_check" v-show="show === 1">
        <dl>
          <dt>전화번호 인증</dt>
          <dd>
            <input type="tel" value="010-8525-4561" >
            <v-btn text @click="snackbarOn('인증번호를 발송하였습니다.')">인증번호 발송</v-btn>
          </dd>
          <dd>
            <input type="tel" placeholder="인증번호 4자리 입력">
            <v-btn text class="complete">인증확인</v-btn>
          </dd>
        </dl>
        <div class="error_message">
          인증번호를 잘못 입력하셨습니다.
        </div>
        <div class="btns">
          <v-btn text class="finish" @click="show = 2">다음으로</v-btn>
        </div>
      </div>

      <div class="form password_make" v-show="show === 2">
        <dl>
          <dt>비밀번호 생성</dt>
          <dd>
            <input type="password" placeholder="사용하실 비밀번호를 입력해주세요">
          </dd>
          <dd>
            <input type="password" placeholder="비밀번호 확인">
          </dd>
        </dl>
        <div class="error_message">
          비밀번호를 잘못 입력하셨습니다.
        </div>
        <div class="btns">
          <v-btn text class="finish" @click="show = 3">다음으로</v-btn>
        </div>
        
      </div>

      <div class="form password_check" v-show="show === 3">
        <dl>
          <dt>비밀번호 입력</dt>
          <dd>
            <input type="password" placeholder="비밀번호를 입력해주세요">
          </dd>
        </dl>
        <div class="error_message">
          비밀번호를 잘못 입력하셨습니다.
        </div>
        <div class="btns">
          <v-btn text class="finish">로그인</v-btn>
          
        </div>
        <v-btn text class="passwordFind" @click="snackbarOn('임시 비밀번호를 문자메세지로 전송하였습니다.')">비밀번호 찾기</v-btn>
        
      </div>
      
    </div>

    <div class="blackBg" @click="visible=false">

    </div>

    <Snackbar :text="snackbarText" ref="snackbar"/>
  </div>
</template>

<script>
import Snackbar from '@/components/snackbar'

export default {
  components:{Snackbar},
  data(){
    return{
      visible:true,
      show:0,
      snackbarText:'',
      headText:[
        {
          title:'로그인 및 회원가입',
          sub:'회원확인을 위해 전화번호를 입력해주세요 등록되지 않은 회원인 경우 회원가입이 진행됩니다.',
        },
        {
          title:'전화번호 인증',
          sub:'휴대폰 번호를 입력하세요 인증을 위해 문자메세지로 코드를 보내드립니다 ',
        },
        {
          title:'비밀번호 생성',
          sub:'포인을 사용하기 위한 비밀번호를 등록해주세요',
        },
        {
          title:'비밀번호 입력',
          sub:'로그인을 위한 비밀번호를 입력해주세요',
        },
      ],
    }
  },
  mounted(){
    this.startDrag
  },
  methods:{
    handle(value){
      this.visible = value
    },
    touchstart(e){
      e.preventDefault()
      alert('드래그')
      console.log('드래그 되나요')
    },
    snackbarOn(text){
      this.snackbarText = text;
      this.$refs.snackbar.handle(true)
    }
  },
  
}
</script>

<style lang="scss" scoped>

.loginWrap{
  position: fixed;
  z-index:99;

  .blackBg{
    z-index:3;
    position: fixed;
    left:0;
    top:0;
    background:rgba(0,0,0,0.0);
    height:100%;
    width:100%;
  }

  &.active{
    .blackBg{
      animation:blackIn .5s ease forwards;
    }
    .login{
      animation:sheetIn .5s ease forwards;
    } 
  }
}
.login{
  overflow-y:auto;
  width:100%;
  z-index:4;
  position: fixed;
  bottom:-80%;
  left:0px;
  background:#fff;
  border-radius:35px 35px 0 0;
  padding:30px 30px 60px 30px;
  height:80%;
  animation:sheetOut .5s ease forwards;


  .head{
   
    margin-bottom:30px;
    gap:40px;
    

    .top{
       display:flex;
       justify-content: space-between;
       margin-bottom:20px;
      .logo{
          margin-bottom:20px;
          img{
            display:block;
            height:40px;
          }
        }
      .v-btn{
        width:45px;
        height:45px;
        background:#f2f2f2;
      }
    }

    h3{
        
    font-size:18px;
    font-weight:bold;
    }
    p{
      font-size:14px;
      margin:0;
      margin-top:3px;
      color:#898989;
    }

    
    
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  .form{
    display:flex;
    flex-direction: column;
    margin-bottom:15px;
    gap:10px;
    dl{
      dt{
        font-size:12px;
        margin-bottom:6px;
      }
      dd{
        display:flex;
        align-items: center;
        margin-bottom:10px;
        input{
          flex:1;
          border:1px solid #c2c2c2;
          width:100%;
          height:50px;
          border-radius:5px;
          padding:0 10px;
          outline: none;
          

          &::placeholder{
            font-size:14px;
          }
          &:focus{
            border-color:#0077ff;
            box-shadow:0 0 12px rgba(0,119,255,0.15), 0 0 4px rgba(0,119,255,0.03);
          }
        }

        &:last-child{
          margin-bottom:0;
        }
      }
    }

    .error_message{
      color:#d22828;
      font-size:12px;
    }

    .btns{
      display:flex;
      align-items: center;
      margin-top:10px;
      gap:10px;
      .v-btn{
        border-radius:5px;
        height:50px;
        padding:0 15px;
      }
      .v-btn.finish{
        flex:1;
        display:block;
        width:100%;
        background:#c2c2c2;
        color:#fff;
        border:0;
      }
      .v-btn.active{
        background:#0077ff;
      }
    } 

    .passwordFind{
      background:#f2f2f2;
      height:50px;
      border-radius:5px;
    }

    
  }

  .phone_check{
    dl{
      dd{
        position: relative;
        input{
          padding:0 120px 0 10px; 
        }
        .v-btn{
          position: absolute;
          right:10px;
          height:30px;
          font-size:12px;
          background:#292929;
          color:#fff;
          padding:0 10px;
        }
        .v-btn.complete{
          background:#0077ff;
        }
      }
    }
    
  }

  
}

@keyframes blackIn {
  100%{
    background:rgba(0,0,0,0.7)
  } 
}

@keyframes sheetIn {
  100%{
    bottom:0;
  }
}

</style>