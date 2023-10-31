import React, { useState } from 'react'
import { Text } from 'react-native-paper'

const Deputado = ({navigation,route}) => {
    const [user,setUser] = useState("")
    useEffect(() => {
        const id = route.params.id
        setUser(id)
    }, [])
  return (
    <Text>{user}</Text>
  )
}

export default Deputado