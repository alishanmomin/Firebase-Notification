import React, {useEffect, useState} from 'react'
import firebase from './firebase'

const App = () => {
const [notiToken, setNotiToken] = useState("")
    useEffect(() => {
        const messaging = firebase.messaging()
        messaging.requestPermission().then(()=>{
          return messaging.getToken()
        }).then(token=>{
            setNotiToken(token)
        }).catch((err)=>{
            console.log(err);
            
        })
        // messaging.onMessage((payload)=>{
        //       console.log(payload);
            
        //     })
        }, [])
        console.log('TokennotiTokennotiTokennotiToken ',notiToken)
    
  return (
    <div>App</div>
  )
}

export default App