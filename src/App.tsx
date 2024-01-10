import data from './assets/data'
import Card from "./assets/Card"
import Navbar from './assets/navBar'

function App() {
  const cards = data.map(card => {
    return (
      <Card
        key={card.id}
        title={card.title}
        location={card.location}
        googleMapsUrl={card.googleMapsUrl}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        img={card.imageUrl}
      />
    )


  })
  console.log(data)
  return (
    <>
      {/* this needs to be a component */}
      <Navbar />
      <section className='card-list'>
        {cards}
      </section>

    </>
  )
}
export default App
