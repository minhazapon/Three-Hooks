import { useEffect } from "react";
import { useState } from "react";
import FlyDataDeatils from "./FlyDataDeatils";


const UseEffect = () => {
    
    const [fly, setFly] = useState([])
    
    useEffect( () => {

       fetch('fly.json')
       .then( res => res.json())
       .then( data => setFly(data)) 

    } , [])

    return (
        <div className=" mt-16 mb-16 ml-12 mr-12 ">
            <div className=" flex justify-center ">
              <div className=" grid  md:grid-cols-3 gap-10 ">
                   {
                      fly.map( fly => <FlyDataDeatils fly={fly}></FlyDataDeatils>   )
                   }
              </div>
            </div>            
        </div>
    );
};

export default UseEffect;