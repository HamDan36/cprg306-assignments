"use client";

import Items from "./item-list.json";
import { useState } from "react";

function Item({ id, name, quantity, category }) {
  return;
  <li>
    {name} - Quantity: {quantity} - Category: {category}
  </li>;
}

export default Item;
