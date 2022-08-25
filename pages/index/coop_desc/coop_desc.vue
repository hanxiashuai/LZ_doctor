<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">医院信息</block>
		</cu-custom>
		<view class="detail-content">
			<view class="title">{{coopDesc.name}}</view>
			<view class="list">
				<view class="address">{{coopDesc.address}}</view>
				<view>{{coopDesc.time}}</view>
				<view>{{coopDesc.grade}}</view>
			</view>


			<view>{{coopDesc.intro}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coopDesc: []
			}
		},
		onLoad(params) {
			console.log(params);
			// 获取医生信息
			uni.request({
				url: "http://127.0.0.1:3007/api/cooperation",
				data: {
					id: params.id
				},
				success: (res) => {
					this.coopDesc = res.data.records[0]
					console.log(this.coopDesc);
				},
				fail: (err) => {
					console.error(err);
				},
			});
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.detail-content {
		padding: 20px;
		background-color: #fff;

		.title {
			font-size: 20px;
			font-weight: 600px;
		}

		.list {
			margin: 20px 0;
			color: #999999;
		}
	}
</style>
