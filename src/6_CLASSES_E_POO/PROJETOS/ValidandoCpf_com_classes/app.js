class ValidaCPF {
    constructor(cpf) {
      this.cpf = cpf.replace(/\D+/g, "");
    }

    completeCpf() {
      const cpfArray = this.getCPFArray();
  
      const firstDigit = this.calculateDigit(cpfArray, 10);
      cpfArray.push(firstDigit);
  
      const secondDigit = this.calculateDigit(cpfArray, 11);
      cpfArray.push(secondDigit);
  
      const fullCpf = this.agroupArray(cpfArray);
      const isValid = this.validateCpf(fullCpf);
  
      return { fullCpf, isValid };
    }

    unbindLastNumbers() {
        return this.cpf.slice(0, -2);
    }

    getCPFArray() {
        const cpfWithoutLastNumbers = this.unbindLastNumbers();
        return Array.from(cpfWithoutLastNumbers);
    }

    calculateDigit(array, aux) {
        const calculatedNumbers = array.map((value) => {
          value *= aux;
          aux--;
          return value;
        }).reduce((accumulator, value) => accumulator + value, 0);
    
        return this.normalizeDigit(calculatedNumbers);
    }

    normalizeDigit(sum) {
        let digit = 11 - (sum % 11);
        if (digit > 9) digit = 0;
        return digit;
      }
  
    validateCpf(cpf) {
      const initialCpf = this.cpf;
      return initialCpf === cpf;
    }
  
    agroupArray(array) {
      return array.join("");
    }
  }
  
  const cpfInput = new ValidaCPF("909.677.806-59");
  console.log(cpfInput.completeCpf());