import LoginForm from '../components/LoginForm'
import CookieStandAdmin from '../components/CookieStandAdmin'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'

export default function Home() {
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();
  
  return (
    <>
   {user ? <CookieStandAdmin/>:<LoginForm/>}
  </>
                   
  )
}
