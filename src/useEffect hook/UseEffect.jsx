import { useEffect } from "react";
import { useState } from "react";
import FlyDataDeatils from "./FlyDataDeatils";


const UseEffect = () => {
    
    const [fly, setFly] = useState([])
    const [searchFly, setSearchFly] = useState("")
    const [butterFly, setButterFly] = useState([])
    
    useEffect( () => {

       fetch('fly.json')
        .then( (res) => res.json())
        .then( (data) => {
       setFly(data)
       setButterFly(data)}) 

    } , [])

    const handleSearch = (event) =>{

       const search = event.target.value.toLowerCase();
       setSearchFly(search)  

       const SearchData = fly.filter( item => item.name.toLowerCase().includes(search))
       setButterFly(SearchData)
    
    }

    return (
        <div className=" mt-16 mb-16 ml-12 mr-12 ">

            <div className=" flex justify-center ml-16 mr-16 mb-10 ">
                    <input className=" border-[1px] border-cyan-300 w-full p-3 rounded-xl "
                    placeholder="Search Butterfly"
                    value={searchFly}
                    onChange={handleSearch}
                    type="search" name="search" id="" />
            </div>
            
            <div className=" flex justify-center "> 
              <div className=" grid md:grid-cols-3 gap-10 ">
                   {
                      butterFly.map( (fly) => <FlyDataDeatils key={fly.id}  fly={fly}></FlyDataDeatils>   )
                   }
              </div>
            </div>   

        </div>
    );
};

export default UseEffect;