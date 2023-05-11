import './Home.css';
import TinderCard from 'react-tinder-card';
import { useState,useRef } from 'react';
import ChatContainer from './Components/ChatContainer';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';



const Home = () => {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the JSON string response into a JavaScript object
            var result = JSON.parse(this.responseText);
            
            // Do something with the result
            console.log(result);
        }
    };
    xhr.open("GET", "http://localhost:8000/login.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();


    const all_characters=[
        {
            name: 'Tabby',
            index: 0,
            url: 'https://i.imgur.com/XRnjNpB.png'
        },
        {
            name: 'Mumu',
            index: 1,
            url: 'https://i.imgur.com/Q8sqMof.png'
        },
        {
            name: 'Cleo',
            index: 2,
            url: 'https://i.imgur.com/UK4N9yr.png'
        },
        {
            name: 'Daisy',
            index: 3,
            url: 'https://i.imgur.com/wcc6Y3C.png'
        },
        {
            name: 'Bruce',
            index: 4,
            url: 'https://i.imgur.com/qC0xM6M.png'
        }
    ]

    const matched_ids = decodeURIComponent(document.cookie).split('=')[1].trim().split(' ');
    const characters = [];
    matched_ids.forEach(element => characters.push(all_characters[element-1]));
    console.log(characters);


const [lastDirection, setLastDirection] = useState()
const [cardIndex,setCardIndex] = useState(characters.length -1);
const cardRef = useRef(null);

const swiped = (direction, nameToDelete) =>{
    console.log('removing:' + nameToDelete)
    setLastDirection(direction)
    console.log(cardIndex);
    if(cardIndex > 0)
        setCardIndex((prevState) => prevState - 1); // Update the card index state
}
const outOfFrame = (name) => {
    console.log(name + ' left the screen!')    
}

const handleClick = (dir)=> {
    console.log(dir);
    cardRef.current.swipe(dir);
}

    return(
        <div className='dashboard'>
            <ChatContainer/>
            <div className="swipe-container">
                <div>                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}</div>
                <div className="card-container">
                    {characters.map((character, index) =>
                    <TinderCard className='swipe' key={character.name} ref={index === cardIndex ? cardRef : null} 
                        cardswipeRequirementType = "position" preventSwipe = {[ 'up', 'down' ]} 
                        onSwipe={(dir) => swiped(dir, character.name)}onCardLeftScreen={() => outOfFrame(character.name)}>
                    
                        <div style={{backgroundImage: 'url(' + character.url + ')'}} className='card'>
                            <h3>{character.name}</h3>
                        </div>

                    </TinderCard>
                    )}
                    <div className='swipe-info'>
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