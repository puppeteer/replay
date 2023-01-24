// Wait for the message from the extension to replay.
// You can also provide static content via the HTML page
// or have a different workflow around the events.
/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  main();
});

async function main() {
  // Read the recording from the localStorage.
  const recording = JSON.parse(localStorage.getItem('recording'));

  // Dummy auth flow. Please use the best practices for authenticating users.
  const token = localStorage.getItem('token');
  if (!token) {
    document.body.innerHTML = `
            <form>
                Name: <input name=name>
                Password: <input name=password type=password>
                <input type=submit>
            </form>
        `;
    document.querySelector('form').onsubmit = (event) => {
      event.preventDefault();
      fetch('http://example.com', { mode: 'no-cors' })
        .then((response) => {
          localStorage.setItem('token', 'token');
          main();
        })
        .catch((err) => console.log(err));
    };
    return;
  }

  document.body.innerHTML = `
        <h1>Replay page</h1>
        <button>log out</button>
        <pre id="recording"></pre>
    `;
  document.querySelector('button').addEventListener('click', () => {
    localStorage.removeItem('token');
    main();
  });

  // Emulating replay
  document.querySelector(
    '#recording'
  ).innerHTML = `Running ${recording.title}<br>`;
  for (let i = 0; i < recording.steps.length; i++) {
    document.querySelector(
      '#recording'
    ).innerHTML += `Running step ${i}: ${JSON.stringify(
      recording.steps[i]
    )}<br>`;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
