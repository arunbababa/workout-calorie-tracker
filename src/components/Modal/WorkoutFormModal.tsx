import { useForm } from 'react-hook-form'

type WorkoutFormInput = {
  reps: number
  weight: number
}

type Props = {
  onClose: () => void
  onSave: (data: WorkoutFormInput) => void
  menuName:string
}

export default function WorkoutFormModal({ onClose, onSave,menuName }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkoutFormInput>()

  const onSubmit = (data: WorkoutFormInput) => {
    onSave(data)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">{menuName}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">回数</label>
            <input
              type="number"
              {...register('reps', { required: true, min: 1 })}
              className="w-full border border-gray-300 rounded p-2"
            />
            {errors.reps && <p className="text-red-500 text-sm">1回以上入力してください</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">重量 (kg)</label>
            <input
              type="number"
              {...register('weight', { required: true, min: 1 })}
              className="w-full border border-gray-300 rounded p-2"
            />
            {errors.weight && <p className="text-red-500 text-sm">1kg以上入力してください</p>}
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-500 hover:text-gray-700"
            >
              戻る
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}