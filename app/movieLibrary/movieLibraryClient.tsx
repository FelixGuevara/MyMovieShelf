"use client";

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';




export default function MovieLibraryPage() {
const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddNewMovie = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
    };

  return (
        <div className="flex-1 bg-gray-50 h-full flex flex-col">
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-2xl text-gray-900 mb-2">Greatest Movie Collection</h1>
                        <p className="text-gray-600">Build and manage your personalized movie library</p>
                    </div>
                    <Button onClick={handleAddNewMovie} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                        Add New Movie
                    </Button>
                </div>

            </div>
        </div>
  );
}