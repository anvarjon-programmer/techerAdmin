import { useEffect, useState } from "react";
import Input from "../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../../slice/auth";
import AuthService from "../../service/auth";
import {ValidationError} from "../index";
import { useNavigate } from "react-router-dom";
const Login = () => {
  // const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');  
  const [password, setPassword] = useState('');  
  const dispatch = useDispatch();
  const {isLoading,loggedIn} = useSelector(state => state.auth);
  const navigate = useNavigate()
  const loginHandler = async (e) =>{
    e.preventDefault();
    dispatch(signUserStart())
    const user = {phoneNumber,password}
    try{
        const response = await AuthService.userLogin(user)
        dispatch(signUserSuccess(response.user))
        navigate('/')
    }catch(error){
        dispatch(signUserFailure(error.response.data.error))
        console.log(error);
    }
  }
  useEffect(() => {
    if(loggedIn) {
      navigate('/')
    }
  },[])
   return (
    <>
     <section className=" dark:bg-gray-900 w-full h-screen -translate-y-14">
     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 -mt-32">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <ValidationError/>
                  <Input label={'Phone Number'} state={phoneNumber} setState={setPhoneNumber}/>
                  <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>
                  <button onClick={loginHandler} disabled={isLoading} type="submit" className="w-full text-white bg-[#22AAD8] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    {isLoading ? "Loading..." : "Login"}
                  </button>
              </form>
          </div>
      </div>
     </div>
     </section>
    </>
  )
}

export default Login