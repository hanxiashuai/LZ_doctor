<template>
	<view>
		<view class="content">
			<video class="shipin" :src="dynamicDesc.video" controls></video>
			<view class="detail">
				<view class="title">
					{{dynamicDesc.title}}
				</view>
				<view class="date">
					{{dynamicDesc.time}}
				</view>
				<view class="tupian">
					<image class="img" :src="item" mode="" v-for="item in imgList" :key="item"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dynamicDesc: [],
				imgList: [],
			}
		},
		onLoad(params) {
			// 获取资讯动态信息
			uni.request({
				url: "http://127.0.0.1:3007/api/dynamic",
				data: {
					id: params.id
				},
				success: (res) => {
					console.log(res);
					this.dynamicDesc = res.data.records
					this.imgList = this.dynamicDesc.descImg.split(',')
					console.log(this.dynamicDesc);
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
	.content {
		width: 100%;
		background-color: #fff;

		.shipin {
			width: 100%;
		}

		.detail {
			padding: 0px 20px;

			.title {
				font-size: 25px;
				font-weight: 800;
				margin: 10px 0;
			}

			.date {
				color: #999
			}

			.tupian {
				width: 100%;
				display: flex;
				flex-direction: column;

				.img {
					width: 100%;
					height: 400px;
				}
			}
		}


	}
</style>
