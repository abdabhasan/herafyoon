import 'dotenv/config'; // Load environment variables from .env file
import { ExpoConfig } from 'expo/config';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURMENT_ID,
};

const rollbarConfig = {
    accessToken: process.env.ROLLBAR_ACCESS_TOKEN
}

export default ({ config }: { config: ExpoConfig }) => ({
    ...config,
    name: "herafyoon",
    slug: "herafyoon",
    owner: "iouashgjwlet1245",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
        bundleIdentifier: "com.iouashgjwlet1245.herafyoon",
        supportsTablet: true,
    },
    android: {
        package: "com.iouashgjwlet1245.herafyoon",
        adaptiveIcon: {
            foregroundImage: "./src/assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff",
        },
    },
    web: {
        bundler: "metro",
        output: "static",
        favicon: "./src/assets/images/favicon.png",
    },
    plugins: [
        "expo-router",
        [
            "expo-splash-screen",
            {
                image: "./src/assets/images/splash-icon.png",
                imageWidth: 200,
                resizeMode: "contain",
                backgroundColor: "#ffffff",
            },
        ],
        [
            "react-native-google-mobile-ads",
            {
                "androidAppId": "ca-app-pub-6809262854669948~2048664943",
                "android_app_id": "ca-app-pub-6809262854669948~2048664943",
                "iosAppId": "ca-app-pub-6809262854669948~5408000038",
                "ios_app_id": "ca-app-pub-6809262854669948~5408000038"
            }
        ]
    ],
    experiments: {
        typedRoutes: true,
    },
    updates: {
        "url": "https://u.expo.dev/aa1078d0-d3e2-4545-bd68-ce7bfbf2209a"
    },
    // runtimeVersion: {
    //     "policy": "appVersion"
    // },
    runtimeVersion: "1.0.0",
    extra: {
        firebaseConfig,
        rollbarConfig,
        eas: {
            "projectId": "aa1078d0-d3e2-4545-bd68-ce7bfbf2209a"
        }

    },
});