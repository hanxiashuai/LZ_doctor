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
					:class="modalName == 'move-box-' + index ? 'move-cur' : ''"
					v-for="(item, index) in 4"
					:key="index"
					@touchstart="ListTouchStart"
					@touchmove="ListTouchMove"
					@touchend="ListTouchEnd"
					:data-target="'move-box-' + index"
				>
					<view class="content">
						<view class="text-grey">
							<text class="  margin-right-xs">文晓港</text>
							<text class="  margin-right-xs">13810021921</text>
						</view>
						<view class="text-gray text-sm">浙江省，杭州市，清湖区</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">左滑操作</view>
						<view class="cu-tag round bg-grey sm"><</view>
					</view>
					<view class="move">
						<view class="bg-grey">编辑</view>
						<view class="bg-red">删除</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			addressList:[],
			
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
		}
	
		//删除地址
		delAddress(){
			
		}
		
		//编辑地址
		editAddress(){
			
		}
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
</style>
