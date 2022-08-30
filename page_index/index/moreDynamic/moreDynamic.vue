<template>
	<view class="content">
		<u-cell-group>
			<u-cell-group v-for="item in dynamicList" :key="item.id">
				<u-cell :title="item.title" isLink :url="`/page_index/index/dynamic_desc/dynamic_desc?id=${item.id}`"
					:label="item.time" center></u-cell>
			</u-cell-group>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dynamicList: []
			}
		},
		onLoad() {
			// 获取资讯动态数据
			uni.request({
				url: "http://127.0.0.1:3007/api/dynamic",
				success: (res) => {
					this.dynamicList = res.data.records

					console.log(this.dynamicList);
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
		padding: 40rpx;
	}
</style>
