import Btn from "@/app/component/Btn/btn.component";
import Link from "next/link";



export default function Result(): JSX.Element {
    return (
        <div className={`w-auto flex flex-col justify-center text-center`}>
            <div className="text-5xl text-center mb-12">Thank you for testing</div>
            <Link href={'/'}><Btn>Home</Btn></Link>
        </div>
    ) 
}