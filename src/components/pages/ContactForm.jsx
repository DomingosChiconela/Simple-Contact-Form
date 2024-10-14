import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { PopUp } from "../PopUp"
import axios from "axios";



export const StylesError = " text-red-500"
export const StylesDivForm = "flex flex-col  gap-1 mb-1"
export const StylesInput= " rounded-lg  p-1 outline-none focus:border focus:border-orange-500  bg-slate-50"
export const StylesLabel= ""
export const h3Syles =  "text-blue font-medium"

export const ContactForm  = () =>{
    const  {register,handleSubmit,formState:{errors},reset} =  useForm()
    const  navegate  =  useNavigate()
    const[popUp,setPopUp] = useState({
        open:false,
        success:false,
        message:""
      })

      const onSubmit =  async (data)=>{
     
        reset()
        try{
            //simulando o envio de dados para o backend optei em usar axios porem podes usar api nativa fetch para fazer as requisicoes 
           // const response = await axios.post("/api/example/contactForm",data);
           

           // simulando que a requisicao foi bem sucedida e que o servidor respondeu com status 201 (para isso farei uma gambiara apenas passando um objecto com a propriedade status e valor 201 para a constante response)

           const response = {
            status:201
           }

            if(response.status == 201){

                setPopUp({
                    open:true,
                    success:true,
                    message:"Cadastro realizado com sucesso.",
                  })
        
                  setTimeout(()=>{
                    setPopUp(
                        {
                        open:false,
                        success:false,
                        message:""
                      }
                     )
                     navegate("/about")
                  },4000)  

              
                return

            }
            setPopUp({
                open:true,
                success:false,
                message:"Por favor,tente novamente. ",
              })
    
              setTimeout(()=>{
                setPopUp(
                    {
                    open:false,
                    success:false,
                    message:""
                  }
                 )
              },4000)

        }catch(error){

        console.log("erro ao realizar o cadastro")
        console.error(error)
         setPopUp({
            open:true,
            success:false,
            message:"Por favor,tente novamente. ",
          })

          setTimeout(()=>{
            setPopUp(
                {
                open:false,
                success:false,
                message:""
              }
             )
          },4000)

         
        }
        
    }

    return(
        <>
            <div className="w-screen h-screen   flex flex-col justify-center items-center ">
                
                    
                <h3 className="text-center font-semibold text-2xl mb-1 text-orange-400">Contact</h3>
                
                <div className="w-full px-5 sm:w-fit sm:p-0">
                  
                    <form className="bg-white shadow-lg   w-full  sm:w-[30.5rem] p-5 rounded-md " onSubmit={handleSubmit(onSubmit)}>


                        <div className={`${StylesDivForm}`}>
                            <label className={`${StylesLabel}`} htmlFor="name" >Nome</label>
                            <input type="text" name="name" id="name"  className={`${StylesInput}`} {...register('name',{required:"O nome é obrigatório",
                            pattern :{
                                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                                message:' O nome não pode conter numeros ou caracteres especiais'
                            },
                            validate: value =>value.trim() !== '' ||"O nome não pode ser apenas espaços em branco"

                            })} />
                            {errors.name && <p className={`${StylesError}`} >{errors.name.message}</p>}
                        </div>

                        <div className={`${StylesDivForm}`}>
                            <label className={`${StylesLabel}`} htmlFor="">Email</label>
                            <input type="email" name="email" id="email" className={`${StylesInput}`} {...register('email',{
                                required:"O email é obrigatório",
                                pattern:{

                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "O e-mail deve estar no formato correto"
                                },

                                validate: value =>value.trim() !== '' ||"O email não pode ser apenas espaços em branco"
                            })} />
                            {errors.email && <p className={`${StylesError}`} >{errors.email.message}</p>}
                        </div>

                        <div className={`${StylesDivForm}`}>
                                <label className={`${StylesLabel}`} htmlFor="message">Messagem</label>
                                <textarea   name="message" id="message" className={`${StylesInput} p-6`} {...register('message',{
                                    required:"A messagem é obrigatoria.",
                                

                                    validate: value =>value.trim() !== '' ||"A messagem não pode ser apenas espaços em branco"
                                })} ></textarea>
                                {errors.message && <p className={`${StylesError}`} >{errors.message.message}</p>}
                        </div>


                        
                        <div className=" text-center">
                            <button type="submit" className="py-2 px-4 bg-orange-500 hover:bg-orange-500/85 active:bg-orange-500/45 rounded-xl font-medium text-white my-6    ">Enviar</button>  
                        </div>
                                

                    </form>
                </div>
            </div>

           <PopUp  popUp={popUp}/>
        </>
    )
}