import { BsPerson, BsLock } from "react-icons/bs"

const RegisterElement = () => {

    const onSubmit = async (event) => {
        event.preventDefault()
        const emailForm = event.target.email.value
        const usernameForm = event.target.username.value
        const passwordForm = event.target.password.value
        const firstNameForm = event.target.firstName.value
        const lastNameForm = event.target.lastName.value

        try {
            const option = {
                method:"POST",
                body:JSON.stringify(
                    {
                        email: emailForm,
                        username: usernameForm,
                        password: passwordForm,
                        name:{
                            firstname: firstNameForm,
                            lastname: lastNameForm
                        },
                    }
                )
            }
    
            const response = await fetch(`https://fakestoreapi.com/users`, option)
            const responseJson = await response.json()
    
            if(responseJson){
                alert('Data berhasil ditambah!')
            }   
        } catch (error) {
            alert('Data gagal ditambah!')
            console.log(error)
        }

        
    }

    return(
        <>
            <form className="w-full flex flex-col gap-2" onSubmit={onSubmit}>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="border border-slate-500 w-full rounded h-[44px] px-2" required/>
                </div>
                <div className="">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" className="border border-slate-500 w-full rounded h-[44px] px-2" required autoComplete="off"/>
                </div>
                <div className="">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="border border-slate-500 w-full rounded h-[44px] px-2" required autoComplete="off"/>
                </div>
                <div className="">
                    <label htmlFor="firstName">Name</label>
                    <div className="flex items-center justify-between gap-5">
                        <input type="text" name="firstName" id="firstName" placeholder="First" className="border border-slate-500 w-full rounded h-[44px] px-2" required autoComplete="off"/>
                        <input type="text" name="lastName" id="lastName" placeholder="Last" className="border border-slate-500 w-full rounded h-[44px] px-2" autoComplete="off"/>
                    </div>
                </div>
                <div className="self-center">
                    <button type="submit" className="border border-slate-400 rounded py-2 px-3 hover:bg-blue-600 hover:text-slate-50">
                        Register
                    </button>
                </div>
            </form>
        </>
    )
}

export default RegisterElement