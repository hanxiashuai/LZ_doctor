<template>
  <view>
    <cu-custom bgColor="bg-gradual-blue">
      <block slot="content">杨继洲医生集团</block>
    </cu-custom>
    <view class="header_box">
      <view class="left_header">
        <p class="title_big">杨继洲医生集团</p>
      </view>
      <view class="right_header">
        <view class="search_doctor">
          <span @click="showInst">医生集团</span>
        </view>
        <u-picker
          :show="show"
          :columns="columns"
          @confirm="confirm"
          @cancel="cancel"
        >
        </u-picker>
      </view>
    </view>
    <view class="banner_lbt">
      <u-swiper
        height="250"
        :list="list1"
        indicator
        indicatorMode="line"
        circular
      >
      </u-swiper>
    </view>
    <<<<<<< HEAD
    <view class="menu_nav">
      <view>
        <u-grid :border="false" col="3">
          <u-grid-item
            v-for="(listItem, listIndex) in imgSrc"
            :key="listIndex"
            @click="handleClick"
          >
            <view class="icon_bgc">
              <image :src="listItem.url" mode=""></image>
            </view>
            <text class="grid-text">{{ listItem.name }}</text>
          </u-grid-item>
        </u-grid>
        <u-toast ref="uToast" />
      </view>
    </view>
    <view class="doctor_intro">
      <p class="title" style="text-align: center; margin: 10px 0">名医工作室</p>
      <view class="doctor_lbt">
        <view class="u-demo-block">
          <u-swiper
            :list="list3"
            height="200px"
            previousMargin="30"
            nextMargin="30"
            circular
            :autoplay="false"
            radius="5"
            bgColor="#ffffff"
          >
          </u-swiper>
        </view>
      </view>
    </view>
    <view class="dynamic">
      <view class="title_box">
        <p class="title" style="text-align: center">资讯动态</p>
        <view class="right_more">
          <span>查看更多</span>
          <u-icon name="arrow-right"></u-icon>
        </view>
      </view>
      <view class="information">
        <u-cell-group>
          <u-cell-group>
            <u-cell
              title="单元格"
              isLink
              url=""
              label="描述信息"
              center
            ></u-cell>
          </u-cell-group>
          <u-cell-group>
            <u-cell
              title="单元格"
              isLink
              url=""
              label="描述信息"
              center
            ></u-cell>
          </u-cell-group>
          <u-cell-group>
            <u-cell
              title="单元格"
              isLink
              url=""
              label="描述信息"
              center
            ></u-cell>
          </u-cell-group>
        </u-cell-group>
      </view>
    </view>
    <view class="cooperation">
      <view class="title_box">
        <p class="title" style="text-align: center">合作单位</p>
        <view class="right_more">
          <span>查看更多</span>
          <u-icon name="arrow-right"></u-icon>
        </view>
      </view>
      <view class="hospital">
        <image src="../../static/image/yy01.jpg" />
        <view class="information">
          <text class="hospital_name">浙江大学附属第一医院</text>
          <text class="hospital_address">杭州市庆春路79号</text>
          <view class="" style="width: 50px">
            <u-tag text="标签" plain size="mini" type="warning"></u-tag>
          </view>
          <view class="hospital_detail">
            <text>详情</text>
            <u-icon name="arrow-right-double"></u-icon>
          </view>
        </view>
      </view>
      <view class="hospital">
        <image src="../../static/image/yy01.jpg" />
        <view class="information">
          <text class="hospital_name">浙江大学附属第一医院</text>
          <text class="hospital_address">杭州市庆春路79号</text>
          <view class="" style="width: 50px">
            <u-tag text="标签" plain size="mini" type="warning"></u-tag>
          </view>
          <view class="hospital_detail">
            <text>详情</text>
            <u-icon name="arrow-right-double"></u-icon>
          </view>
        </view>
      </view>
      <view class="hospital">
        <image src="../../static/image/yy01.jpg" />
        <view class="information">
          <text class="hospital_name">浙江大学附属第一医院</text>
          <text class="hospital_address">杭州市庆春路79号</text>
          <view class="" style="width: 50px">
            <u-tag text="标签" plain size="mini" type="warning"></u-tag>
          </view>
          <view class="hospital_detail">
            <text>详情</text>
            <u-icon name="arrow-right-double"></u-icon>
          </view>
        </view>
      </view>
    </view>
    <view class="service">
      <p class="title">联系方式</p>
      <view class="serviceItem">
        <view class="telphone item">
          <!-- <u-icon name="phone"></u-icon> -->
          <span>0571-80999453</span>
        </view>
        <view class="network item">
          <u-icon name="attach"></u-icon>
          <span>0571-80999453</span>
        </view>
        <view class="navmap item">
          <u-icon name="map"></u-icon>
          <span>浙江省杭州市浙江大学国家大学科技园A东325室</span>
        </view>
      </view>
      <view class="daohang" style="width: 100px">
        <u-button type="primary" icon="map" text="手机导航"></u-button>
      </view>
    </view>
  </view>
</template>

<script>
// import Picker from '@/components/Picker.vue'
import menu1 from "@/static/image/cunxuexiao.png";
import menu2 from "@/static/image/jingzhunbangfu.png";
import menu3 from "@/static/image/cunyiyuan.png";
import menu4 from "@/static/image/jiankang.png";
import menu5 from "@/static/image/zixunjieda.png";
import menu6 from "@/static/image/yue.png";
export default {
  data() {
    return {
      show: false,
      disabled: true,
      imgSrc: [
        {
          name: "英才学术",
          url: menu1,
        },
        {
          name: "公益健康",
          url: menu2,
        },
        {
          name: "医生集团",
          url: menu3,
        },
        {
          name: "健康处方",
          url: menu4,
        },
        {
          name: "名医在线",
          url: menu5,
        },
        {
          name: "积分兑换",
          url: menu6,
        },
      ],
      columns: [["中国", "美国", "日本"]],
      list1: [
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
      ],
      list3: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      ],
      list: [
        {
          name: "photo",
          title: "英才学术",
        },
        {
          name: "lock",
          title: "公益健康",
        },
        {
          name: "star",
          title: "医生集团",
        },
        {
          name: "hourglass",
          title: "健康处方",
        },
        {
          name: "home",
          title: "名医在线",
        },
        {
          name: "star",
          title: "积分兑换",
        },
      ],
    };
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
    handleClick() {
      console.log(111);
      uni.navigateTo({
        url: "integrate/integrate",
        fail: (err) => {
          console.log(err);
        },
        success: () => {},
      });
    },
  },
};
</script>
<style lang="scss">
.header_box {
  position: fixed;
  top: 60;
  left: 0;
  width: 100%;
  height: 100rpx;
  padding: 0 20rpx;
  background-color: rgba(225, 225, 225, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  .title_big {
    font-size: 20px;
    font-weight: 400;
    // color: #000;
  }
}

.title {
  font-size: 18px;
  font-weight: 400;
  // color: #000;
  text-align: center;
}

.menu_nav {
  margin-top: 20px;
  background-color: #fff;

  /deep/ .u-icon__icon {
    padding-top: 0 !important;
  }

  .icon_bgc {
    margin-top: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    // background-color: #3c9cff;
    display: flex;
    justify-content: center;
    align-items: center;

    image {
      width: 100%;
      height: 100%;
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

  p {
    padding-top: 10px;
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

    p {
      margin-left: 120px;
    }

    .right_more {
      span {
        line-height: 40px;
      }

      display: flex;
    }
  }
}

.hospital {
  padding: 10px 10px;
  display: flex;

  image {
    width: 100px;
    height: 100px;
  }

  .information {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  .hospital_detail {
    display: flex;
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

    span {
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
