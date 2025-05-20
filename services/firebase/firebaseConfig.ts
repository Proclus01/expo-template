// services/firebase/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

/* --------------------------------- config --------------------------------- */
export const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY!,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN!,
  databaseURL: process.env.EXPO_PUBLIC_FB_DB_URL!,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID!,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET!,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MSG_SENDER_ID!,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID!,
  measurementId: process.env.EXPO_PUBLIC_FB_MEASUREMENT_ID!,
};

/* -------------------------- initializeApp once -------------------------- */
const app = initializeApp(firebaseConfig);
/* -------------------------- export the auth SDK -------------------------- */
export const auth = getAuth(app);
