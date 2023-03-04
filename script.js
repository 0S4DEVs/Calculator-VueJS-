new Vue({
    el: '#app',
    data: {
      display: '',
      operand1: null,
      operand2: null,
      operator: null
    },
    methods: {
      add: function() {
        this.operator = '+';
        this.operand1 = parseFloat(this.display);
        this.display = '';
      },
      subtract: function() {
        this.operator = '-';
        this.operand1 = parseFloat(this.display);
        this.display = '';
      },
      multiply: function() {
        this.operator = '*';
        this.operand1 = parseFloat(this.display);
        this.display = '';
      },
      divide: function() {
        this.operator = '/';
        this.operand1 = parseFloat(this.display);
        this.display = '';
      },
      clear: function() {
        this.display = '';
        this.operand1 = null;
        this.operand2 = null;
        this.operator = null;
      },
      calculate: function() {
        this.operand2 = parseFloat(this.display);
        var result;
        switch(this.operator) {
          case '+':
            result = this.operand1 + this.operand2;
            break;
          case '-':
            result = this.operand1 - this.operand2;
            break;
          case '*':
            result = this.operand1 * this.operand2;
            break;
          case '/':
            result = this.operand1 / this.operand2;
            break;
          default:
            return;
        }
        this.display = result.toString();
        this.operand1 = null;
        this.operand2 = null;
        this.operator = null;
      }
    }
  });
  