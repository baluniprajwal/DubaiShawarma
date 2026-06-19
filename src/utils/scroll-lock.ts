const activeLocks = new Set<string>();

let previousBodyOverflow = "";
let previousHtmlOverflow = "";

function applyScrollLock() {
  if (typeof document === "undefined") {
    return;
  }

  if (activeLocks.size === 1) {
    previousBodyOverflow = document.body.style.overflow;
    previousHtmlOverflow = document.documentElement.style.overflow;
  }

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  document.body.dataset.scrollLocked = "true";
  document.documentElement.dataset.scrollLocked = "true";
}

function clearScrollLock() {
  if (typeof document === "undefined") {
    return;
  }

  document.body.style.overflow = previousBodyOverflow;
  document.documentElement.style.overflow = previousHtmlOverflow;
  delete document.body.dataset.scrollLocked;
  delete document.documentElement.dataset.scrollLocked;
}

export function lockScroll(reason: string) {
  activeLocks.add(reason);
  applyScrollLock();
}

export function unlockScroll(reason: string) {
  activeLocks.delete(reason);

  if (activeLocks.size === 0) {
    clearScrollLock();
    return;
  }

  applyScrollLock();
}

export function isScrollLocked() {
  if (typeof document === "undefined") {
    return false;
  }

  return document.body.dataset.scrollLocked === "true";
}
