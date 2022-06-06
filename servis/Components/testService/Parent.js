import React, {useState} from "react";
import Item from "./Item";
import MobileItem from './MobileItem';

const Parent = () => {
    const data = [
        {
            id: '0001vrz',
            _id: '0001vrz2',
            name: 'Похороны',
            content: 'текст про похороны  Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
                '\n' +
                'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
        },
        {
            id: '0002vrz',
            _id: '0002vrz2',
            name: 'Кремация',
            content: 'текст про Кремация  Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
                '\n' +
                'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
        },
        {
            id: '0003vrz',
            _id: '0003vrz45',
            name: 'Перевозки',
            content: 'текст про Перевозки  Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
                '\n' +
                'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
        },
        {
            id: '0004vrz',
            _id: '0004vrz4332df',
            name: 'Носильщики',
            content: 'текст про Носильщики  Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
                '\n' +
                'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
        },
        {
            id: '00c05jty',
            _id: '005fgh64cf',
            name: 'Отпевание',
            content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
                '\n' +
                'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
        },
        {
            id: '0006gtgy6vrzy',
            _id: '006fn790ccf',
            name: 'Бальзамирование',
            content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
                '\n' +
                'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
        },
        {
            id: '0007vhj3m5rzy',
            _id: '007fgnnyj6ccf',
            name: 'Панихида',
            content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
                '\n' +
                'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
        },
        {
            id: '0008vh68rzy',
            _id: '008fcg542f7cf',
            name: 'Поминки',
            content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
                '\n' +
                'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
        },
        {
            id: '0009vgf96rzy',
            _id: '009fxa1ae56ccf',
            name: 'Груз 200',
            content: 'текст про Носильщики2   Интересно, что еще есть в запасе у WebStorm? О других сочетаниях клавиш можно узнать из списка горячих клавиш, доступного из главного меню IDE — Help | Keymap Reference, — или на нашем веб-сайте.\n' +
                '\n' +
                'Можно также перейти в Preferences / Settings | Keymap или просто начать набирать имя действия во всплывающем окне Search Everywhere.',
        },
    ]
    const click = (name) => {
        console.log(name)
    }

    const [content, setContet] = useState(data[0].content);
    const papaFunc = (newContent) => {
        setContet(newContent)
    }
    return(
        <div className='bg-amber-100 pt-20 pb-10 px-10 flex justify-center flex-col'>
            <h2 className='text-white font-bold text-3xl text-center mb-5'>Полный комплекс ритуальных услуг</h2>
            {/*мобильный экран*/}
            <div className='block md:hidden'>
                {data.map((item) => (<MobileItem key={item._id} name={item.name}/>))}
            </div>
            {/*дестоп*/}
            <div className='flex justify-center'>
                <div className='md:flex hidden max-w-screen-xl w-full'>
                    {data.map((item) => (<Item key={item.id} item={item} content={item.content} papaFunc={papaFunc}/>))}
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='hidden md:block max-w-screen-xl'>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Parent