<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="res"><h1 class="res-title"> Portfolio</h1></div>
    <div class="nav-res">
      <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
        <font-awesome-icon icon="image" class="nav-icon"/>
        <p class="comment">Top</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#about')">
        <font-awesome-icon icon="user-circle" class="nav-icon"/>
        <p class="comment">About</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">
        <font-awesome-icon icon="code" class="nav-icon"/>
        <p class="comment">Skills</p>
      </a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#work')">
        <font-awesome-icon icon="hammer" class="nav-icon"/>
        <p class="comment">Works</p>
      </a>
    </div>

    <div id="top">
      <div id="main">
        <vue-typer :text="['Welcome to Tomoki Kawakami\'\s Portfolio Site!']" class="top-text" :repeat='0'
        :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000"></vue-typer>
      </div>
    </div>
    

    <About id="about"></About>
    <Skill id="skill"></Skill>
    <Work id="work"></Work>

    <Footer></Footer>
  </div>
</template>



<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Work from './components/Work.vue'
import 'normalize.css'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    About,
    Skill,
    Work,
  },
  methods:{
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        800,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,300&display=swap");
#app{
  text-align: center;
}
#top{
  height: 50vh;
}
#main{
  font-size: 30px;
  margin-top: 20%;
  left: 50%;
}
.particles{
  z-index: 1;
  height: 100vh;
}
.res{
  display: none;
  background-color: #03111a;
}
.res-title{
  background-color:#03111a;
  padding: 10px;
  margin: 0;
  color: whitesmoke;
}
.vue-typer .custom.char{
  color: black;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.nav-res{
  display: none;
}
.nav-icon{
  font-size: 1.5em;
}
.comment{
  margin:5px 0;
  font-weight: 500;
  color: whitesmoke;
}
.link-content{
  color: whitesmoke;
  text-decoration: none;
  min-width: 8%;
  font-size: 10px;
  text-align: center;
}
.top-text{
  color: black;
  font-size: 70px;
}
.icon{
  font-size: 0.8em;
}
.text{
    font-weight: 500;
}
.content-title {
  padding: 120px 0 20px 0;
  margin: 50px 20% 100px 20%;
  position: relative;
  font-size: 2em;
  color: #333;
  border-bottom: rgba(12, 50, 78, 0.4) 3px solid;
}
@media screen and (max-width: 1200px) {
  .top-text{
    font-size: 35px;
  }
}
@media screen and (max-width: 768px) {
  .top-text {
    font-size: 25px;
  }
  #header {
    display: none;
  }
  .res {
    display: contents;
    background-color: #03111a;
  }
  .nav-res {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    background-color: #03111a;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .content-title {
    margin-bottom: 30px;
  }
}

@media (max-width: 1024px) {
  #main{
    font-size: 10px;
    margin-top: 50%;
    left: 50%;
  }
}
</style>