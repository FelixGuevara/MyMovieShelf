'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import type { User, UserRole, UserStatus } from '@/types/user';
import { toast } from 'sonner';

type RoleFilter = 'all' | Lowercase<UserRole>;
type StatusFilter = 'all' | Lowercase<UserStatus>;

interface UserContextValue {
  users: User[];
  filteredUsers: User[];
  searchQuery: string;
  roleFilter: RoleFilter;
  statusFilter: StatusFilter;

  setSearchQuery: (q: string) => void;
  setRoleFilter: (role: RoleFilter) => void;
  setStatusFilter: (status: StatusFilter) => void;

  addUser: (user: User) => void | Promise<void>;
  editUser: (user: User) => void | Promise<void>;
  deleteUser: (userId: string) => void | Promise<void>;
  resetPassword: (user: User) => void | Promise<void>;


  viewUser: (user: User) => void; // You can later swap to a route push or modal open
}

// ---- seed data (same as your initialUsers) ----
const initialUsers: User[] = [
  {
    id: '1',
    name: 'Adaego Johnson',
    email: 'adaego.john@schooladmin.org',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '2 hours ago',
  },
  {
    id: '2',
    name: 'Okonma Chibuor',
    email: 'okonma.chibuor@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '1 day ago',
  },
  {
    id: '3',
    name: 'Felix Guevara',
    email: 'felix.guevara@mail.valenciacollege.edu',
    role: 'Admin',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '10 minutes ago',
  },
  {
    id: '4',
    name: 'Emeka Nwosu',
    email: 'emeka.nwosu@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Inactive',
    lastLogin: '1 week ago',
  },
  {
    id: '5',
    name: 'Fatima Bello',
    email: 'fatima.bello@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '3 hours ago',
  },
  {
    id: '6',
    name: 'Tunde Bakare',
    email: 'tunde.bakare@mail.valenciacollege.edu',
    role: 'Admin',
    dateAdded: '2026-01-17',
    status: 'Inactive',
    lastLogin: '1 week ago',
  },
  {
    id: '7',
    name: 'Grace Okoro',
    email: 'grace.okoro@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '4 hours ago',
  },
  {
    id: '8',
    name: 'Yusuf Ibrahim',
    email: 'yusuf.ibrahim@mail.valenciacollege.edu',
    role: 'Enthusiast',
    dateAdded: '2026-01-17',
    status: 'Active',
    lastLogin: '6 hours ago',
  },
];

// ---- context ----
const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<RoleFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const filteredUsers = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return users.filter((user) => {
      const matchesSearch =
        !q ||
        user.name.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q);
      const matchesRole =
        roleFilter === 'all' || user.role.toLowerCase() === roleFilter;
      const matchesStatus =
        statusFilter === 'all' || user.status.toLowerCase() === statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchQuery, roleFilter, statusFilter]);

  const addUser = (newUser: User) => {
    setUsers((prev) => [newUser, ...prev]);
    toast.success(`${newUser.name} has been added successfully!`);
  };

  const editUser = (updated: User) => {
    setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
    toast.success(`${updated.name} has been updated.`);
  };

  const deleteUser = (userId: string) => {
    setUsers((prev) => {
      const user = prev.find((u) => u.id === userId);
      const next = prev.filter((u) => u.id !== userId);
      if (user) toast.success(`${user.name} has been deleted successfully.`);
      return next;
    });
  };

  const resetPassword = (user: User) => {
    toast.success(`Password reset email sent to ${user.email}.`);
  };

  const viewUser = (user: User) => {
    toast.info(`Viewing details for ${user.name}.`);
  };

  const value: UserContextValue = {
    users,
    filteredUsers,
    searchQuery,
    roleFilter,
    statusFilter,

    setSearchQuery,
    setRoleFilter,
    setStatusFilter,

    addUser,
    editUser,
    deleteUser,
    resetPassword,
    viewUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// ---- hook ----
export function useUsers() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return ctx;
}