const num = 3884754.23;

const options = {
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false,
};

console.log(new Intl.NumberFormat('en-US', options).format(num));

console.log(new Intl.NumberFormat('de-DE', options).format(num));

console.log(new Intl.NumberFormat(navigator.language, options).format(num));