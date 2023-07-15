import {useEffect,useState} from 'react'

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initalValue) {
    const prefixedkey   = PREFIX + key

    const [value, setValue] = useState(()=> {
        const jsonValue = localStorage.getItem(prefixedkey)
        if(jsonValue != null ) return JSON.parse(jsonValue) 

        if(typeof initalValue === 'function'){
            return initalValue()
        }else{
            return initalValue
        }

    })
    useEffect(() => { 
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    }, [prefixedkey ,value])

    return [value, setValue]
}
