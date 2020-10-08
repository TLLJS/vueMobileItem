module.exports = {
    configureWebpack: {
        resolve: {
            // 配置可以省略哪些文件的后缀名
            extensions: [],
            // 配置路径别名 assets文件名 @/assets文件别名 @是src文件
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views'
            }
        }
    }
}