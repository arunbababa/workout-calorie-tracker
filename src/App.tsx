import BodyPartMenu from './components/BodyPartMenu'
import Header from './components/Header'
import TotalCalories from './components/TotalCalories'
import WorkOutList from './components/WorkOutList'
import './index.css'

function App() {

  return (
    <>
      <div className='mx-auto max-w-2xl p-4 text-center'>
        <Header />
        <TotalCalories />
        <BodyPartMenu />
        <WorkOutList />
      </div>
    </>
  )
}

export default App
