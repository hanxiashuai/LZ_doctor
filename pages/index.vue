<template>
	<view>
		<view class="banner_lbt">
			<view class="header_box">
				<view class="left_header"><p class="title_big">SLN医生集团</p></view>
				<view class="right_header">
					<view class="search_doctor"><span class="groupname" @click="showInst">医生集团</span></view>
					<u-picker :show="show" :columns="columns" @confirm="confirm" @cancel="cancel"></u-picker>
				</view>
			</view>
			<u-swiper height="250" :list="lbtData" keyName="img" indicator indicatorMode="line" circular></u-swiper>
		</view>
		<view class="menu_nav">
			<view>
				<u-grid :border="false" col="3">
					<u-grid-item v-for="(item, index) in menusList" :key="item.id">
						<navigator :url="`/page_index/index${item.url}${item.url}`">
							<view class="icon_bgc"><image class="img" :src="item.img" mode=""></image></view>
							<text class="grid-text">{{ item.title }}</text>
						</navigator>
					</u-grid-item>
				</u-grid>
				<u-toast ref="uToast" />
			</view>
		</view>
		<view class="doctor_intro">
			<p class="title" style="text-align: center; margin: 10px auto; padding:10px;font-size: 20px;">名医工作室</p>
			<view class="doctor_lbt">
				<swiper class="swiper" autoplay circular>
					<swiper-item v-for="(item, index) in doctorList" :key="item.id">
						<navigator :url="`/pages/doctor_desc/doctor_desc?id=${item.id}`">
							<view class="swiper-item">
								<view class="left_box"><image class="img" :src="item.photo" mode=""></image></view>
								<view class="right_box">
									<p class="team">{{ item.team }}</p>
									<view class="desc">
										<span><u-icon name="bookmark" size="24"></u-icon></span>
										<p style="margin-left: 10px;">{{ item.department }}</p>
									</view>
									<view class="desc">
										<span><u-icon name="file-text" size="24"></u-icon></span>
										<p style="margin-left: 10px;">{{ item.position }}</p>
									</view>
								</view>
							</view>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="dynamic">
			<view class="title_box">
				<p class="title" style="text-align: center">资讯动态</p>
				<view class="right_more" @click="showMoreInfo">
					<span class="showMore">查看更多</span>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="information">
				<u-cell-group>
					<u-cell-group v-for="item in dynamicList" :key="item.id">
						<u-cell :title="item.title" isLink :url="`/page_index/index/dynamic_desc/dynamic_desc?id=${item.id}`" :label="item.time" center></u-cell>
					</u-cell-group>
				</u-cell-group>
			</view>
		</view>
		<view class="cooperation">
			<view class="title_box">
				<p class="title" style="text-align: center">合作单位</p>
				<navigator url="/page_index/index/cooperation/cooperation">
					<view class="right_more">
						<span class="showMore">查看更多</span>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</navigator>
			</view>
			<view class="hospital" v-for="item in cooperationList" :key="item.id">
				<image class="img" :src="item.image" mode=""></image>
				<view class="information">
					<text class="hospital_name">{{ item.name }}</text>
					<text class="hospital_address">{{ item.address }}</text>
					<view style="width: 80px; margin:8px 0"><u-tag :text="item.grade" type="warning" plain></u-tag></view>
					<navigator :url="`/page_index/index/coop_desc/coop_desc?id=${item.id}`">
						<view class="hospital_detail">
							<text class="detail">详情</text>
							<u-icon name="arrow-right-double" color="#ff8515"></u-icon>
						</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="service">
			<p class="title">联系方式</p>
			<view class="serviceItem">
				<view class="telphone item">
					<u-icon name="phone"></u-icon>
					<span class="itemCon">0571-80999453</span>
				</view>
				<view class="network item">
					<u-icon name="attach"></u-icon>
					<span class="itemCon">0571-80999453</span>
				</view>
				<view class="navmap item">
					<u-icon name="map"></u-icon>
					<span class="itemCon">浙江省杭州市浙江大学国家大学科技园A东325室</span>
				</view>
			</view>
			<view class="daohang" style="width: 100px"><u-button type="primary" icon="map" text="手机导航"></u-button></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			lbtData: [],
			show: false,
			disabled: true,
			groupsName: [],
			lbtImgs: [],
			menusList: [],
			doctorList: [],
			cooperationList: [],
			dynamicList: [],
			columns: [['吴氏免疫针灸', '枫荷名医在线', '百薇名医在线', '远志名医在线', '秋实名医在线', '司空见惯', '稼禾名医在线', '医生集团', '露露集团']]
		};
	},
	onPullDownRefresh() {
		//后台数据	this.init()
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 1000);
		// 获取轮播图信息
		uni.request({
			url: 'http://127.0.0.1:3007/api/lbts',
			success: res => {
				res.data.records.forEach(item => {
					if (!this.lbtImgs.includes(item.img)) {
						this.lbtImgs.push(item.img);
					}
				});
			},
			fail: err => {
				console.error(err);
			}
		});
	},

	onLoad() {
		// 获取集团信息
		uni.request({
			url: 'http://127.0.0.1:3007/api/groups',
			success: res => {
				// this.groupsName = res.data.records
				res.data.records.forEach(item => {
					this.groupsName.push(item.groupName);
				});
				console.log(this.groupsName);
			},
			fail: err => {
				console.error(err);
			}
		});
		// 获取轮播图信息
		uni.request({
			url: 'http://127.0.0.1:3007/api/lbts',
			success: res => {
				this.lbtData = res.data.records;
				console.log(this.lbtData);
			},
			fail: err => {
				console.error(err);
			}
		});
		// 获取菜单数据
		uni.request({
			url: 'http://127.0.0.1:3007/api/menus',
			success: res => {
				this.menusList = res.data.records;
				console.log(this.menusList);
			},
			fail: err => {
				console.error(err);
			}
		});
		// 获取医生数据
		uni.request({
			url: 'http://127.0.0.1:3007/api/doctors',
			success: res => {
				this.doctorList = res.data.records;
				console.log(this.doctorList);
			},
			fail: err => {
				console.error(err);
			}
		});
		// 获取资讯动态数据
		uni.request({
			url: 'http://127.0.0.1:3007/api/dynamic',
			success: res => {
				res.data.records.forEach((item, index) => {
					if (index < 3) {
						this.dynamicList.push(item);
					}
				});
			},
			fail: err => {
				console.error(err);
			}
		});
		// 获取医院数据
		uni.request({
			url: 'http://127.0.0.1:3007/api/cooperation',
			success: res => {
				res.data.records.forEach((item, index) => {
					if (index < 3) {
						this.cooperationList.push(item);
					}
				});
				console.log(this.cooperationList);
			},
			fail: err => {
				console.error(err);
			}
		});
	},
	methods: {
		showInst() {
			this.show = true;
		},
		open() {
			// console.log('open');
		},
		close() {
			this.show = false;
			// console.log('close');
		},
		confirm() {
			this.show = false;
		},
		cancel() {
			this.show = false;
		},
		showMoreInfo() {
			uni.navigateTo({
				url: '/page_index/index/moreDynamic/moreDynamic',
				fail: err => {
					console.log(err);
				},
				success: () => {}
			});
		}
	},
	onPullDownRefresh() {
		//后台数据	this.init()
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 1000);
		// 获取轮播图信息
		uni.request({
			url: 'http://127.0.0.1:3007/api/lbts',
			success: res => {
				this.lbtData = res.data.records;
			},
			fail: err => {
				console.error(err);
			}
		});
	}
};
</script>
<style lang="scss">
.header_box {
	position: fixed;
	// top: 64;
	left: 0;
	width: 100%;
	height: 80rpx;
	padding: 0 20rpx;
	background-color: rgba(255, 255, 255, 0.8);
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 999;

	.title_big {
		font-size: 20px;
		font-weight: 400;
		color: #ff8515;
	}

	.search_doctor {
		.groupname {
			color: #ff8515;
		}
	}
}

.title {
	font-size: 20px;
	font-weight: 400;
	color: #ff8515;
	text-align: center;
}

.menu_nav {
	margin-top: 10px;
	background-color: #fff;
	padding: 20px;

	/deep/ .u-icon__icon {
		padding-top: 0 !important;
	}

	.icon_bgc {
		margin: 10px 0;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: #fff3e9;
		display: flex;
		justify-content: center;
		align-items: center;

		.img {
			width: 60%;
			height: 60%;
		}
	}
}

.grid-text {
	font-size: 14px;
	color: #909399;
	padding: 10rpx 0 20rpx 0rpx;
	/* #ifndef APP-PLUS */
	box-sizing: border-box;
	/* #endif */
}

.doctor_intro {
	background-color: #fff;
	padding: 0 20px 20px;
}

.uni-margin-wrap {
	width: 100%;
}

.swiper {
	height: 400rpx;
	padding: 10px;
	border: 1px #e2e2e2 solid;
	border-radius: 4%;
}

.swiper-item {
	display: flex;
	height: 300rpx;
	margin-top: 40rpx;
	text-align: center;

	background-color: #fff;

	.left_box {
		width: 40%;
		margin-right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;

		.img {
			width: 120px;
			height: 150px;
		}
	}

	.right_box {
		width: 60%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.team {
			margin-left: 10px;
			text-align: left;
			font-size: 25px;
			font-weight: 800;
			color: #243b64;
		}

		.desc {
			display: flex;
			text-align: center;
			font-size: 15px;
		}
	}
}

.dynamic,
.cooperation {
	padding: 20px 0;
	background-color: #fff;
	margin-top: 15px;

	.title_box {
		height: 40px;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;

		.title {
			margin-left: 120px;
		}

		.right_more {
			.showMore {
				line-height: 40px;
			}

			display: flex;
		}
	}
}

.hospital {
	padding: 10px 10px;
	display: flex;

	.img {
		width: 120px;
		height: 110px;
	}

	.information {
		margin-left: 15px;
		display: flex;
		flex-direction: column;

		.hospital_name {
			font-size: 18px;
			margin-bottom: 5px;
		}
	}

	.hospital_detail {
		display: flex;

		.detail {
			color: #ff8515;
		}
	}
}

.service {
	margin-top: 15px;
	padding: 10px 10px;
	background-color: #fff;

	.item {
		display: flex;
		color: #243b64;
		margin-bottom: 10px;

		.itemCon {
			margin-left: 15px;
		}
	}

	.title {
		padding: 10px 0;
	}

	.daohang {
		margin: 0 auto;
	}
}
</style>
