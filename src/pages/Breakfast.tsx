import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const breakfastItems = [
  { id: "idli", name: "Idli", img: "/images/Breakfast/idly.avif" },
  { id: "dosa", name: "Dosa", img: "/images/Breakfast/dosa.webp" },
  { id: "bread", name: "Bread & Butter", img: "/images/Breakfast/bread.jpg" },
  { id: "omelet", name: "Omelet", img: "/images/Breakfast/omlet.webp" },
  { id: "upma", name: "Upma", img: "/images/Breakfast/mpaa.jpg" },
  { id: "poha", name: "Poha", img: "/images/Breakfast/poha.jpg" },
];

const Breakfast = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Select Breakfast Items
          </h1>
          <p className="text-gray-600">
            Choose your favorite breakfast options
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {breakfastItems.map((item) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={item.id}
              onClick={() => toggleSelection(item.id)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedItems.includes(item.id) 
                  ? 'ring-4 ring-purple-500' 
                  : ''
              }`}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl">
                <CardContent className="p-4 text-center">
                  <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  {selectedItems.includes(item.id) && (
                    <CheckCircle className="w-6 h-6 text-purple-500 mx-auto" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={() => navigate("/")}
            className="px-6 py-2"
          >
            Back to Meals
          </Button>
          <Button
            onClick={() => navigate("/lunch")}
            disabled={selectedItems.length === 0}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2"
          >
            Continue to Lunch ({selectedItems.length} selected)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;