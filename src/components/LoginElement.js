import { useEffect } from 'react'
import {BsPerson, BsLock} from 'react-icons/bs'

const LoginElement = () => {

    const showPassword = () => {
        const inputPassword = document.querySelector('#password')
        const buttonShow = document.querySelector('#eye')

        if(inputPassword.type === 'password'){
            inputPassword.type = 'text'
            if(inputPassword.value.length !== 0){
                buttonShow.innerHTML = 'Hide'
            }
            return
        }
        inputPassword.type = 'password'
        buttonShow.innerHTML = 'Show'
    }

    const formData = async (event) => {
        event.preventDefault()
        const usernameForm = event.target.username.value
        const passwordForm = event.target.password.value

        console.info(usernameForm, passwordForm)

        const options = {
            method: 'POST',
            body: JSON.stringify({
                username: 'mor_2314',
                password: '83r5^_'
            })
        }

        const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
        const responseJson = await response.json()
        console.log(responseJson)
    }

    return(
        <>
            <form onSubmit={formData} className='w-full h-fit flex flex-col items-center gap-3'>
                <div className="w-[80%] h-[44px] relative">
                    <BsPerson className="absolute top-1/2 -translate-y-1/2 text-slate-400 w-[44px] aspect-square border-r border-slate-400"/>
                    <input type="text" id="username" className="border border-slate-500 w-full h-full rounded pl-[48px]"/>
                </div>
                <div className="w-[80%] h-[44px] relative">
                    <BsLock className="absolute top-1/2 -translate-y-1/2 text-slate-400 w-[44px] aspect-square border-r border-slate-400"/>
                    <input type="password" id="password" className="border border-slate-500 w-full h-full rounded px-[48px]" autoComplete="off"/>
                    <button id="eye" className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center justify-center text-slate-400 hover:text-slate-800 text-xs" onClick={() => showPassword()}>
                        Show
                    </button>
                </div>
                <div>
                    <button type="submit" className="border border-slate-400 rounded py-2 px-4 hover:bg-blue-600 hover:text-slate-50">
                        Login
                    </button>
                </div>
            </form>
        </>
    )
}

export default LoginElement