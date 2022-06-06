import React from "react";

const MobileItem = ({name}) => {
    return(
        <div className='bg-red-700 my-2 mx-4 rounded'>
            <a href="" className='flex justify-center text-center text-white font-normal p-2 text-lg'>{name}</a>
        </div>
    )
}

export default MobileItem