let k = -2;

while (k < 100) {
    k = k + 2;
    console.log(k);
}

let x = 103;

while (x > 3) {
    x = x - 3;
    console.log(x);
}

for (let i = 1; i <= 100; i+=2) {
    console.log(i);
}

for (let i = 0; i <= 100; i++) { 
  if (i % 5 == 0 && i % 3 == 0) {
    console.log('Hello World');
  } else if(i % 3 == 0) {
    console.log('Hello');
  } else if (i % 5 == 0) {
    console.log('World');
  } else {
    console.log(i);
  }
}