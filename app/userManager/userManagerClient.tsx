"use client";

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';


interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  dateAdded: string;
  status: 'Active' | 'Inactive';
  lastLogin: string;
}

const initialUsers: User[] = [
  {
    id: '1',
    name: 'Adaego Johnson',
    email: 'adaego.john@schooladmin.org',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '2 hours ago'
  },
  {
    id: '2',
    name: 'Okonma Chibuor',
    email: 'okonma.chibuor@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '1 day ago'
  },
  {
    id: '3',
    name: 'Felix Guevara',
    email: 'felix.guevara@mail.valenciacollege.edu',
    role: 'Admin',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '10 minutes ago'
  },
  {
    id: '4',
    name: 'Emeka Nwosu',
    email: 'emeka.nwosu@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Inactive',
    lastLogin: '1 week ago'
  },
  {
    id: '5',
    name: 'Fatima Bello',
    email: 'fatima.bello@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '3 hours ago'
  },
  {
    id: '6',
    name: 'Tunde Bakare',
    email: 'tunde.bakare@mail.valenciacollege.edu',
    role: 'Admin',
    dateAdded: '2026-01-17',
    status: 'Inactive',
    lastLogin: '1 week ago'
  },
  {
    id: '7',
    name: 'Grace Okoro',
    email: 'grace.okoro@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '4 hours ago'
  },
  {
    id: '8',
    name: 'Yusuf Ibrahim',
    email: 'yusuf.ibrahim@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '6 hours ago'
  }
];

export default function UserManagerPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const handleAddNewUser = () => {
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
                        <h1 className="text-2xl text-gray-900 mb-2">User Management</h1>
                        <p className="text-gray-600">Manage enthusiast and administrative staff</p>
                    </div>
                    <Button onClick={handleAddNewUser} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                        Add New User
                    </Button>
                </div>
            </div>
        </div>
  );
}