"use client";
import { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json"; // Adjust the path if needed

export default function ItemList()
{
    const [sortBy, setSortBy] = useState("name");
    let items = [...itemsData];

    const sortedItems = items.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    return(
      <main>
        <h2>Sort By:</h2>
        <button onClick={() => setSortBy("name")}>Name</button>
        <button onClick={() => setSortBy("category")}>Category</button>

        <ul>
          
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </main>
    );
}