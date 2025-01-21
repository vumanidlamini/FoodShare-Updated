import React from 'react';
import { useState,useEffect } from 'react';

function Location () {

    const [latitude, setLatitude] = useState(" ");
    const [longitude, setLongitude] = useState(" ");
    const apiURL = "https://api-bdc.io/graphql/reverse-geocoding?key=bdc_fe3eb94bb49d49ea878bacb62ac8562bhttps://api-bdc.io/graphql/reverse-geocoding?key="
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log(position.coords)
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    },[])



    return(<>




    </>)
}

export default Location;