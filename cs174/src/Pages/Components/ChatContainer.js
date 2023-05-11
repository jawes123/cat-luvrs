import ChatHeader from './ChatHeader';
import MatchesDisplay from './MatchesDisplay';
import React, { useEffect, useState } from "react";

const ChatContainer = (pets) => {

    useEffect(() => {
        console.log("Adding to chat container", pets.likedPets);
    },[pets]);

    return(
    <div className="chat-container">
        <div className="header">
            <ChatHeader/>
            <div className="chat-buttons">
                <button className="option">Liked Pets</button>
            </div>
        </div>

        <div className="chat-body">
            {pets.likedPets ? (
                pets.likedPets.map((pet) => (
                    <MatchesDisplay pet = {pet}/>
                    
                ))
            ) : (
                <p>No pets found.</p>
            )}
            
        </div>
    </div>
    )
}
export default ChatContainer