/* eslint-disable no-undef */
const view = await chrome.devtools.recorder.createView(
  /* name= */ 'CoffeeTest',
  /* pagePath= */ 'Replay.html'
);

view.onShown.addListener(() => {
  // Recorder has shown the view. Send additional data to the view if needed.
  chrome.runtime.sendMessage('shown');
});

view.onHidden.addListener(() => {
  // Recorder has hidden the view.
});

export class RecorderPlugin {
  replay(recording) {
    // Share the data with the view.
    localStorage.setItem('recording', JSON.stringify(recording));
    // Request to show the view.
    view.show();
  }
}

/* eslint-disable no-undef */
chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new RecorderPlugin(),
  /* name=*/ 'CoffeeTest'
);
