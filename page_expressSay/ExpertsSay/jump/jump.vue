<template>
	<view class="overview">
		<view class="zhong">
			<u-button text="点击返回首页" type='primary' @click="back"></u-button>

			<view class="img">
				<u-notice-bar :text="text1" duration='2s' color='black' fontSize='20px'
					bgColor="rgba(116, 196, 220, 0.5)" direction=row :step='true' icon="" class='u-btn'>
				</u-notice-bar>
			</view>
			<h2>赛隆子类额 神经秸秆之</h2>
			<view class="week">
				<h2 style='color:red'>￥698元</h2>
				<u-button text="一键分享" type='primary' class="btn"></u-button>

			</view>
			<u-tag text="激活脑力，改善记忆，修复神经"></u-tag>

			<hr />
			<view class="week1">
				<u-icon name="phone-fill" color="#2979ff" size="28"></u-icon>
				<view>服用周期：1</view>
			</view>
			<view class="week1">
				<u-icon name="gift-fill" color="#2979ff" size="28"></u-icon>
				<view>疗法服务：专家指导下服用</view>
			</view>
			<u-tabs :scrollable="false" :list="list4" lineWidth="20" lineHeight="7"
				:lineColor="`url(${lineBg}) 100% 100%`" :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)'
    }" :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)'
    }" @click="swit" itemStyle="padding-left: 15px; magin-top:10px; padding-right: 15px; height: 34px;">
			</u-tabs>
			<view v-if="current==0">
				<view class="swimg1"></view>
				<view class="swimg2"></view>
				<view class="swimg3"></view>
				<view class="swimg4"></view>
			</view>
			<view v-else-if="current==1">我是内容2</view>
			<view v-else>我是内容4</view>
		</view>
		<view class="foot">
			<view class="text">
				<u-icon name="phone-fill" color="#2979ff" size="28" class='icon'></u-icon>
				<p class='phone'>电话咨询</p>
			</view>
			<button type="primary" open-type="contact" style='height: 50px; margin-right: 15px;'>客服聊天窗口</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				text1: ['会员马@@刚提交了一笔订单', '会员王@@刚提交了一笔订单', '会员西@@刚提交了一笔订单'],
				current: 0,
				lineBg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=",
				list4: [{
					name: '详情',
					badge: {
						isDot: true
					}
				}, {
					name: '说明书',

				}, {
					name: '评价',
				}],
			}
		},
		methods: {

			swit(e) {
				this.current = e.index
			},
			back() {
				uni.reLaunch({
					url: '/pages/index',
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				})
			}
		}
	}
</script>

<style>
	.u-btn {
		/* width: 100px; */
	}


	.btn {
		width: 100px;
		margin-left: 0;
		margin-right: 10px;
	}

	.week {
		display: flex;
		height: 40px;
		line-height: 40px;
		/* 	text-align: center; */
		justify-content: space-between;
		margin-bottom: 10px;

	}

	.week1 {
		display: flex;
		height: 20px;
		line-height: 20px;
		margin-top: 10px;

	}

	.zhong {
		margin-bottom: 100px;

	}

	.overview {
		margin-left: 15px;
		margin-right: 15px;
	}

	.swimg1 {
		width: 100%;
		height: 500px;
		/* background: url(../../../static/image/1.png) no-repeat; */
		background-size: 100% 100%;
	}

	.swimg2 {
		width: 100%;
		height: 500px;
		/* background: url(../../../static/image/2.png); */
		background-size: 100% 100%;
	}

	.swimg3 {
		width: 100%;
		height: 500px;
		/* background: url(../../../static/image/3.png); */
		background-size: 100% 100%;
	}

	.swimg4 {
		width: 100%;
		height: 500px;
		/* background: url(../../../static/image/4.png); */
		background-size: 100% 100%;
	}

	.img {
		width: 100%;
		height: 400px;
		/* background: url(../../../static/image/QQ截图20220825162921.png) center; */
		background-size: 100% 100%
	}

	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 999;
		height: 50px;
		display: flex;
		background-color: #f9f9f9;
	}

	.phone {
		width: 100px;
		font-size: 15px;

	}

	.icon {
		margin: 0 auto;
		margin-left: 30px;
	}

	.text {
		margin: 0 auto;
		text-align: center;

	}

	.details {
		font-size: 30px;
		text-indent: 10px;
		font-weight: bold;
	}
</style>
