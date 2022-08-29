<template>
	<view class="content">
		<u--input placeholder="请输入关键字" suffixIcon="search" suffixIconStyle="color: #909399"></u--input>
		<u-tabs :list="list1" :current="current" @change="tabChange" :scrollable="false"></u-tabs>
		<view class="" v-if="current==0">
			<u-cell-group>
				<u-cell-group v-for="item in dynamicList" :key="item.id">
					<u-cell :title="item.title" isLink :url="`/pages/index/dynamic_desc/dynamic_desc?id=${item.id}`"
						:label="item.time" center></u-cell>
				</u-cell-group>
			</u-cell-group>
		</view>
		<view class="" v-if="current==1">
			<u-cell-group>
				<u-cell-group v-for="item in literaData" :key="item.id">
					<u-cell :title="item.title" isLink :url="`/pages/ExpertsSay/Component/Content?id=${item.id}`"
						:label="item.time" center></u-cell>
				</u-cell-group>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list1: [{
					name: '产品简介',
				}, {
					name: '文献资料',
				}, ],
				dynamicList: [],
				literaData: [],
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
			// 获取文献资料数据
			uni.request({
				url: "http://127.0.0.1:3007/api/allarticle",
				success: (res) => {
					this.literaData = res.data.data
					console.log(this.literaData);
				},
				fail: (err) => {
					console.error(err);
				},
			});
		},
		methods: {
			tabChange(e) {
				this.current = e.index
			}
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #fff;
		padding: 20px;
	}
</style>
