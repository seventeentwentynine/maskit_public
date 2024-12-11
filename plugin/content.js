browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "highlightText") {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      span.style.backgroundColor =
        request.verdict === 'true' ? 'green' :
        request.verdict === 'false' ? 'red' : 'grey';
      span.textContent = selection.toString();
      range.deleteContents();
      range.insertNode(span);
    }
  }
});
