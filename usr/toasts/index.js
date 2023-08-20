window.ork = { toasts: [], next: 0, debug: true };

/**
 * Create new Toast object and DOM element.
 */
function showToast() {
  const _toast = document.getElementById("_toast"),
    _parent = _toast.parentElement,
    domToast = _toast.cloneNode(true);

  // Generate new unique DOM id
  domToast.id = new Date().valueOf();

  const data = getFormData();
  const objToast = new bootstrap.Toast(domToast, data.toast);
  ork.toasts.push(objToast);

  domToast.addEventListener("hidden.bs.toast", () => {
    ork.debug &&
      console.log("Event(hidden.bs.toast) domToast.id = %s", domToast.id);

    if (document.getElementById("toasts-remove").checked) {
      removeToast(objToast);
      showCount();
    }
  });

  domToast.querySelector('[role="head"]').innerHTML = data.head;
  domToast.querySelector('[role="date"]').innerHTML = data.date;
  domToast.querySelector('[role="body"]').innerHTML = data.body;

  _parent.prepend(domToast);
  objToast.show();
  showCount();
}

/**
 * Get all user values.
 */
function getFormData() {
  ork.next++;

  let out = {
    head: `Title #${ork.next}`,
    date: new Date().toLocaleTimeString(),
    body: `Body #${ork.next}`,
  };
  for (const k in out) {
    const s = document.getElementById(`toast-${k}`).value;
    if (s.length) {
      out[k] = s;
    }
  }

  out.toast = {
    animation: document.getElementById("toasts-animation").checked,
    autohide: document.getElementById("toasts-autohide").checked,
    delay: parseInt(document.getElementById("toasts-delay").value || 5000),
  };

  return out;
}

/**
 * Show total Toast in memory.
 */
function showCount() {
  document.getElementById("toasts-count").innerText = ork.toasts.length;
}

/**
 * Remove given Toast object from memory and DOM element.
 */
function removeToast(objToast) {
  ork.debug &&
    console.log(
      "removeToast(DOM): objToast._element.id = %s",
      objToast._element.id
    );

  // Remove DOM
  objToast._element.remove();

  // Remove Obj
  const index = ork.toasts.indexOf(objToast);
  if (index > -1) {
    ork.debug && console.log("removeToast(OBJ): ork.toasts[%d]", index);
    ork.toasts.splice(index, 1);
  }
}

/**
 * Remove all.
 */
function removeAll() {
  while (ork.toasts.length) {
    removeToast(ork.toasts[0]);
  }
  showCount();
}
