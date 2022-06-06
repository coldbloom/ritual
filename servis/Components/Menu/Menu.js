import React from 'react'

const Menu = () => {
    return (
        <div className='bg-blue-900 '>
            <nav>
                <ul className='flex flex-col justify-center text-white'>
                    <li className='flex justify-center text-xl pt-3 pb-1'>Главная</li>
                    <li className='flex justify-center text-xl pt-2 pb-2'>Ритуальные услуги</li>
                    <li className='flex justify-center text-xl pt-2 pb-2'>Ритуальные товары</li>
                    <li className='flex justify-center text-xl pt-2 pb-2'>Справочная информация</li>
                    <li className='flex justify-center text-xl pt-2 pb-4'> Контакты</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu