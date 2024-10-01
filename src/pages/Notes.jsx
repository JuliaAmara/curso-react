import React, {useState} from 'react';
import {Container, Button, Modal, InputGroup, Form} from "react-bootstrap";

const Notes = () => {
    const [show,setShow] = useState(false);
    const [noteList, setNoteList] = useState([]);

    const[note, setNote] =useState({
        date: '',
        title: '',
        descriítion:''
    })

    function handleInputChange(event)
    {
        const {name, value} = event.target;
        setNote({
            ...note,
            [name]: value
        })
    }
    
    return(
        <>
        <Container className='p-5 bg-light my-4 rounded-3'>
            <h1>Minhas Anotações</h1>
            <p> Use essa janela para registrar anotações e lembretes</p>
            <Button variant="dark" onClick={() => setShow(true)} >Criar Nova Anotação</Button>
        </Container>

        <Modal show = {show}>
             <Modal.Header>
                <Modal.Title>Nova Anotação</Modal.Title>
         </Modal.Header>

             <Modal.Body>

               <InputGroup>
                  <InputGroup.Text>Data</InputGroup.Text>
                  <Form.Control
                  type="date"
                  value= {note.date}
                  />
               
               </InputGroup><br/>

               <InputGroup>
                  <InputGroup.Text>Titulo</InputGroup.Text>
                  <Form.Control
                  value={note.title}
                  />
               
               </InputGroup><br/>

               <InputGroup>
                  <InputGroup.Text>Descrição</InputGroup.Text>
                  <Form.Control
                     as="textarea"
                     value={note.description}
                  />
               
               </InputGroup>



                
             </Modal.Body>

             <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}> Cancelar</Button>
                <Button variant="primary">Adicionar</Button>

             </Modal.Footer>
        </Modal>

        </>
    )
}

export default Notes;