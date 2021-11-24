// Render all the Cars from the Garage.

function Car(props)
{
    return <li>I am a {props.brand}</li>
}

function Garage()
{
    const cars = ['Suzuki', 'fiat', 'TATA'];    

    return(
        <>
        <h2>Who Lives in the Garage</h2>
        <ul>
            {cars.map((car) => <Car brand={car} />)}
        </ul>
        </>
    )
}

export default Garage;  