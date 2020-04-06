/* eslint-disable */
("use strict");

const applicationServerPublicKey =
  "BGbJNltWxnjR-O1qH2VjFCAA9TTnOrz10bSulNl2fZnLTAE4SSSgI9ZieoDm12Yr5aXIpg0HfwuRI7CtLSlJh5U";

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

self.addEventListener("push", function(event) {
  // console.log("[Service Worker] Push Received.");
  const data = event.data.json();
  // console.log("data", data);

  const title = data.title || "";
  const options = {
    body: data.description || "",
    icon: data.icon || null,
    image: data.image || null,
    tag: data.tag || null,
    data: data
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();

  const data = event.notification.data;

  if (data.tag === "messages") {
    event.waitUntil(
      clients.openWindow(`${event.target.location.origin}/messages`)
    );
  } else if (data.tag === "orders") {
    event.waitUntil(
      clients.openWindow(`${event.target.location.origin}/orders`)
    );
  }
});

self.addEventListener("pushsubscriptionchange", function(event) {
  // console.log("[Service Worker]: 'pushsubscriptionchange' event fired.");
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  event.waitUntil(
    self.registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      })
      .then(function(newSubscription) {
        // TODO: Send to application server
        // console.log("[Service Worker] New subscription: ", newSubscription);
      })
  );
});

self.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
