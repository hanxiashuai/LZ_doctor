<template>
	<view>
		<scroll-view :scroll-y="modalName == null" class="page" :class="modalName != null ? 'show' : ''">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">地址管理</block>
			</cu-custom>

			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text>
					我的地址
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view
					class="cu-item"
					v-for="(item, index) in addressList"
					:class="modalName == 'move-box-' + index ? 'move-cur' : ''"
					:key="item.id"
					@touchstart="ListTouchStart"
					@touchmove="ListTouchMove"
					@touchend="ListTouchEnd"
					:data-target="'move-box-' + index"
				>
					<view class="content">
						<view class="text-grey">
							<text class="  margin-right-xs">{{ item.name }}</text>
							<text class="  margin-right-xs">{{ item.tel }}</text>
						</view>
						<view class="text-gray text-sm">{{ item.address + item.mainaddress }}</view>
					</view>

					<view class="action"><text class="lg text-gray cuIcon-back"></text></view>

					<view class="move">
						<!-- <navigator url="/pages/userCenterPages/myAddress/addeditAddress?id=tem.id"> -->
							<view class="bg-blue" @click="editAddress(item.id)">编辑</view>
						<!-- </navigator> -->
						<view class="bg-red" @click="delAddress(item.id)">删除</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<navigator url="/pages/userCenterPages/myAddress/addeditAddress"><button @click="addAddress" class="addBtn cu-btn">新增地址</button></navigator>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
import { getUserAddress, delUserAddress } from '../../../api/user_address.js';
export default {
	data() {
		return {
			addressList: [],

			modalName: null,
			gridCol: 3,
			gridBorder: false,
			menuBorder: false,
			menuArrow: false,
			menuCard: false,
			skin: false,
			listTouchStart: 0,
			listTouchDirection: null
		};
	},

	methods: {
		async getList() {
			let res = await getUserAddress(4);
			this.addressList = res.data;
		},
		// ListTouch触摸开始
		ListTouchStart(e) {
			this.listTouchStart = e.touches[0].pageX;
		},

		// ListTouch计算方向
		ListTouchMove(e) {
			this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left';
		},

		// ListTouch计算滚动
		ListTouchEnd(e) {
			if (this.listTouchDirection == 'left') {
				this.modalName = e.currentTarget.dataset.target;
			} else {
				this.modalName = null;
			}
			this.listTouchDirection = null;
		},

		//删除地址
		async delAddress(data) {
			await delUserAddress(data);
			//删除完重新加载表格
			this.getList();
			this.$refs.uToast.show({
				type: 'success',
				title: '成功主题(带图标)',
				message: '删除成功'
			});
		},

		//编辑地址
		editAddress(data) {
			console.log('edit', data);
			uni.navigateTo({
				url:`/pages/userCenterPages/myAddress/addeditAddress?id=${data}`,
				fail:(err)=>{
					console.log(err);
				}
			})
			//编辑完重新加载表格
			// this.getList();
		},

		//新增地址
		addAddress() {
			console.log('add');

			//编辑完重新加载表格
			// this.getList();
		}
	},
	onShow() {
		this.getList();
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

.addBtn {
	width: 100%;
	height: 76rpx;
	color: #fff;
	font-size: 34rpx;
	background-color: #6186cd !important;
	position: fixed;
	bottom: 0;
}
</style>
