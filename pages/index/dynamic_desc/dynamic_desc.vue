<template>
	<view>
		<u-navbar title="SLN医生集团" :autoBack="true">
		</u-navbar>
		<view class="content">
			<video class="shipin" :src="dynamicDesc.video" controls></video>
			<view class="detail">
				<view class="title">
					<!-- <span style="display:dynamicDesc.type=='科普动画'?'block':'none' ;">{{dynamicDesc.type}}</span> -->
					<span v-if="dynamicDesc.type=='科普动画'">{{dynamicDesc.type}}</span>
					{{dynamicDesc.title}}
				</view>
				<view class="date">
					{{dynamicDesc.time}}
				</view>
				<view class="tupian">
					<image class="img" :src="dynamicDesc.img01" mode=""></image>
					<image class="img" :src="dynamicDesc.img02" mode=""></image>
					<image class="img" :src="dynamicDesc.img03" mode=""></image>
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
			}
		},
		onLoad(params) {
			// 获取医生信息
			uni.request({
				url: "http://127.0.0.1:3007/api/dynamic",
				data: {
					id: params.id
				},
				success: (res) => {
					console.log(res);
					this.dynamicDesc = res.data.records
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
