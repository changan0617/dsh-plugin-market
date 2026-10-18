// dsh-plugin-market — Client half (web).
// Adds a "Plugin Market" entry to the DSH settings sidebar that opens
// https://dshmarket.com — the community plugin market for DeepSeek Harness —
// in a new tab. Registered through the same settings.section slot the built-in
// "内置插件 / Plugins" page uses, so it sits next to it instead of guessing at
// the DOM.
window.__ModuleLoader__.load({
  id: 'dsh-plugin-market',
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

    const MARKET_URL = 'https://dshmarket.com/';

    exports.apply = function (ctx) {
      const slots = ctx.get('slots');
      if (slots === undefined) return;
      ctx.effect(() => slots.inject('settings.section', () => slots.register(
        {
          name: 'settings.section',
          id: 'plugin-market',
          order: 16,
          label: 'Plugin Market',
        },
        function MarketEntry() {
          window.open(MARKET_URL, '_blank', 'noopener,noreferrer');
          return null;
        },
      )));
    };

    return module.exports;
  }
});
