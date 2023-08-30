import { ToastAndroid, Platform, Toast } from 'react-native';

const showToast = (message, duration) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(message, duration === 'short' ? ToastAndroid.SHORT : ToastAndroid.LONG);
    } else {
        Toast.show({
            text: message,
            duration: duration === 'short' ? Toast.durations.SHORT : Toast.durations.LONG,
        });
    }
};

export default showToast;