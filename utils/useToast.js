import Toast, { hideToast } from 'tdesign-miniprogram/toast/index';

const useToast = Behavior({
  methods: {
    onShowToast(selector, message) {
      Toast({
        context: this,
        selector,
        message,
      });
    },

    onHideToast(selector) {
      hideToast({
        context: this,
        selector,
      });
    },
  },
});

export default useToast;
