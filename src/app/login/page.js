'use client'
import { useState } from "react"
import { BsArrowLeft, BsEyeFill, BsEyeSlashFill, BsKey, BsLock, BsPerson } from "react-icons/bs"
import LoginElement from '@/components/LoginElement'
import RegisterElement from '@/components/RegisterElement'
import { useRouter } from "next/navigation"

const Login = () => {
    const [page, setPage] = useState('login')
    const router = useRouter()

    return (
        <>
            <section className="absolute top-0 left-0 w-screen h-screen bg-slate-50 z-50 flex items-center justify-center" id="login">
                <div className="absolute top-5 left-5">
                    <button onClick={() => router.back()} className="buttonIcon">
                        <BsArrowLeft />
                    </button>
                </div>
                <div className="bg-white w-[400px] border border-slate-200 rounded flex flex-col items-center p-10">
                    <div className="font-bold uppercase text-2xl">
                        <h1>Logo</h1>
                    </div>
                    <div>
                        {
                            page === 'login' ? <LoginElement /> : <RegisterElement />
                        }
                    </div>
                    <dir className="text-center text-sm p-0">
                        {
                            page === 'login' ? 
                                <p>Don't have account? Register <button onClick={() => setPage('register')} className="underline">here</button></p> 
                                : <p>Already have? Login <button onClick={() => setPage('login')} className="underline">now</button></p>
                        }
                    </dir>
                </div>
            </section>
        </>
    )
}

export default Login