type Props = {
  name: string
  time: number
  calories: number
  icon?: string
}

export default function WorkoutItem({
  name,
  time,
  calories,
  icon = '🏋️',
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow flex flex-col p-4 transition hover:bg-blue-50 hover:shadow-lg">
      {/* 上：アイコンと名前 */}
      <div className="flex items-center space-x-3 mb-2">
        <div className="bg-indigo-100 text-indigo-600 rounded-full w-10 h-10 flex items-center justify-center text-xl">
          {icon}
        </div>
        <div className="text-md font-semibold">{name}</div>
      </div>

      {/* 下：時間とカロリー */}
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
  )
}