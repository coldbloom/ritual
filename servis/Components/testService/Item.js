import React, {useState} from "react";

const Item = ({item, content, papaFunc}) => {
    const [bool, setBool] = useState(false)
    const click = () => {
        // console.log(content)
        console.log(bool)
        papaFunc(content)
        console.log(bool)
    }

    const clicker = () => {
        setBool(!bool)
    }

    return(
        <button className='border-t-4 border py-4 w-full lg:px-2 flex justify-center focus:border-t-amber-900 focus:bg-amber-700 ;'>
            <h2
                onClick={() => (click(content))}
                className={bool ? 'text-red-700' : 'text-white'}>
                {item.name}
            </h2>
        </button>
    )
}

export default Item