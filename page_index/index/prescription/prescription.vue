<template>
	<view>
		<view class="preItem" v-for="item in prescriptionList" :key="item.id" @click="goBuy(item.id)">
			<!-- <navigator :url="`/pages/index/buyMedicine/buyMedicine${item.id}`"> -->
			<view class="left_box">
				<image class="medicineImg" :src="item.img" mode=""></image>
			</view>
			<view class="right_box">
				<view class="title">
					{{item.name}}
				</view>
				<view class="period">
					服务周期：{{item.period}}
				</view>
				<view class="type">
					<span class="type_tag">{{item.type}}</span>
				</view>
				<view class="price">
					￥{{item.price}}元
				</view>
			</view>
			<!-- </navigator> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				prescriptionList: []
			}
		},
		created() {
			// 获取资讯动态数据
			uni.request({
				url: "http://127.0.0.1:3007/api/prescription",
				success: (res) => {
					this.prescriptionList = res.data.records
					console.log(this.prescriptionList);
				},
				fail: (err) => {
					console.error(err);
				},
			});
		},
		methods: {
			goBuy(id) {
				uni.navigateTo({
					url: `/pages/buyMedicine?id=${id}`,
					fail: (err) => {
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.preItem {
		background-color: #fff;
		display: flex;
		align-items: center;
		padding: 40rpx;

		.left_box {
			margin-right: 20rpx;

			.medicineImg {
				width: 200rpx;
				height: 200rpx;
			}
		}

		.right_box {
			.title {
				font-size: 18px;
			}

			.period {
				color: #999;
				margin-top: 10rpx;
			}

			.type {
				.type_tag {
					font-size: 12px;
					padding: 3px 5px;
					border: 1px solid #f9ae3d;
					border-radius: 3px;
					color: #f9ae3d;
				}

				width: auto;
				margin-top: 18rpx;
			}

			.price {
				color: #cf1221;
				margin-top: 10rpx;
				font-size: 16px
			}
		}

	}
</style>
