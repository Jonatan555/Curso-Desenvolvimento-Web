  import {SubmitHandler, useForm} from "react-hook-form";
  import "./App.css";

  type Input = {
    name: string;
    email: string;
  };
  
  export function App() {
    const {register, handleSubmit, formState: {errors}, reset, watch, setError,}  = useForm<Input>();
    const onSubmit:SubmitHandler<Input> = (data) => {
      if(data.name == "Pedrinho")
      setError("name",{
        type: "manuel",
        message: `O nome ${data.name} não pode!`,
      });
      reset();
      console.log(data);
      
    } 
      console.log(watch("name"));
    
     
     return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> Class 07 forms</h1>
      <section>
        <section>
           <label>
       Nome:
        <input type="text" {...register("name", {required: "Campo obrigatório", minLength: {value: 3,message:"Minimo de 3 caracteres"},})} />
      </label>
       <span className="error">{errors.email?.message}</span>

        </section>
        <label>
        
         Email:
        <input type="email" {...register("email", {required: "Campo obrigatório",pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Email inválido"}})} />
       
      </label>
      <span className="error">{errors.name?.message}</span>
      </section>
     
      
       <button>Cadstrar</button>
       </form>
  );
 }
