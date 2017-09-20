import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	islogin: false;
}
//////计算
////const getters = {
////	//请求数据时加载状态
////	showLoading: state => state.showLoading
////}
//////事件和mutations
////const action = {
////	// 请求数据时状态loading
////	FETCH_LOADING({
////		commit
////	}, res) {
////		commit(types.FETCH_LOADING, res)
////	},
////}
////const mutations = {
////	// 请求数据时loading
////	[types.FETCH_LOADING](state, res) {
////		state.fetchLoading = res
////	}
////}