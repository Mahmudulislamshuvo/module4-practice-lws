import { useContext, useEffect } from "react";
import createConnection from "../utils/createConnection";
import { SettingsContext } from "../context/SettingsContext";

// const serverUrl = "http://localhost:1111/";
// const roomId = "genaral";

const ChatServerRoom = ({ roomId, selectedServerURL }) => {
  const settings = useContext(SettingsContext);
  const serverUrl = selectedServerURL ?? settings.defaultServerUrl;

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    //cleanup
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return <h1>welcomme to the {roomId} room</h1>;
};

export default ChatServerRoom;

// function logVisit(roomId) {
//   console.log(`user entered ${roomId}`);
// }
