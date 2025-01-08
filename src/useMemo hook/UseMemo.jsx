import { useMemo } from "react";
import { useState } from "react";


const UseMemo = () => {

    const [myNum, setMyNum] = useState(0)

    const getValue = () =>{
      return setMyNum(myNum + 1)
    }

    const contactNum = (num) =>{
        for( let i = 0; i < 1000; i++ ){}
        return num
    }

    const PerformanceData = useMemo(() =>{
         return contactNum(myNum)
    } , [myNum] )

    return (
        <div className=" mt-16 mb-16 ml-20 mr-20 flex  justify-center">
                
                <div className="">

                   <button onClick={getValue} className=" btn bg-violet-600 text-white text-xl font-serif w-[500px] ">Counter</button>
                   <br></br>
                   <p className=" mt-10 btn bg-cyan-700 text-white text-xl font-serif w-full ">Performance Data: {PerformanceData}</p>

                </div>
        </div>
    );
};

export default UseMemo;