

export const ContactForm  = () =>{

    return(
        <>
            <div className="w-screen h-screen   flex flex-col justify-center items-center">
                
                    
                <h3 className="text-center font-semibold text-2xl mb-1">Cadastro</h3>
                
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
                            <label className={`${StylesLabel}`} htmlFor="">Contacto</label>
                            <input type="text" name="contact" id="contact" className={`${StylesInput}`} {...register('contact', {
                                required: "O contacto é obrigatório",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "O contacto deve conter apenas números inteiros"
                                },
                                maxLength: {
                                    value: 9,
                                    message: "O contacto deve ter no máximo 9 caracteres"
                                },
                                
                                validate: value =>value.trim() !== '' ||"O email não pode ser apenas espaços em branco"

                            })} />
                            {errors.contact && <p className={`${StylesError}`} >{errors.contact.message}</p>}
                        </div>

                        <div className={`${StylesDivForm}`}>
                                <label className={`${StylesLabel}`} htmlFor="">Senha</label>
                                    <input type="password" name="password" id="password" className={`${StylesInput}`} {...register('password',{
                                            required:"O password é obrigatório",
                                        

                                            validate: value =>value.trim() !== '' ||"O password não pode ser apenas espaços em branco"
                                        })} />
                                {errors.password && <p className={`${StylesError}`} >{errors.password.message}</p>}
                        </div>

                        <div className={`${StylesDivForm}`}>
                                <label className={`${StylesLabel}`} htmlFor="">Confirmar senha</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword" className={`${StylesInput}`} {...register('confirmPassword',{
                                            required:"O confirmPassword é obrigatório",
                                           
                                            validate: {
                                                notEmpty: value => value.trim() !== '' || "A confirmação não pode ser apenas espaços em branco",
                                                matchesPassword: value => value === watch('password') || "As senhas não são iguais"
                                              }
                                        })} />
                                {errors.confirmPassword && <p className={`${StylesError}`} >{errors.confirmPassword.message}</p>}

                        </div>
                        
                                <Link to={"/login"} className="text-zinc-800 text-sm hover:text-primary/85 active:text-primary/45">Ja possui uma conta?</Link>
                        <div className=" text-center">
                            <button type="submit" className="py-2 px-4 bg-primary hover:bg-primary/85 active:bg-primary/45 rounded-xl font-medium text-white my-6    ">Cadastrar</button>  
                        </div>
                                

                    </form>
                </div>
            </div>

           <PopUp  popUp={popUp}/>
        </>
    )
}