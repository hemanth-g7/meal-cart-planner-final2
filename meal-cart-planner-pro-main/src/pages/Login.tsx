import { useState } from "react";
import { FaUsers, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Login({ onLogin }: { onLogin: Function }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [familySize, setFamilySize] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for saved grocery list in localStorage
    const savedList = localStorage.getItem(`groceryList_${username}`);
    const parsedList = savedList ? JSON.parse(savedList) : [];

    // Save username for other components to access
    localStorage.setItem("username", username);

    // Call parent with login data and saved grocery list
    onLogin({ username, password, familySize, savedList: parsedList });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-100 to-yellow-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaShoppingCart className="text-orange-500 text-3xl" />
          <h1 className="text-3xl font-bold text-orange-600">Meal Cart Planner Pro</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 flex items-center gap-1">
              <FaUsers /> Family Members
            </label>
            <input
              type="number"
              placeholder="Number of family members"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={familySize}
              onChange={(e) => setFamilySize(e.target.value)}
              required
              min="1"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Sign In & Start Planning
          </button>
        </form>
      </motion.div>
    </div>
  );
}
