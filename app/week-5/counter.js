"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        setQuantity(quantity - 1);
    };

    return (
        <div className="flex items-center justify-between bg-gray-50 p-1 rounded-lg shadow-lg w-44">
            <p className="text-xl font-bold text-gray-800 mb-4 pt-3">
                {quantity}
            </p>
            <div className="flex space-x-4">
                <button
                    onClick={decrement}
                    disabled={quantity <= 1}
                    className={`w-10 h-8 flex items-center justify-center text-3xl  text-white font-bold rounded-lg transition duration-300 ease-in-out pb-2  
                    ${quantity <= 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    -
                </button>
                <button
                    onClick={increment}
                    disabled={quantity >= 20}
                    className={`w-10 h-8 flex items-center justify-center text-3xl text-white font-bold rounded-lg transition duration-300 ease-in-out pb-2
                    ${quantity >= 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    +
                </button>
            </div>
        </div>
    );
};