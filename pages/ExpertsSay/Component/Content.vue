<template>
	<view>
		<view class="details">心脏搭桥手术</view>
		<p class='con-rq'>日期</p>
		<p class='con-zw'> 癌症的起源和历史</p>
		<p class='con-zw'> 中医致癌</p>
		<met></met>

	</view>
</template>
<script>
	import met from '@/pages/ExpertsSay/medicine/medicine.vue'
	export default {
		components: {
			met
		},
		data() {
			return {

			}

		},
		methods: {

		}
	}
</script>
<style lang="scss">
	.details {
		font-size: 30px;
		text-indent: 10px;
		font-weight: bold;
		margin-top: 50px;
	}

	.con-zw {
		display: block;
		text-indent: 30px;
		font-size: 15px;
	}

	.con-rq {
		display: block;
		text-indent: 15px;
		margin-bottom: 10px;
		font-size: 15px;
	}
</style>
