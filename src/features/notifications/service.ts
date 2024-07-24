import messaging from "@react-native-firebase/messaging";

const getToken = async () => {
  return await messaging().getToken();
};

export const registerNotification = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const token = await getToken();
    if (!token) {
      return;
    }
    // await registerFcm({token});
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {});
    messaging()
      .subscribeToTopic("full")
      .then(() => {});
  } catch (e) {}
};
