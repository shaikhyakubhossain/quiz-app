import Btn from "@/app/component/Btn/btn.component";
import Link from "next/link";
import MenuOptions from "@/app/component/MenuOptions/menu-options.component";



export default function Result(): JSX.Element {
    return (
        <div className={`w-auto flex flex-col justify-center text-center`}>
            <div className="text-5xl text-center mb-12">Thank you for testing</div>
            <MenuOptions>
                <div><Link href={'/'}><Btn>Home</Btn></Link></div>
                <div><Link href={'/Question/1'}><Btn>Try Again</Btn></Link></div>
            </MenuOptions>
        </div>
    ) 
}