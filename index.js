function input(value) {
    document.getElementById("result").value += value;
  }

  function clearInput() {
    document.getElementById("result").value = "";
  }

  function calculate() {
    try {
      let result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }