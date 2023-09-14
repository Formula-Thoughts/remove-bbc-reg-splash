// Select the node that will be observed for mutations
const targetNode = document.getElementsByTagName("body")[0];

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = () => {
  let zephrMessage = document.getElementById("zephr-message");
  if (zephrMessage) {
    zephrMessage.remove();
    console.log("Removed BBC Zephr splash overlay", zephrMessage.id);
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
