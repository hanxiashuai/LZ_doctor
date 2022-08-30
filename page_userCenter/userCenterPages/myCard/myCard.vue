<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的资料</block>
		</cu-custom>
		<view class="mainForm">
			<u--form :model="form" ref="uForm ">
				<u-form-item label="姓名" prop="name" borderBottom><u-input v-model="form.name" border="none" placeholder="请输入您的真实姓名" /></u-form-item>
				<u-form-item label="联系方式" prop="tel" borderBottom><u-input v-model="form.tel" border="none" placeholder="请输入您的·联系方式" /></u-form-item>
				<u-form-item label="单位" prop="danwei" borderBottom><u-input v-model="form.danwei" border="none" placeholder="请输入您的单位" /></u-form-item>
				<u-form-item label="职位" prop="zhiwei" borderBottom><u-input v-model="form.zhiwei" border="none" placeholder="请输入您的职位" /></u-form-item>
				<u-form-item label="其他" prop="other" borderBottom><u-input v-model="form.other" border="none" placeholder="其他" /></u-form-item>
			</u--form>
			<u-toast ref="uToast" />
		</view>

		<button @click="submit" class="addBtn cu-btn">提交</button>
	</view>
</template>

<script>
import { getwxuserinfo, editwxuserinfo } from '@/api/wx_userinfo.js';
export default {
	data() {
		return {
			value: 0,
			form: {
				name: '',
				tel: '',
				danwei: '',
				zhiwei: '',
				other: ''
			}
		};
	},
	methods: {
		async submit() {
			let res = await editwxuserinfo(this.form);
			this.$refs.uToast.show({
				type: 'success',
				title: '成功主题(带图标)',
				message: '修改成功'
			});
		},
		async getinfo() {
			let res = await getwxuserinfo();
			this.form.name = res.data.name;
			this.form.tel = res.data.tel;
			this.form.danwei = res.data.danwei;
			this.form.zhiwei = res.data.zhiwei;
			this.form.other = res.data.other;
		}
	},
	onLoad() {
		this.getinfo();
	}
};
</script>

<style lang="scss">
.mainForm {
	background-color: #fff;
	padding: 0 10px;
}

/deep/ .u-form-item__body__left__content__label {
	font-size: 12px;
	width: 100px;
}

/deep/ .u-input {
	margin-left: 40px;
	font-size: 12px;
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
