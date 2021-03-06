import React, {useState} from 'react';
import TurtleItem from './TurtleItem';
import TurtleDescription from './TurtleDescription';
import './Turtle.css';
import Card from '../UI/Card';

const Turtle = (props) => {
    const [id, setId] = useState('');
    const [desc, setDesc] = useState('');
    const [isActive, setActive] = useState(false);

    const clickHandler = (event) => {
        event.preventDefault();
        const target = event.target;
        const closestElement = target.closest('.turtle__item');
        const crID = closestElement.id;
        const turtleItemElements = document.querySelectorAll('.turtle__item');
        const description = props.turtlesArr[crID].desc;

        setDesc(description);

        if (turtleItemElements[crID].classList.contains('turtle__item--is-active')) {
            removeClass(turtleItemElements, 'turtle__item--is-active');
            turtleItemElements[crID].classList.remove('turtle__item--is-active');
            setActive(false);
        } else {
            removeClass(turtleItemElements, 'turtle__item--is-active');
            turtleItemElements[crID].classList.add('turtle__item--is-active');
            setActive(true);
        }
    }

    const removeClass = (element, selectedClass) => {
        element.forEach(node => {
            node.classList.remove(selectedClass);
        });
    }

    return(
        <div className="wrapper">
           <div className="turtle">
           {
                props.turtlesArr.map((item, index) => {
                    return(
                        <Card key={index} className="turtle__item" id={index}>
                            <div className="turtle__wrapper" onClick={clickHandler}>
                                <TurtleItem
                                cardItem={item.img}
                                cardIndex={item.id}
                                cardName={item.name}
                                cardNickname={item.nickname}
                                cardColor={item.color}/>
                            </div>
                        </Card>
                    )
                })
            }
           </div>
            <Card className={`turtle__description ${isActive ? "turtle__description--active" : "turtle__description--hidden"}`} id="1">
                <TurtleDescription cardDesc={desc}>

                </TurtleDescription>
            </Card>
        </div>
    );
};

export default Turtle;