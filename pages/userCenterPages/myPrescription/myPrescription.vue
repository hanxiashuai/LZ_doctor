<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="content">我的处方</block></cu-custom>

		<view class="cardBox">
			<u-cell-group>
				<u-cell title="订单号:220819154909431" clickable value="待支付"></u-cell>
				<view @click="detail" class="imgBox">
					<image src="../../../static/image/home.png" mode=""></image>
					<view class="">
						<view style="font-size: 22px;margin-bottom: 3px;">"考试焦虑症"健康处方</view>
						<view>服务周期：遵医嘱</view>
						<view style="font-size: 22px;color: #CF1221;margin-top: 3px;">￥0元 * 1</view>
					</view>
				</view>
				<u-cell title="2022-08-19 15:48" clickable value="总价: 0.00"></u-cell>
				<view @click="delBtn" class="btnBox"><u-button type="primary" :plain="true" text="删除"></u-button></view>
				<u-toast ref="uToast" />
			</u-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		detail() {
			uni.navigateTo({
				url: '/pages/userCenterPages/myPrescription/prescriptionDetails/prescriptionDetails'
			});
		},
		delBtn() {
			this.$refs.uToast.show({
				type: 'success',
				title: '成功主题(带图标)',
				message: '删除成功'
			});
		}
	}
};
</script>

<style lang="scss">
.cardBox {
	height: 250px;
	width: 100%;
	background-color: #fff;

	.imgBox {
		display: flex;
		height: 100px;
		border-bottom: 1px solid rgb(214, 215, 217);
		padding: 10px;
		image {
			height: 80px;
			width: 80px;
			border: 1px solid red;
			margin-right: 10px;
		}
	}
}
.btnBox {
	height: 44px;
	.u-button {
		float: right;
		width: 90px;
		margin-top: 10px;
		margin-right: 10px;
	}
}
</style>
