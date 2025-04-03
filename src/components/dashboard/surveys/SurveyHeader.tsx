"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Search } from "lucide-react";
import Link from "next/link";

export function SurveyHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
      <h1 className="text-2xl font-bold">Surveys</h1>
      
      <div className="flex flex-col gap-3 sm:flex-row">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search surveys..."
            className="pl-8 w-full sm:w-[200px] md:w-[250px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        
        <Link href="/dashboard/surveys/new">
          <Button className="flex items-center gap-1">
            <PlusCircle className="h-4 w-4" />
            <span>Create Survey</span>
          </Button>
        </Link>
      </div>
    </div>
  );
} 