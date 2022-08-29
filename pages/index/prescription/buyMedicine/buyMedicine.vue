<template>
	<view class="">
		<view class="HomeBtn" @click="goHome">
			回到首页
		</view>
		<view class="content">
			<view class="">
				<image :src="medicineData.img" mode=""></image>
				<view class="title">
					{{medicineData.name}}
				</view>
				<view class="price">
					￥{{medicineData.price}}元
				</view>
				<view class="type">
					<span class="type_tag">{{medicineData.type}}</span>
				</view>
			</view>
			<u-divider lineColor="#999"></u-divider>
			<view class="otherInfo">
				<view class="line1">
					<u-icon size="20px" name="calendar"></u-icon>
					<span>服用周期：{{medicineData.period}}</span>
				</view>
				<view class="line1">
					<u-icon size="20px" name="file-text"></u-icon>
					<span>疗法服务：{{medicineData.therapy}}</span>
				</view>
			</view>
			<u-tabs :list="list1" :current="current" @change="tabChange" :scrollable="false"></u-tabs>
			<view class="tab_content">
				<view class="detail" v-if="current==0">
					<image class="img" :src="item" mode="" v-for="item in imgList" :key="item"></image>
				</view>
				<view class="" v-if="current==1">
					nijius
				</view>
				<view class="" v-if="current==2">
					nijiussssssss
				</view>
			</view>
			<view class="footer">
				<view class="callme">
					<u-icon name="phone" color="#1d7be9"></u-icon>
					<p>电话咨询</p>
				</view>
				<view class="online">
					<u-button text="添加到我的处方" open-type="contact" color="#ff8515"></u-button>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				medicineData: [],
				current: 0,
				imgList: [],
				list1: [{
					name: '详情',
				}, {
					name: '说明书',
				}, {
					name: '评价'
				}],
			}
		},
		onLoad(options) {
			console.log(options);
			uni.request({
				url: "http://127.0.0.1:3007/api/prescription",
				data: {
					id: options.id
				},
				success: (res) => {
					this.medicineData = res.data.records[0]
					this.imgList = this.medicineData.descImg.split(',')
					console.log(this.medicineData);
					console.log(this.imgList);
				}
			})
		},
		methods: {
			tabChange(e) {
				this.current = e.index
			},
			goHome() {
				console.log(1111);
				uni.switchTab({
					url: '/pages/index/index',
					fail: (err) => {
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.HomeBtn {
		width: 100%;
		padding: 10rpx 0;
		color: #fff;
		background-color: #f9ae3d;
		text-align: center;
	}

	.content {
		padding: 20px;
		background-color: #fff;

		.title {
			font-size: 18px;
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

		.line1 {

			font-size: 18px;
			display: flex;
		}

		.tab_content {
			margin-top: 40rpx;
		}

		.detail {
			width: 100%;
			display: flex;
			flex-direction: column;

			.img {
				width: 100%;
				height: 400px;
			}
		}


	}

	.footer {
		display: flex;
		width: 100%;
		height: 60px;
		padding: 10px;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;

		.callme {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex: 1;
		}

		.online {
			flex: 2;

		}
	}
</style>
