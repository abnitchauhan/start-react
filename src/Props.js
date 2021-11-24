// Props are arguments passed into React Components
// Props are passed to components via HTML attributes

// ---- `props` stands for properties

  

function Car(props)
{
    return <h2> I am a {props.brand.model} ! </h2>
}

// Pass Data
// function Garage()
// {
//     const carName = "Suzuki";
//     return(
//         <>  
//         <h1>Who Lives in the Garage ?</h1>
//         <Car brand={carName} />
//         </>
//         ); 
// }

// If it was an Object
    function Garage()
    {
        const carInfo = {name: "Ford", model: "Mustang"};
        return(
            <>
                <h1>Who lives n My Garage ? </h1>
                <Car brand={carInfo} /> 
            </>
        );
    }

export default Garage;