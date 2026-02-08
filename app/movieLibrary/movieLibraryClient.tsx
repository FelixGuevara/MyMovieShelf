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

interface Movie {
  id: string;
  title: string;
  releaseYear: string;
  user: {
    name: string;
    id: string;
  };
  runTime: string;
  genre: string;
  director: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

const mockMovies: Movie[] = [
  {
    id: "1",
    title: "The Godfather",
    releaseYear: "1972",
    user: { name: "Adaego Boniface", id: "STU/2021/001" },
    runTime: "2h 55m",
    genre: "Crime",
    director: "Francis Coppola",
    date: "2024-01-20",
    status: "completed",
  },
  {
    id: "2",
    title: "Schindler's List",
    releaseYear: "1993",
    user: { name: "Tunuka Bakara", id: "STU/2021/003" },
    runTime: "3h 15m",
    genre: "War/Drama",
    director: "Steven Spielberg",
    date: "2024-01-19",
    status: "pending",
  },
  {
    id: "3",
    title: "Pulp Fiction",
    releaseYear: "1994",
    user: { name: "Grace Chibora", id: "STU/2021/003" },
    runTime: "2h 29m",
    genre: "Crime/Thriller",
    director: "Quentin Tarantino",
    date: "2024-01-18",
    status: "completed",
  },
  {
    id: "4",
    title: "The Dark Knight",
    releaseYear: "2008",
    user: { name: "Yusuf Ibrahim", id: "STU/2021/004" },
    runTime: "2h 32m",
    genre: "Action/Crime",
    director: "Christopher Nolan",
    date: "2024-01-17",
    status: "pending",
  },
  {
    id: "5",
    title: "Casablanca",
    releaseYear: "1942",
    user: { name: "Adaego Chioma", id: "STU/2021/002" },
    runTime: "1h 42m",
    genre: "Romance/War",
    director: "Michael Curtiz",
    date: "2024-01-16",
    status: "completed",
  },
  {
    id: "6",
    title: "Space Odyssey",
    releaseYear: "1968",
    user: { name: "Emeka Adaokwu", id: "STU/2021/006" },
    runTime: "2h 29m",
    genre: "Sci-fi/Adventure",
    director: "Stanley Kubrick",
    date: "2024-01-13",
    status: "pending",
  },
  {
    id: "7",
    title: "Goodfellas",
    releaseYear: "1990",
    user: { name: "Felix Guevara", id: "STU/2022/007" },
    runTime: "2h 26m",
    genre: "Crime/Thriller ",
    director: "Martin Scorsese",
    date: "2025-01-13",
    status: "completed",
  },
  {
    id: "8",
    title: "Saving Private Ryan",
    releaseYear: "1998",
    user: { name: "Felix Guevara", id: "STU/2025/008" },
    runTime: "2h 49m",
    genre: "War/Action",
    director: "Steven Spielberg",
    date: "2025-06-13",
    status: "pending",
  },
];


export default function MovieLibraryPage() {
    const [movies, setMovies] =useState<Movie[]>(mockMovies);
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddNewMovie = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // Filter movies based on search and filters
    const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) || movie.director.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'all' || movie.genre.toLowerCase() === typeFilter.toLowerCase();
    const matchesStatus = statusFilter === 'all' || movie.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && typeFilter && matchesStatus;
  });
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

                {/* User Directory Section - Full Height */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-lg text-gray-900 mb-2">My Movie Collection</h2>
                    <p className="text-gray-600">Search and filter your movie library({filteredMovies.length} movies)</p>
                  </div>

                {/* Search and Filters */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex-1 min-w-80">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            type="text"
                            placeholder="Search by movie title, or director..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="pl-10 bg-gray-50 border-gray-200"
                          />
                      </div>
                    </div>
            
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-40 bg-gray-50 border-gray-200">
                        <SelectValue placeholder="All Genres" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Genres</SelectItem>
                        <SelectItem value="action">Action</SelectItem>
                        <SelectItem value="crime">Crime</SelectItem>
                        <SelectItem value="romance">Romance</SelectItem>
                        <SelectItem value="sci-fi">Sci-fi</SelectItem>
                        <SelectItem value="war">War</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-40 bg-gray-50 border-gray-200">
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                </div>
            </div>
        </div>
  );
}