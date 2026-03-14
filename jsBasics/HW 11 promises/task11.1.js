function start(text, time) {
  setTimeout(() => {
    console.log(text);
  }, time);
}

start('Hello', 3000);
start('Bye', 1000);
