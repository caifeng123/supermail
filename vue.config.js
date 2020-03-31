const path = require('path')
module.exports={
	configureWebpack:{
		resolve:{
			alias:{
				'@':path.resolve('./src'),
				'assets':path.resolve('./src/assets'),
				'common':path.resolve('./src/common'),
				'components':path.resolve('./src/components'),
				'network':path.resolve('./src/network'),
				'views':path.resolve('./src/views')
			}
		}
	}
}