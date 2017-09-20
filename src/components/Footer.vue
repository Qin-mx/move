<template>
		<footer id="footer">
			<router-link v-if="islogin" to="/" class="one" >首页</router-link>
			<router-link v-if="islogin" to="/search" class="two">搜索</router-link>
			<router-link v-if="islogin" to="/film" class="three" >电影</router-link>
			<router-link v-if="islogin" to="/tv" class="four" >电视剧</router-link>
			<router-link v-else to="/login" class="five" >登录</router-link>
			<div class="line"></div>
			<!--<p v-else>所有资源来自https://ifilm.linganmin.cn</p>-->
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'footer',
		data() {
			return {
				isLink:false,
				islogin:false,
//				type: [
//					{text:'首页',class:'one'},
//					{text:'搜索',class:'two'},
//					{text:'电影',class:'three'},
//					{text:'电视剧',class:'four'},
//					{text:'登录',class:'five'},
//				]
			}
		},
		created(){
			if(localStorage._chat_user){
			let store = JSON.parse(localStorage._chat_user);
			this.islogin = store.flag;
			}else{
				this.islogin = false;
			}

		}
	}
</script>
<style scoped>
.line{
	transition:left 0.5s ease;
}
.router-link-exact-active.one ~ .line{
	  left:0;;
}
.router-link-exact-active.two ~ .line{
	  left:20;
}
.router-link-exact-active.three ~ .line{
	  left:40
}
.router-link-exact-active.four ~ .line{
	  left:60
}
.line{
	position: absolute;
	bottom: 5px;
	width: 25%;
	height:2px;
	background: #1359FD;
}
p{
	color: #20A0FF
}
</style>