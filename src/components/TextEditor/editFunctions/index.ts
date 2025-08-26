function makeBold() {
  const selection = window.getSelection();
  if (!selection?.isCollapsed) {
    const range = selection?.getRangeAt(0);
    const newElement = document.createElement("strong");
    range?.surroundContents(newElement);
  }
}

function makeItalic() {
  const selection = window.getSelection();
  if (!selection?.isCollapsed) {
    const range = selection?.getRangeAt(0);
    const newElement = document.createElement("em");
    range?.surroundContents(newElement);
  }
}

function makeTitle(level = 1) {
  const selection = window.getSelection();
  if (!selection?.isCollapsed) {
    const range = selection?.getRangeAt(0);
    const newElement = document.createElement(`h${level}`);
    range?.surroundContents(newElement);
  }
}

function alignLeft() {
  const selection = window.getSelection();
  if (!selection?.isCollapsed) {
    const range = selection?.getRangeAt(0);
    const wrapper = document.createElement("div");
    wrapper.style.textAlign = "left";
    range?.surroundContents(wrapper);
  }
}

function alignCenter() {
  const selection = window.getSelection();
  if (!selection?.isCollapsed) {
    const range = selection?.getRangeAt(0);
    const wrapper = document.createElement("div");
    wrapper.style.textAlign = "center";
    range?.surroundContents(wrapper);
  }
}

function alignRight() {
  const selection = window.getSelection();
  if (!selection?.isCollapsed) {
    const range = selection?.getRangeAt(0);
    const wrapper = document.createElement("div");
    wrapper.style.textAlign = "right";
    range?.surroundContents(wrapper);
  }
}

export { alignCenter, alignLeft, alignRight, makeItalic, makeTitle, makeBold };
