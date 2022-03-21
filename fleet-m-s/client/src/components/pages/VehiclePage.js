import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';




function VehiclePage() {

    const [Vehicle, setVehicle] = useState([]);
    let { id } = useParams();

    useEffect(() => {

        fetch('/vehicle/' + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setVehicle(data));
    }, []);



    return (
        <div>
            {/* Build page layout for car page */}
        </div>
    );
}

export default VehiclePage;