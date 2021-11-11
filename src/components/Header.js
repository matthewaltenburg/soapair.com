import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1><strong>Soapair</strong><br/>
                    “No matter how many ways you fold a paper aeroplane,<br/> it is still just a paper aeroplane but give it a brain<br/> and it becomes a bird.”
                    </h1>
                    <p>Our business is helping bring advanced drones and their control systems into the world.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
