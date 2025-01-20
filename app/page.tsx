"use client";

import UserCard from "@/app/Components/UserCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

    useEffect(() => {
        axios.get("/api/getusers").then((res) => {
            setUsers(res.data.user);
            setFilteredUsers(res.data.user);
        });
    }, []);

    // Filter users based on search and role
    useEffect(() => {
        const filtered = users.filter((user) => {
            const matchesSearch =
                user.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesRole = roleFilter ? user.role === roleFilter : true;
            return matchesSearch && matchesRole;
        });
        setFilteredUsers(filtered);
    }, [searchTerm, roleFilter, users]);

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleRoleChange = (e) => setRoleFilter(e.target.value);

    return (
        <main className="bg-[#212121] rounded-[1rem] w-full h-full transition-all p-4 sm:p-8
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-[#1E1E1E]
  [&::-webkit-scrollbar-thumb]:bg-[#121212]
   overflow-y-scroll">
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-2 rounded border border-[#1E1E1E] bg-[#181818] w-full sm:w-1/2"
                />
                <select
                    value={roleFilter}
                    onChange={handleRoleChange}
                    className="p-2 rounded border  border-[#1E1E1E] bg-[#181818] w-full sm:w-1/2"
                >
                    <option value="">All Roles</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Designer">Designer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="HR Manager">HR Manager</option>
                    <option value="Marketing Manager">Marketing Manager</option>
                    <option value="Customer Support">Customer Support</option>
                    <option value="UX Researcher">UX Researcher</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                </select>
            </div>

            {/* User Cards */}
            <div className="grid sm:grid-cols-3 transition-all">
                {filteredUsers &&
                    Array.isArray(filteredUsers) &&
                    filteredUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            role={user.role}
                        />
                    ))}
            </div>
        </main>
    );
}
