import React, { Component } from 'react';
import { Card, CardBody, Button, Row, Col } from 'reactstrap';
import person from './images/support.png';
import events from './images/calendar.png';
import forms from './images/forms.png';
import house from './images/house.png';
import leave from './images/leave.png';
import form from './images/form.png';
import gaval from './images/gavel.png';
import credit from './images/credit-card.png';
import speaker from './images/megaphone.png';


class SubMenu extends Component {
    state = {}
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <Row>
                            <Col sm={4}>
                                <Card className="text-center sub-ele">
                                    <img src={person} alt="person"  width="30" height="30" />
                                    <h6 className="txt">Admin</h6>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-center sub-ele">
                                <img src={events} alt="events"  width="30" height="30" />
                                <h6 className="txt">Event</h6>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-center sub-ele">
                                <img src={forms} alt="forms"  width="30" height="30" />
                                <h6 className="txt">Job</h6>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Card className="text-center sub-ele">
                                <img src={house} alt="house"  width="30" height="30" />
                                <h6 className="txt">Market</h6>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-center sub-ele">
                                <img src={leave} alt="leave"  width="30" height="30" />
                                <h6 className="txt">Load</h6>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-center sub-ele">
                                <img src={form} alt="form"  width="30" height="30" />
                                <h6 className="txt data">Data</h6>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Card className="text-center sub-ele">
                                <img src={gaval} alt="gaval"  width="30" height="30" />
                                <h6 className="txt">Board</h6>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-center sub-ele">
                                <img src={credit} alt="credit"  width="30" height="30" />
                                <h6 className="txt payment">Payment</h6>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-center sub-ele">
                                <img src={speaker} alt="speaker"  width="30" height="30" />
                                <h6 className="txt advert ">Advertise</h6>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default SubMenu;