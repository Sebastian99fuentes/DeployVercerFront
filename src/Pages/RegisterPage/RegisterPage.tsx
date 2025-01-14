import React from 'react'
import * as Yup from 'yup'
// import { useAuth } from '../../Services/Context/useAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from '../../Services/Context/useAuth';
import './RegisterPage.css'
type Props = {}
type RegisterFormsInputs = {
    userName: string;
    password: string;
    email: string;
}

const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup
    .string()
    .required('La contraseña es obligatoria')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/[A-Z]/, 'La contraseña debe tener al menos una letra mayúscula')
    .matches(/[a-z]/, 'La contraseña debe tener al menos una letra minúscula')
    .matches(/\d/, 'La contraseña debe tener al menos un número')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'La contraseña debe tener al menos un carácter especial'),

    email: Yup.string().required("Corre es requerido"),
})

const RegisterPage = (props: Props) => {
    const { registerUser } = useAuth();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterFormsInputs>({ resolver: yupResolver(validation) });
  
    const handleLogin = (form: RegisterFormsInputs) => {
      registerUser(form.userName, form.password, form.email);
    };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mb-20 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Registra tu Cuenta
          </h1>
          <form className="space-y-4 md:space-y-6" 
          onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombre Usuario
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nombre Usuario"
                {...register("userName")}
              />
              {errors.userName? <p className='text-white'>{errors.userName.message}</p>:""}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('password')}
              />
              {errors.password? <p className='text-white'>{errors.password.message}</p>:""}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Correo
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="correo"
                {...register("email")}
              />
              {errors.email? <p className='text-white'>{errors.email.message}</p>:""}
            </div>
            <div className="flex items-center justify-between">
            </div>
            <button  className="buttonCrud" type="submit">Registrate</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RegisterPage

