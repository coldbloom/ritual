import React, {useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import Menu from '../Menu/Menu'
import styles from './Header.module.css'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const openMenu = () => {
        setMenuActive(!menuActive)
        console.log(menuActive)
    }

    return(
        <header className=''>
            <div className='md:flex md:justify-center'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center md:mt-3 md:px-14 max-w-screen-xl lg:w-full md:w-full'>
                    <div>
                        <h2 className='flex justify-center text-2xl font-bold mt-5 md:mt-0 md:text-xl'>РИТУАЛ ЕВПАТОРИЯ</h2>
                    </div>

                    <div className='bg-red-700 rounded-xl text-white flex flex-col mx-8 md:flex-row md:mx-0 md:px-3'>
                        <span className='block flex justify-center pt-1 text-xl mb-2 md:items-center md:mr-1 md:py-0 md:my-0 md:text-lg'>Круглосуточная справочная</span>
                        <strong className='flex justify-center pb-1 text-xl md:items-center md:py-0 md:text-lg'>8-978-938-02-21</strong>
                    </div>
                </div>
            </div>
            <div className='bg-blue-900 flex justify-end mt-4 text-white md:mt-3 md:justify-center '>
                <nav className='hidden md:block'>
                    <ul className='flex text-white pt-2.5 pb-2'>
                        <li className='text-xs font-medium mr-10 uppercase'>Главная</li>
                        <li className='text-xs font-medium mr-10 uppercase'>Ритуальные услуги</li>
                        <li className=' text-xs font-medium mr-10 uppercase'>Ритуальные товары</li>
                        <li className=' text-xs font-medium mr-10 uppercase'>Справочная информация</li>
                        <li className=' text-xs font-medium uppercase'> Контакты</li>
                    </ul>
                </nav>
                <div className='block md:hidden'>
                    <AiOutlineUnorderedList
                        color={'white'}
                        size={32}
                        className={menuActive ? 'hidden' + ' ' + 'm-2': 'block' + ' ' + 'm-2'}
                        onClick={() => openMenu()}
                    />
                    <AiOutlineClose
                        color={'white'}
                        size={32}
                        className={menuActive ? 'block' + ' ' + 'm-2' : 'hidden' + ' ' + 'm-2'}
                        onClick={() => openMenu()}
                    />
                </div>
            </div>
            <div className={menuActive ? 'block' + ' ' + styles.borderTop : 'hidden'}>
                <Menu />
            </div>
        </header>
    )
}

export default Header