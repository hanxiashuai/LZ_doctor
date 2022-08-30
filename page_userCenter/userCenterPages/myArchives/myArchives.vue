<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
		    <block slot="content">健康档案</block>
		</cu-custom>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text>
				健康记录
			</view>
		</view>
		<view class="itembox">
			<u-cell titleStyle="fontSize:'20px'" icon="file-text" title="冠心病"></u-cell>
			<p> <text style="color: #666666;">上传日期：</text> 2022-08-29</p>
			<p> <text style="color: #666666;">备注：</text> 已经生病两年半了 </p>
		</view>
		<view class="itembox">
			<u-cell titleStyle="fontSize:'20px'" icon="file-text" title="类风湿"></u-cell>
			<p> <text style="color: #666666;">上传日期：</text> 2022-08-28</p>
			<p> <text style="color: #666666;">备注：</text> 已经生病三年了 </p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.itembox{
	width: 100%;
	background-color: #fff;
	margin-top: 3px;
	padding: 3px;
}
</style>
