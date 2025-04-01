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
      <main className="p-6">
        <h2 className="font-bold text-xl">Sort By:</h2>
        <div className="mb-6 flex gap-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
      </div>
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