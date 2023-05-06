import './Home.css';
import TinderCard from 'react-tinder-card';
import { useState,useRef } from 'react';
import ChatContainer from './Components/ChatContainer';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';



const Home = () => {
    const characters=[
        {
            name: 'Bruce',
            url: 'https://i.imgur.com/qC0xM6M.png'
        },
        {
            name: 'Daisy',
            url: 'https://i.imgur.com/wcc6Y3C.png'
        },
        {
            name: 'Cleo',
            url: 'https://i.imgur.com/UK4N9yr.png'
        },
        {
            name: 'Mumu',
            url: 'https://i.imgur.com/Q8sqMof.png'
        },
        {
            name: 'Tabby',
            url: 'https://i.imgur.com/XRnjNpB.png'
        }

    ]
const [lastDirection, setLastDirection] = useState()
const cardRef = useRef();
const [cardIndex,setCardIndex] = useState(0);


const swiped = (direction, nameToDelete) =>{
    console.log('removing:' + nameToDelete)
    setLastDirection(direction)
    console.log(cardIndex);
}
const outOfFrame = (name) => {
    console.log(name + 'left the screen!')
    setCardIndex((prevState) => prevState + 1); // Update the card index state
    
}

const handleClick = (dir)=> {
    console.log(dir);
    cardRef.current.swipe(dir);

}

    return(
        <div className='dashboard'>
            <ChatContainer/>
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) =>
                    <TinderCard className='swipe' key={CharacterData.name} ref = {cardRef} preventSwipe = {[ 'up', 'down' ]} onSwipe={(dir) => swiped(dir, character.name)}onCardLeftScreen={() => outOfFrame(character.name)}>
                    <div style={{backgroundImage: 'url(' + character.url + ')'}} className='card'>
                    <h3>{character.name}</h3>
                    </div>

                </TinderCard>
                    )}
                    <div className='swipe-info'>
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                    </div>
                </div>
                <div className = "swipeButtons">
                    <IconButton className = "swipeButtons__left" onClick={() => handleClick("left")}>
                        <CloseIcon fontSize = "large" />
                    </IconButton>

                    <IconButton className = "swipeButtons__right" onClick = {() => handleClick("right")}>
                        <FavoriteIcon fontSize = "large" />
                    </IconButton>
            </div>
        </div>
    </div>
    )
}

export default Home;