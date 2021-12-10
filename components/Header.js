import { useAuth } from '../contexts/auth'


export default function Header() {
  const { user, login, logout } = useAuth();
    return (
        <header className='bg-green-400 flex justify-start p-4  mb-2'>
        <h1 className='text-4xl font-bold w-10/12'>
        Cookie Stand Admin
        </h1>
        <nav className='flex my-2'>

        <button className='p-1 bg-green-200 h-8 px-2 mx-2 rounded-md'>{user.username}</button>

          <button onClick={logout} className='bg-green-600 text-white h-8 px-4 mx-2 rounded text-sm'>SignOut</button>            
          
          <button className='p-1 bg-gray-200 h-8 px-2 mx-2 rounded-md'>overview</button>
                  
      </nav>
      </header>
      
    )
        
    }