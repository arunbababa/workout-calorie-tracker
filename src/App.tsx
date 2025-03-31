import { useState } from 'react'
import BodyPartMenu from './components/Card/BodyPartCard'
import Header from './components/Header'
import TotalCalories from './components/TotalCalories'
import './index.css'
import BackWorkoutList from './components/traningMenu/back/backMenuList'

// timeとcaloriesは状態管理として持つべき、もっと子供のコンポーネントで入力するから、appに戻った際にuseeffectでsupabaseからとってくる感じになるかなぁ
function App() {

  const [selectedPart, setSelectedPart] = useState<string | null>(null)
  const [totalCalories, setTotalCalories] = useState<number>(100)

  const handlePart = async (part: string) => {
    await setSelectedPart(part)
  }

  const handleResetPart = () => {
    setSelectedPart(null)
  }

  return (
    <>
      <div className='mx-auto max-w-md p-4 text-center bg-gray-100 rounded-lg shadow-lg'>
        <Header selectedPart={selectedPart} onBack={handleResetPart}/>
        {/* totalCalorieも子コンポーネントに応じて変わるので状態管理 */}
        <TotalCalories totalCalorie={totalCalories}/>
        {selectedPart == null? 

        // 部位選択画面
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">
          <BodyPartMenu name="背中" time={15} calories={105} icon="🏋️" onClickPart={() => handlePart("背中")}/>
          <BodyPartMenu name="脚" time={15} calories={105} icon="🏋️" onClickPart={() => handlePart("脚")}/>
          <BodyPartMenu name="腕" time={10} calories={90} icon="🏋️" onClickPart={() => handlePart("腕")}/>
          <BodyPartMenu name="胸" time={12} calories={110} icon="🏋️" onClickPart={() => handlePart("胸")}/>
        </div>  
        :
        <div className="mt-6">
          {selectedPart === '背中' && <BackWorkoutList onCalorieSubmit={(cal) => setTotalCalories(prev => prev + cal)} />
}          {/* WorkoutList やメニュー追加はあとで */}
        </div>
        }
      </div>
    </>
  )
}

export default App
