<template>
	<view>
		<view class="content">
			<u-cell-group>
				<u-cell-group v-for="item in groupData" :key="item.id">
					<u-cell :title="item.title" isLink :url="`/page_index/index/dynamic_desc/dynamic_desc?id=${item.id}`"
						:label="item.postDate" center></u-cell>
				</u-cell-group>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupData: []
			}
		},
		onLoad() {
			uni.request({
				url: "http://127.0.0.1:3007/api/groupData",
				success: (res) => {
					this.groupData = res.data.records
					console.log(this.groupData);
				}
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		padding: 40rpx;
		background-color: #fff;
	}
</style>
