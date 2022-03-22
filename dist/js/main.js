const getRandomDadJoke = async () => {
  const url = 'https://icanhazdadjoke.com/';
  const jokeStream = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const jsonJoke = await jokeStream.json();
  const joke = jsonJoke.joke;
  return joke;
};

const displayJoke = (joke) => {
  const h1 = document.querySelector('h1');
  h1.textContent = joke;
};

const refreshJoke = async () => {
  const joke = await getRandomDadJoke();
  displayJoke(joke);
};
// load the first joke

refreshJoke();

setInterval(() => {
  refreshJoke();
}, 10000);
