function removeZephr() {
  alert("Removing Zephr overlay");
  const overlay = document.getElementById("zephr-message");
  if (overlay) {
    overlay.remove();
    console.log("Removed Zephr overlay");
  } else {
    console.log("Failed to removed Zephr overlay");
  }
}
// setTimeout(removeZephr, 2000);

// Select the node that will be observed for mutations
const targetNode = document.getElementsByTagName("body")[0];
console.log("Seleted node", targetNode);

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.id === "zephr-message") {
          node.remove();
          console.log("Removed Zephr overlay", node.id);
        } else {
          console.log("this node isn't Zephr overlay", node.id);
        }
      });
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
