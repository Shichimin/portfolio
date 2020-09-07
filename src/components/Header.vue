<template>
  <div class="header">
    <div class="header-inner">
      <h2 class="title">T-Portfolio</h2>
      <Nav class="nav"></Nav>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue'
export default{
    components:{
        Nav
    }
}
</script>

<style>
.header{
  background-color:#03111a;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
}
.header-inner{
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
}
.title{
  padding:20px 0px;
  margin:unset;
}
.nav{
  margin: auto ;
  margin-right: 0;
  padding: auto;
}
</style>
