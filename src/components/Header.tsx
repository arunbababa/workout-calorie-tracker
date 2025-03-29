import { Title } from './Header/Title'
import { UserIcon } from './Header/UserIcon'
import { PartnorIcon } from './Header/PartnorIcon'

type Props = {
  selectedPart:string, 
  onBack:() => void
}

const Header = ({selectedPart, onBack}:Props) => {
  return (
    <div className='mb-4 flex justify-between items-center'>
      <Title />
      {/* 条件分岐なんだけど何々ならなになにの一つだけ判定したい場合は&&を使えばいい三項演算子ではなく */}
      {selectedPart && (
          <button onClick={onBack} className="text-sm text-blue-500 hover:underline">
            ← 戻る
          </button>
        )}
      <div className='flex items-center gap-4'> 
        <UserIcon />
        <PartnorIcon />
      </div>
    </div>
  )
}

export default Header