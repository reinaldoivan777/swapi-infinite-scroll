import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'

class People extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            films: []
        }

        this.toggle = this.toggle.bind(this)
    }

    //state untuk show/hide people detail
    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    render() { 
        return (
            <div className="people">
                <div> <h2>{this.props.name}</h2> </div>
                <div> Height: {this.props.height} cm</div>
                <div> Weight: {this.props.mass} Kg</div>
                <Button color="warning" onClick={this.toggle}>Detail</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}><h2>{this.props.name}</h2></ModalHeader>
                    <ModalBody>
                        <ul>
                            <li>Height: {this.props.height} cm</li>
                            <li>Weight: {this.props.mass} Kg</li>
                            <li>Hair Color:{this.props.hair_color}</li>
                            <li>Skin Color: {this.props.skin_color}</li>
                            <li>Eye Color: {this.props.eye_color}</li>
                            <li>Birth Year: {this.props.birth_year}</li>
                            <li>Gender: {this.props.gender}</li>
                        </ul>
                        
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
 
export default People