// 拖拽拉伸宽度
const resize = {
  bind(el) {
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      const initX = e.clientX;
      const parentDom = el.parentNode;
      const initWidth = parentDom.offsetWidth;
      let newWidth;
      document.onmousemove = (event) => {
        const endX = event.clientX;
        if (endX < 250) {
          return;
        }
        el.style.left = `${endX}px`;
        el.style.opacity = '1';
        newWidth = endX - initX + initWidth;
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        parentDom.style.width = `${newWidth}px`;
        el.style.opacity = '0';
      };
    });
  },
};

export default resize;
