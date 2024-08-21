import './App.css'
import { CardProps } from './assets/interfaces'
import Card from './Components/Card'

function App() {
  // skapa en lista med massa personer där deras namn, info o ålder finns
  const animalList: CardProps[] = [
    {
      info: "random leafy info",
      name: "Koala",
      age: 2,
      show: true
    },
    {
      info: "random clawy info",
      name: "Bear",
      age: 5,
      show: true
    },
    {
      info: "random stripey info",
      name: "Tiger",
      age: 10,
      show: false
    }
  ];
  return (
    <main>
      <h1>Start</h1>
      {/* mappa över den listan och skicka ett kort i taget */}
      {
        animalList.map((animal, i) => (
          <Card info={animal.info} name={animal.name} age={animal.age} show={animal.show} key={i} />
        ))
      }
    </main>
  )
}

export default App
