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
					<image class="userinfo_img" src="../../static/image/yy01.jpg" mode=""></image>
					<view class="">
						<p style="margin-bottom: 3px;">韩某某</p>
						<p class="font_color">18738663575</p>
					</view>
					<button @click="editUserinfo" class="editBtn cu-btn round">编辑资料</button>
				</view>
				<view class="userinfo_box_bottom">
					<view class="left">
						<p>0</p>
						<p class="font_color">我的医生</p>
					</view>
					<view class="center">
						<p>1</p>
						<p class="font_color">我的圈子</p>
					</view>
					<view class="right">
						<p>0.00</p>
						<p class="font_color">积分兑换</p>
					</view>
				</view>
			</view>
		</view>

		<!-- <view class="wxLogin">
			<open-data type="userAvatarUrl" class="userAvatar">用户头像</open-data>
			<open-data type="userNickName" class="userNicname">用户昵称</open-data>
		</view> -->
		<!-- main区域 -->
		<view class="main" style="margin-top:70px ;">
			<u-cell-group>
				<u-cell url="../userCenterPages/BBS/BBS" :icon="require('../../static/image/论坛资讯.png')" title="我的论坛" clickable></u-cell>
				<u-cell url="../userCenterPages/myPrescription/myPrescription" :icon="require('../../static/image/医生处方.png')" title="我的处方" clickable></u-cell>
				<u-cell url="../userCenterPages/myAddress/myAddress" icon="map-fill" title="地址管理" clickable></u-cell>
				<u-cell url="../userCenterPages/myArchives/myArchives" icon="file-text-fill" title="健康档案" clickable></u-cell>
				<u-cell url="../userCenterPages/myCard/myCard" icon="file-text-fill" title="我的名片" clickable></u-cell>
				<u-cell url="../userCenterPages/myExperts/myExperts" icon="file-text-fill" title="我的专家" clickable></u-cell>
				<u-cell v-if="isLogin" url="../userCenterPages/myOrder/myOrder" icon="file-text-fill" title="团友订单" clickable></u-cell>
			</u-cell-group>
		</view>

		<!-- fotter 区域-->
		<view class="fotter" @click="logout">退出登录</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isLogin: false
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
		}
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
			justify-content: space-between;
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
			justify-content: space-between;
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
