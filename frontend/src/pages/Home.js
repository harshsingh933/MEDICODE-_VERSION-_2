import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Prescription Medicines"} heading={"Prescription Medicines"}/>
      <HorizontalCardProduct category={"(OTC) Medicines"} heading={"(OTC) Medicines"}/>

      <VerticalCardProduct category={"Child Care"} heading={"Child Care"}/>
      <VerticalCardProduct category={"Elder Care"} heading={"Elder Care"}/>
      <VerticalCardProduct category={"Health Devices"} heading={"Health Devices"}/>
      <VerticalCardProduct category={"Men's Health"} heading={"Men's Health"}/>
      <VerticalCardProduct category={"Personal Care"} heading={"Personal Care"}/>
      <VerticalCardProduct category={"Supplements"} heading={"Supplements"}/>
      <VerticalCardProduct category={"Women's Health"} heading={"Women's Health"}/>
      <VerticalCardProduct category={"Ayurveda & Homeopathy"} heading={"Ayurveda & Homeopathy"}/>
    </div>
  )
}

export default Home