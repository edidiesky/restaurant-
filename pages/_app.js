import Layout from '@/components/Layout'
// import Header from '@/components/common/Header'
// import Sidebar from '@/components/common/Sidebar'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../store'
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Copyright from '@/components/common/Copyright';
import Footer from '@/components/common/Footer';
export default function App({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false)
  useEffect(() => {
    AOS.init({
      once: true,
      // offset: 50,
      duration: 4000
    });
  }, []);
  const initialOptions = {
    "client-id":
      "AZwhvDm_lNhSOcDkza_6-5Yzi8diCZA-FKB4kbmDq8QyZofI84RMZ5Ao3aXcdao09k6NOl0OMOUfPyNp",
    currency: "USD",
    intent: "capture",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Provider store={store}>
        <Layout>
          {/* <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <Header sidebar={sidebar} setSidebar={setSidebar} /> */}
          <Component {...pageProps} />
          <Footer />
          <Copyright />
        </Layout>
      </Provider>
    </PayPalScriptProvider>
  )
  // return (
  //     <Layout>
  //       {/* <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
  //       <Header sidebar={sidebar} setSidebar={setSidebar} /> */}
  //       <Component {...pageProps} />
  //       <Footer/>
  //       <Copyright/>
  //     </Layout>
  // )
}