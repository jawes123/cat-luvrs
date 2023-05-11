
import ChatHeader from './ChatHeader';
import MatchesDisplay from './MatchesDisplay';
import AdoptionDisplay from './AdoptionDisplay';

const ChatContainer = () => {
    return(
    <div className="chat-container">
        <div className="header">
        <ChatHeader/>

<div className="chat-buttons">
    <button className="option">Matches</button>
    <button className="option">Adoption Details</button>
</div>
        </div>
        <div className="chat-body">
        <MatchesDisplay/>

        </div>



    </div>

    )

}
export default ChatContainer