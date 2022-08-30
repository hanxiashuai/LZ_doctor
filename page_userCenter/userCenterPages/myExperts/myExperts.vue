<template>
	<view>
		<scroll-view :scroll-y="modalName == null" class="page" :class="modalName != null ? 'show' : ''">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">医生列表</block>
			</cu-custom>

			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text>
					医生列表
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view v-for="item in doctorList" class="cu-item">
					<view class="cu-avatar round lg" :style="{ 'background-image': `url(${item.photo})` }"></view>
					<view class="content">
						<view class="text-grey">{{ item.team }}</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">{{ item.unit }}</view>
						</view>
					</view>
					<view class=""><button @click="goTo(item.id)" class="cu-btn round zixunBtn">咨询</button></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import { getMydoctor } from '@/api/mydoctor.js';
export default {
	data() {
		return {
			doctorList: []
		};
	},
	methods: {
		goTo(id) {
			uni.navigateTo({
				url: '/pages/doctor_desc/doctor_desc?id=' + id
			});
		},
		async getDoctorList() {
			let res = await getMydoctor();
			this.doctorList = res.data;
			console.log(res);
		}
	},
	onShow() {
		this.getDoctorList();
	}
};
</script>

<style>
.page {
	height: 100vh;
	width: 100vw;
}

.page.show {
	overflow: hidden;
}

.switch-sex::after {
	content: '\e716';
}

.switch-sex::before {
	content: '\e7a9';
}

.switch-music::after {
	content: '\e66a';
}

.switch-music::before {
	content: '\e6db';
}

.zixunBtn {
	color: #fff;
	font-size: 12px;
	height: 22px;
	background-color: #6186cd !important;
}
</style>
