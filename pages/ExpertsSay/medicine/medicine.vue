<template>
	<view class="overview">
		<u-navbar title="个人中心" @rightClick="rightClick" :autoBack="true">
		</u-navbar>
		<view class="details">11个肿瘤患者常见的营养舞曲建议收藏</view>
		<p class='con-rq'>2022-11-1</p>
		<p class='con-zw'>
			肿瘤一旦被诊断，患者和家属都非常希望能找到治疗肿瘤的灵丹妙药，因此
			，一些“标题党”的文章由于契合人们的想法往往传播得更广、更快，如“超级
			抗癌食物排行榜”“把吃出来的疾病吃回去”等。然而，关于肿瘤诊断后饮
			食营养与生存关系的研究仍处于起步阶段，在网上或民间很难找到可靠的、有科
			学依据的建议，有些假说甚至只是凭空想象出来的观点。因此，越是“重大突破”
			“奇迹”“重大发现”等标题，人们越应打个问号，有些听起来太好的消息很可能
			只是一种美好愿望。
		</p>
		<view>
			<u--image :showLoading="true" :src="src" width="100%" height="200px" @click="click"></u--image>
		</view>
		<p class='con-zw'>
			肿瘤一旦被诊断，患者和家属都非常希望能找到治疗肿瘤的灵丹妙药，因此
			，一些“标题党”的文章由于契合人们的想法往往传播得更广、更快，如“超级
			抗癌食物排行榜”“把吃出来的疾病吃回去”等。然而，关于肿瘤诊断后饮
			食营养与生存关系的研究仍处于起步阶段，在网上或民间很难找到可靠的、有科
			学依据的建议，有些假说甚至只是凭空想象出来的观点。因此，越是“重大突破”
			“奇迹”“重大发现”等标题，人们越应打个问号，有些听起来太好的消息很可能
			只是一种美好愿望。
		</p>
		<view>
			<u--image :showLoading="true" :src="src" width="100%" height="200px" @click="click"></u--image>

		</view>
		<p class='con-zw'>
			肿瘤一旦被诊断，患者和家属都非常希望能找到治疗肿瘤的灵丹妙药，因此
			，一些“标题党”的文章由于契合人们的想法往往传播得更广、更快，如“超级
			抗癌食物排行榜”“把吃出来的疾病吃回去”等。然而，关于肿瘤诊断后饮
			食营养与生存关系的研究仍处于起步阶段，在网上或民间很难找到可靠的、有科
			学依据的建议，有些假说甚至只是凭空想象出来的观点。因此，越是“重大突破”
			“奇迹”“重大发现”等标题，人们越应打个问号，有些听起来太好的消息很可能
			只是一种美好愿望。肿瘤一旦被诊断，患者和家属都非常希望能找到治疗肿瘤的灵丹妙药，因此
			，一些“标题党”的文章由于契合人们的想法往往传播得更广、更快，如“超级
			抗癌食物排行榜”“把吃出来的疾病吃回去”等。然而，关于肿瘤诊断后饮
			食营养与生存关系的研究仍处于起步阶段，在网上或民间很难找到可靠的、有科
			学依据的建议，有些假说甚至只是凭空想象出来的观点。因此，越是“重大突破”
			“奇迹”“重大发现”等标题，人们越应打个问号，有些听起来太好的消息很可能
			只是一种美好愿望。肿瘤一旦被诊断，患者和家属都非常希望能找到治疗肿瘤的灵丹妙药，因此
			，一些“标题党”的文章由于契合人们的想法往往传播得更广、更快，如“超级
			抗癌食物排行榜”“把吃出来的疾病吃回去”等。然而，关于肿瘤诊断后饮
			食营养与生存关系的研究仍处于起步阶段，在网上或民间很难找到可靠的、有科
			学依据的建议，有些假说甚至只是凭空想象出来的观点。因此，越是“重大突破”
			“奇迹”“重大发现”等标题，人们越应打个问号，有些听起来太好的消息很可能
			只是一种美好愿望。
		</p>
		<view>
			<u--image :showLoading="true" :src="src" width="100%" height="200px" @click="preview(src)"></u--image>

		</view>
		<p class='con-zw con-last'>
			肿瘤一旦被诊断，患者和家属都非常希望能找到治疗肿瘤的灵丹妙药，因此
			，一些“标题党”的文章由于契合人们的想法往往传播得更广、更快，如“超级
			抗癌食物排行榜”“把吃出来的疾病吃回去”等。然而，关于肿瘤诊断后饮
			食营养与生存关系的研究仍处于起步阶段，在网上或民间很难找到可靠的、有科
			学依据的建议，有些假说甚至只是凭空想象出来的观点。因此，越是“重大突破”
			“奇迹”“重大发现”等标题，人们越应打个问号，有些听起来太好的消息很可能
			只是一种美好愿望。肿瘤一旦被诊断，患者和家属都非常希望能找到治疗肿瘤的灵丹妙药，因此
			，一些“标题党”的文章由于契合人们的想法往往传播得更广、更快，如“超级
		</p>
		<a href="" class='abiao'>蔡龙瑙乐 神经节苷脂</a>

		<view class="foot">
			<view class="text">
				<u-icon name="phone-fill" color="#2979ff" size="28" class='icon'></u-icon>
				<p class='phone'>电话咨询</p>
			</view>
			<!-- <u-button type="primary" text="微信聊天室" @click="WeChat" open-type="contact"
				style='height: 50px; margin-right: 15px;'></u-button> -->
			<button type="primary" open-type="contact" @click="WeChat"
				style='height: 50px; margin-right: 15px;'>客服聊天窗口</button>


		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				src: '/static/image/草.jpg',
				todolist: []
			}
		},
		onLoad() {
			uni.request({
				url: 'http://127.0.0.1:3007/api/nav',
				params: {
					id: ''
				},
				success: (res) => {
					console.log(res.data.data);
					this.todolist = res.data.data
					// this.text = 'request success';
				}
			});

		},
		methods: {
			//点击微信聊天跳转
			WeChat() {

			},
			rightClick() {
				console.log('rightClick');
			},
			leftClick() {
				console.log('leftClick');
			},
			preview(url) {
				uni.previewImage({
					//预览图片的下标
					urls: [this.src] //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
				})
			},
		}
	}
</script>
<style lang="scss">
	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 999;
		height: 50px;
		display: flex;
		background-color: #f9f9f9;
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
		margin-top: 70px;

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
		margin-top: 10px;
	}

	.con-last {
		padding-bottom: 200px;
	}

	.phone {
		width: 100px;
		font-size: 15px;

	}

	.abiao {
		font-size: 30px;
		color: cadetblue;
		//margin-bottom: 80px;
		padding-bottom: 80px;

	}

	.overview {
		padding-left: 20px;
		padding-right: 20px;
		background-color: #ffffff;
	}
</style>
