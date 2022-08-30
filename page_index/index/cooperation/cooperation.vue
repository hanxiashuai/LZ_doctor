<template>
	<view>
		<view class="hospital" v-for="item in allHospital" :key="item.id">
			<image class="img" :src="item.image" mode=""></image>
			<view class="information">
				<text class="hospital_name">{{item.name}}</text>
				<text class="hospital_address">{{item.address}}</text>
				<view style="width: 80px; margin:8px 0">
					<u-tag :text="item.grade" type="warning" plain></u-tag>
				</view>
				<navigator :url="`/page_index/index/coop_desc/coop_desc?id=${item.id}`">
					<view class="hospital_detail">
						<text class="detail">详情</text>
						<u-icon name="arrow-right-double" color='#ff8515'></u-icon>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allHospital: []
			}
		},
		created() {
			// 获取医院所有数据
			uni.request({
				url: "http://127.0.0.1:3007/api/cooperation",
				success: (res) => {
					this.allHospital = res.data.records
					console.log(this.allHospital);
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
	.hospital {
		padding: 10px 10px;
		display: flex;
		background-color: #fff;

		.img {
			width: 120px;
			height: 110px;
		}

		.information {
			margin-left: 15px;
			display: flex;
			flex-direction: column;

			.hospital_name {
				font-size: 18px;
				margin-bottom: 5px;
			}
		}

		.hospital_detail {
			display: flex;

			.detail {
				color: #ff8515;
			}
		}
	}
</style>
