import React from 'react'
import totalCalorie from '../types/totalCalorie'


const TotalCalories = ({totalCalorie}:totalCalorie) => {
  return (
    <div className="bg-blue-50 rounded-xl p-4 flex items-center space-x-4 shadow max-w-md mx-auto mt-4">
      <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">
        🔥
      </div>

      <div className="flex flex-col">
        <span className="text-sm text-gray-500">総消費カロリー</span>
        <span className="text-2xl font-bold text-blue-600">{totalCalorie} kcal</span>
      </div>
    </div>
  )
}

export default TotalCalories