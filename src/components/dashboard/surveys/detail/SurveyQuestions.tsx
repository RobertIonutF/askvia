"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Survey, Question } from "../types";
import { 
  ListChecks, 
  AlignLeft, 
  ToggleLeft, 
  Calendar, 
  Star, 
  CheckCircle, 
  ArrowUpDown,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";

interface SurveyQuestionsProps {
  survey: Survey;
}

export function SurveyQuestions({ survey }: SurveyQuestionsProps) {
  const [questions, setQuestions] = useState<Question[]>(survey.questions || []);
  
  const getQuestionIcon = (type: string) => {
    switch (type) {
      case "text":
        return <AlignLeft className="h-5 w-5" />;
      case "multipleChoice":
        return <ListChecks className="h-5 w-5" />;
      case "checkbox":
        return <CheckCircle className="h-5 w-5" />;
      case "yesNo":
        return <ToggleLeft className="h-5 w-5" />;
      case "date":
        return <Calendar className="h-5 w-5" />;
      case "rating":
        return <Star className="h-5 w-5" />;
      default:
        return <AlignLeft className="h-5 w-5" />;
    }
  };
  
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const items = Array.from(questions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setQuestions(items);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Survey Questions</h2>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Question
        </Button>
      </div>
      
      {questions.length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="questions">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-3"
              >
                {questions.map((question, index) => (
                  <Draggable key={question.id} draggableId={question.id} index={index}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="group"
                      >
                        <CardContent className="p-4 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div 
                              {...provided.dragHandleProps}
                              className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 cursor-grab"
                            >
                              {getQuestionIcon(question.type)}
                            </div>
                            <div>
                              <p className="font-medium">
                                {question.title}
                                {question.required && <span className="text-red-500 ml-1">*</span>}
                              </p>
                              <p className="text-sm text-muted-foreground capitalize">
                                {question.type.replace(/([A-Z])/g, ' $1').trim()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <p className="text-center text-muted-foreground">
              No questions have been added to this survey yet.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Question
            </Button>
          </CardContent>
        </Card>
      )}
      
      {questions.length > 0 && (
        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      )}
    </div>
  );
} 