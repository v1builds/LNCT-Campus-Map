# NAVIX Android packaging foundation

This repository currently contains the NAVIX web prototype in the root `index.html`. Capacitor wraps that existing page in an Android app; it does **not** by itself add real campus map data, authentication, cloud storage, or payments.

## Requirements
- Node.js 20 or newer (use a supported LTS release)
- Android Studio with the Android SDK installed
- Java version supported by the generated Android/Gradle project

## First-time setup
```sh
npm install
npm run android:add
```

The build script copies the root `index.html` into the generated `www/index.html` web bundle before Capacitor adds/synchronizes Android.

## After changing the web app
```sh
npm run android:sync
npm run android:open
```

In Android Studio, choose an emulator or connected Android phone and run the app. Confirm map layout, touch interactions, geolocation permission behavior, navigation, and all key flows on an actual device before distributing it.

## Important limitations
- The current page is a large, self-contained HTML prototype. This wrapper preserves it rather than rebuilding the UI.
- The current repository inspection did not find a Google Maps SDK/API integration or a backend such as Firebase/Supabase. Those need separate implementation and configuration before claiming production-ready navigation or cloud features.
- Do not commit API keys, signing keys, passwords, or `.env` files.
- Play Store release still requires a signed Android App Bundle, store assets/privacy disclosures, policy checks, and testing.
