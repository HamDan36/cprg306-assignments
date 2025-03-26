"use-client"

import Item from "./item";
import itemsData from "./items.json"; // Adjust the path if needed

function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Copy and sort items based on sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => setSortBy("name")}
          style={{
            backgroundColor: sortBy === "name" ? "#ccc" : "white",
            marginRight: "0.5rem",
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{
            backgroundColor: sortBy === "category" ? "#ccc" : "white",
          }}
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
    </div>
  );
}

export default ItemList;
