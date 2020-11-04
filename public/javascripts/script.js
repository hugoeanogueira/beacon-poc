const id = Math.floor(Date.now() / 500)
  .toString()
  .substr(-3);

const beacon = ref => {
  const stringified = JSON.stringify({ id, event: ref, method: 'beacon' });
  const data = new Blob([stringified], { type: 'application/json; charset=UTF-8' });
  navigator.sendBeacon(`/delete`, data);
};

const xhr = ref => {
  fetch(`/delete`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify({
      id,
      event: ref,
      method: 'xhr'
    })
  });
};

window.addEventListener('pagehide', () => beacon('pagehide'));
window.addEventListener('pagehide', () => xhr('pagehide'));
window.addEventListener('beforeunload', () => beacon('beforeunload'));
window.addEventListener('beforeunload', () => xhr('beforeunload'));

console.log('READY!');
