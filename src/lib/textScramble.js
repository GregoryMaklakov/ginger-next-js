export const textScramble = {
  chars: "!<>-_\\/[]{}—=+*^?#________",

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  },

  animateText(textElement, newText) {
    const oldText = textElement.innerText;
    const length = Math.max(oldText.length, newText.length);

    return new Promise(resolve => {
      const queue = [];
      for (let i = 0; i < length; i += 1) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.push({ from, to, start, end });
      }

      let frame = 0;

      const update = () => {
        let output = "";
        let complete = 0;
        for (let i = 0, n = queue.length; i < n; i += 1) {
          const { from, to, start, end } = queue[i];
          let { char } = queue[i];
          if (frame >= end) {
            complete += 1;
            output += to;
          } else if (frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        // eslint-disable-next-line no-param-reassign
        textElement.innerHTML = output;
        if (complete === queue.length) {
          resolve();
        } else {
          frame += 1;
          requestAnimationFrame(update);
        }
      };

      update();
    });
  },
};
