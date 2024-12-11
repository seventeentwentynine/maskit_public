document.getElementById("select-text").addEventListener("click", async () => {
  console.log("Popup script loaded");
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    if (tabs.length === 0) {
      alert("No active tabs found!");
      return;
    }

    const tabId = tabs[0].id;

    // Inject the script to get selected text
    const results = await browser.tabs.executeScript(tabId, {
      code: '(' + getSelectedText.toString() + ')()'
    });

    if (results && results[0]) {
      const selectedText = results[0];
      const verdict = await analyzeText(selectedText);

      // Send message to the content script to highlight the text
      await browser.tabs.sendMessage(tabId, { action: "highlightText", verdict });
    } else {
      alert("No text selected!");
    }
  } catch (error) {
    console.error("Error in select-text listener:", error);
  }
});

function getSelectedText() {
  console.log("getSelectedText");
  return window.getSelection().toString();
}

async function analyzeText(text) {
  try {
    const { pipeline } = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.1.1');
    const classifier = await pipeline('text-classification', 'maskitplugin/maskitmodel');
    const result = await classifier(text);
    console.log(result);
    const label = result[0].label.toLowerCase();
    console.log("Label:", label);

    if (label.includes('label_0')) return 'false';
    if (label.includes('label_1')) return 'true';
    return 'neutral';
  } catch (error) {
    console.error("Error in analyzeText:", error);
    return 'neutral';
  }
}
