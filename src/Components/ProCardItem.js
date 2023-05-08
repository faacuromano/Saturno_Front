import React from "react";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardHeader } from "reactstrap"
import './ProCardItem.css'
const ProCardItem = ({ data }) => {
    return ( 
    <div >

            {
                (data.length < 1) ? (
                    <h1> No hay datos disponibles </h1>
                )
                :
                (
                    data.map((item) => (
                       
                        <Card className="CardItem" key={ item.Id } style={{ width: '18rem' }}>
                            <CardHeader><img className="imgCard" alt="Card" width='100%' src="https://picsum.photos/300/200" /></CardHeader>
                            
                            <CardBody style={{ textAlign: "center" }}>
                                <CardTitle tag="h2"> {item.nombre + " " + item.apellido} </CardTitle>
                                <CardText> {item.profesion } </CardText>
                            </CardBody>

                            <ListGroup flush>
                                <ListGroupItem>Horario: {item.horarioInicio + " - " + item.horarioCierre}</ListGroupItem>
                                <ListGroupItem>Direccion: {item.direccion } </ListGroupItem>
                                <ListGroupItem>Ubicacion: {item.ubicacion } </ListGroupItem>
                            </ListGroup>
                        </Card>
                    ))
                )
            }

    </div>
    )
}

    export default ProCardItem;

    