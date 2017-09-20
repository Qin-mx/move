<template>
	<div id="app">
		<!--<loading></loading>-->
		<headers></headers>
			<transition name="fade" mode='out-in'>
				<keep-live>
					<router-view></router-view>
				</keep-live>
						
			</transition>
		<footers></footers>
	</div>
</template>

<script>
//	import indexJs from './assets/js/index.js'
	import headers from '@/components/Header.vue'
	import footers from '@/components/Footer.vue'
	import loading from '@/components/Loading.vue'
	export default {
		name: 'app',
		components: {
			headers,
			footers,
			loading
		},
	}
</script>

<style rel="stylesheet/css">
	/*@import './assets/css/index.css'*/
</style>