import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


const chooseBtn = {
    boxSizing: 'border-box',
    width: '348px',
    height: '68px',
    background: '#D8D8D8',
    border: '1px solid #BBBBBB',
    borderRadius: '22px',
};

const nextBtn = {
    position: 'absolute',
    width: '199px',
    height: '64px',
    left: '115px',
    top: '790px',
    background: 'linear-gradient(90deg, #0FF0FC 0%, #098F96 100%)',
    borderRadius: '18px',
    color:'black'
}

const bankIconStyles = {
    width: '24px',
    height: '24px',
    marginRight: '12px',
};

const PaymentMethod = () => {
    const navigate = useNavigate();
    const goToCard = () => {
         navigate("/profile/card-detail") 
    }
    const [isListOpen, setIsListOpen] = useState(false);
    const [selectedBank, setSelectedBank] = useState(null);

    const banks = [
        { name: 'State Bank of India', icon: <SBIIcon style={bankIconStyles} /> },
        { name: 'Citi Bank', icon: <CitiIcon style={bankIconStyles} /> },
        { name: 'Axis Bank', icon: <AxisIcon style={bankIconStyles} /> },
        { name: 'Bank of Baroda', icon: <BankOfBarodaIcon style={bankIconStyles} /> },
        { name: 'HDFC Bank', icon: <HDFCIcon style={bankIconStyles} /> },
        { name: 'ICICI Bank', icon: <ICICIIcon style={bankIconStyles} /> },
        { name: 'Union Bank of India', icon: <UnionBankIcon style={bankIconStyles} /> },
    ];

    const handleBankSelect = (bankName) => {
        setSelectedBank(bankName);
        setIsListOpen(false);
    };

    const handleChooseBankClick = () => {
        setIsListOpen(!isListOpen);
    };

    return (
        <div
            style={{ background: 'linear-gradient(to bottom, lightgray, #DBE9EF)' }}
            className="flex h-screen flex-col pt-8 space-y-4"
        >
            <div>
                <h1 className="text-4xl mt-4 font-bold">Add Payment Method</h1>
                <div
                    style={chooseBtn}
                    className="flex items-center justify-between ml-12 px-4 cursor-pointer"
                    onClick={handleChooseBankClick}
                >
                    {selectedBank ? selectedBank : 'Choose Bank'}
                </div>
            </div>

            {isListOpen && (
                <div className="bg-white rounded-2xl mx-4 shadow-md p-4">
                    <div className="flex flex-col space-y-3">
                        {banks.map((bank) => (
                            <div
                                key={bank.name}
                                className="flex items-center px-4 py-5 rounded-md cursor-pointer bg-gray-200 hover:bg-gray-100"
                                onClick={() => handleBankSelect(bank.name)}
                            >
                                {bank.icon}
                                <span>{bank.name}</span>
                            </div>
                        ))}

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Your Bank ..."
                                className="bg-white border border-gray-800 rounded-2xl py-3 pl-10 pr-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                                />
                            </svg>
                        </div>

                    </div>
                    <div className="mt-4">
                    </div>
                </div>
            )}

            <Link to="/account" className="text-gray-700">Skip for Now</Link>

            <button onClick={goToCard} style={nextBtn} className="bg-teal-500 text-white px-6 py-3 rounded-md w-full">Next</button>

        </div>
    );
};

// SVG icons
const SBIIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.31 12.08c-.44-.42-.64-.99-.64-1.73 0-.85.2-1.51.61-1.98.4-.47.97-.7 1.71-.7.61 0 1.08.16 1.41.48.33.32.5.76.5 1.32h-1.06c0-.35-.08-.61-.24-.79-.16-.18-.4-.27-.72-.27-.37 0-.65.12-.84.37-.19.25-.29.63-.29 1.14 0 .53.09.92.28 1.17.19.25.47.37.85.37.33 0 .57-.09.73-.28.16-.19.24-.46.24-.82h1.06c0 .57-.17 1.01-.51 1.33-.34.32-.81.48-1.41.48-.74 0-1.31-.23-1.71-.7zM12 15.5c-.56 0-1.06-.13-1.5-.4-.44-.27-.78-.64-1.03-1.12-.24-.48-.37-1.01-.37-1.6 0-.57.12-1.1.37-1.57.25-.47.59-.83 1.03-1.09.44-.26.94-.39 1.5-.39.56 0 1.06.13 1.5.39.44.26.78.62 1.02 1.09.24.47.37 1 .37 1.57 0 .59-.12 1.12-.37 1.6-.24.48-.58.85-1.02 1.12-.44.27-.94.4-1.5.4z"
        />
    </svg>
);

const CitiIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.13 14.38c-.6.6-1.43.93-2.29.93-1.81 0-3.28-1.47-3.28-3.28 0-1.81 1.47-3.28 3.28-3.28.83 0 1.63.31 2.24.87l.05.05 1.06-1.06-.05-.05c-.86-.86-2.04-1.34-3.29-1.34-2.58 0-4.67 2.09-4.67 4.67 0 2.58 2.09 4.67 4.67 4.67 1.27 0 2.44-.49 3.29-1.38l.05-.05-1.06-1.06-.05.05z"
        />
    </svg>
);

const AxisIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.53 14.59c-.39.39-1.02.39-1.41 0L12 13.41l-2.12 2.12c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 8.47 9.88c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.12-2.12c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.12 2.12c.39.39.39 1.02 0 1.47z"
        />
    </svg>
);

const BankOfBarodaIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.13 14.38c-.6.6-1.43.93-2.29.93-1.81 0-3.28-1.47-3.28-3.28 0-1.81 1.47-3.28 3.28-3.28.83 0 1.63.31 2.24.87l.05.05 1.06-1.06-.05-.05c-.86-.86-2.04-1.34-3.29-1.34-2.58 0-4.67 2.09-4.67 4.67 0 2.58 2.09 4.67 4.67 4.67 1.27 0 2.44-.49 3.29-1.38l.05-.05-1.06-1.06-.05.05z"
        />
    </svg>
);

const HDFCIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.53 14.59c-.39.39-1.02.39-1.41 0L12 13.41l-2.12 2.12c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 8.47 9.88c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.12-2.12c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.12 2.12c.39.39.39 1.02 0 1.47z"
        />
    </svg>
);

const ICICIIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.31 12.08c-.44-.42-.64-.99-.64-1.73 0-.85.2-1.51.61-1.98.4-.47.97-.7 1.71-.7.61 0 1.08.16 1.41.48.33.32.5.76.5 1.32h-1.06c0-.35-.08-.61-.24-.79-.16-.18-.4-.27-.72-.27-.37 0-.65.12-.84.37-.19.25-.29.63-.29 1.14 0 .53.09.92.28 1.17.19.25.47.37.85.37.33 0 .57-.09.73-.28.16-.19.24-.46.24-.82h1.06c0 .57-.17 1.01-.51 1.33-.34.32-.81.48-1.41.48-.74 0-1.31-.23-1.71-.7z"
        />
    </svg>
);

const UnionBankIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props}>
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.13 14.38c-.6.6-1.43.93-2.29.93-1.81 0-3.28-1.47-3.28-3.28 0-1.81 1.47-3.28 3.28-3.28.83 0 1.63.31 2.24.87l.05.05 1.06-1.06-.05-.05c-.86-.86-2.04-1.34-3.29-1.34-2.58 0-4.67 2.09-4.67 4.67 0 2.58 2.09 4.67 4.67 4.67 1.27 0 2.44-.49 3.29-1.38l.05-.05-1.06-1.06-.05.05z"
        />
    </svg>
);

export default PaymentMethod;