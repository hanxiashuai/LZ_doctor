<template>
	<view>
		<view class="headerBox">
			<view class="toIndex"><u-icon @click="toIndex" name="home" color="#000" size="20"></u-icon></view>
			<cu-custom><block slot="content">我的</block></cu-custom>
		</view>
		<!-- 头部 -->
		<view class="login_header">
			<u-icon name="account-fill" color="#ccc" size="70"></u-icon>
			<text class="header_right" @click="login">登录/注册</text>
		</view>
		<!-- main区域 -->
		<view class="main">
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
		<view class="fotter">退出登录</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isLogin: false
		};
	},
	methods: {
		//跳转到登录页
		login() {
			uni.navigateTo({
				url: '/pages/login/login'
			});
		},
		toIndex() {
			console.log(1111);
			uni.navigateTo({
				url: '/pages/index/index'
			});
		}
	}
};
</script>

<style lang="scss">
.login_header {
	width: 100%;
	height: 80px;
	background-color: #ffff;
	display: flex;
	align-items: center;

	.header_right {
		font-size: 18px;
		font-weight: 500;
		margin-left: 20px;
	}
}

.headerBox {
	width: 100%;
	height: 100px;
	background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	color: #fff;
	overflow: hidden;
	.toIndex {
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 25px 0 0 5px;
		border: 1px solid #fff;
		border-radius: 50%;
		background-color: rgb(255, 255, 255);
	}
}

.main {
	width: 100%;
	background-color: #fff;
	margin-top: 10px;
	font-size: 30px;
	/deep/ .u-icon__icon {
		color: #3f86ff !important;
		font-size: 25px !important;
	}
	/deep/ image {
		width: 25px !important;
		height: 25px !important;
	}
	/deep/ .u-cell__title-text {
		font-size: 18px !important;
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
	color: #3f86ff;
}
</style>
