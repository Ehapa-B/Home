import { BoxSection } from "../Box/Box";
import { Footer } from "../Footer";
import { LandingHeader } from "../Header/LandingHeader";
import { HeroSection } from "../Hero/Hero";
import { MainSection } from "../Main/Main";
import { PostSection } from "../Post/Post";


export const Landing = () => {
  return (
   <div id="top-page">
       <LandingHeader />
       <PostSection />
       <HeroSection />
       <MainSection />
       <BoxSection />
       <Footer />
    </div>
  )
  
}



