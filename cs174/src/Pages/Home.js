import './Home.css';
import TinderCard from 'react-tinder-card';
import { useState } from 'react';
import ChatContainer from './Components/ChatContainer';
import SwipeButtons from './Components/SwipeButtons';



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
const swiped = (direction, nameToDelete) =>{
    console.log('removing:' + nameToDelete)
    setLastDirection(direction)
}
const outOfFrame = (name) => {
    console.log(name + 'left the screen!')
}
    return(
        <div className='dashboard'>
            <ChatContainer/>
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) =>
                    <TinderCard className='swipe' key={CharacterData.name} onSwipe={(dir) => swiped(dir, character.name)}onCardLeftScreen={() => outOfFrame(character.name)}>
                    <div style={{backgroundImage: 'url(' + character.url + ')'}} className='card'>
                    <h3>{character.name}</h3>
                    </div>

                </TinderCard>
                    )}
                    <div className='swipe-info'>
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}

                    </div>
                    


                </div>
            </div>


                <br /></div>
    )

}

export default Home;