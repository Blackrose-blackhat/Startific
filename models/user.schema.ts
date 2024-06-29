import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message:"Email is required!"}),
    password: z.string().min(1 ,{message:"Password is required!"}),
    
})

export const RegisterSchema = z.object({
    email: z.string().email({message:"Email is required!"}),
    password: z.string().min(8 ,{message:"Password must be more than 8 characters long"}),
    username:z.string().min(3 ,{message:"Username must be more than 3 characters long"})
    
})


