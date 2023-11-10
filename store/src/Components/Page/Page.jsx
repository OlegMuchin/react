import React from 'react';
import MainPage from './MainPage/MainPage';
import Footer from '../Footer/Footer';
import InvitationSuppliers from './InvitationSuppliers/InvitationSuppliers';
import Cooperation from "./Cooperation/Cooperation"
import FAQ from "./FAQ/FAQ"
import Reviews from "./Reviews/Reviews"
import Stock from "./Stock/Stock"
import AboutStore from "./AboutStore/AboutStore"
import PushApplication from "../UI/button/PushButton/PushApplication/PushApplication"

function Page(props) {
    return (
        <div>
            <MainPage/>
            <AboutStore/>
            <Stock/>
            <Reviews/>
            <FAQ/>
            <Cooperation/>
            <InvitationSuppliers/>
            <Footer/>
            <PushApplication/>
        </div>
    );
}
export default Page;