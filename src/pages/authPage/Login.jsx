import "./authpage.scss";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useLogin } from "hooks";
import { useGetter } from "store";


function AuthPage() {
    const { user, setUser } = useGetter();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const login = useLogin({onSuccess: () => navigate("/")});

    const onSubmit = (data) => login(data);

    useEffect(() =>{
      setUser();
    }, []);
    


  return (
    <div className="authpage-container">
        <form className="authpage-container_form" onSubmit={handleSubmit(onSubmit)}>
            <h1>E-Commerce</h1>
            <label htmlFor="">Email</label>
            <input label="Email"  {...register("email")} />

            <label htmlFor="">Password</label>
            <input label="Password"  {...register("password")} />

            <input type="submit" className="form_button" />
        </form>
    </div>
  )
}

export default AuthPage