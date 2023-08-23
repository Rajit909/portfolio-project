import { TbError404 } from 'react-icons/tb';
import { MdError } from 'react-icons/md';
import Button from '../components/Button/Button';

const Error = () => {
    return (
        <>
            <TbError404 className='w-96 h-96 mx-auto dark:text-white' />
            <div className='text-center text-4xl font-bold dark:text-white flex items-center justify-center ml-12'>
                <p className="">Page not found</p>
                <MdError className="mx-2" />
            </div>
            <div className="dark:text-white flex items-center justify-center m-4 ml-12 flex-wrap">
                <p className="text-4xl font-bold mr-4 my-2">Go back to </p>
                <Button text="Home Page" url="/" target='_self' />
            </div>
        </>
    );
}
export default Error;