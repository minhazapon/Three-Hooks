

const FlyDataDeatils = ({fly}) => {

    const {image, name, scientificName, family, wingSpan, habitat,} = fly

    return (
        <div>

        <div className="w-[350px] rounded-md shadow-md bg-black text-gray-100">
	    <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	    <div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
		<h2 className="text-xl font-semibold font-serif">Name- {name}</h2>
        <p>scientificName- {scientificName} </p>
            <p>family- {family} </p>
            <p>wingSpan- {wingSpan} </p>
            <p>habitat- {habitat} </p>
		</div>
		<button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-white text-gray-900">
            Read more</button>
	    </div>
        </div>
            
        </div>
    );
};

export default FlyDataDeatils;
