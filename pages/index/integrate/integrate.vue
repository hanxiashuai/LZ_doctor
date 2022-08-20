<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">积分兑换</block>
		</cu-custom>
		<view class="mainForm">
			<u--form :model="form" ref="uForm ">
				<u-form-item label="姓名" prop="name" borderBottom>
					<u-input v-model="form.name" border="none" placeholder="请输入真实姓名" />
				</u-form-item>
				<u-form-item label="电话" prop="tel" borderBottom>
					<u-input v-model="form.name" border="none" placeholder="请输入电话" />
				</u-form-item>
				<u-form-item label="微信号" prop="tel" borderBottom>
					<u-input v-model="form.name" border="none" placeholder="请输入电话" />
				</u-form-item>
				<u-form-item label="支付宝号" prop="tel" borderBottom>
					<u-input v-model="form.name" border="none" placeholder="请输入电话" />
				</u-form-item>
				<u-form-item label="申请积分" prop="tel" borderBottom>
					<u-input v-model="form.name" border="none" placeholder="请输入电话" />
				</u-form-item>
				<u-form-item label="备注" prop="tel" borderBottom>
					<u-input v-model="form.name" border="none" placeholder="请输入电话" />
				</u-form-item>
			</u--form>

			<!-- <u-button @click="submit">提交</u-button> -->
		</view>
		<view class="agreement">
			<u-radio-group v-model="value">
				<u-radio shape="square" label="兑换协议"></u-radio>
			</u-radio-group>
			<u-button text="全部兑换" class="allpoints"></u-button>
			<u-button text="提交申请" class="submitBtn"></u-button>
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
