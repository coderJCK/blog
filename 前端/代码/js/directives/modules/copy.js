/*
 * @Author: kongjinghcao
 * @Date: 2023-09-12 14:26:21
 * @Last Modified by: kongjinghcao
 * @Last Modified time: 2025-02-25 14:40:34
 * @Description: 复制
 */
const copy = {
  bind(el, { value }, vnode) {
    // eslint-disable-next-line no-param-reassign
    el['data-value'] = value;
    el.addEventListener('click', (e) => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('value', e.target['data-value']);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      // vnode.content即 Vue实例
      vnode.context.$message({ type: 'success', message: '复制成功' });
    });
  },
  componentUpdated(el, { value }) {
    // eslint-disable-next-line no-param-reassign
    el['data-value'] = value;
  },
  unbind(el) {
    el.removeEventListener('click', el.handel);
  },
};

export default copy;
