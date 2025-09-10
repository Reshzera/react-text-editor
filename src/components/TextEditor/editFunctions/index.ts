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
  if (parentEl && parentEl.tagName === "EM") {
    const emEl = parentEl;
    while (emEl.firstChild) {
      emEl.parentNode?.insertBefore(emEl.firstChild, emEl);
    }
    emEl.remove();
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
  if (parentEl && /^H[1-6]$/.test(parentEl.tagName)) {
    const hEl = parentEl;
    while (hEl.firstChild) {
      hEl.parentNode?.insertBefore(hEl.firstChild, hEl);
    }
    hEl.remove();
    return;
  }
  const newElement = document.createElement(`h${level}`);
  range.surroundContents(newElement);
}

function alignLeft() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;
  const range = selection.getRangeAt(0);
  const parentEl = range.commonAncestorContainer.parentElement;
  if (parentEl && parentEl.style.textAlign === "left") {
    parentEl.style.textAlign = "";
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
  if (parentEl && parentEl.style.textAlign === "center") {
    parentEl.style.textAlign = "";
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
  if (parentEl && parentEl.style.textAlign === "right") {
    parentEl.style.textAlign = "";
    return;
  }
  const wrapper = document.createElement("div");
  wrapper.style.textAlign = "right";
  range.surroundContents(wrapper);
}

export { alignCenter, alignLeft, alignRight, makeItalic, makeTitle, makeBold };
