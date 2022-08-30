<template>
	<view>
		<!-- 导航栏 -->
		<template>
			<view>
				<u-navbar height="60px" leftText="返回" title="注册" bgColor="#F1F1F1" :safeAreaInsetTop="false">
					<view class="u-nav-slot" slot="left"><u-icon @click="toIndex()" name="home" size="20"></u-icon></view>
				</u-navbar>
			</view>
		</template>

		<view class="content">
			<view class="content_top">
				<view class="title">医生集团</view>
				<button @click="wxlogin" class="loginBtn cu-btn">微信授权登录</button>
			</view>
			<u-checkbox-group>
				<u-checkbox @change="isAgree" v-model="checked" shape="circle"></u-checkbox>
				<text @click="toUserAgreement">用户协议</text>
				<u-toast ref="uToast" />
				<u-toast ref="uToast1" />
				<u-toast ref="uToast2" />
			</u-checkbox-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			checked: false
		};
	},
	methods: {
		//微信授权登录
		wxlogin() {
			if (!this.checked) {
				this.$refs.uToast.show({
					type: 'primary',
					title: '成功主题(带图标)',
					message: '请阅读并同意下方用户协议'
				});
			} else {
				let _this = this;
				uni.getUserProfile({
					desc: '授权登录',
					success(aaa) {
						console.log(aaa);
						uni.login({
							success(res) {
								console.log('success回调参数', res);
								uni.request({
									method: 'GET',
									url: 'http://127.0.0.1:3007/api/wxlogin',
									data: {
										code: res.code
									},
									success(res) {
										console.log('1111111', res);
										_this.$store.commit('setTooken', res.data.token);

										if (res.data.code == '0') {
											_this.$refs.uToast1.show({
												type: 'success',
												title: '成功主题(带图标)',
												message: '登录成功!'
											});

											//登陆成功跳转到首页
											setTimeout(function() {
												uni.reLaunch({
													url: '/pages/index'
												});
											}, 500);
										} else {
											_this.$refs.uToast2.show({
												type: 'err',
												title: '成功主题(带图标)',
												message: '登录异常请稍后重试'
											});
										}
									},
									fail(err) {
										console.log(err);
									}
								});
							},
							fail(err) {
								console.log(err);
							}
						});
					}
				});
			}
		},

		//去首页
		toIndex() {
			console.log(1111);
			uni.reLaunch({
				url: '/pages/index'
			});
		},

		//跳转到用户协议
		toUserAgreement() {
			uni.navigateTo({
				url: './userAgreement'
			});
		},

		//是否同意用户协议
		isAgree() {
			this.checked = !this.checked;
			console.log(this.checked);
		},
	}
};
</script>

<style lang="scss">
.content {
	margin-top: 160rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 1100rpx;
	justify-content: space-between;
	letter-spacing: 4rpx;
	.title {
		font-size: 60rpx;
		color: #6186cd;
	}
	.content_top {
		height: 300rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.loginBtn {
		width: 600rpx;
		height: 76rpx;
		color: #fff;
		font-size: 34rpx;
		background-color: #6186cd !important;
	}
}
</style>
