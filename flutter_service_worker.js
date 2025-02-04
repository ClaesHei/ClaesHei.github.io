'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4d09da411bab83c718902328917dea01",
".git/config": "e3e71c483af1f9765f5770bf4cf1badb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "073f0c924a7b51a478c16e14260c2bab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1a2cc0778383f0313325fcd808f4dd7",
".git/logs/refs/heads/main": "049393f24b7849c3bebc73b3eaf69227",
".git/logs/refs/remotes/origin/main": "27e479d1490be91d596798ec7ae6510b",
".git/objects/00/b8f2a0e7542a9c6a680c615f12e62970381312": "b9b589afdeb0a8bf0634c1b8840e92a7",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/37a05ee6430386a3bea00c307d7a000d9cc7e1": "29ebfbb2ffa90155beb2c3196b8bc543",
".git/objects/08/3da1e76b7c0eea905578aaf4ddb8d6aea2d1c6": "b67b59eee8c73d5f3012bd3872168ae6",
".git/objects/08/b6e2051fb00d362ca1d0c1e94f16041142a5a2": "12d5eccd1867ec0898b0f0de315b97b1",
".git/objects/0a/47613b0a884dd888d2080ed40cd88dd90a3cbc": "9a150111c843d8e69fe32bda5bb38982",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/42bf85df5328457c2ae17bf7c7235a374dc9d2": "2fda2fe7539bf074444601a08d6e6318",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/2f/f07b7be4191b4a56f7251e93de31a6034f2b9f": "f69aedc46d1869bf9e72e2f9705b310f",
".git/objects/30/8c431827bf052570a7afe0af93a9838d526f82": "c9e85322c088983956468c57be5b47e0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/91d215236b806ea15bc809564b0c185ab8f2a0": "5d94387e0581e6fb15bab76d67a4c9b3",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3d/15fbd7980320599f4c1650d9ee4a2a67973dff": "f851b60329ac0f8b020029bea31cfdb0",
".git/objects/40/afe0163627fcdc40fdb90a162997e904e7a506": "30e0b5d4b7dfa1632b5542f0fe8f3500",
".git/objects/40/b19ff31eb07c18002892cd7ce5c5c44b9b0120": "8d6ace59fa35996a492d9edf3a04acc1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/8151719d0cd838ce1c3d85fc35f3525f43ba7a": "62902bcab40d79408c9f051751ff2ed2",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/75/4c58985d2b2d8a84bc9c4c77d8a9f8a9743935": "0f85c1fb96c076028e11c56675e67d28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4191c213e40c949199ce3c50f0d902a8be4986": "fd7e9309d056918d2a058c4de9a9f903",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/8d76a81f1c144ee1f125f21f2382e2396bfca1": "5a40043326600e150ba128eccd875373",
".git/objects/a7/eb9e04285f7d37689f9a5bb49012a3b84a29a3": "8ab7ead06118ae88998ffce8fb27a41e",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/5ff5de0780dc99b6e38f268c0366d703e0733e": "27617f8b2c817131186960224c32e84d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/263cb5ceb79f91ea2c89ad585eab24f0f360a3": "8e959b5b2273c48ba04d9c6db785a30d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b9883bb79e814aebdac32e90fe2334c6ec4733": "76b845a74d0644ce7c108a50fa47191e",
".git/objects/e0/c7d781cf288f9d474b750ba79f8327d89ef4be": "cb730c1653a912906be5ba8c47c69762",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/ea/fbfa3d1278fb46f889fda213297627e0e18fbc": "bd8dc9d9c5ad4c34c06bcb7c12fd852f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0821657fd3f4e75be1ecb2e8796049663c08cf": "3b3f217febf3e876fd376c9fef8a6359",
".git/objects/ee/b3f96c86d2db58137f08befc740506353cd5b9": "9c708189157712359860bdfddd1ee95e",
".git/objects/f2/a6b1c382b68ae104bb80a8a9c213a224d34c39": "1d08b4df3db4f3607bc26f5b4d06678f",
".git/objects/ff/66aaa8daa05980d03c8ae3f933caca0a303428": "2f19279599cd4fac9bdff0d9bf3bd9ed",
".git/refs/heads/main": "5c4afcffd1d01e1f8102928cf409e3e3",
".git/refs/remotes/origin/main": "5c4afcffd1d01e1f8102928cf409e3e3",
"assets/AssetManifest.bin": "2d5cee7ab66a2339b4375d13b2ef3f1f",
"assets/AssetManifest.bin.json": "90b8b9461bab016f8d6f84bfdf9e7da0",
"assets/AssetManifest.json": "8a2cc8c3e66fea54061372f08b411b98",
"assets/assets/images/garden.jpg": "a0a763710dcadd674d95441ce689ac12",
"assets/assets/images/icon/DCT.jpeg": "17da298c955bf8f6f7362ace6bf65d35",
"assets/assets/images/icon/isaht-logo.png": "418a6049459902b5892e8b6b3e43ba7a",
"assets/assets/images/icon/logo.png": "4eb65f1becbf775806778a2432393162",
"assets/assets/images/icon/MobilePay-logo.png": "f7ba5e5fa99f563fddbe3685a4aa310e",
"assets/assets/images/photo/butik.jpg": "58bc3043fee8a44fcf1bebd107f7aa8c",
"assets/assets/images/photo/cat-have.jpg": "b33a6f7258f85803fa16a72ade9b1e75",
"assets/assets/images/tree.png": "23522d0a06c13aa080b46451ac4a3a16",
"assets/assets/images/vinemail.png": "1a290a44ac428df77d1b110e55979c59",
"assets/assets/images/vinephone.png": "6cfedb82d3978c8371f936f7ffc3d424",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a58f7cdddeb1904f5b5cf401ad42eef0",
"assets/NOTICES": "6063a6a2ce01f740a52c2995357a869d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "4706935614e60dd4709d80700ba8c96b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fa2a4e2e53673a94d32a0b663f961889",
"/": "fa2a4e2e53673a94d32a0b663f961889",
"main.dart.js": "03b9fd561c8218d24efb22c7ad1d05e5",
"manifest.json": "829a4078bdcc8f495a40536b237f77df",
"version.json": "9bf70d460300277061e6e075119e881b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
