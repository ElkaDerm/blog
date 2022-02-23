
import { useContext } from "react"
import { NotificationContext } from "../../context/NotificationContext.js"
import './Notification.modules.css'

export const Notification = () => {
  const {notification} = useContext(NotificationContext)

  if (!notification.show) {
    return null;
  }

  return (

    <div className='error'>
      {notification.type==='error' ? (
        <>
        <p >Something went wrong:</p>
        <p>{notification.message}</p>
        </>
      ) 
      : (
        <>
        <p >Success!</p>
        <p>{notification.message}</p>
        </>
      )
      }

    </div>
  )

}