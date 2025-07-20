// src/pages/GroceryList.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type GroceryItem = {
  name: string;
  quantity: string;
};

export default function GroceryList({ username }: { username: string }) {
  const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem(`grocery-${username}`);
    if (saved) {
      setGroceryList(JSON.parse(saved));
    }
  }, [username]);

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-4">🛒 {username}'s Grocery List</h1>
      {groceryList.length === 0 ? (
        <p className="text-center text-gray-500">No items saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {groceryList.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 border rounded shadow-sm flex justify-between"
            >
              <span>{item.name}</span>
              <span className="text-green-600 font-semibold">×{item.quantity}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/welcome")}
          className="bg-orange-500 text-white px-6 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
