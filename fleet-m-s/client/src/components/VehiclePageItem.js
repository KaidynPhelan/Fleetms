import classes from "./VehiclePageItem.module.css";

function VehiclePageItem ({Vehicle}) {

    const deleteVehicle = () => {
        fetch('/vehicle/' + Vehicle._id, { method: "DELETE" }).then(() => {
           console.log("Deleted"); 
        });
    }

    return (

        <div className={classes.contentbox}>
            <div>
                <h1 className={classes.title}>
                    VEHICLE: {Vehicle.registration}
                    <button onClick={deleteVehicle}>DELETE</button>

                </h1>
            </div>
        </div>

    )

}

export default VehiclePageItem;

