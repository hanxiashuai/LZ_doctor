<template>
	<view style="background-color: #fff; height:800px">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">处方详情</block></cu-custom>
		<view class="imgBox">
			<image src="../../../../static/image/home.png" mode=""></image>
			<view class="">
				<view style="font-size: 22px;margin-bottom: 3px;">"考试焦虑症"健康处方</view>
				<view>服务周期：遵医嘱</view>
				<view style="font-size: 22px;color: #CF1221;margin-top: 3px;">￥0元 * 1</view>
			</view>
		</view>
		<view class="textBox">
			<view>
				<text class="title">订单状态</text>
				<text class="content">待支付</text>
			</view>
			<view>
				<text class="title">订单编号</text>
				<text class="content">220819154714992</text>
				<text style="color: #3c9cff;">复制编号</text>
			</view>
			<view>
				<text class="title">下单时间</text>
				<text class="content">2022-08-19 15:48</text>
			</view>
		</view>
		<view class="textBox">
			<view>
				<text class="title">订单总价</text>
				<text style="color: #3c9cff;">0.00元</text>
			</view>
			<view>
				<text class="title">支付方式</text>
				<text class="content">微信支付</text>
			</view>
			<view>
				<text class="title">备注</text>
				<text class="content">2022-08-19 15:48</text>
			</view>
		</view>
		<view class="title" style="float: right;margin: 5px;">暂无物流</view>
		<u-button class="payBtn" type="primary" @click="isShow">支付</u-button>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false
		};
	},
	methods: {
		isShow() {
			this.$refs.uToast.show({
				type: 'success',
				title: '成功主题(带图标)',
				message: '支付成功'
			});
		}
	}
};
</script>

<style lang="scss">
.imgBox {
	width: 100%;
	display: flex;
	height: 100px;
	border-bottom: 1px solid rgb(214, 215, 217);
	padding: 10px;
	/deep/ image {
		height: 80px;
		width: 80px;
		border: 1px solid red;
		margin-right: 10px;
	}
}
.textBox {
	width: 100%;
	height: 100px;
	border-bottom: 1px solid rgb(214, 215, 217);
	view {
		display: flex;
		padding: 8px;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
}

.title {
	color: #000;
	font-weight: 549;
}
.content {
	color: #9b9b9b;
}
.payBtn {
	position: fixed;
	bottom: 0;
	height: 70px;
	font-size: 22px !important;
}
</style>
