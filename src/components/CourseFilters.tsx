import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CourseFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  durationFilter: string;
  setDurationFilter: (duration: string) => void;
  levelFilter: string;
  setLevelFilter: (level: string) => void;
  onReset: () => void;
}

const CourseFilters = ({
  searchTerm,
  setSearchTerm,
  durationFilter,
  setDurationFilter,
  levelFilter,
  setLevelFilter,
  onReset
}: CourseFiltersProps) => {
  return (
    <div className="bg-card rounded-lg p-6 border shadow-sm mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Filter Courses</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Select value={durationFilter} onValueChange={setDurationFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Durations</SelectItem>
            <SelectItem value="1">1 Year</SelectItem>
            <SelectItem value="2">2 Years</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={levelFilter} onValueChange={setLevelFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="certificate">Certificate</SelectItem>
            <SelectItem value="diploma">Diploma</SelectItem>
            <SelectItem value="both">Certificate / Diploma</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="outline" onClick={onReset} className="w-full">
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default CourseFilters;