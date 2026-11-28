var credit_button = document.getElementById("credit");
var debit_button = document.getElementById("debit");

credit_button.addEventListener("click", function () {
  var current_balance_el = document.getElementById("balance");
  var amount_input = document.getElementById("amount");
  var message_el = document.getElementById("message");

  var current_balance = parseFloat(current_balance_el.innerText) || 0;
  var entered_amount = parseFloat(amount_input.value);

  if (!amount_input.value || isNaN(entered_amount)) {
    message_el.innerText = "Please enter amount.";
    message_el.style.color = "#ff0000";
  } else if (entered_amount > 0) {
    current_balance_el.innerText = current_balance + entered_amount;
    message_el.innerText = "";
  } else {
    message_el.innerText = "Please enter amount greater than 0.";
    message_el.style.color = "#ff0000";
  }

  amount_input.value = "";
});

debit_button.addEventListener("click", function () {
  var current_balance_el = document.getElementById("balance");
  var amount_input = document.getElementById("amount");
  var message_el = document.getElementById("message");

  var current_balance = parseFloat(current_balance_el.innerText) || 0;
  var entered_amount = parseFloat(amount_input.value);

  if (!amount_input.value || isNaN(entered_amount)) {
    message_el.innerText = "Please enter amount.";
    message_el.style.color = "#ff0000";
  } else if (entered_amount <= 0) {
    message_el.innerText = "Please enter amount greater than 0.";
    message_el.style.color = "#ff0000";
  } else if (entered_amount > current_balance) {
    message_el.innerText = "Insufficient balance.";
    message_el.style.color = "#ff0000";
  } else {
    current_balance_el.innerText = current_balance - entered_amount;
    message_el.innerText = "";
  }

  amount_input.value = "";
});