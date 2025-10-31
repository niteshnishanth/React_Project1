import React from "react";
import CardsView from "./CardsView";
import axios from "axios";
import { useState, useEffect } from "react";
function CardsContainer({events,username}) {
    console.log('',events)
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        if(events&&username)
        {
        
        const filteredData = events.filter(event => event.username === username);
        console.log(filteredData);
        setCardData(filteredData);
        }
    },[events,username]);
  return <CardsView data={cardData} />;
}
export default CardsContainer;
