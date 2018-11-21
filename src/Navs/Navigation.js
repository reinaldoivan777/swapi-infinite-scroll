import React, { Component } from 'react'
import { Navbar, NavbarBrand, Row, Col } from "reactstrap";

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgSrc: "https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png",
            height: '120px'
        }
    }

    
    componentDidMount() {
        this.listenScrollEvent = window.addEventListener('scroll', (e) => {this.handleScroll(e)})
    }
    
    handleScroll = (e) => {
        if(window.scrollY > 200) {
            this.setState({
                imgSrc: "https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png",
                height: '20px'
            })
        }
        else {
            this.setState({
                imgSrc: "https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png",
                height: '120px'
            })
        }
    }

    render() { 
        return (
            <Row>
                <Col xs="12" sm="12" md="12" lg="12">
                    <Navbar fixed="top" className="navbar-inverse bg-nav">
                        <NavbarBrand>
                            <img src={this.state.imgSrc} alt="Star wars" height={this.state.height} className="brand" />
                        </NavbarBrand>
                    </Navbar>
                </Col>
            </Row>
                
        );
    }
}
 
export default Navigation;