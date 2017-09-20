<template>
	<div class="home">
		<!--中间内容-->
		<div class="main">
			<!--加载显示-->
			<div class="loading" v-if='isLoading'>
				<div id="loading">
					<p class="pic">
					</p>
				</div>
			</div>
			<!--电影-->
			<section class="floor clex">
				<header>
					<h3 class="fl">电影专区</h3>
					<router-link to="/film" class="more fr">
						更多
					</router-link>
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

			<!--电视-->
			<section class="floor clex">
				<header>
					<h3 class="fl">电视专区</h3>
					<router-link to="/tv" class="more fr">
						更多
					</router-link>
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
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				movies: [],
				tvs: [],
				urls: 'https://www.ifilm.ltd/api/index',
				isLoading: false
			}
		},
		mounted() {
			this.isLoading = true;
			this.axios.get(this.urls)
				.then(res => {
					this.movies = res.data.movies;
					this.tvs = res.data.tvs;
					this.isLoading = false;
				}).catch(error => {
					alert('加载失败')
				})
		}
	}
</script>
<style scoped>
	#loading {
		width: 100%;
		height: 84vh;
		position: fixed;
		top: 8vh;
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