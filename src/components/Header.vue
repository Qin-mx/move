<template>
  <div class="header">
	  <header id="header">
			<a href="javascript:;">关闭</a>
			<h1>爱电影</h1>
		</header>
  </div>
</template>
 
<script>
export default {
  name: 'header',
  data () {
    return { 
    }
  }
}
</script>
<style>
	/**
     * 头部
 */
#header {
  width: 100%;
  min-height: 8vh;
  line-height: 8vh;
  background: #20a0ff;
  text-align: center;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 66;
}
#header h1 {
  font-size: 20px;
  display: block;
}
#header a {
  color: #fff;
  display: none;
}
#header form {
  display: none;
}
</style>