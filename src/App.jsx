import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import Header from './components/Header'
import MyCard from './components/MyCard'

function App() {
 
  return (
    <>
    <Header title='Adopta un Perrito'/>
    <main className='tarjetas'>
    <MyCard 
    image="https://images.pexels.com/photos/2295236/pexels-photo-2295236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    name="Toby"
    description="Toby ofrece una oportunidad para experimentar las alegrías y responsabilidades de cuidar a un cachorro desde sus primeros días. Su ternura y encanto seguramente conquistarán el corazón de aquellos que decidan brindarle un hogar lleno de cariño y atención."
    nameT="Adoptame"
    color="primary"
    />
      <MyCard 
    image="https://images.pexels.com/photos/247937/pexels-photo-247937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    name="Benito"
    description="A sus 8 meses, Benito ha pasado por la etapa inicial de la infancia y probablemente ya haya adquirido algunas habilidades básicas de entrenamiento. Su disposición juguetona y enérgica lo convierte en un compañero perfecto para actividades al aire libre y juegos interactivos."
    nameT="Adoptame"
    color="warning"
    />
      <MyCard 
    image="https://images.pexels.com/photos/1719626/pexels-photo-1719626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    name="Dynka"
    description="Aunque su exterior pueda parecer imponente, es probable que Dynka sea cariñosa y leal con su familia. Su naturaleza protectora puede manifestarse en su disposición para brindar seguridad y afecto a aquellos a quienes considera parte de su círculo."
    nameT="Adoptame"
    color="danger"
    />
      <MyCard 
    image="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    name="Lulu"
    description="Lulu es una encantadora cachorra 3 meses que está buscando un hogar amoroso. Es una perrita juguetona y llena de energía, típica de su edad. Su pelaje es suave y tiene una expresión tierna en sus ojos curiosos."
    nameT="Adoptame"
    color="black"
    />
    </main>
    <Footer />
    </>
  )
}

export default App
