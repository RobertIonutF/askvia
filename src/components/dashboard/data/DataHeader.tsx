import { FileSpreadsheet } from "lucide-react";

export function DataHeader() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold tracking-tight">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="h-6 w-6" />
          <span>Data Export</span>
        </div>
      </h1>
      <p className="text-muted-foreground">
        View and export your survey data in CSV or JSON format
      </p>
    </div>
  );
} 