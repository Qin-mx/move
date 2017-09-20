<template>
	<!--主体-->
	<div class="main">
		<div class="search">
			<form action="" @submit.stop.prevent="search(q)">
				<input type="search" name="query" id="query" value="" placeholder="请输入关键词" v-model="val" @keyup.enter.prevent="search(val)" />
				<button type="button" @click="search(val)">搜索</button>
			</form>
		</div>
		<!--加载显示-->
		<div class="loading" v-if='isLoading'>
			<div id="loading">
				<p class="pic">
				</p>
			</div>
		</div>
		<ul class="querys" v-if="isSearch">
			<li>
				<router-link to="/film">
					<strong>电影专区</strong>
				</router-link>

				</a>
			</li>
			<li>
				<router-link to="/tv">
					<strong>电视专区</strong>
				</router-link>
			</li>
		</ul>

		<section class="floor clex" v-if="movies.length > 0">
			<header>
				<h3 class="fl">电影专区</h3>
			</header>
			<div class="container">
				<ul class="lits">
					<li v-for="item in movies">
						<router-link :to="{name:'play',params:{id:item.id}}" v-bind:title="item.title">
							<div class="img">
								<img :src="item.cover" alt="" />
							</div>
							<div class="img-dec">
								<p class="title">{{item.title}}</p>
								<span class="vd-pf">更新时间：{{item.updated_at
}}</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>

		</section>
		<section class="floor clex" v-if="tvs.length > 0">
			<header>
				<h3 class="fl">电视专区</h3>
			</header>
			<div class="container">
				<ul class="lits">
					<li v-for="item in tvs">
						<router-link :to="{name:'play',params:{id:item.id}}" v-bind:title="item.title">
							<div class="img">
								<img :src="item.cover" alt="" />
							</div>
							<div class="img-dec">
								<p class="title">{{item.title}}</p>
								<span class="vd-pf">更新时间：{{item.updated_at
}}</span>
							</div>
											</router-link>
					</li>
				</ul>
			</div>

		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isSearch: true,
				urls: 'https://www.ifilm.ltd/api/',
				val: '',
				movies: [],
				tvs: [],
				isLoading: false
			}
		},
		methods: {
			search(val) {
				//				先判断有无参数
				//发送数据请求
				//成功则页面刷新
				if(val.length == 0) {
					//					恢复页面
					this.isSearch = true;
					this.movies = [];
					this.tvs = []
					alert('请输入信息')
					return;
				} else {
					this.isSearch = false;
					this.isLoading = true;
					//				保存数据
					localStorage.setItem('q', val);
					this.axios.get(this.urls + 'search?q=' + val).then(res => {
						this.movies = res.data.movies;
						this.tvs = res.data.tvs;
//						console.log(this.movies)
						//						加载也消失
						this.isLoading = false;
						this.isSearch = false;
						this.val = ''
					}).catch(error => {
						alert('数据加载失败')
					})
				}
			},
		},
		mounted() {
			var val = localStorage.getItem('q');
			if(val == null) {
				return;
			}
			//			console.log(typeof val)
			//			重新调用
			this.search(val)
		}
	}
</script>
<!--样式不生效   样式加载失败--背景图片地址不正确-->
<style scoped>
	* {
		outline: none;
	}
	
	.search {
		padding: 10px;
	}
	
	form {
		display: block;
		display: flex;
	}
	
	#query {
		flex: 1;
		height: 30px;
		padding: 0 10px;
		line-height: 30px;
		border: 1px solid #20A0FF;
		text-align: center;
	}
	
	button {
		border: 1px solid #20A0FF;
		background: #20A0FF;
		color: #fff;
		height: 30px;
		width: 60px;
		cursor: pointer;
	}
	
	.querys li {
		text-align: center;
	}
	
	#loading {
		width: 100%;
		height: 74vh;
		position: fixed;
		top: 16vh;
		left: 0;
		background-color: #fff;
		z-index: 99;
	}
	
	#loading p {
		width: 40px;
		height: 40px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background: url(../assets/preloader.gif) no-repeat;
	}
</style>