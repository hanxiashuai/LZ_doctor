<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">设置地址</block>
		</cu-custom>
		<view class="mainForm">
			<u--form :errorType="errorType" :model="form" ref="uForm">
				<u-form-item label="姓名:" prop="name" borderBottom><u-input v-model="form.name" border="none" placeholder="请输入真实姓名" /></u-form-item>
				<u-form-item label="手机号:" prop="tel" borderBottom><u-input v-model="form.tel" border="none" placeholder="请输入手机号" /></u-form-item>

				<u-form-item label="地区:" @click="show = true" prop="address" borderBottom>
					<u--input v-model="form.address" disabled disabledColor="#ffffff" placeholder="请选择城市" border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>

				<u-form-item label="详细地址:" prop="mainaddress" borderBottom><u-input v-model="form.mainaddress" border="none" placeholder="街道门牌信息" /></u-form-item>
				
				<u-picker :show="show" ref="uPicker" :loading="loading" @confirm="confirm" keyName="name" :columns="columns" @change="changeHandler"></u-picker>
			</u--form>
		<button @click="submit" class="addBtn cu-btn">保存</button>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
import { editUserAddress, addUserAddress, getProvinces, getCities, getAreas, getAnAddress } from '@/api/user_address.js';
export default {
	data() {
		return {
			value: 0,
			errorType: 'message',
			editID: '',
			form: {
				name: '',
				tel: '',
				address: '',
				mainaddress: ''
			},
			provinceid: 110000,
			cityid: 110100,
			show: false,
			loading: false,
			columns: [],
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change']
					}
				],
				tel: [
					{
						required: true,
						message: '请输入电话号码',
						trigger: ['blur', 'change']
					}
				],
				address: [
					{
						required: true,
						message: '请输入地址',
						trigger: ['blur', 'change']
					}
				],
				mainaddress: [
					{
						required: true,
						message: '请输入详细地址',
						trigger: ['blur', 'change']
					}
				]
			}
		};
	},
	onReady() {
		// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		submit() {
			this.$refs.uForm
				.validate()
				.then(async res => {
					let result = '';
					console.log(this.editID);
					if (this.editID == '') {
						result = await addUserAddress(this.form);
					} else {
						result = await editUserAddress({ ...this.form, id: this.editID });
					}

					if (result.status == 0) {
						this.$refs.uToast.show({
							type: 'success',
							title: '成功主题(带图标)',
							message: '保存成功'
						});
						setTimeout(function() {
							uni.navigateBack();
						}, 400);
					}
				})
				.catch(errors => {
					uni.$u.toast('校验失败');
				});
		},

		changeHandler(e) {
			const {
				columnIndex,
				value,
				index,
				// 微信小程序无法将picker实例传出来，只能通过ref操作
				picker = this.$refs.uPicker
			} = e;
			if (columnIndex === 0) {
				this.loading = true;
				this.provinceid = value[0].provinceid;
				this.cityid = value[1].cityid;
				this.getProvincesList();
				this.loading = false;
			}
			if (columnIndex === 1) {
				this.loading = true;
				this.provinceid = value[0].provinceid;
				this.cityid = value[1].cityid;
				this.getProvincesList();
				this.loading = false;
			}
		},
		confirm(e) {
			this.form.address = `${e.value[0].name} , ${e.value[1].name} , ${e.value[2].name}`;
			this.show = false;
		},
		//获取城市
		async getProvincesList() {
			let provinceRes = await getProvinces();
			let cityRes = await getCities(this.provinceid);
			let areaRes = await getAreas(this.cityid);

			let data1 = provinceRes.data.map(item => ({
				id: item.id,
				provinceid: item.provinceid,
				name: item.province
			}));
			let data2 = cityRes.data.map(item => ({
				id: item.id,
				cityid: item.cityid,
				name: item.city
			}));
			let data3 = areaRes.data.map(item => ({
				id: item.id,
				areaid: item.areaid,
				name: item.area
			}));

			this.columns = [data1, data2, data3];
		},

		async anAddress(data) {
			let res = await getAnAddress(data);
			console.log('@@@', res.data[0]);
			this.form.name = res.data[0].name;
			this.form.tel = res.data[0].tel;
			this.form.address = res.data[0].address;
			this.form.mainaddress = res.data[0].mainaddress;
		}
	},
	onLoad(data) {
		this.getProvincesList();
		if (data.id) {
			this.editID = data.id;
			this.anAddress(data.id);
		}
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
	margin-top: 20px;
}
</style>
