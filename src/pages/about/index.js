import React from 'react'
import AboutSection from '../../components/home/about-section'
import FeatureAbout from '../../components/about/features/feature-about'
import TeamMembers from '../../components/about/team-members/team-members'
import ClientFeadback from '../../components/about/client-feedback/client-feedback'
import SomeQuestion from '../../components/about/some-question/some-question'
import Subscribe from '../../components/about/subscribe/subscribe'
import BlogSection from '../../components/home/blogsection/blogsection'
import DeliveryMode from '../../components/home/deliverymode/deliverymode'
import Footer from '../../components/common/footer/footer'

const About = () => {
  return (
    <div className="bg-fullBg">
      <AboutSection />
      <FeatureAbout />
      <TeamMembers />
      <ClientFeadback />
      <SomeQuestion />
      <Subscribe />
      <BlogSection />
      <DeliveryMode />
      <Footer />
    </div>
  )
}

export default About
