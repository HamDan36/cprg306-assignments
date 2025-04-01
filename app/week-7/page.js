"use client"
import NewItem from './new-item.js';
import Item from './item.js';
import itemsData from './items.json'; // Adjust the path if needed
import React from 'react';
import ItemList from './item-list.js'; 
import item from '../week-3/item.js';
// import { useState } from 'react';

export default function Page() {
  const[items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
      };
  

  return (
    <main>
      <h1 className="text-3xl font-extrabold text-red-800">Shopping List</h1>
      <ItemList items={items} onAddItem={handleAddItem}/>
    </main>
  );
};