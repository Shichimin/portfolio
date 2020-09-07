<template>
  <div>
    <h1 class="content-title"><font-awesome-icon icon="user-circle" class="icon"/> About</h1>
    <div>
      <div class="about">
        <div class="name">
          <img src="../assets/profile.jpg" alt="logo">
          <h2>Name</h2>
          <p class="text">川上 智樹 (Tomoki Kawakami)</p>
        </div>

        <div class="birthday">
          <h2>Birthday</h2>
          <p class="text">1992-04-14</p>
        </div>
        <div class="profile">
          <h2>Profile</h2>
          <div class="profile-content">
            <div class="profile-block">
              <p class="text">文系私大2年次に観賞した「攻殻機動隊 S.A.C.」というアニメ作品に衝撃を受け、プログラミングやネットワークセキュリティの世界に興味をもつ。</p>
              <p class="text">その後、独学でプログラミングやセキュリティについて勉強していたが、どうせ学ぶならその道の専門家から直接指導を受けたいという考えに至り、ネットワークセキュリティ系の研究室がある大学を選んで再受験。情報科学科へ再入学する。</p>
              <p class="text">大学在学中はネットワークセキュリティや、当時流行していたビットコイン関連のセキュリティ（ビットコインウォレットのセキュリティ）などを研究しつつ、エンジニアリングスキルの向上を目的として都内のスタートアップ企業で長期インターンも行う。また、ネイティブアプリの個人開発にも興味をもち、iOSやAndroidアプリのリリースも経験する。</p>
              <p class="text">趣味として作っていたゲームのシナリオ部分を友人に褒められたことがきっかけとなり、大学卒業後はゲーム会社のシナリオライター職に着く。しかし、シナリオライターという職業はその性質上、自分が執筆したシナリオがプロダクトにどの程度貢献しているかを定量的に判断することが難しく、自分の仕事の成果やプロダクトへの貢献度合いを実感しやすい（自分の頑張りがアプリの新機能や改善された数値という具体的な形で現れやすい）エンジニア職に着きたいという気持ちが次第に強くなる。そして現在、Webエンジニアを目指して転職活動中。</p>
              <p class="text">今後は様々な開発工程を幅広く経験し、いずれは新規サービスをゼロから立ち上げてグロースさせられるような、技術レベルが高いだけでなくビジネスにも貢献できるエンジニアになりたい。</p>
            </div>
          </div>
        </div>
        <div class="summary">
          <h2>Job Summary</h2>
          <div class="summary-content">
            <div class="summary-block">
              <p class="text">2015年12月〜2016年9月 大学在学中にエンジニアインターンとして株式会社divに勤務</p>
              <p class="text">2016年3月〜2016年9月 大学在学中にiOSエンジニアインターンとしてRepro Inc.に勤務</p>
              <p class="text">2018年10月〜2019年6月 株式会社シナリオテクノロジーミカガミ シナリオライター（業務委託）</p>
              <p class="text">2019年7月〜現在 株式会社スマイルマイスター シナリオライター</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about{
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
}
.resent{
  margin-top: 50px;
}
.me{
    margin:0 50px;
}
@media screen and (max-width: 768px){
	.about {
		flex-direction: column;
	}
	.me {
    margin: 0 auto;
	}
}

.photo {
  margin-bottom: 5%;
}

.name img{
  width: 20%;
  height: 20%;
}

.name {
  margin-bottom: 5%;
}

.birthday {
  margin-bottom: 5%;
}

.profile {
  margin-bottom: 5%;
}

.profile-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-block {
  align-items: center;
  width: 50%;
}

.profile .text {
  text-align: left;
}

.profile-block p {
  text-indent: 1em;
}

.summary-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.summary-block .text{
  text-align: left;
}

/* タブレット表示時 */
@media (max-width: 1024px) {
  .profile-block {
    align-items: center;
    width: 90%;
  }

  .name img{
    width: 50%;
    height: 50%;
  }
}

</style>