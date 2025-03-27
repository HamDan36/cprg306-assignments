"use-client"
import React from 'react';
import ItemList from './item-list.js'; 
// import { useState } from 'react';

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-extrabold text-red-800">Shopping List</h1>
      <ItemList />
    </main>
  );
};