/* eslint-disable */
// Services components
// import { sendSubscriptionToServer } from "Services/MessagesServices";

// Utils
import { getDeviceInfo } from "Util/getDeviceInfo";

function displayUpdateNotification() {
  const link = document.createElement("a");
  link.classList.add("update-notification");
  link.setAttribute("href", "#");
  link.innerHTML = "Update is available. Click here to install.";

  link.addEventListener("click", e => {
    e.preventDefault();
    window.location.reload();
  });

  document.querySelector("body").appendChild(link);
}

export default function registerSW() {
  const applicationServerPublicKey =
    "BGbJNltWxnjR-O1qH2VjFCAA9TTnOrz10bSulNl2fZnLTAE4SSSgI9ZieoDm12Yr5aXIpg0HfwuRI7CtLSlJh5U";
  let isSubscribed = false;

  // console.log("isSubscribed", isSubscribed);

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

  if ("serviceWorker" in navigator && "PushManager" in window) {
    // console.log("Service Worker and Push is supported");

    navigator.serviceWorker
      .register("./sw.js")
      .then(function(registration) {
        // console.log("Service Worker is registered", registration);

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                // console.log("New content is available; please refresh.");
                displayUpdateNotification();
              } else {
                // console.log("Content is cached for offline use.");
              }
            }
          };
        };

        registration.pushManager.getSubscription().then(function(subscription) {
          isSubscribed = !(subscription === null);

          if (isSubscribed) {
            // console.log("User is subscribed");
            // subscribeUser(subscription);
          } else {
            registration.pushManager
              .subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlB64ToUint8Array(
                  applicationServerPublicKey
                )
              })
              .then(function(subscription) {
                // console.log(subscription);
                // console.log("User is subscribed");

                const subWithDeviceInfo = {
                  subscription,
                  device: getDeviceInfo()
                };

                // sendSubscriptionToServer(subWithDeviceInfo);

                isSubscribed = true;
              })
              .catch(function(err) {
                // console.log("Failed to subscribe user: ", err);
              });
          }
        });
      })
      .catch(function(error) {
        console.error("Service Worker Error", error);
      });
  } else {
    console.warn("Service Workers or Push messaging is not supported");
  }
}
