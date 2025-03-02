"use client";

import { useState } from "react";
import Counter from "./counter";

export default function NewItem() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    //categories of items
    const categories = [
        { id: "produce", name: "Produce" },
        { id: "dairy", name: "Dairy" },
        { id: "bakery", name: "Bakery" },
        { id: "meat", name: "Meat" },
        { id: "frozen", name: "Frozen Foods" },
        { id: "canned", name: "Canned Goods" },
        { id: "dry", name: "Dry Goods" },
        { id: "beverages", name: "Beverages" },
        { id: "snacks", name: "Snacks" },
        { id: "household", name: "Household" },
        { id: "other", name: "Other" },
    ]

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}, Category: ${category}, Quantity: ${quantity}`);
        let newItem = {
            name: name,
            category: category,
            quantity: quantity,
        };
        console.log(newItem);

        //reset the form
        setName("");
        setCategory("produce");
        setQuantity(1);
    };

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
    };

    const increment = () => {
        setQuantity((prev) => Math.min(prev + 1, 20));
    };

    const decrement = () => {
        setQuantity((prev) => Math.max(prev - 1, 1));
    };


    return (  
        <section>
            <div className="flex">    
            <form onSubmit={handleSubmit}>
                <input type="text" value={name}
                onChange={(event) => handleNameChange(event)} 
                placeholder="Item Name" 
                className="w-full p-2 mb-2 rounded-lg" required />
                <div className="flex"> 

                {/* Quantity */}
                <Counter 
                quantity={quantity}
                increment={increment}
                decrement={decrement}
                />

                {/* Category selection */}
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
                </select>
                </div>
                <div className="flex ">
                    <button type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg grow">
                        +
                    </button>
                </div>
            </form>
            </div>
            </section>          

    );
};