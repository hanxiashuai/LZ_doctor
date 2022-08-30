<template>
	<view>
		<view class="mainForm">
			<u--form :model="form" ref="uForm ">
				<u-form-item label="姓名" prop="name" borderBottom>
					<u-input v-model="form.name" border="none" placeholder="请输入真实姓名" />
				</u-form-item>
				<u-form-item label="电话" prop="tel" borderBottom>
					<u-input v-model="form.tel" border="none" placeholder="请输入电话" />
				</u-form-item>
				<u-form-item label="微信号" prop="vx" borderBottom>
					<u-input v-model="form.vx" border="none" placeholder="请输入微信号" />
				</u-form-item>
				<u-form-item label="支付宝号" prop="zfb" borderBottom>
					<u-input v-model="form.zfb" border="none" placeholder="请输入支付宝号" />
				</u-form-item>
				<u-form-item label="申请积分" prop="sqjf" borderBottom>
					<u-input v-model="form.sqjf" border="none" placeholder="请输入申请积分" />
				</u-form-item>
				<u-form-item label="备注" prop="note" borderBottom>
					<u-input v-model="form.note" border="none" placeholder="请输入备注" />
				</u-form-item>
			</u--form>
		</view>
		<view class="agreement">
			<u-radio-group v-model="value">
				<u-radio shape="square" label="兑换协议"></u-radio>
			</u-radio-group>

			<button type="default" style="background-color: #ff8515; color:#fff" class="allpoints">全部兑换</button>
			<button type="default" style="background-color: #ff8515; color:#fff" class="submitBtn">提交申请</button>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 0,
				form: {
					name: '',
					tel: '',
					vx: '',
					zfb: '',
					sqjf: '',
					note: '',
				},
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change']
					}]
				}
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			}
		}
	}
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
		font-size: 12px
	}

	.agreement {
		padding: 10px 10px;
		margin: 10px 0;

		.allpoints {
			margin: 10px 0;
		}

		.submitBtn {
			margin: 10px 0;
		}
	}
</style>
