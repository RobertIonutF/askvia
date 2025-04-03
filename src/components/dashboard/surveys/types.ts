export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: string;
  title: string;
  description?: string;
  required: boolean;
  options?: QuestionOption[];
  settings?: {
    allowMultiple?: boolean;
    includeOther?: boolean;
    min?: number;
    max?: number;
    step?: number;
  };
}

export interface Survey {
  id: string;
  title: string;
  status: "active" | "draft" | "completed" | "archived";
  responseCount: number;
  createdAt: string;
  updatedAt: string;
  description?: string;
  questions?: Question[];
  settings?: {
    isPublic: boolean;
    collectEmail: boolean;
    allowAnonymous: boolean;
    responsesLimit?: number;
    expiresAt?: Date;
  };
} 