import BodyPartMenu from './components/BodyPartMenu'
import Header from './components/Header'
import TotalCalories from './components/TotalCalories'
import './index.css'

// timeとcaloriesは状態管理として持つべき、もっと子供のコンポーネントで入力するから、appに戻った際にuseeffectでsupabaseからとってくる感じになるかなぁ
function App() {

  return (
    <>
      <div className='mx-auto max-w-md p-4 text-center bg-gray-100 rounded-lg shadow-lg'>
        <Header />
        <TotalCalories totalCalorie={100}/>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">
          <BodyPartMenu name="背中" time={15} calories={105} icon="🏋️" />
          <BodyPartMenu name="脚" time={15} calories={105} icon="🏋️" />
          <BodyPartMenu name="腕" time={10} calories={90} icon="🏋️" />
          <BodyPartMenu name="胸" time={12} calories={110} icon="🏋️" />
        </div>
      </div>
    </>
  )
}

export default App
