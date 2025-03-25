import { Title } from './Header/Title'
import { UserIcon } from './Header/userIcon'
import { PartnorIcon } from './Header/partnorIcon'

const Header = () => {
  return (
    <div className='mb-4 flex justify-between items-center'>
      <Title />
      <div className='flex items-center gap-4'> 
        <UserIcon />
        <PartnorIcon />
      </div>
    </div>
  )
}

export default Header