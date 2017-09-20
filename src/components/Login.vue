<template>
	<div class="main">
		<h3 class="login-t">欢迎登录</h3>
		<div class="dengl">

			<form>
				<div class="form-grup">
					<label for="">登录名：</label>
					<input type="text" placeholder="请输入账号" v-model="usename" v-focus="isNull"/>
				</div>
				<div class="form-grup">
					<label for="">&nbsp;&nbsp;&nbsp;密码：</label>
					<input type="password" placeholder="请输入密码" v-model="posword" v-focus="isu"/>
				</div>
				<div class="tips" v-if="erron">
					<p>用户名或者密码输入错误</p>
				</div>
				<div class="btn">
					<button @click="send">登录</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				usename: '',
				posword: '',
				erron: false,
				isNull: false,
				isu:false,
			}
		},
		methods: {
			send() {
				//				点击提交,判断是否正确
				if(this.usename != '' && this.posword != '') {
					//					保存到
					localStorage._chat_user = JSON.stringify({
						name: this.usename,
						pass: this.posword,
						flag: true
					})
					this.erron = false;
					this.$router.push('/')
				} else{
					this.erron = true
				}
				
			}
		},
		directives: {
			focus: {
				inserted: function(el, bind) {
					if(bind.value) {
						el.focus();
					}
				}
			}
		},
	}
</script>
<style scoped>
	.btn {
		display: flex;
		justify-content: center;
		margin: 0.1rem 0;
	}
	
	.btn button {
		width: 60%;
		background: #20A0FF;
		height: 0.8rem;
		border: 0;
		outline: none;
		cursor: pointer;
		color: #fff;
	}
</style>