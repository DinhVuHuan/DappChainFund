import React from 'react';
import { TbAwardFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex justify-between items-center
      p-5 bg-white text-gray-700 hover:text-gray-900
      shadow-lg fixed top-0 left-0 right-0'>

            <Link to="/">
                <span className="text-lg font-medium">Dapp ChainFund Demo</span>
                <div className="flex space-x-1">
                    <TbAwardFilled className="text-yellow-500 text-xl" />
                    <TbAwardFilled className="text-yellow-500 text-xl" />
                    <TbAwardFilled className="text-yellow-500 text-xl" />
                    <TbAwardFilled className="text-yellow-500 text-xl" />
                    <TbAwardFilled className="text-yellow-500 text-xl" />
                </div>
            </Link>

            <div className="flex space-x-2 justify-center">
                <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700"
                >
                    Connect Wallet
                </button>
            </div>
        </header>
    )
}

export default Header;
