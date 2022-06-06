// import React, {useState, useEffect} from "react"
// import './Slider.module.css'
// import slide1 from "../../assets/images/sobor7.jpg"
// import slide2 from "../../assets/images/sobor2.jpg"
// import slide3 from "../../assets/images/sobor4.jpg"
// import slide4 from "../../assets/images/sobor3.jpg"
// import slide5 from "../../assets/images/sobor5.jpg"
// import Image from 'next/image'
//
// const Slider = () => {
//     const item1 = (
//         <div className='flex items-center row p-5 w-full '>
//             <div className='flex row'>
//                 <strong className=''>0</strong>
//                 <p className=''>руб.</p>
//             </div>
//             <div>
//                 <strong>БЕСПЛАТНАЯ ПЕРЕВОЗКА УСОПШЕГО В МОРГ</strong>
//             </div>
//         </div>
//     )
//
//     const item2 = <div className='p-5 w-full'>2</div>
//     const item3 = <div className='p-5 w-full'>3</div>
//
//     const img = [
//         item1,
//         item2,
//     ]
//
//     const [activeIndex, setActiveIndex] = useState(0);
//
//     useEffect(() => {
//         // Запускаем интервал
//         const interval = setInterval(() => {
//             // Меняем состояние
//             setActiveIndex((current) => {
//                 // Вычисляем индекс следующего слайда, который должен вывестись
//                 const res = current === img.length - 1 ? 0 : current + 1
//                 // Возвращаем индекс
//                 return res
//             })
//         }, 5000)
//         // Выключаем интервал
//         return () => clearInterval()
//     }, [])
//
// // Вычисляем индекс предыдущего слайда
//     const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// // Вычисляем индекс следующего слайда
//     const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
//
//     return(
//         <div className="slider">
//             <div className="slider-img slider-img-prev"
//                  key={prevImgIndex}>
//                  {img[prevImgIndex]}
//             </div>
//         </div>
//     )
// }
//
// export default Slider