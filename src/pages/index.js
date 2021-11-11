import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Soapair";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>(HLVTD)<br/>High Powered Heavy Lift Vertical Takeoff Drone </h2>
                            </header>
                            <p>The Heavy Lift Vertical Takeoff Drone (HLVTD) is an autonomous, heavy-lift, gas-powered, variable-pitch drone capable of lifting 440lb with a range of 180 miles. It is designed to take off and land in austere locations. The variable-pitch provides extremely accurate hover ability, even in challenging weather conditions.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;