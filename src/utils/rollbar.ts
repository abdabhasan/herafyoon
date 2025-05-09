
import { Client } from "rollbar-react-native";
import Constants from 'expo-constants';

const rollbar = new Client({
    accessToken: Constants.expoConfig?.extra?.rollbarConfig?.accessToken,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: "development", // Change to 'production' in production
    },
});


export default rollbar;