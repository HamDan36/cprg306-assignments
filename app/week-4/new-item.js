"use client";

import { useState } from "react";

export default function NewItem() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement} disabled={count <= 1}>-</button>
            <button onClick={increment} disabled={count >= 20}>+</button>
        </div>
    );
};