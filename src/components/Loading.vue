<template>
	<div class="loading">
		<div id="loading">
			<p class="pic">
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'loading',
		data() {
			return {}
		}
	}
</script>
<style >
	#loading {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
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