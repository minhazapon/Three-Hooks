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


    // const data = [
    //     {
    //         label: 'Youtube', 
    //         value: 'youtube',
    //     },
    //     {
    //         label: 'Vimeo', 
    //         value: 'vimeo',
    //     },
    //     {
    //         label: 'External URL',
    //         value: 'external',
    //     },
    //     {
    //         label: 'Embedded', 
    //         value: 'embedded',
    //     },
    //     {
    //         label: 'HTML 5 (mp4)', 
    //         value: 'html5',
    //     },
    //     {
    //         label: 'Short Code',
    //         value: 'short_code',
    //     },
    // ];

   
    // 1/ array map method 
    // 2/ array filter method
    // 3/ array find method 
    // 4/ array reduce
    // 5/ 2ta  array compare kore  comon data kivabe ber korbo 

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