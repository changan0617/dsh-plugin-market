# dsh-plugin-market

Adds a **Plugin Market** entry to the DSH settings sidebar that opens
[dshmarket.com](https://dshmarket.com/) — the community plugin market for
DeepSeek Harness — in a new tab.

For most people this plugin is unnecessary: installing the market itself

```sh
dsh plugin --profile web add dshmarket
```

puts a full browse / search / one-click-install market inside the settings
page. This plugin is the light-weight alternative for people who want a button
and nothing else.

## Install

```sh
dsh plugin --profile web add github:changan0617/dsh-plugin-market
```

Restart `dsh web`. The entry appears in the settings sidebar next to the
built-in Plugins page.

## Uninstall

```sh
dsh plugin --profile web remove dsh-plugin-market
```

## License

MIT © 2026 changan0617
