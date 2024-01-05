import React, { useEffect, useState } from 'react';
import ListItem from "./ListItem.jsx";



const ListContainer = (props) => {

    const [list, setList] = useState([]);
    
    
    //listItems.push(<ListItem />);
    // Making our request 

    useEffect(() => {
        fetch('/apitest')
        .then(result => result.json())
        .then(values => {
    
            const listItems = [];
            // Printing our response 
            console.log("REACHES FETCH CALL IN LIST CONTAINER ", values);
    
            
            for (let i = 0; i < values.length; i++){
                listItems.push(<ListItem text={values[i].text}/>);
            }
            setList(listItems)
            //listItems.push(string);

        })
    }, [])

    const clickHandler = (e) => { 
        // Grab newItem
        const newItem = document.getElementById('newItem').value;
        //console.log(newItem);
        //const newItem = newItem.values;

        // Send a request to api server to add item to db
        fetch('/apitest', {
            method: 'POST',
            headers: {
            'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(newItem)
        })
        .then(result => result.json())
        .then(values => {
    
            const listItems = [];
            // Printing our response 
            console.log("REACHES FETCH CALL IN LIST CONTAINER ", values);
    
            
            for (let i = 0; i < values.length; i++){
                listItems.push(<ListItem text={values[i].text}/>);
            }
            setList(listItems)
            //listItems.push(string);

        })

    }
        

    return(
        <div id="main">
            <div>
                <input type="text" id="newItem" placeholder="Item to add"></input><button id="addItem" onClick={clickHandler}>Add Item</button>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default ListContainer;




