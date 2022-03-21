import classes from './ContentBox.module.css'
import VehicleListItem from './VehicleListItem';
import { useState, useEffect } from 'react';

function ContentBox (){
    const [Vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('/vehicle', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setVehicles(data));
    }, []);

    return (
        <div className={classes.content}>
            {Vehicles.map((Vehicle, index) => (
             <VehicleListItem
                key={index}
                Vehicle = {Vehicle}
            />
        ))}
        </div>
        
    );
}

export default ContentBox;