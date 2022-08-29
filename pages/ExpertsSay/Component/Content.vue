<template>
	<view>
		<u-navbar title="详情" @rightClick="rightClick" :autoBack="true"></u-navbar>
		<view class="con">
			<navigator url="/pages/ExpertsSay/jump/jump" hover-class="navigator-hover" v-if="labe">
				<u-button type="primary" text="确定">{{ labe }}</u-button>
			</navigator>
			<view class="box">
				<view v-html="content"></view>
			</view>
			
		</view>
		<view class="footer">
			<view class="callme">
				<u-icon name="phone" color="#1d7be9"></u-icon>
				<p>电话咨询</p>
			</view>
			<view class="online"><u-button text="在线聊天室" open-type="contact" color="#ff8515"></u-button></view>
		</view>
	</view>
</template>
<script>
//import met from '@/pages/ExpertsSay/medicine/medicine.vue'
export default {
	components: {},
	data() {
		return {
			content: '',
			labe: ''
		};
	},
	onLoad: function(option) {
		//option为object类型，会序列化上个页面传递的参数
		console.log(option.id); //打印出上个页面传递的参数。
		//打印出上个页面传递的参数。
		uni.request({
			url: `http://127.0.0.1:3007/api/article?id=${option.id}`, //仅为示例，并非真实接口地址。
			success: res => {
				const { content, labe } = res.data.data[0];
				this.content = content;
				this.labe = labe;

				// this.text = 'request success';
			}
		});
	},
	methods: {}
};
</script>
<style lang="scss">

.box{
	padding: 40rpx  0;
}

.con {
	margin-top: 60px;
	padding: 0 20px;
	background-color: #fff;
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
	margin-bottom: 200px;
}

.phone {
	width: 100px;
	font-size: 15px;
}

.abiao {
	font-size: 30px;
	color: cadetblue;
	padding-bottom: 80px;
}


.footer {
	display: flex;
	width: 100%;
	height: 60px;
	padding: 10px;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	left: 0;

	.callme {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.online {
		flex: 2;
	}
}
</style>
