function createAPP() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.onButtonClick();
    },

    mathProcedure() {
      // Pensar em outra lógica para colocar no lugar desse eval...
      let calc = this.display.value;

      try {
        calc = eval(calc);

        if (!calc) {
          alert("Invalid input");
          return;
        }

        this.display.value = String(calc);
      } catch {
        alert("Invalid input");
        return;
      }
    },

    onButtonClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.showOnDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-operator")) {
          this.showOnDisplay(el.innerText);
        }

        if (el.classList.contains("btn-DEL")) {
          this.deleteLastNumber();
        }

        if (el.classList.contains("btn-equals")) {
          this.mathProcedure();
        }
      });
    },

    showOnDisplay(btnValue) {
      this.display.value += btnValue;
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteLastNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },
  };
}

const app = createAPP();
app.start();
