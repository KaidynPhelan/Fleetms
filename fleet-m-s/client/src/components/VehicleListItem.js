import classes from "./VehicleListItem.module.css"

function VehicleListItem ({Vehicle}) {
    return (
        <div className={classes.vehiclecard}>
            {Vehicle.make}
        </div>
    
    )
};

export default VehicleListItem;