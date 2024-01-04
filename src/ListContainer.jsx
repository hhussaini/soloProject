import React, { useEffect, useState } from 'react';
import ListItem from "./ListItem.jsx";



const ListContainer = (props) => {

    const [list, setList] = useState([]);
    
    const listItems = [];
    
    //listItems.push(<ListItem />);
    // Making our request 

    useEffect(() => {
        fetch('/apitest')
        .then(result => result.json())
        .then(values => {
    
            // Printing our response 
            console.log("REACHES FETCH CALL IN LIST CONTAINER ", values);
    
            
            for (let i = 0; i < values.length; i++){
                listItems.push(<ListItem text={values[i].text}/>);
            }
            setList(listItems)
            //listItems.push(string);

        })
    }, [])


        

    return(
        <div id="main">
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default ListContainer;




