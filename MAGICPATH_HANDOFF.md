# 给 MagicPath 的实施说明

请修改现有 CENTER 驾驶舱，以此仓库为最新源码依据。保留冷蓝深空配色、银河、巨大地球、航天器造型、中文内容、暂停和原有交互。

## 先读这些文件

1. `src/components/generated/CENTER.tsx`：驾驶舱、下滑布局、导航、分层镜头与设置保存。
2. `src/components/generated/CENTER.css`：桌面 / 手机布局及原组件尺寸适配。
3. `src/components/generated/GlassSurface.tsx`：指定 Liquid Glass React 组件的适配层。
4. `src/components/generated/liquid-glass/index.tsx`、`shader-utils.ts`、`utils.ts`：rdev 原组件实现。
5. `src/components/generated/Earth.tsx`：地球自转、光照与贴图。
6. `src/components/generated/SpaceParticles.tsx`：多层光场粒子和兼容模式。
7. `src/components/generated/SceneSettings.tsx`：实时场景配置。

## 必须保留的实现

- 实际使用 rdev/liquid-glass-react 原组件的折射、色散与边缘高光，不改回仅有 blur 和细边框的 CSS 面板。
- 玻璃的背景发生变化时，透光与反射随之变化；文字与操作区保持稳定。
- 首屏以太空场景为主。学习、AI 和底部导航位于下滑后的内容区，不将所有面板塞入同一视图。
- 点击靠近时，航天器明显放大，地球变化较小，星空基本稳定；不得整幅背景一起等比例变换。
- 地球固定位置慢速自转，明暗由光源决定，加强半明半暗的体积层次，不用南北半球纬度遮罩代替光照。
- 粒子采用多层柔光、不同方向漂移及不同频率闪烁，保留场景预设、滑杆、暂停和本地设置保存。
- 保留手机、键盘、Esc 返回、减少动态效果和加载失败回退。

## 接入注意

此仓库可以直接用 Vite 运行；如果目标是已有 MagicPath 组件，不要用本仓库的 package.json、入口和构建配置覆盖它的托管脚手架。将 generated 下的组件接入原入口即可。

如目标环境不能安装 npm 包，请使用仓库中已经保留 MIT 许可证的 rdev 原源码。

将 `public/assets/` 下的图片复制为目标项目的 `assets/`，源码中的 `assets/...` 引用需要一并迁移。所有现有图片都已随仓库提供，不必重新生成星空或航天器。

在完成后检查类型、构建、贴图加载、滚动、镜头、参数保存、桌面和手机，提供首屏、下滑内容和手机截图。
