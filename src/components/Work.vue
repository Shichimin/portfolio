<template>
  <div>
    <h1 class="content-title"><font-awesome-icon icon="hammer" class="icon"/> Works</h1>
    
    <ul class="works">
      <li class="card">
        <img class="card-img" src="../assets/work/imagecollector.png" alt="">
        <div class="card-content">
          <h1 class="card-title">ImageCollector (配信停止中)</h1>
          <p class="card-text">Twitterの画像を (一括/選択) 保存できるアプリ</p>
          <p class="card-lang">Swift</p>
          <br>
          <a href="https://apps.apple.com/us/app/id1063024729" class="card-link">App Store</a>
          <a href="https://github.com/kawakam/ImageCollector" class="card-link github-link">Github</a>
        </div>
      </li>
      <li class="card">
        <img class="card-img" src="../assets/work/ofutari.png" alt="">
        <div class="card-content">
          <h1 class="card-title">Ofutari (作成中)</h1>
          <p class="card-text">"行ってみたい"を繋ぐマッチングサービス</p>
          <p class="card-lang">JavaScript, Ruby (Rails), AWS</p>
          <br>
          <a href="#" class="card-link">Website</a>
          <a href="https://github.com/Shichimin/ofutari" class="card-link github-link">Github</a>
        </div>
      </li>
      <li class="card">
        <img class="card-img" src="../assets/work/linebot.png" alt="">
        <div class="card-content">
          <h1 class="card-title">コトバンクBot</h1>
          <p class="card-text">LINE Messaging APIを利用した辞書Bot</p>
          <p class="card-lang">Ruby (Rails)</p>
          <br>
          <a href="https://qiita.com/Shichimin/items/52d25f01331a8db97261" class="card-link">Qiita</a>
          <a href="https://github.com/Shichimin/kotobank_linebot" class="card-link github-link">Github</a>
        </div>
      </li>
      <li class="card">
        <img class="card-img" src="../assets/work/bombergirl.png" alt="">
        <div class="card-content">
          <h1 class="card-title">BOMBER GIRL</h1>
          <p class="card-text">ボンバーマン風のAndroidアプリケーション</p>
          <p class="card-lang">Java</p>
          <br>
          <a href="https://github.com/kawakam/BomberGirl" class="card-link github-link">Github</a>
        </div>
      </li>
      <li class="card">
        <img class="card-img" src="../assets/work/portfolio.png" alt="">
        <div class="card-content">
          <h1 class="card-title">Portfolio Site</h1>
          <p class="card-text">このサイト</p>
          <p class="card-lang">JavaScript (Vue.js)</p>
          <br>
          <a href="https://github.com/Shichimin/portfolio" class="card-link github-link">Github</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.works{
  list-style-type: none;
  padding-left: 0;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}
.jp{
  font-weight: 100;
}
.card-lang{
  font-weight: 500;
}
.card {
  display: inline-block;
  margin: 30px 60px;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  border: 0.1px solid;
  border-color: #171515;
}
.card-img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
  border-top: 0.1px solid;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link{
  border: 1px solid #00aaff;
  text-decoration: none;
  color: #00aaff;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
}
.card-link:hover {
  font-weight: 700;
}
.github-link{
  border-color: #171515;
  color: #171515;
}

@media screen and (max-width: 768px){
  .works{
      padding-left: 1%;
      padding-right: 1%;
  }
}
@media screen and (max-width: 550px){
  .card{
    width: 280px;
    margin: 30px 0;
  }
}
</style>