// src/pages/Welcome.tsx
import { FaCalendarAlt, FaUsers, FaUserCircle } from "react-icons/fa";

export default function Welcome({ user, onStart }: { user: string; onStart: () => void }) {
  const familySize = 4; // or get from props/context

  return (
    <div className="min-h-screen bg-gradient-to-bl from-indigo-100 via-purple-100 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg w-full text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Welcome {user}!</h1>
          <p className="text-sm text-gray-600 flex justify-center items-center gap-1 mt-1">
            <FaUsers className="text-gray-500" /> Planning for {familySize} family members
          </p>
        </div>

        <p className="text-gray-700 mb-6">Ready to plan your monthly groceries?</p>

        <button
          onClick={onStart}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg transition"
        >
          <FaCalendarAlt />
          Yes, Let's Plan!
        </button>
      </div>

      {/* Top-right profile info */}
      <div className="absolute top-4 right-4 flex items-center gap-2 p-2 rounded-lg bg-white shadow-sm text-sm">
        <FaUserCircle className="text-purple-500 text-xl" />
        <div>
          <div className="font-medium">{user}</div>
          <div className="text-gray-500 text-xs">{familySize} members</div>
        </div>
      </div>
    </div>
  );
}
