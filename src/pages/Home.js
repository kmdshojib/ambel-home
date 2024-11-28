import React from 'react'
import Hero from '../components/Hero/Hero'
import BrandPartners from '../components/BrandPartners/BrandPartners'
import IndustriesSection from '../components/IndustriesSection/industriesSection'
import Features from '../components/Features/Features'
import SearchFeature from '../components/SearchFetures/SearchFeature'

const Home = () => {
    return (
        <div>
            <Hero />
            <BrandPartners />
            <IndustriesSection />
            <Features />
            <SearchFeature />
        </div>
    )
}

export default Home