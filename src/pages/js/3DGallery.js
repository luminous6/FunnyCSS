(() => {
  class Card {
    constructor(node, position) {
      this.node = node;
      this.position = position;
    }
    // card的下一个位置
    nextPosition() {
      let position = 1;
      if (this.position !== 5) {
        position = this.position + 1;
      }
      return position;
    }
    // card的上一个位置
    prevPosition() {
      let position = 5;
      if (this.position !== 1) {
        position = this.position - 1;
      }
      return position;
    }

    // 向右移动
    moveNext() {
      this.node.classList.replace(
        `position${this.position}`,
        `position${this.nextPosition()}`
      );
      this.position = this.nextPosition();
    }
    // 向左移动
    movePrev() {
      this.node.classList.replace(
        `position${this.position}`,
        `position${this.prevPosition()}`
      );
      this.position = this.prevPosition();
    }
  }
  // 按钮组
  const [prev, next] = document.querySelectorAll('i');
  // 画布
  const gallery = document.querySelector('.gallery');
  // 所有照片dom数组
  const cards = [];
  let start;

  document.querySelectorAll('.card').forEach((e, pos) => {
    pos += 1;
    cards.push(new Card(e, pos));
  });
  // 切换位置
  function changePosition(type) {
    if (type === 'prev') {
      cards.forEach((e) => {
        e.movePrev();
      });
    }
    if (type === 'next') {
      cards.forEach((e) => {
        e.moveNext();
      });
    }
  }
  prev.addEventListener('click', () => {
    changePosition('prev');
  });

  next.addEventListener('click', () => {
    changePosition('next');
  });

  gallery.addEventListener('touchstart', (s) => {
    console.log('start', s);
    start = s.targetTouches[0].screenX;
  });

  gallery.addEventListener('touchend', (s) => {
    console.log('end', s);
    const end = s.changedTouches[0].screenX;
    const range = Math.abs(start - end);
    if (range > 30) {
      if (start < end) {
        changePosition('next');
      }
      if (start > end) {
        changePosition('prev');
      }
    }
  });
})();
