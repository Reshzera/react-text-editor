function makeBold() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;
  const range = selection.getRangeAt(0);
  const parentEl = range.commonAncestorContainer.parentElement;

  const strongElement = parentEl?.closest("strong");
  if (strongElement) {
    while (strongElement.firstChild) {
      strongElement.parentNode?.insertBefore(
        strongElement.firstChild,
        strongElement
      );
    }
    strongElement.remove();
    return;
  }

  const newElement = document.createElement("strong");
  range.surroundContents(newElement);
}

function makeItalic() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;
  const range = selection.getRangeAt(0);
  const parentEl = range.commonAncestorContainer.parentElement;

  const emElement = parentEl?.closest("em");
  if (emElement) {
    while (emElement.firstChild) {
      emElement.parentNode?.insertBefore(emElement.firstChild, emElement);
    }
    emElement.remove();
    return;
  }

  const newElement = document.createElement("em");
  range.surroundContents(newElement);
}

function makeTitle(level = 1) {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;
  const range = selection.getRangeAt(0);
  const parentEl = range.commonAncestorContainer.parentElement;

  const hElement = parentEl?.closest(
    /^H[1-6]$/.test(parentEl?.tagName || "") ? parentEl.tagName : ""
  );
  if (hElement) {
    while (hElement.firstChild) {
      hElement.parentNode?.insertBefore(hElement.firstChild, hElement);
    }
    hElement.remove();
    return;
  }

  const newElement = document.createElement(`h${level}`);
  range.surroundContents(newElement);
}
//
function alignLeft() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;
  const range = selection.getRangeAt(0);
  const parentEl = range.commonAncestorContainer.parentElement;

  const alignedEl = parentEl?.closest("div[style*='text-align: left']");
  if (alignedEl) {
    alignedEl.style.textAlign = "";
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.style.textAlign = "left";
  range.surroundContents(wrapper);
}

function alignCenter() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;
  const range = selection.getRangeAt(0);
  const parentEl = range.commonAncestorContainer.parentElement;

  const alignedEl = parentEl?.closest("div[style*='text-align: center']");
  if (alignedEl) {
    alignedEl.style.textAlign = "";
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.style.textAlign = "center";
  range.surroundContents(wrapper);
}

function alignRight() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;
  const range = selection.getRangeAt(0);
  const parentEl = range.commonAncestorContainer.parentElement;

  const alignedEl = parentEl?.closest("div[style*='text-align: right']");
  if (alignedEl) {
    alignedEl.style.textAlign = "";
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.style.textAlign = "right";
  range.surroundContents(wrapper);
}

export { alignCenter, alignLeft, alignRight, makeItalic, makeTitle, makeBold };
