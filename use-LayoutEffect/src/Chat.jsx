import { useLayoutEffect,  useRef } from "react";


function Chat() {
      const ChatRef = useRef(null);
       



   useLayoutEffect(() => {
    const Chat = ChatRef.current;

    Chat.scrollTop = Chat.scrollHeight;
  }, []);

  return (
    
 <div 
  ref={ChatRef}
  style={{ 
    height: "150px", 
    border:"1px solid #ccc",
   overflowY: "scroll",
     }}
     >
   <p>Hello</p>
    <p>How are you </p>
    <p>Welcome to chat </p>
    <p>Testing....</p>
     <p>Hello</p>
    <p>How are you </p>
    <p>Welcome to chat </p>
    <p>Testing....</p>
    </div>
   
    
  );
}

export default Chat
