import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import HomePage from '../Pages/HomePage'
import { Route, Routes ,useLocation} from "react-router";
import Nopage from '../Pages/Nopage';
import Terms from '../Pages/Terms';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import HowUseApp from '../Pages/HowUseApp';
import AboutUs from '../Pages/AboutUs';
import Support from '../Pages/Support';
import AffiliationSupport from '../Pages/AffiliationSupport';
//import OpenCalmateApp from '../Pages/OpenCalmateApp';
export default function Routername() {
    const location = useLocation();
    return (
        <div className={
            location?.pathname === "/privacypolicy" || location?.pathname === "/terms" || location?.pathname === "/how-to-use-app" ? "bg-hedbg font-custom": "bg-bodybg font-custom ttt"
        }>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/how-to-use-app" element={<HowUseApp />} />
                <Route path="/aboutus" element={<AboutUs />} />  
                <Route path="/support" element={<Support />} />  
                <Route path="/affiliation-support" element={<AffiliationSupport />} />  
             {/* <Route path="/open-app" element={<OpenCalmateApp />} />    */}
                <Route path="/*" element={<Nopage />} />
            </Routes>
            <Footer />
        </div>
    )
}
