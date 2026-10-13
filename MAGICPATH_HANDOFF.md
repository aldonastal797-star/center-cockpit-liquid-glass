# 给 MagicPath 的实施说明

修改现有「CENTER 驾驶舱 · 稳定轨道」，保留中文内容、冷蓝银河、巨大地球、航天器和交互。不要删除现有组件或凭描述重写。

## 先确认工具能直接写文件

本文是源码接入说明，适用于 MagicPath 外部代码接口或确实能编辑项目源文件的编辑器。若内置聊天的 edit_component 只向下游 AI 发送生成指令，它不能执行本文要求的直接替换；不要让它逐字复现打包文件，也不要反复重试消耗额度。

外部接口的可用流程是：get_component_code_context 读取当前文件与约束，start_component_code_session 创建编辑会话，按返回的上传命令上传源码归档，再用 submit_component_code 提交；待构建完成后检查其返回的真实错误与预览。直接提交源码不依赖内置聊天重新生成代码，但仍受外部 API 额度、托管构建和项目访问权限限制。

「在 IDE 中打开」及保存后自动同步的入口和行为尚未验证。只有在实际看到对应入口、文件和同步状态后，才将其作为可用接入方式。

不要默认覆盖 src/App.tsx。此前读取的 CENTER 托管脚手架中，App.tsx 从 ./components/generated/CENTER 导入 CENTER；因此对应目标是 src/components/generated/CENTER.tsx。远端可能已变化，应以本次读取到的真实导入关系和约束为准，保留入口的主题与宿主逻辑。

## 有直接文件写入能力时：接入单文件版

完整文件：
https://raw.githubusercontent.com/aldonastal797-star/center-cockpit-liquid-glass/main/magicpath/CENTER.compat.tsx

读取该文件的全部源码，完整替换目标组件的主 TSX 文件。保留导出名称 CENTER（文件也提供 default 导出），按现有入口的导出约定接入。旧的 Earth、SpaceParticles、SceneSettings 和玻璃辅助文件可以留在项目里，但新主文件不再引用它们；不要与旧主文件合并、追加，或只复制其中一部分。

此文件已包含地球、粒子、设置、相机、rdev 原版液态玻璃源码和 CSS。仅从宿主引用 React 与 react/jsx-runtime，不需要安装 liquid-glass-react、图标包或 Tailwind，也不需要复制其他组件。素材与中文字体使用本公开仓库的完整 HTTPS 地址，需联网加载；不要改回不匹配的 assets/ 路径或旧 CDN。

文件第一行的 @ts-nocheck 只用于由严格校验源码生成的 JavaScript 接入产物，避免宿主把已经擦除类型的生成代码当作手写 TypeScript 再报告隐式 any。原始多文件源码仍启用 strict、noUnused 与 verbatimModuleSyntax 检查；这不是诊断或修复未知构建错误的证据。

## 必须保留的行为

- 实际使用 rdev/liquid-glass-react 1.1.1 的折射、色散和边缘高光；文字、原生按钮与操作区保持清晰。
- 首屏以太空场景为主，学习、AI 与底部导航在下滑后出现。
- 靠近时航天器明显放大，地球变化较小，星空基本稳定；不得让 space-scene 整体等比例变换。
- 地球位置固定、慢速自转，明暗按统一光源方向计算，而非按南北半球固定压暗。
- 保留多层柔光粒子、不同方向漂移、分层闪烁、滑杆、预设、本地设置保存。
- 保留暂停、手机布局、键盘、Esc 返回与减少动态效果。

## 如果构建仍失败

先返回本次真实构建日志中的第一条 error，包含文件名、行列号、错误代码和完整内容。不要用「组件太复杂」「文件损坏」「CDN 不同」代替错误日志，也不要反复发送同类生成指令。

若错误仍指向旧辅助文件，说明宿主也会检查未引用的旧文件。此时定位并修复那条错误；单文件主入口不能自动修复宿主保留的其他错误文件。若主文件名或导出不符合入口约定，只调整入口映射，不重写材质与场景。若出现网络/CORS/资源加载错误，属于运行阶段，应单独处理，而非当作 TypeScript 编译错误。

## 多文件源码（后续维护用）

- src/components/generated/CENTER.tsx：主界面与交互编排。
- sceneConfig.ts：共享类型、默认值、预设、输入校验。
- useScenePreferences.ts：设置读取与保存。
- useOrbitCamera.ts：靠近、镜头适配、Esc 返回。
- SceneSettings.tsx、Earth.tsx、SpaceParticles.tsx：设置与场景渲染。
- GlassSurface.tsx、liquid-glass/：指定原组件与适配层。
- CENTER.css：完整样式。public/assets/：场景、玻璃贴图、字体。

已有 MagicPath 项目不要用本仓库的 package.json、入口、tsconfig 或 Vite 配置覆盖托管脚手架。上面的单文件方案只需替换目标主组件。

## 本地验证与再生成

运行 npm ci、npm run magicpath:bundle、npm test、npm run build、npm run build:magicpath。启动 npm run dev 后，/ 是多文件版，/magicpath-preview.html 是使用同一兼容文件的预览。

本地通过不等于 MagicPath 托管构建已通过。交付时分别报告两边状态；检查真实贴图、滚动、镜头、暂停与设置保存，不要只报告页面能打开。
