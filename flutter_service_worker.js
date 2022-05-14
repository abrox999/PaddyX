'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bcb3d836962f38605eda4dab66516f43",
"assets/assets/aboutusbackground.png": "0b15f5e3d5f67f15939fd81b2cbea251",
"assets/assets/ants1.jpg": "a70676dc61a9c17b246b3e3cb53b091d",
"assets/assets/ants2.jpg": "700feba02a2dbe6f561f784ce432b255",
"assets/assets/ants3.jpg": "92a46e22c45aef59a0127a14cb139dde",
"assets/assets/ants4.jpg": "8d4a1ff3f8fd1444c9dfdf31764d6664",
"assets/assets/ants5.webp": "f0bcbf44768233db6a8e147b89619634",
"assets/assets/armyworm1.jpg": "169ef37b3ba706be36a20f0a5d392120",
"assets/assets/armyworm2.jpg": "e0643f0558205d51eba557006235bcdb",
"assets/assets/armyworm3.jpg": "a6358af5d4d9c98ff04eb4bbc6b10ba1",
"assets/assets/armyworm4.jpg": "006d26c0bdb16fe1eb926bc53f7289cf",
"assets/assets/armyworm5.jpg": "4d9235071493b3a669e21f67c3eb21ce",
"assets/assets/brownspot1.jpg": "8637f493f403ed560f6c377ff701b3a2",
"assets/assets/brownspot2.jpg": "e3f948694d52fd51654e4282959fadaa",
"assets/assets/brownspot3.jpg": "b9458f4110453bc8d2165962b5676494",
"assets/assets/brownspot4.jpg": "8b9486dad5faa955d00d6a42704f9006",
"assets/assets/brownspot5.jpg": "1db380ba946205cdb6d4f5570458a078",
"assets/assets/grasshopper1.png": "a94ba95a2c8a27d5f47e15082831bac3",
"assets/assets/grasshopper2.jpg": "e07517cfca5407495915a8624e3cff83",
"assets/assets/grasshopper3.png": "f86156d8c0048f552cb60a59d995e2f5",
"assets/assets/grasshopper4.jpg": "8e7df1619a10e106bfc788355ccb4569",
"assets/assets/grasshopper5.jpg": "02ffcd3e62b1753d380c77c0be05d566",
"assets/assets/hispa1.jpg": "d2e51e65fdc9d864bf433666f5c4ea7b",
"assets/assets/hispa2.jpg": "0a20b5ce0aaf6acdc98e778246293a9f",
"assets/assets/hispa3.jpg": "0b520c87c26792e91114caed30f9fe34",
"assets/assets/hispa4.jpg": "03f743966fd8027ce4669e575c9644ca",
"assets/assets/hispa5.jpg": "8c11e93cc41a971dbcb6c14dca130bfb",
"assets/assets/images/paddylogo.png": "aea5f0faf23bf1b78dba768898b43ef8",
"assets/assets/labels.txt": "d50d7596d01500d8a2974a4ba4470baf",
"assets/assets/leafBlast1.jpg": "2e8eb40e8bcd6d8670ec92039bf7792a",
"assets/assets/leafBlast2.jpg": "71de754af4f499c9245c80c75c2ead6f",
"assets/assets/leafBlast3.png": "1a266fab2ca756d3dad3b299edc54844",
"assets/assets/leafBlast4.png": "27b153cfe8129dce1db52db0654132b9",
"assets/assets/leafBlast5.jpg": "b83024c38b96714e6b96027f2f2863e8",
"assets/assets/leafBlight1.jpg": "4801316c61eacedfaf7c8c855fbd055f",
"assets/assets/leafBlight2.jpg": "64716d9a19b060217e209fc9782b009b",
"assets/assets/leafBlight3.jpg": "7fb5b3e121a7ff7e31c7092d7a7b3c24",
"assets/assets/leafBlight4.png": "b3fd6bc7d2eef12a4f66817e8a9bbb28",
"assets/assets/leafBlight5.jpg": "180fef600db43e35a46c32d91ba0c40a",
"assets/assets/leafSmut1.jpg": "83b8dcd061ac350b28563c59d89227a3",
"assets/assets/leafSmut2.jpg": "3b844ac16e4d13953c3c0817c0166c76",
"assets/assets/leafSmut3.jpg": "e0289019e21b4e695760e2a8630c72e0",
"assets/assets/leafSmut4.jpg": "75f5960478ed56e8ff1352b63eb544de",
"assets/assets/leafSmut5.jpg": "88975777a2880c1b01f005bb6beebb08",
"assets/assets/logo.png": "21709040f07f533185213278c495a9fd",
"assets/assets/mealyBug1.jpg": "408b542ad89733ab467fa91407f1209b",
"assets/assets/mealyBug2.jpg": "eefb3c7d4157d73aa5e4dee97d46a54d",
"assets/assets/mealyBug3.jpg": "ef534d08976d788b73c4426e7f0a99cd",
"assets/assets/mealyBug4.jpg": "d80c8b5b43d7e7dcf9ec1662d9224dda",
"assets/assets/mealyBug5.webp": "3e60ee968147ea86fbd954f75bc9a86f",
"assets/assets/model_unquant.tflite": "652f830c87e878315b48d39202d286f5",
"assets/assets/paddy1.jpg": "b0e06b50c6c931558214309f7a0fd966",
"assets/assets/paddy2.jpg": "1b6008da15344b175eae8e1732b9c72e",
"assets/assets/paddy3.jpg": "dda9ce127498decc16f60798b453f2e8",
"assets/assets/paddy4.jpg": "ca740ebb7293de665ff72dd248c8de93",
"assets/assets/paddy5.jpg": "3839a1ad5ef1645190ca577a8ecfc147",
"assets/assets/riceHispa1.jpg": "f0d0ceae5f58ba978f364f9ee4742550",
"assets/assets/riceHispa2.jpg": "9653e6cfa866a4a73bb1c502b0ae332a",
"assets/assets/riceHispa3.png": "ddc749a078ea8af766e6130f62dce6ad",
"assets/assets/riceHispa4.png": "510e0e29516943c1ff778602f5b51bfa",
"assets/assets/sheathBlight1.jpg": "84fc5b6b18d065b5c93a285817286157",
"assets/assets/sheathBlight2.jpg": "8f90d67cecbf87938706ed5f35677d87",
"assets/assets/sheathBlight3.jpg": "e8cd7dcbef5d6943a55fe5e6d484fb10",
"assets/assets/sheathBlight4.jpg": "08d1f797d30774e47ca4a4334a59c89a",
"assets/assets/sheathBlight5.jpg": "bb378745ad5de467d7f0a97701a02db2",
"assets/assets/splash.png": "1e3a50cb2fcd5e86305ab4ce54ba0bbf",
"assets/assets/tungro1.jpg": "a541796d5ce334a8e11cfa76297d8711",
"assets/assets/tungro2.jpg": "d14a76740637d7550deadec28d6543e0",
"assets/assets/tungro3.gif": "2d0c7b1271130ba086122adda6c208a6",
"assets/assets/tungro4.jpg": "1b20e3e739c0ae9d41b3be97c0f637d4",
"assets/assets/tungro5.jpg": "beae016d4bb5c5f00a4664e9c143b192",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9cffc5a41e608c839e865da3ca5d3702",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "80dc20d6bbcf89a1d2459480e15b855a",
"/": "80dc20d6bbcf89a1d2459480e15b855a",
"main.dart.js": "733e3281bd9c6ff5d601e4cff20867db",
"manifest.json": "8836bc035984c10a2b3625e8bfe2a287",
"version.json": "1e98a4f7390d2e9d9ad60c99fb0aff05"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
