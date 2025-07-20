import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const dinnerItems = [
  { id: "curry-rice", name: "Curry & Rice", img: "/images/Dinner/curry_rice.jpg" },
  { id: "roti-sabzi", name: "Roti & Sabzi", img: "/images/Dinner/roti_curry.jpg" },
  { id: "dal-chawal", name: "Dal Chawal", img: "/images/Dinner/dalchaval.jpg" },
  { id: "fried-rice", name: "Fried Rice", img: "/images/Dinner/friedrice.jpg" },
  { id: "soup", name: "Soup & Bread", img: "/images/Dinner/soup_bread.webp" },
  { id: "pasta", name: "Pasta", img: "/images/Dinner/pasta.jpg" },
];

const Dinner = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">
            Select Dinner Items
          </h1>
          <p className="text-gray-600">
            Choose your favorite dinner options
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {dinnerItems.map((item) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={item.id}
              onClick={() => toggleSelection(item.id)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedItems.includes(item.id) 
                  ? 'ring-4 ring-indigo-500' 
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
                    <CheckCircle className="w-6 h-6 text-indigo-500 mx-auto" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={() => navigate("/lunch")}
            className="px-6 py-2"
          >
            Back to Lunch
          </Button>
          <Button
            onClick={() => navigate("/")}
            disabled={selectedItems.length === 0}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2"
          >
            Generate Shopping List ({selectedItems.length} selected)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dinner;