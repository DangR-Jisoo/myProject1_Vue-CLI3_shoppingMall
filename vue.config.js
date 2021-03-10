module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                views: "@/views",
                components: "@/components",
                network: "@/network",
                common: "@/common",
                assets: "@/assets",
            },
        },
    },
};
// 给路径起别名，在以后引用路径时就不需要了