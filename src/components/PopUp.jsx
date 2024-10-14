
import { motion } from "framer-motion"
import { List,X ,CheckCircle,  XCircle } from "@phosphor-icons/react"

export const PopUp  =  ( {popUp,yPosition=30})=>{

    return (
<>
        {popUp.open ==true?(

            <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: yPosition }}

            transition={{ duration: 1 }}


            className={`absolute top-[0px]  z-50 w-full flex justify-center `}>
                <div className=" bg-white shadow-md  p-2 rounded-md w-fit">
                {popUp.success == true ?(

                <div className="flex gap-2  text-orange-500 justify-center items-center">
            <motion.div
                className="w-fit"
                animate={{ rotateY: 360 }} 
                transition={{ duration: 0.5, ease: "circOut" }} 
                >
                <CheckCircle size={28} />
                </motion.div>
                <p >{popUp.message}</p>

                </div> 

                ):(
                    <div className="flex gap-2  text-red-600 justify-center items-center">
                    <motion.div
                    className="w-fit"
                    animate={{ rotateY: 360 }} 
                    transition={{ duration: 0.5, ease: "circOut" }} 
                    >
                        <XCircle size={28}/> 
                    </motion.div> 
                    <p >{popUp.message}</p>

                </div>
                )
                
                }
            
            </div>
            </motion.div>
        ):""}
    </>

    )
}