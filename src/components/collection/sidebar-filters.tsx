// components/sections/SidebarFilters.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

interface FilterGroup {
  title: string;
  options: Array<{ label: string; count: number; value: string }>;
}

interface SidebarFiltersProps {
  filterGroups: FilterGroup[];
  activeFilters: string[];
  onFilterChange: (filterId: string, checked: boolean) => void;
  onClearAll: () => void;
}

export default function SidebarFilters({
  filterGroups,
  activeFilters,
  onFilterChange,
  onClearAll
}: SidebarFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 500]);

  return (
    <aside className="w-80 space-y-6">
      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onClearAll}
                className="text-xs"
              >
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="gap-1">
                  {filter}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => onFilterChange(filter, false)}
                  />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Range Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            step={10}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Dynamic Filter Groups */}
      {filterGroups.map((group) => (
        <Card key={group.title}>
          <CardHeader>
            <CardTitle className="text-sm">{group.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {group.options.map((option) => (
              <div key={option.value} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={activeFilters.includes(option.value)}
                    onCheckedChange={(checked) => 
                      onFilterChange(option.value, checked as boolean)
                    }
                  />
                  <label 
                    htmlFor={option.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">
                  ({option.count})
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </aside>
  );
}
