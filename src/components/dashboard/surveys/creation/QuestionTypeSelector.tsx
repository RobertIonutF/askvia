"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, ChevronRight, AlignLeft, ListChecks, CheckCircle, ToggleLeft, Calendar, Star, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Question } from "./SurveyCreationForm";

interface QuestionType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface QuestionTypeSelectorProps {
  questions: Question[];
  onQuestionsChange: (questions: Question[]) => void;
}

const questionTypes: QuestionType[] = [
  {
    id: "text",
    name: "Text",
    description: "Short text responses",
    icon: <AlignLeft className="h-5 w-5" />,
  },
  {
    id: "multipleChoice",
    name: "Multiple Choice",
    description: "Select one option from many",
    icon: <ListChecks className="h-5 w-5" />,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Select multiple options",
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    id: "yesNo",
    name: "Yes/No",
    description: "Simple yes or no question",
    icon: <ToggleLeft className="h-5 w-5" />,
  },
  {
    id: "date",
    name: "Date",
    description: "Select a date",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    id: "rating",
    name: "Rating",
    description: "Rate on a scale",
    icon: <Star className="h-5 w-5" />,
  },
];

export function QuestionTypeSelector({ questions, onQuestionsChange }: QuestionTypeSelectorProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const generateId = () => Math.random().toString(36).substring(2, 9);
  
  const addQuestion = (questionTypeId: string) => {
    const newQuestion: Question = {
      id: generateId(),
      type: questionTypeId,
      title: "",
      required: false,
      options: questionTypeId === "multipleChoice" || questionTypeId === "checkbox" 
        ? [{ id: generateId(), text: "Option 1" }] 
        : undefined,
      settings: questionTypeId === "rating" 
        ? { min: 1, max: 5, step: 1 } 
        : undefined
    };
    
    setActiveQuestion(newQuestion);
    setIsEditing(false);
    setIsDialogOpen(true);
  };
  
  const editQuestion = (question: Question) => {
    setActiveQuestion({...question});
    setIsEditing(true);
    setIsDialogOpen(true);
  };
  
  const saveQuestion = () => {
    if (!activeQuestion) return;
    
    if (isEditing) {
      onQuestionsChange(questions.map(q => 
        q.id === activeQuestion.id ? activeQuestion : q
      ));
    } else {
      onQuestionsChange([...questions, activeQuestion]);
    }
    
    setIsDialogOpen(false);
    setActiveQuestion(null);
  };
  
  const removeQuestion = (questionId: string) => {
    onQuestionsChange(questions.filter(q => q.id !== questionId));
  };
  
  const addOption = () => {
    if (!activeQuestion) return;
    
    const updatedOptions = [
      ...(activeQuestion.options || []),
      { id: generateId(), text: `Option ${(activeQuestion.options?.length || 0) + 1}` }
    ];
    
    setActiveQuestion({
      ...activeQuestion,
      options: updatedOptions
    });
  };
  
  const updateOption = (optionId: string, text: string) => {
    if (!activeQuestion?.options) return;
    
    const updatedOptions = activeQuestion.options.map(opt => 
      opt.id === optionId ? { ...opt, text } : opt
    );
    
    setActiveQuestion({
      ...activeQuestion,
      options: updatedOptions
    });
  };
  
  const removeOption = (optionId: string) => {
    if (!activeQuestion?.options) return;
    
    const updatedOptions = activeQuestion.options.filter(opt => opt.id !== optionId);
    
    setActiveQuestion({
      ...activeQuestion,
      options: updatedOptions
    });
  };
  
  const renderQuestionEditor = () => {
    if (!activeQuestion) return null;
    
    const questionType = questionTypes.find(qt => qt.id === activeQuestion.type);
    
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
            {questionType?.icon}
          </div>
          <h3 className="text-lg font-medium">{questionType?.name} Question</h3>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question-title">Question Title</Label>
            <Input 
              id="question-title" 
              value={activeQuestion.title} 
              onChange={(e) => setActiveQuestion({...activeQuestion, title: e.target.value})}
              placeholder="Enter your question here"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="question-description">Description (Optional)</Label>
            <Textarea 
              id="question-description" 
              value={activeQuestion.description || ""} 
              onChange={(e) => setActiveQuestion({...activeQuestion, description: e.target.value})}
              placeholder="Add a description or instructions for this question"
            />
          </div>
          
          {(activeQuestion.type === "multipleChoice" || activeQuestion.type === "checkbox") && (
            <div className="space-y-3">
              <Label>Options</Label>
              {activeQuestion.options?.map((option, index) => (
                <div key={option.id} className="flex items-center gap-2">
                  <Input 
                    value={option.text} 
                    onChange={(e) => updateOption(option.id, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                  />
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeOption(option.id)}
                    disabled={activeQuestion.options?.length === 1}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                className="mt-2"
                onClick={addOption}
              >
                <Plus className="h-4 w-4 mr-2" /> Add Option
              </Button>
            </div>
          )}
          
          {activeQuestion.type === "rating" && (
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rating-min">Min Value</Label>
                <Input 
                  id="rating-min" 
                  type="number" 
                  value={activeQuestion.settings?.min || 1} 
                  onChange={(e) => setActiveQuestion({
                    ...activeQuestion, 
                    settings: { 
                      ...activeQuestion.settings, 
                      min: parseInt(e.target.value) 
                    }
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rating-max">Max Value</Label>
                <Input 
                  id="rating-max" 
                  type="number" 
                  value={activeQuestion.settings?.max || 5} 
                  onChange={(e) => setActiveQuestion({
                    ...activeQuestion, 
                    settings: { 
                      ...activeQuestion.settings, 
                      max: parseInt(e.target.value) 
                    }
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rating-step">Step</Label>
                <Input 
                  id="rating-step" 
                  type="number" 
                  value={activeQuestion.settings?.step || 1} 
                  onChange={(e) => setActiveQuestion({
                    ...activeQuestion, 
                    settings: { 
                      ...activeQuestion.settings, 
                      step: parseInt(e.target.value) 
                    }
                  })}
                />
              </div>
            </div>
          )}
          
          <div className="flex items-center space-x-2 pt-2">
            <Switch 
              id="required" 
              checked={activeQuestion.required} 
              onCheckedChange={(checked) => setActiveQuestion({...activeQuestion, required: checked})}
            />
            <Label htmlFor="required">Required question</Label>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Survey Questions</h2>
        <span className="text-sm text-muted-foreground">{questions.length} questions added</span>
      </div>
      
      {questions.length > 0 ? (
        <div className="space-y-3">
          {questions.map((question, index) => {
            const questionType = questionTypes.find(q => q.id === question.type);
            return (
              <Card key={question.id} className="group">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                      {questionType?.icon}
                    </div>
                    <div>
                      <p className="font-medium">
                        {question.title || `Question ${index + 1}`}
                        {question.required && <span className="text-red-500 ml-1">*</span>}
                      </p>
                      <p className="text-sm text-muted-foreground">{questionType?.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeQuestion(question.id)}
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => editQuestion(question)}
                    >
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <PlusCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-center font-medium">No questions added</h3>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              Add a question from the question types below.
            </p>
          </CardContent>
        </Card>
      )}
      
      <div className="pt-4">
        <h3 className="text-lg font-semibold mb-3">Question Types</h3>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {questionTypes.map((type) => (
            <Card 
              key={type.id} 
              className="cursor-pointer transition-colors hover:bg-accent"
              onClick={() => addQuestion(type.id)}
            >
              <CardContent className="p-4 flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                  {type.icon}
                </div>
                <div>
                  <p className="font-medium">{type.name}</p>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Question" : "Add Question"}</DialogTitle>
          </DialogHeader>
          {renderQuestionEditor()}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={saveQuestion} disabled={!activeQuestion?.title}>
              {isEditing ? "Update" : "Add"} Question
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 