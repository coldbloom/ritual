import React, {useState} from 'react'
import ModuleServicesItem from './../moduleComp/moduleServicesItem/ModuleServicesItem'
import ModuleServicesItemsDesctop from "../moduleComp/ModuleServicesItemsDesctop/ModuleServicesItemsDesctop";
const data = [
    'Похороны',
    'Кремация',
    'Перевозки',
    'Носильщики',
    'Отпевание',
    'Бальзамирование',
    'Панихида',
    'Поминки',
    'Груз 200',
]

const dataDes = [
    {
        id: '0001vrz',
        name: 'Похороны',
        content: 'текст про похороны',
    },
    {
        id: '0002guvrz',
        name: 'Кремация',
        content: 'текст про Кремация',
    },
    {
        id: '00ff03vrz',
        name: 'Перевозки',
        content: 'текст про Перевозки',
    },
    {
        id: '00jr04vrz',
        name: 'Носильщики',
        content: 'текст про Носильщики',
    },
]


const Services = () => {
    const [content, setContet] = useState(dataDes[0].content);
    const papaFunc = (newContent) => {
        console.log(newContent)
        setContet(newContent)
    }

    return(
        <div className='bg-blue-900 pt-20 pb-10 px-10'>
            <h2 className='text-white font-bold text-3xl text-center mb-5'>Полный комплекс ритуальных услуг</h2>
            {/*новое*/}
            <div className='hidden md:flex  justify-between'>
                {dataDes.map((item) => <ModuleServicesItemsDesctop key={item.id} service={item} content={item.content} papaFunc={papaFunc}/>)}
            </div>
            {/*старое*/}
            <div className='block md:hidden'>
                {data.map((item) => <ModuleServicesItem key={data.indexOf (item) * 3} service={item}/>)}
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Services