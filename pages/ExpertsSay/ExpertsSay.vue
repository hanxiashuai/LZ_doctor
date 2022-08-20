<template>
	<view style="background-color: #ffffff;">
		<view>
			<u-navbar title="个人中心">
				<view class="u-nav-slot" slot="left">
					<u-icon name="home" color="#aaaaff" size="28"></u-icon>
				</view>
				<view class="u-nav-slot  col" slot="right"
					style="display: flex; border: 1px solid #aaaaff; border-radius=30rpx">
					<u-icon name="minus" color="#2979ff" size="28"></u-icon>
					<u-icon name="more-dot-fill" color="#2979ff" size="28"></u-icon>
					<u-icon name="plus-circle" color="#2979ff" size="18"></u-icon>
				</view>
			</u-navbar>
		</view>
		<view style="margin-top:150rpx;">
			<u--input placeholder="请输入关键字" prefixIcon="search" suffixIconStyle="color: #909399">
			</u--input>
			<button @click='goto("https://www.baidu.com" )'>百度</button>
		</view>

		<view class="head-nav">
			<view :class="navIndex==1?'activite':''" @click="checkIndex(1)">专家文章</view>
			<view :class="navIndex==2?'activite':''" @click="checkIndex(2)">疗法专栏</view>
		</view>
		<!-- 专家文章 -->
		<view class="content" v-if="navIndex==1">
			<view class="cont"></view>
			<view class="boxone" @click="btn(item.url)" v-for="(item,index) in todolist" :key="item.id">
				<h2>{{item.title}}</h2>
				<p>{{item.text}}</p>
				<p style="margin-bottom: 10px; margin-top: 10px;">{{item.time}}</p>
				<hr>
			</view>
		</view>
		<!-- 疗法专栏 -->
		<view class="content" v-if="navIndex==2">
			<view class="cont"></view>
			<view class="boxone" @click="btn(item.url)" v-for="(item,index) in todolist1" :key="item.id">
				<h2>{{item.title}}</h2>
				<p>{{item.text}}</p>
				<p style="margin-bottom: 10px; margin-top: 10px;">{{item.time}}</p>
				<hr>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				value1: '',
				navIndex: 1,
				todolist1: [{
						id: 1,
						title: "肺癌患者， 你吃对了吗？",
						text: "用膳时营养唤醒极影激发自愈肺癌是我国第一大唉。2012年全球198晚患者配确诊为配",
						url: "/pages/ExpertsSay/Component/Content",
						time: "2021-11-16"

					},
					{
						id: 2,
						title: "肺癌患者， 你对",
						text: "用膳时营养唤醒极影激发自愈肺癌是我国第一大唉。2012年全球198晚患者配确诊为配",
						url: "/pages/ExpertsSay/Component/Content",
						time: "2021-11-16"
					},
					{
						id: 3,
						title: "肺癌患者， 你对了吗？",
						text: "用膳时营养唤醒极影激发自愈肺癌是我国第一大唉。2012年全球198晚患者配确诊为配",
						url: "/pages/ExpertsSay/Component/Content",
						time: "2021-11-16"
					}
				],
				todolist: [{
						id: 4,
						title: "肺癌患者， 你吃对了吗？",
						text: "用膳时营养唤醒极影激发自愈肺癌是我国第一大唉。2012年全球198晚患者配确诊为配",
						url: "/pages/ExpertsSay/Component/Content",
						time: "2021-11-16"

					},
					{
						id: 5,
						title: "肺癌患者， 你对",
						text: "用膳时营养唤醒极影激发自愈肺癌是我国第一大唉。2012年全球198晚患者配确诊为配",
						url: "/pages/ExpertsSay/Component/Content",
						time: "2021-11-16"
					},
					{
						id: 6,
						title: "肺癌患者， 你对了吗？",
						text: "用膳时营养唤醒极影激发自愈肺癌是我国第一大唉。2012年全球198晚患者配确诊为配",
						url: "/pages/ExpertsSay/Component/Content",
						time: "2021-11-16"
					}
				]
			}
		},
		onLoad() {
			uni.startPullDownRefresh();
		},

		onPullDownRefresh() {
			//后台数据	this.init()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 1000)
		},
		//下拉刷新内容
		onReachBottom() {
			//下拉的时候改变页数 对数据进行拼接 改变最新数据 当是第一页是清空数据
			uni.showLoading({
				title: "加载中"
			})
			//在更新树剧结束 调取接口玩 进行关闭
			setTimeout(() => {
				uni.hideLoading()
			}, 1000)

		},
		methods: {
			goto(url) {
				window.location.href = url
			},
			//跳转不同的链接
			btn(item) {
				// alert(111)
				//在起始页面跳转到test.vue页面并传递参数
				uni.navigateTo({
					url: item,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				})
			},

			checkIndex(index) {
				this.navIndex = index
			},
			checkListIndex(index) {
				this.listIndex = index
			},
			rightClick() {
				console.log('rightClick');
			},
			leftClick() {
				console.log('leftClick');
			}
		}
	}
</script>

<style lang="scss">
	.head-nav {
		width: 50%;
		margin: 20rpx auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 15px;



	}

	.content {
		background-color: #ffffff;
	}

	.activite {
		font-weight: bold;
		border-bottom: 6rpx solid #0065d9;
	}

	.cont {
		width: 100%;
		height: 10px;
		background-color: #ececec
	}

	.head-nav>view {
		padding-bottom: 10rpx;
	}

	.box {
		background: #008000;
	}

	.boxone {
		margin: 10px 10px;
		margin-bottom: 10px;
		min-height: 80px;
	}
</style>
