import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressNameCallback: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressNameCallback} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' ;// ? s.error : s.someClass // need to fix with (?:)


    return (
        <div className={s.wrapper}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onKeyPressNameCallback}/>
            {error && <div className={s.someClass}>{error}</div>}
            <button onClick={addUser}>add</button>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
