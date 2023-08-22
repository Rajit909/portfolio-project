const Button = ({ text, url, target='_blank'}) => {
    return (
        <div className="flex flex-wrap place-items-center">
            <Button className="px-6 py-1 hover:bg-transparent bottom-2 border-green-900 dark:border-[#50DBB4] hover:text-gray-900 text-lg font-bold rounded-lg transition-colors duration-300 transform bg-gray-900 dark:bg-[#50DBB4] dark:text-gray-900 to-gray-100 focus:border-4 focus:border-black dark:hover:bg-cyan-300 dark:hover:border-cyan-300 ">
                {" "}
                <a 
                    href={url}
                    target={target}
                    rel="noopener noreferrer">
                        {" "}
                        {text}{" "}
                    </a>{" "}
            </Button>
        </div>
    );
}

export default Button;