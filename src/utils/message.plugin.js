export default {
  install(Vue) {
    Vue.prototype.$message = function(html) {
      // eslint-disable-next-line
      M.toast({ html, classes: "rounded" });
    };

    Vue.prototype.$error = function(html) {
      // eslint-disable-next-line
      M.toast({ html: `[Ошибка]: ${html}`, classes: "rounded" });
    };
  }
};
