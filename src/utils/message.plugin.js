export default {
  install(Vue) {
    Vue.prototype.$message = function(html) {
      M.toast({ html, classes: "rounded" });
    };

    Vue.prototype.$error = function(html) {
      M.toast({ html: `[Ошибка]: ${html}`, classes: "rounded" });
    };
  }
};
