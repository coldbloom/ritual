import React from 'react'
import { ImPhone } from 'react-icons/im'
import { IoIosMail } from 'react-icons/io'
import { BsGeoAltFill } from 'react-icons/bs'

const Footer = () => {
    return(
        <div className='max-w-screen-xl flex flex-col md:justify-between md:flex-row w-full md:px-10 pl-2'>
            <div className=''>
                <div className='flex flex-row justify-start'>
                    <div className='rounded-3xl bg-amber-100 w-10 h-10 flex justify-center items-center w-full'>
                        <ImPhone size={24}/>
                    </div>
                    <strong className='items-center flex pl-3'>+7(978)938-02-21</strong>
                </div>
            </div>
            <div>
                <div className='flex flex-row justify-start'>
                    <div className='rounded-3xl bg-amber-100 w-10 h-10 flex justify-center items-center w-full'>
                        <BsGeoAltFill size={24}/>
                    </div>
                    <p className='items-center flex pl-3 w-fit'>Республика Крым, г. Евпатория, проспект Победы, 42, Ярмарка, торговое место №62</p>
                </div>
            </div>
            <div>
                <div className='flex flex-row justify-start'>
                    <div className='rounded-3xl bg-amber-100 w-10 h-10 flex justify-center items-center w-full'>
                        <IoIosMail size={28}/>
                    </div>
                    <a href="" className='items-center flex pl-3'>ritevp@gmail.com</a>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='flex justify-center'>2018-2022 Ритуальные услуги в Евпатории</p>
                <p className='flex justify-center'>Разработка сайта<a href="">redirect.ru</a></p>
            </div>
        </div>
    )
}

export default Footer