<template>
  <div class="home">
    <div class="logo">
      <img src="@/assets/img/logo_w_eng.png">
    </div>
    <div class="inner">
      <div class="left-bg"></div>
      <div class="centerWrap" @click="$router.push('/product')">
        <div class="top-bg">
          <p>매장 세탁장비에 부착된 <b>QR코드를<br> 촬영</b>해주세요</p>
        </div>
        <div class="centerBox">
          <div class="crossLine">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
          </div>
          <div class="box box-1"></div>
          <div class="box box-2"></div>
          <div class="box box-3"></div>
          <div class="box box-4"></div>
        </div>
        <div class="bottom-bg"></div>
      </div>
      <div class="right-bg"></div>
    </div>
    <div class="guide">
      QR코드 스캔을 통해<br>장비에 금액을 투입할 수 있습니다.
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
  },

  mounted(){
    var constraints = { audio: true, video: { width: 1280, height: 720 } };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        var video = document.querySelector('video');
        // Older browsers may not have srcObject
        if ("srcObject" in video) {
            video.srcObject = stream;
        } else {
            // Avoid using this in new browsers, as it is going away.
            video.src = window.URL.createObjectURL(stream);
        }
        video.onloadedmetadata = function(e) {
            video.play();
        };
    })
    .catch(function(err) {
        console.log(err.name + ": " + err.message);
    });
  }
}
</script>

<style lang="scss" scoped src="./home.scss" />
