import classes from "./VehicleListItem.module.css"
import {Link} from 'react-router-dom'

function VehicleListItem ({Vehicle}) {
    return (
        <div className={classes.vehiclecard}>

            <div>
                <h1 className={classes.registration}>Registration: {Vehicle.registration}</h1>
                <br></br>
            </div>
            <div>
                <p>Make: {Vehicle.make}</p>
                <p>Model: {Vehicle.model}</p>
                <p>Odemeter: {Vehicle.odometer}</p>
                <p>Patrol Run: {Vehicle.run}</p>
            </div>
            <div>
                <Link to =  {"/" + Vehicle._id} className = {classes.SelectButton}>Select</Link>
            </div>
           
        </div>
    
    )
};

export default VehicleListItem;