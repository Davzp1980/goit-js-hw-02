function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const oderSum = quantity * pricePerDroid;
  if (oderSum <= customerCredits) {
    return `You ordered ${quantity} droids worth ${
      quantity * pricePerDroid
    } credits!`;
  } else {
    return 'Insufficient funds!';
  }
}
