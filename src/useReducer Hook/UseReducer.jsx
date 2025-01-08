import { useReducer } from "react";


const UseReducer = () => {

    const reducer = (state, action) =>{
        if(action.type === "INCREMENT"){
            return state + 1
        } 
        if(action.type === "DECREMENT"){
            return state - 1
        } 
    }

    const [count, dispatch] = useReducer(reducer, 0)
    
    return (
        <div className=" mt-16 mb-16 ml-16 mr-16 ">
            <div className=" flex justify-center items-center gap-5 ">

                <button onClick={() => dispatch({type:'INCREMENT'})} className=" btn bg-cyan-500 text-white ">
                Increment</button>
                <p className=" text-xl text-black "> {count} </p>
                <button onClick={() => dispatch({type:'DECREMENT'})} className=" btn bg-cyan-500 text-white ">
                Decrement</button>

            </div>
        </div>
    );
};

export default UseReducer;