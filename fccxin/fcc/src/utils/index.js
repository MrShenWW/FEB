export const offset = ele => {
  if (!ele) return { left: 0, top: 0 };
  var eleLeft = ele.offsetLeft;
  var eleTop = ele.offsetTop;
  var eleParent = ele.offsetParent;
  var left = null;
  var top = null;
  left += eleLeft;
  top += eleTop;
  while (eleParent) {
    left += eleParent.clientLeft + eleParent.offsetLeft;
    top += eleParent.clientTop + eleParent.offsetTop;
    eleParent = eleParent.offsetParent; // ??
  }
  return { left: left, top: top };
};

export const isView = element => {
  if (!element) return false;
  if (
    offset(element).top + element.clientHeight > window.pageYOffset &&
    window.pageYOffset + window.innerHeight > offset(element).top
  ) {
    return true;
  } else {
    return false;
  }
};

export const scroll = (currentY, targetY) => {
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY;
  let _currentY = currentY;
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 10);
    _currentY += dist;
    window.scrollTo(_currentY, currentY);
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 10 || needScrollTop < -10) {
      scroll(_currentY, targetY);
    } else {
      window.scrollTo(_currentY, targetY);
    }
  }, 13);
};
// 暴露此方法
export default scroll;
