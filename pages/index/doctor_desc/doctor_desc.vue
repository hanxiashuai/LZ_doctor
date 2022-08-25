<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">医生主页</block>
		</cu-custom>
		<view class="top_container">
			<view class="left_box">
				<p class="team">{{doctorDesc.team}}</p>
				<view class="tags">
					<p>{{doctorDesc.department}}</p>
					<p>{{doctorDesc.position}}</p>
				</view>
				<p class="unit">{{doctorDesc.unit}}</p>
			</view>
			<view class="right_box">
				<image :src="doctorDesc.photo" mode=""></image>
				<u-button class="fllowBtn" text="关注" shape="circle" size="mini" color="#ff8515" plain>
				</u-button>
			</view>
		</view>`
		<view class="desc">
			<p>{{doctorDesc.desc}}</p>
			<view class="onlineTime">在线时间：<span>{{doctorDesc.onlineTime}}</span></view>
		</view>
		<view class="footer">
			<view class="callme">
				<u-icon name="phone" color="#1d7be9"></u-icon>
				<p>电话咨询</p>
			</view>
			<view class="online">
				<u-button text="在线聊天室" color="#ff8515"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				doctorDesc: []
			}
		},
		onLoad(options) {
			console.log(options.id);
			// 获取医生信息
			uni.request({
				url: "http://127.0.0.1:3007/api/doctors",
				data: {
					id: options.id
				},
				success: (res) => {
					this.doctorDesc = res.data.records[0]
					console.log(this.doctorDesc);
				},
				fail: (err) => {
					console.error(err);
				},
			});
		},

		methods: {

		},
	}
</script>

<style lang="scss">
	.top_container {
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;

		p {
			margin-bottom: 20px;
		}

		.left_box {
			.team {
				font-size: 20px;
				font-weight: 400;
			}

			.tags {
				display: flex;

				p {
					margin-right: 10px;
					font-size: 16px
				}
			}

			.unit {
				font-size: 16px
			}
		}

		.right_box {
			image {
				width: 80px;
				height: 80px;
				border: 1px solid lightgray;
			}

			.fllowBtn {
				margin-top: 10px;
			}
		}
	}

	.desc {
		background-color: #fff;
		padding: 20px;

		.onlineTime {
			margin-top: 20px;
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
