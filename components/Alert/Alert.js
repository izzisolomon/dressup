import { Alert } from "react-native";

export default (Alert
    ? Alert.alert
    : (title, msg) => {
          if (title) {
              msg = `${title}\n\n${msg}`;
          }
          window.alert(msg);
      });
