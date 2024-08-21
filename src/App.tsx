import './App.css'
import Card from './Components/Card'

function App() {
  // skapa en lista med massa personer där deras namn, info o ålder finns
  const animalList = [
    {
      info: "random leafy info",
      name: "Koala",
      age: 2
    },
    {
      info: "random clawy info",
      name: "Bear",
      age: 5
    },
    {
      info: "random stripey info",
      name: "Tiger",
      age: 5
    }
  ];
  return (
    <main>
      <h1>Start</h1>
      {/* mappa över den listan och skicka ett kort i taget */}
      {
        animalList.map((animal, i) => (
          <Card info={animal.info} name={animal.name} age={animal.age} key={i} />
        ))
      }
    </main>
  )
}

export default App
