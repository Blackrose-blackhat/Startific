
import { CheckCircleIcon } from "lucide-react";


interface FormErrorProps{
    message?:string;

}

export const FormSuccess = ({
    message,
}:FormErrorProps) => {
    if(!message) return null;

    return (
        <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 ">
            <CheckCircleIcon className="w-5 h-5" />
            <p>{message}</p>
        </div>
    )
}