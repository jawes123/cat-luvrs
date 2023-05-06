import logo from "./logo.png";
import './ChatContainer.css';

const ChatHeader = () => {
    return(
    <div className="chat-container-header">
        <div className="logo">
              <img src={logo} alt="logo" />
            </div>
        

    </div>
    )

}
export default ChatHeader