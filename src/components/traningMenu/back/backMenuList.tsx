import TraningMenuCard from '../../Card/TraningMenuCard'

type Props = {
  onCalorieSubmit: (cal: number) => void
}

export default function BackWorkoutList({ onCalorieSubmit }: Props) {
  const workouts = [
    { name: 'デッドリフト', time: 15, calories: 120 },
    { name: 'ラットプルダウン', time: 10, calories: 90 },
    { name: 'ハーフデッドリフト', time: 12, calories: 110 },
    { name: '懸垂', time: 8, calories: 80 },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">
      {workouts.map((item) => (
        <TraningMenuCard
          key={item.name}
          name={item.name}
          time={item.time}
          calories={item.calories}
          icon="🏋️"
          onCalorieSubmit={onCalorieSubmit}
        />
      ))}
    </div>
  )
}