window.ork = {};

window.onload = () => {
  ork.codeAll = document.querySelectorAll('.active .pegs-code .peg');
  ork.pickAll = document.querySelectorAll('.active .pegs-pick .peg');
  ork.pickRow = document.querySelector('.active .board-row-pick');

  ork.codeAll.forEach((element) => {
    element.addEventListener('focus', (event) => {
      ork.codePeg = event.target; // see: document.activeElement
      ork.pickRow.style.height = `${ork.pickRow.scrollHeight}px`;
    });
    element.addEventListener('blur', (event) => {
      ork.pickRow.style.height = 0;
    });
  });

  /**
   * Mousedown event is called before blur.
   * https://stackoverflow.com/questions/39439115/how-to-execute-click-function-before-the-blur-function
   */
  ork.pickAll.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
        // event.preventDefault(); // don't steal focus (keep box open)
        ork.codePeg.className = event.target.className;
    });
  });
};
