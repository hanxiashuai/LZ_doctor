// to是要去的页面，type是跳转方式 默认 navigateTo,与uniapp跳转方式一致
const myNavigateTo = (to, isLogin, type = 'navigateTo') => {
	if (isLogin) {
		uni[type]({
			url: to
		})
	} else {
		uni[type]({
			url: '/pages/login/login'
		})
	}
}
// 到处 nav方法
export myNavigateTo
