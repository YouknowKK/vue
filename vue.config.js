module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("autoprefixer")({
                        overrideBrowserslist: ["last 15 versions"],
                    }),
                    require("postcss-pxtorem")({
                        rootValue: 75, // 换算的基数
                        // 忽略转换正则匹配项。插件会转化所有的样式的px，但你可以使用 selectorBlackList 字段来过滤不想转化的地方。
                        // 如果个别地方不想转化px，可以简单地使用大写的 PX 或 Px。
                        selectorBlackList: ["ig"],
                        propList: ["*"],
                        exclude: /node_modules/,
                    }),
                ],
            },
        },
    },
};
