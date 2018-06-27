function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }
      else {
        reject("Couldn't add a number and non-number together");
      }
    }, 1000);
  });
}

addPromise(2, 6).then(function (sum) {
  console.log('promise success', sum);
}, function(err) {
  console.log('promise error', err);
});

addPromise(2, 'yellow').then(function (sum) {
  console.log('promise success', sum);
}, function(err) {
  console.log('promise error', err);
});


// if (typeOf a === 'number' && typeOf b === 'number'){
//   resolve(a + b);
// }
// else {
//   reject("Couldn't add a number and non-number together");
// }
