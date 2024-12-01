"use client"
import { useState } from 'react';
import VerticalThreeDots from '../VerticalThreeDots/vertical-three-dots.component';
import Btn from '../Btn/btn.component';
import Link from 'next/link';

export default function DropDownMenu() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <VerticalThreeDots onClick={() => setShowMenu(!showMenu)} />
            { showMenu && <div className='absolute top-20 right-4 '>
                <Link href={"https://github.com/shaikhyakubhossain/quiz-app"}><Btn>Source Code</Btn></Link>
            </div>}
        </div>
    );
}