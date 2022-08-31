import {precacheAndRoute, cleanupOutdatedCaches} from 'workbox-precaching';
//import {Dexie} from 'dexie';
// import {db} from './store';

declare let self: ServiceWorkerGlobalScope;

self.addEventListener('message', (ev) => {
  if (ev.data && ev.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

precacheAndRoute(self.__WB_MANIFEST);

cleanupOutdatedCaches();

// const db = new Dexie('test');
//console.log('Hey');
//console.log(db);
//db.version(1).stores({
//  versions: '++id, value',
//});

/*
setInterval(() => {
  // @ts-ignore
  db.versions.add({value: Math.random().toString()});
}, 5000);
*/
