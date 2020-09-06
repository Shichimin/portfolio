<template>
  <div>
    <h1 class="content-title"><font-awesome-icon icon="code" class="icon"/> Skills</h1>
    <div>
      <div class="languages">
        <div class="language">
          <h2>Language</h2>
          <div class="lang">
            <img src="../assets/lang/html-5.svg" alt="logo" class="lang-image">
            <h3>HTML</h3>
          </div>
          <div class="lang">
            <img src="../assets/lang/css-3.svg" alt="logo" class="lang-image">
            <h3>CSS</h3>
          </div>
          <div class="lang">
            <img src="../assets/lang/javascript.svg" alt="logo" class="lang-image">
            <h3>JavaScript</h3>
          </div>
          <div class="lang">
            <img src="../assets/lang/swift.png" alt="logo" class="lang-image">
            <h3>Swift</h3>
          </div>
          <div class="lang">
            <img src="../assets/lang/ruby.png" alt="logo" class="lang-image">
            <h3>Ruby</h3>
          </div>
          <div class="lang">
            <img src="../assets/lang/java.png" alt="logo" class="lang-image">
            <h3>Java</h3>
          </div>
        </div>
        <div class="framework">
          <h2>Framework</h2>
          <div class="lang">
            <img src="../assets/lang/rails.png" alt="logo" class="lang-image">
            <h3>Rails</h3>
          </div>
          <div class="lang">
            <img src="../assets/lang/vue.svg" alt="logo" class="lang-image">
            <h3>Vue.js</h3>
          </div>
          <div class="lang">
            <img src="../assets/lang/vuetify.png" alt="logo" class="lang-image">
            <h3>Vuetify</h3>
          </div>
        </div>
        <div class="other">
          <h2>Ohter</h2>
          <div class="other-contents">
            <div class="lang">
              <img src="../assets/lang/ios.png" alt="logo" class="lang-image">
              <h3>iOS</h3>
            </div>
            <div class="lang">
              <img src="../assets/lang/github.svg" alt="logo" class="lang-image">
              <h3>GitHub</h3>
            </div>
            <div class="lang">
              <img src="../assets/lang/aws.png" alt="logo" class="lang-image">
              <h3>AWS</h3>
            </div>
            <div class="lang">
              <img src="../assets/lang/docker.png" alt="logo" class="lang-image">
              <h3>Docker</h3>
            </div>
            <div class="lang">
              <img src="../assets/lang/circleci.png" alt="logo" class="lang-image">
              <h3>CircleCI</h3>
            </div>        
            <div class="lang">
              <img src="../assets/lang/writing.png" alt="logo" class="lang-image">
              <h5>Scenario Writing</h5>
            </div>
            <div class="lang">
              <img src="../assets/lang/shogi.png" alt="logo" class="lang-image">
              <h3>Shogi</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.languages{
    text-align: center;
    padding-left: 15%;
    padding-right: 15%;
}
.lang{
    margin :10px 30px;
    display: inline-block;
    width: 100px;
}
.lang-comment{
    width: 100px;
}
.lang-image{
    height: 50px;
    width: 50px;
}

.language {
  margin-bottom: 5%;
}

.framework {
  margin-bottom: 5%;
}

.other-contents {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* タブレット表示時 */
@media (max-width: 1024px) {
  .other-contents {
    display: inline;
  }
}

</style>