import Link from 'next/link';
import InputSearch from './InputSearch';
import { Input } from 'postcss';
import UserActionButton from './UserActionButton';

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className='flex md:flex-row flex-col gap-4 justify-between md:items-center p-4 text-color-primary'>
                <Link href="/" className='font-bold text-2xl hover:text-color-dark'>DINIMELIST</Link>
                <InputSearch />
                <UserActionButton />
            </div>
        </header>
    )
}

export default Navbar