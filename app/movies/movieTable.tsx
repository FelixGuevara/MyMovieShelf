"use client";

import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
  status: 'completed' | 'pending' | 'failed';
}

interface MovieTableProps {
  movies: Movie[];
  onEditMovie: (movie: Movie) => void;
  onViewMovie: (movie: Movie) => void;
  onDeleteMovie: (MovieId: string) => void;
}

export function MovieTable({ movies, onEditMovie, onViewMovie, onDeleteMovie }: MovieTableProps) {
    const getStatusBadge = (status: string) => {
        switch (status) {
        case 'completed':
            return <Badge className="bg-gray-900 text-white">completed</Badge>;
        case 'pending':
            return <Badge variant="secondary" className="bg-orange-100 text-orange-800">pending</Badge>;
        case 'failed':
            return <Badge variant="destructive" className="bg-red-100 text-red-800">failed</Badge>;
        default:
            return <Badge variant="secondary">{status}</Badge>;
        }
    };
  const handleAction = (action: string, movie: Movie) => {
    switch (action) {
      case 'edit':
        onEditMovie(movie);
        break;
      case 'view':
        onViewMovie(movie);
        break;
      case 'delete':
        if (window.confirm(`Are you sure you want to delete ${movie.title}?`)) {
          onDeleteMovie(movie.id);
        }
        break;
    }
  };

    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-xs uppercase text-gray-500 tracking-wider">Movie Title</th>
                <th className="text-left py-3 px-4 text-xs uppercase text-gray-500 tracking-wider">Year Release</th>
                <th className="text-left py-3 px-4 text-xs uppercase text-gray-500 tracking-wider">Run Time</th>
                <th className="text-left py-3 px-4 text-xs uppercase text-gray-500 tracking-wider">Genre</th>
                <th className="text-left py-3 px-4 text-xs uppercase text-gray-500 tracking-wider">Director</th>
                <th className="text-left py-3 px-4 text-xs uppercase text-gray-500 tracking-wider">Added By</th>
                <th className="text-left py-3 px-4 text-xs uppercase text-gray-500 tracking-wider">Date Added</th>
                <th className="text-left py-3 px-4 text-xs uppercase text-gray-500 tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs uppercase text-gray-500 tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {movies.map((movie) => (
                <tr key={movie.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="text-gray-900">{movie.title}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-600">{movie.releaseYear}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-900">{movie.runTime}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-900">{movie.genre}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-900">{movie.director}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                        <div className="text-gray-900">{movie.user.name}</div>
                        <div className="text-gray-500 text-sm">{movie.user.id}</div>
                    </div>
                  </td>
                 <td className="py-4 px-4">
                    <div className="text-gray-600">{movie.date}</div>
                 </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(movie.status)}
                  </td>
                  <td className="py-4 px-4 relative">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleAction('edit', movie)}>
                          Edit Movie
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onSelect={(e) => {
                            e.preventDefault(); // optional: prevents default menu behavior if needed
                            handleAction('view', movie);
                          }}
                        >
                          View Movie
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleAction('delete', movie)}
                        >
                          Delete Movie
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }