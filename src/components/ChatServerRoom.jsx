import { useEffect } from "react";
import createConnection from "../utils/createConnection";

const serverUrl = "http://localhost:1111/";

const ChatServerRoom = ({ roomId }) => {
  useEffect(() => {
    // sync with external chat server
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    //cleanup
    return () => {
      connection.disconnect();
    };
  });

  return <h1>welcomme to the {roomId} room</h1>;
};

export default ChatServerRoom;
