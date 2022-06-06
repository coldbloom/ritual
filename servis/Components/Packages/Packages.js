import React from 'react'

const Packages = () => {
    const packages = [
        {
            id: '001',
            name: 'социальный',
            price: '0 руб.',
            text:
                <ul className='md:h-96 md:pt-2'>
                    <li className='leading-5 md:leading-3 mb-4'>Выезд агента</li>
                    <li className='leading-5 md:leading-3 mb-4'>Гроб</li>
                    <li className='leading-5 md:leading-3 mb-4'>Подушка</li>
                    <li className='leading-5 md:leading-3 mb-4'>Тапочки</li>
                    <li className='leading-5 md:leading-3 mb-4'>Транспорт в один конец</li>
                    <li className='leading-5 md:leading-3 mb-4'>Получение справки о смерти агентом</li>
                    <li className='leading-5 md:leading-3 mb-4'>Доставка ритуальных принадлежностей в морг</li>
                    <li className='leading-5 md:leading-3 mb-4'>Оформление заказа</li>
                </ul>,
        },
        {
            id: '002',
            name: 'эконом',
            price: 'от 8 500 руб.',
            text:
                <ul className='md:h-96 md:pt-2'>
                    <li className='leading-5 md:leading-3 mb-4'>Выезд агента</li>
                    <li className='leading-5 md:leading-3 mb-4'>Гроб обитый тканью</li>
                    <li className='leading-5 md:leading-3 mb-4'>Комплект постельный в гроб (шёлк)</li>
                    <li className='leading-5 md:leading-3 mb-4'>Тапочки</li>
                    <li className='leading-5 md:leading-3 mb-4'>Венок стандарт 70 см</li>
                    <li className='leading-5 md:leading-3 mb-4'>Табличка с трафаретной надписью на ножке</li>
                    <li className='leading-5 md:leading-3 mb-4'>Транспорт (морг-кладбище/крематорий)</li>
                    <li className='leading-5 md:leading-3 mb-4'>Получение справки о смерти агентом</li>
                    <li className='leading-5 md:leading-3 mb-4'>Доставка ритуальных принадлежностей</li>
                    <li className='leading-5 md:leading-3 mb-4'>Оформление заказа</li>
                </ul>
        },
        {
            id: '003',
            name: 'стандарт',
            price: '27 990 руб.',
            text:
                <ul className='md:h-96 md:pt-2'>
                    <li className='leading-5 md:leading-3 mb-4'>Выезд агента</li>
                    <li className='leading-5 md:leading-3 mb-4'>Гроб комбинированный</li>
                    <li className='leading-5 md:leading-3 mb-4'>Тапочки атласные</li>
                    <li className='leading-5 md:leading-3 mb-4'>Венок 110 см стандарт</li>
                    <li className='leading-5 md:leading-3 mb-4'>Крест металлический</li>
                    <li className='leading-5 md:leading-3 mb-4'>Табличка с трафаретной надписью</li>
                    <li className='leading-5 md:leading-3 mb-4'>Табличка с трафаретной надписью</li>
                    <li className='leading-5 md:leading-3 mb-4'>Транспорт (морг-кладбище/крематорий-место поминок)</li>
                    <li className='leading-5 md:leading-3 mb-4'>Получение справки о смерти агентом</li>
                    <li className='leading-5 md:leading-3 mb-4'>Доставка ритуальных принадлежностей</li>
                    <li className='leading-5 md:leading-3 mb-4'>Ооформление заказа</li>
                </ul>
        },
        {
            id: '004',
            name: 'достойный',
            price: '39 990 руб.',
            text:
                <ul className='md:pl-1 md:pt-2'>
                    <li className='leading-5 md:leading-3 mb-4'>Выезд агента</li>
                    <li className='leading-5 md:leading-3 mb-4'>Гроб деревянный лакированный</li>
                    <li className='leading-5 md:leading-3 mb-4'>Комплект постельный в гроб (атлас)</li>
                    <li className='leading-5 md:leading-3 mb-4'>Тапочки атласные стёжка</li>
                    <li className='leading-5 md:leading-3 mb-4'>Венок 110 см заказной  Лента траурная на венок</li>
                    <li className='leading-5 md:leading-3 mb-4'>(надпись на заказ)</li>
                    <li className='leading-5 md:leading-3 mb-4'>Крест на могилу дубовый</li>
                    <li className='leading-5 md:leading-3 mb-4'>Табличка с трафаретной надписью</li>
                    <li className='leading-5 md:leading-3 mb-4'>Транспорт (морг-кладбище/крематорий-место поминок)</li>
                    <li className='leading-5 md:leading-3 mb-4'>огрузочно-разгрузочные работы</li>
                    <li className='leading-5 md:leading-3 mb-4'>Получение справки о смерти агентом</li>
                    <li className='leading-5 md:leading-3 mb-4'>Доставка ритуальных принадлежностей</li>
                    <li className='leading-5 md:leading-3 mb-4'>Оформление заказа</li>
                </ul>
        },
    ]
    return (
        <div className='bg-blue-900 text-white text-center px-2 pb-20'>
            <h2 className='font-bold text-3xl pt-20 '>Пакеты услуг</h2>
            <div className='md:flex md:justify-center'>
                <div className='md:flex max-w-screen-xl '>
                    {packages.map((item) => (
                        <div key={item.id} className='mt-20 mx-2 md:mt-10 md:mx-0 md:border-r last:border-r-0'>
                            <h3 className='text-2xl font-medium mb-1 md:mb-0'>{item.name}</h3>
                            <div className='flex justify-center md:border-b '>
                                <div className='bg-red-700 px-2 py-1 font-bold text-xl mb-3 md:text-base'>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                            <div className='text-lg leading-6 md:text-xs'>{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>)
}

export default Packages