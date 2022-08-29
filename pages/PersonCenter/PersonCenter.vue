<template>
	<view>
		<view class="headerBox">
			<cu-custom><block slot="content">我的</block></cu-custom>
			<!-- 头部 -->
			<!-- 未登录的显示模块 -->

			<view v-if="token == ''" class="login_header">
				<u-icon name="account-fill" color="#ccc" size="70"></u-icon>
				<text class="header_right" @click="login">登录/注册</text>
			</view>

			<!-- 登录后的显示模块 -->
			<view v-else class="userinfo_box">
				<view class="userinfo_box_top">
					<view class="userinfo_img"><open-data type="userAvatarUrl" class="userAvatar">用户头像</open-data></view>
					<view class="">
						<open-data v-if="name == ''" type="userNickName" class="userNicname">用户昵称</open-data>
						<view v-else class="">{{ name }}</view>
						<p style="margin-top: 3px;" class="font_color">{{ tel == '' ? '' : tel }}</p>
					</view>
					<navigator url="../userCenterPages/myCard/myCard"><button @click="editUserinfo" class="editBtn cu-btn round">编辑资料</button></navigator>
				</view>
				<view class="userinfo_box_bottom">
					<navigator url="/pages/userCenterPages/myAddress/myDoctor">
						<view class="left">
							<p>1</p>
							<p class="font_color">我的医生</p>
						</view>
					</navigator>
					<view class="left">
						<p>1</p>
						<p class="font_color">我的圈子</p>
					</view>
					<navigator url="/pages/index/integrate/integrate">
						<view class="right">
							<p>0.00</p>
							<p class="font_color">积分兑换</p>
						</view>
					</navigator>
				</view>
			</view>
		</view>

		<!-- main区域 -->
		<view class="main" style="margin-top:70px ;">
			<u-cell-group>
				<u-cell @click="goto1" :icon="require('../../static/image/医生处方.png')" title="我的处方" clickable></u-cell>
				<u-cell @click="goto2" icon="map-fill" title="地址管理" clickable></u-cell>
				<u-cell @click="goto3" icon="file-text-fill" title="健康档案" clickable></u-cell>
				<u-cell @click="goto4" icon="file-text-fill" title="我的名片" clickable></u-cell>
				<u-cell @click="goto5" icon="file-text-fill" title="我的专家" clickable></u-cell>
			</u-cell-group>
		</view>

		<!-- fotter 区域-->
		<view class="fotter" @click="logout">退出登录</view>
	</view>
</template>

<script>
import { getwxuserinfo } from '@/api/wx_userinfo.js';
export default {
	data() {
		return {
			name: '',
			tel: ''
		};
	},

	mounted() {
		console.log(this.$store.state);
		console.log(uni.getStorageSync('VUE_ADMIN_TOKEN'));
	},

	computed: {
		token() {
			return this.$store.state.token;
		}
	},

	methods: {
		//跳转到登录页
		login() {
			uni.navigateTo({
				url: '/pages/login/login'
			});
		},
		logout() {
			uni.navigateTo({
				url: '/pages/login/login'
			});
			this.$store.commit('logout');
		},
		editUserinfo() {
			uni.navigateTo({
				url: '/pages/editUserinfo/editUserinfo'
			});
		},
		async getNameTel() {
			let res = await getwxuserinfo();
			this.tel = res.data.tel;
			this.name = res.data.name;
		},
		goto1() {
			if (this.token != '') {
				uni.navigateTo({
					url: '../userCenterPages/myPrescription/myPrescription'
				});
			} else {
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
		},
		goto2() {
			if (this.token != '') {
				uni.navigateTo({
					url: '../userCenterPages/myAddress/myAddress'
				});
			} else {
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
		},
		goto3() {
			if (this.token != '') {
				uni.navigateTo({
					url: '../userCenterPages/myArchives/myArchives'
				});
			} else {
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
		},
		goto4() {
			if (this.token != '') {
				uni.navigateTo({
					url: '../userCenterPages/myCard/myCard'
				});
			} else {
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
		},
		goto5() {
			if (this.token != '') {
				uni.navigateTo({
					url: '../userCenterPages/myExperts/myExperts'
				});
			} else {
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
		}
	},
	onLoad() {
		this.getNameTel();
	}
};
</script>

<style lang="scss">
.headerBox {
	width: 100%;
	height: 125px;
	background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	color: #fff;
	overflow: hidden;

	.login_header {
		width: 100%;
		height: 80px;
		background-color: #ffff;
		display: flex;
		align-items: center;
		position: absolute;
		top: 65px;

		.header_right {
			font-size: 18px;
			font-weight: 500;
			color: #000;
		}
	}

	.userinfo_box {
		width: 90%;
		margin-left: 5%;
		color: #000;
		background-color: #fff;
		height: 120px;
		position: absolute;
		top: 65px;
		z-index: 1000;
		padding: 10px;

		.userinfo_box_top {
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin-bottom: 5px;
			.userinfo_img {
				width: 60px;
				height: 60px;
				border-radius: 50%;
			}
			.editBtn {
				color: #fff;
				font-size: 12px;
				height: 22px;
				background-color: #6186cd !important;
			}
		}

		.userinfo_box_bottom {
			display: flex;
			align-items: center;
			justify-content: space-around;
			.left,
			.center,
			.right {
				width: 60px;
				text-align: center;
			}
		}
		.font_color {
			color: #999;
		}
	}
}

.wxLogin {
	display: flex;
}

.main {
	width: 100%;
	background-color: #fff;
	margin-top: 10px;
	/deep/ .u-icon__icon {
		color: #6186cd !important;
		font-size: 25px !important;
	}
	/deep/ image {
		width: 25px !important;
		height: 25px !important;
	}
	/deep/ .u-cell__title-text {
		font-size: 17px !important;
		margin-left: 5px !important;
	}
}

.fotter {
	background-color: #fff;
	width: 100%;
	height: 50px;
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: #6186cd;
}
</style>
