import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const lunchItems = [
  { id: "rice-dal", name: "Rice & Dal", img: "/images/Lunch/rice_dal.jpg" },
  { id: "chapati", name: "Chapati & Curry", img: "/images/Lunch/chapathi.jpg" },
  { id: "biryani", name: "Biryani", img: "/images/Lunch/biryani.jpg" },
  { id: "pulao", name: "Pulao", img: "/images/Lunch/pulav.jpg" },
  { id: "sambar", name: "Sambar Rice", img: "/images/Lunch/sambhar.jpg" },
  { id: "curd-rice", name: "Curd Rice", img: "/images/Lunch/curd_rice.jpg" },
];

const Lunch = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Select Lunch Items
          </h1>
          <p className="text-gray-600">
            Choose your favorite lunch options
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {lunchItems.map((item) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={item.id}
              onClick={() => toggleSelection(item.id)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedItems.includes(item.id) 
                  ? 'ring-4 ring-blue-500' 
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
                    <CheckCircle className="w-6 h-6 text-blue-500 mx-auto" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={() => navigate("/breakfast")}
            className="px-6 py-2"
          >
            Back to Breakfast
          </Button>
          <Button
            onClick={() => navigate("/dinner")}
            disabled={selectedItems.length === 0}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2"
          >
            Continue to Dinner ({selectedItems.length} selected)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lunch;