

const Array = () => {
    
    //////array map method/////

    const data = [
        {
            label: 'Youtube', 
            value: 'youtube',
        },
        {
            label: 'Vimeo', 
            value: 'vimeo',
        },
        {
            label: 'External URL',
            value: 'external',
        },
        {
            label: 'Embedded', 
            value: 'embedded',
        },
        {
            label: 'HTML 5 (mp4)', 
            value: 'html5',
        },
        {
            label: 'Short Code',
            value: 'short_code',
        },
    ];

    const ArrayData = data.map( items => items.label) 
    // console.log(ArrayData)

    //////array filter method/////////////

    const dataFilter = [
        {
            label: 'Youtube', 
            value: 'youtube',
        },
        {
            label: 'Vimeo', 
            value: 'vimeo',
        },
        {
            label: 'External URL',
            value: 'external',
        },
        {
            label: 'Embedded', 
            value: 'embedded',
        },
        {
            label: 'HTML 5 (mp4)', 
            value: 'html5',
        },
        {
            label: 'Short Code',
            value: 'short_code',
        },
    ];

    const arrayFilterData = dataFilter.filter( items => items.value === 'youtube' ) 
    // console.log(arrayFilterData)

    /////array find method///////////

    const dataFind = [
        {
            label: 'Youtube', 
            value: 'youtube',
        },
        {
            label: 'Vimeo', 
            value: 'vimeo',
        },
        {
            label: 'External URL',
            value: 'external',
        },
        {
            label: 'Embedded', 
            value: 'embedded',
        },
        {
            label: 'HTML 5 (mp4)', 
            value: 'html5',
        },
        {
            label: 'Short Code',
            value: 'short_code',
        },
    ];

    const ArrayFindData = dataFind.find( items => items.value === 'external' )
    // console.log(ArrayFindData)

    const dataReduce = [
        {
            label: 'Youtube', 
            value: 'youtube',
        },
        {
            label: 'Vimeo', 
            value: 'vimeo',
        },
        {
            label: 'External URL',
            value: 'external',
        },
        {
            label: 'Embedded', 
            value: 'embedded',
        },
        {
            label: 'HTML 5 (mp4)', 
            value: 'html5',
        },
        {
            label: 'Short Code',
            value: 'short_code',
        },
    ];

    const reduceResult = dataReduce.reduce( (allObj, allValue) => {
      allObj[allValue.value] = allValue.label
      return allObj
    } , {} )
    // console.log(reduceResult)

    const ArrayCompare1 = [
        {
            label: 'Youtube', 
            value: 'youtube',
        },
        {
            label: 'Vimeo', 
            value: 'vimeo',
        },
        {
            label: 'External URL',
            value: 'external',
        },
        {
            label: 'Embedded', 
            value: 'embedded',
        },
        {
            label: 'HTML 5 (mp4)', 
            value: 'html5',
        },
        {
            label: 'Short Code',
            value: 'short_code',
        },
    ];

    const ArrayCompare2 = [
        {
            label: 'Youtube', 
            value: 'youtube',
        },
        {
            label: 'Vimeo', 
            value: 'vimeo',
        },
        {
            label: 'External URL',
            value: 'external',
        },
        {
            label: 'Embedded', 
            value: 'embedded',
        },
        {
            label: 'HTML 5 (mp4)', 
            value: 'html5',
        },
        {
            label: 'Short Code',
            value: 'short_code',
        },
    ];

    const compare = ArrayCompare1.find( item1 => ArrayCompare2.some( item2 => item1.value === item2.value )  )
    // console.log(compare)
    
    const compare1 = ArrayCompare1.filter( item1 => ArrayCompare2.some( item2 => item1.value === item2.value )  )
    // console.log(compare1)
    
    return (
        <div>
            
        </div>
    );
};

export default Array;