import { Suspense } from "react";
import UserManagerClient from "./userManagerClient";

export default function UserManagerPage() {
  return (
    <div className="flex-1 bg-gray-50 h-full flex flex-col">
      <div className="flex-1 p-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">User Management</h1>
            <p className="text-gray-600">
              Manage enthusiast and administrative staff
            </p>
          </div>
        </div>

        <Suspense fallback={<p>Loading…</p>}>
          <UserManagerClient />
        </Suspense>
      </div>
    </div>
  );
}