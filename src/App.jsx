import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import {Container, Row} from 'react-bootstrap';
import Footer from './component/Footer';
import MyCard from './component/MyCard';

function App() {

  return (
    <Container fluid clasename ='d-flex flex-column justify-content-space-around'> 
      <Header title = 'Adopta un perrito'/>
      <Row>
      <MyCard 
      imagen = 'https://placedog.net/500'
      nombre = 'Perrito'
      descripcion =  'Perrito 1'
      texto = 'Amoroso 1'
      color = 'success'
      />
       <MyCard 
      imagen = 'https://placedog.net/501'
      nombre = 'Perrito'
      descripcion =  'Perrito 2'
      texto = 'Amoroso 2'
      color = 'primary'
      />
       <MyCard 
      imagen = 'https://placedog.net/502'
      nombre = 'Perrito'
      descripcion =  'Perrito 3'
      texto = 'Amoroso 3'
      color = 'danger'
      />
       <MyCard 
      imagen = 'https://placedog.net/503'
      nombre = 'Perrito'
      descripcion =  'Perrito 4'
      texto = 'Amoroso 4'
      color = 'warning'
      />
      </Row>
      <Footer texto = 'Adopta estos cachorros que necesitan tu ayuda'/>
    </Container>
  )
}

export default App
