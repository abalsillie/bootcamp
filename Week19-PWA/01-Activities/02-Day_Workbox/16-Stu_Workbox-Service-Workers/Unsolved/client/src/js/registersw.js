// importingservice worker register
// have to do registration for service worker

// check documentation to check whether service worker is supported in client browser: https://web.dev/learn/pwa/service-workers
export const registersw = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register("/serviceworker.js");
     });
    }
};
// export to index.js

// npm i workbox-webpack-plugin