import { useState } from 'react'
import WorkoutFormModal from '../Modal/WorkoutFormModal'

type Props = {
  name: string
  icon?: string
  time: number
  calories: number
  onCalorieSubmit: (cal: number) => void
}

export default function TraningMenuCard({
  name,
  icon = '🏋️',
  time,
  calories,
  onCalorieSubmit,
}: Props) {
  const [showModal, setShowModal] = useState(false)

  const handleSave = (data: { weight: number; reps: number }) => {
    const kcal = data.weight * data.reps * 0.1 // シンプルなカロリー計算式（後で調整OK）
    onCalorieSubmit(kcal)
    setShowModal(false)
  }

  return (
    <>
      <div
        className="bg-white rounded-xl shadow flex flex-col p-4 transition hover:bg-blue-50 hover:shadow-lg cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className="bg-indigo-100 text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center text-xl">
            {icon}
          </div>
          <div className="text-md font-semibold">{name}</div>
        </div>
        <div className="text-sm text-gray-600 flex justify-between">
          <div className="flex items-center space-x-1">
            <span>⏱</span>
            <span>{time}分</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🔥</span>
            <span>{calories} kcal</span>
          </div>
        </div>
      </div>

      {showModal && (
        <WorkoutFormModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          menuName={name}
        />
      )}
    </>
  )
}