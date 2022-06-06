import React from 'react'
import sobor from './../../assets/images/sobor.jpg'
import sobor1 from './../../assets/images/sobor 1.jpg'

import style from './Main.module.css'

import Image from 'next/image'
import {AiFillPhone} from 'react-icons/ai'
import ModuleCompRules from './../moduleComp/moduleCompRules/ModuleCompRules'
import ModuleCompReasons from "../moduleComp/ModuleCompReasons/ModuleCompReasons"
import Services from '../Services/Services'
import Slider from "../Slider/Slider";
import Rules from '../Rules/Rules'
import Map from '../Map/Map'
import Compensation from "../Compensation/Compensation";
import Packages from "../Packages/Packages";
import Products from "../Products/Products";
import FirstPage from "../Firstpage/Firstpage";
import Parent from "../testService/Parent";


const Main = () => {

    return (
        <div className=''>

            <FirstPage />

            <Rules />

            <Map />

            <Services/>

            <Parent />

            <Compensation />

            <Packages />

            <Products />

        </div>
    )
}

export default Main