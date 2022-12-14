import "./authpage.scss";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useLogin } from "hooks";
import { useGetter } from "store";


function AuthPage() {
  const { user, setUser } = useGetter();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const login = useLogin({ onSuccess: () => navigate("/products") });

  const handleClick = () => navigate("/register");
  const onSubmit = (data) => login(data);

  useEffect(() => {
    setUser();
  }, [user]);



  return (
    <div className="authpage-container">
      <form className="authpage-container_form" onSubmit={handleSubmit(onSubmit)}>
        <h1>E-Commerce</h1>
        <label htmlFor="">Email</label>
        <input label="Email"  {...register("email", { required: true })} required />

        <label htmlFor="">Password</label>
        <input label="Password" type="Password" {...register("password", { required: true })} required />

        {errors.name && errors.name.type === "required" && (
          <span role="alert">This field is required</span>
        )}

        <input type="submit" className="form_button" />
        <section className="buttons">
          <p className="buttons__text">
            Don't have an account yet?{" "}
            <span className="buttons__link" onClick={handleClick}>
              Sign up here
            </span>
          </p>
        </section>
      </form>
    </div>
  )
}

export default AuthPage