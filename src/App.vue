<template>
  <div id="app">
    <marquee  Scrollamount=20 loop="">*You can reach me at alptugildiz@gmail.com !</marquee>
    <header-component></header-component>
    <div class="container-fluid">
      <content-component></content-component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>


<style>
marquee{
  font-weight: 400;
  font-style: italic;
  margin-top: 5px;
  font-size: 22px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
* {
  box-sizing: border-box;
  padding: 0px;
  font-family: 'Abel', sans-serif;
}
body::-webkit-scrollbar {
  display: none;
}
body{
  background:#C6D1D3;
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: black;
}
</style>
