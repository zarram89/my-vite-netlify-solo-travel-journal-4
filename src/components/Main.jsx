import './Main.css'
import Card from './Card'
import data from '../data'

function Main() {
  const cardsEl = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <main className="main">
      {cardsEl}
    </main>
  )
}

export default Main