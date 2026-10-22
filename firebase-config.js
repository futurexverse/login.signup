// Bank of America - Firebase Cloud Database Configuration
// This enables cross-device sync: accounts created on one device can log in on any device!

// Paste your Firebase Realtime Database URL here (e.g. "https://your-project-id-default-rtdb.firebaseio.com")
// You can also enter it directly in the Admin Panel (admin.html) under "Cloud Database Sync".
window.BOA_DEFAULT_FIREBASE_URL = "https://YOUR-PROJECT-ID-default-rtdb.firebaseio.com";

// Reads from localStorage first if set via Admin panel, else uses default
window.BOA_FIREBASE_URL =
  localStorage.getItem("boa_firebase_url") ||
  window.BOA_DEFAULT_FIREBASE_URL ||
  "";
