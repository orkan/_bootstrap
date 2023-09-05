window.ork = {};

window.onload = () => {
  ork.codeAll = document.querySelectorAll('.active .pegs-code .peg');
  ork.pickAll = document.querySelectorAll('.active .pegs-pick .peg');
  ork.pickBox = document.querySelector('.active .pegs-pick');

  ork.codeAll.forEach((element) => {
    element.addEventListener('focus', (event) => {
      ork.codePeg = event.target; // see: document.activeElement
      ork.codePeg.focus();
      ork.pickBox.hidden = false;

    });
    element.addEventListener('blur', (event) => {
      ork.pickBox.hidden = true;
    });
  });

  /**
   * Mousedown event is called before blur.
   * https://stackoverflow.com/questions/39439115/how-to-execute-click-function-before-the-blur-function
   */
  ork.pickAll.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
        event.preventDefault();
        ork.codePeg.className = event.target.className;
    });
  });
};
