# dsh-plugin-market（中文说明）

在 DSH 设置侧边栏里加一个 **Plugin Market** 入口，点击新标签页打开
[dshmarket.com](https://dshmarket.com/) —— DeepSeek Harness 的社区插件市场。

大多数人不需要这个插件：装上市场本体

```sh
dsh plugin --profile web add dshmarket
```

就能在设置页里直接逛、搜、一键安装。这个插件只给「只想要一个按钮」的人。

## 安装

```sh
dsh plugin --profile web add github:changan0617/dsh-plugin-market
```

安装后重启 `dsh web`，入口会出现在设置侧边栏「内置插件 / Plugins」旁边。

## 卸载

```sh
dsh plugin --profile web remove dsh-plugin-market
```

## License

MIT © 2026 changan0617
