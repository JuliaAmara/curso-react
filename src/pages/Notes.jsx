import React from 'react';
import {Container, Button, Modal} from "react-bootstrap";

const Notes = () => {
    return(
        <>
        <Container className='p-5 bg-light my-4 rounded-3'>
            <h1>Minhas Anotações</h1>
            <p> Use essa janela para registrar anotações e lembretes</p>
            <Button variant="dark" >Criar Nova Anotação</Button>
        </Container>

        <Modal>
             <Modal.Header>
                <Modal.Title>Nova Anotação</Modal.Title>
             </Modal.Header>

             <Modal.Body>

             </Modal.Body>

             <Modal.Footer>
                <Button variant="secondary"> Cancelar</Button>
                <Button variant="primary">Adicionar</Button>

             </Modal.Footer>
        </Modal>

        </>
    )
}

export default Notes;