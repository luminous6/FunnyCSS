(function () {
  const typedTextSpan = document.querySelector('.typed-text');
  const cursorSpan = document.querySelector('.cursor');

  const textArray = ['hard', 'fun', 'a journey', 'LIFE'];
  const typingDelay = 200;
  const erasingDelay = 200;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  // 打字效果
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      console.log(textArray[textArrayIndex] + '=>当前打印完毕！开始删除...');
      setTimeout(erase, newTextDelay);
    }
  }
  // 删除效果
  function erase() {
    if (charIndex > 0) {
      console.log(
        '删除' + textArray[textArrayIndex].substring(charIndex - 1, charIndex)
      );
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );

      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      console.log(
        textArray[textArrayIndex] +
          '删除完成， 开始下一个' +
          textArray[textArrayIndex + 1] +
          '字段打印'
      );
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1000);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });
})();
