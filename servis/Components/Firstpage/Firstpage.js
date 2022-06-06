import React from "react";
import style from "../Main/Main.module.css";
import {AiFillPhone} from "react-icons/ai";
import Image from "next/image";
import sobor1 from "../../assets/images/sobor 1.jpg";

const FirstPage = () => {
    return(
        <div>
            <div className={'bg-red-700 rounded-xl z-10 text-white flex flex-col absolute lg:w-ful md:flex-row md:justify-center md:py-2' + ' ' + style.div}>
                <div className='flex justify-center mt-2 md:mt-0 md:mr-2'>
                    <AiFillPhone size={20} className='mr-1 md:mt-1.5'/>
                    <span className='block md:text-2xl'>Круглосуточная справочная</span>
                </div>
                <strong className='flex justify-center mb-2 md:mb-0 md:text-2xl'>
                    8-978-938-02-21
                </strong>
            </div>
            <div className={style.left}>
                <div className={'mt-24 z-10 absolute'}>
                    <div className='flex justify-center text-center mx-auto'>
                        <h1 className='text-xl font-bold md:text-3xl md:pt-10 flex justify-center mx-auto'>РИТУАЛЬНЫЕ УСЛУГИ, ОРГАНИЗАЦИЯ ПОХОРОН В ЕВПАТОРИИ,
                            САКАХ И УЮТНОЕ</h1>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='mt-12 max-w-2xl mx-auto'>
                    <Image
                        src={sobor1}
                        alt="Собор"
                        className={style.image + ' ' + 'mt-5'}
                    />
                </div>
            </div>


            <div className='flex items-center row w-full bg-red-700 text-white md:justify-center md:-mt-2'>
                <div className='flex row px-6'>
                    <strong className='text-3xl text-center mr-2'>0</strong>
                    <p className='text-2xl text-center'>руб.</p>
                </div>
                <div className='pr-5'>
                    <p className='leading-5 font-bold py-2 text-base'>БЕСПЛАТНАЯ ПЕРЕВОЗКА УСОПШЕГО В МОРГ</p>
                </div>
            </div>
        </div>
    )
}

export default FirstPage