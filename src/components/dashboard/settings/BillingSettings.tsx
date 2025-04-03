"use client";

import { CreditCard, CheckCircle, Calendar, ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface BillingRecord {
  id: string;
  date: string;
  amount: string;
  status: 'paid' | 'pending' | 'failed';
  invoiceUrl: string;
}

export function BillingSettings() {
  // Current plan information would come from your API
  const currentPlan = {
    name: "Free",
    description: "Basic features with limitations",
    price: "$0",
    features: [
      "Up to 100 responses per survey",
      "CSV export only", 
      "Basic analytics"
    ]
  };
  
  // Mock payment method
  const paymentMethod = {
    type: "None",
    last4: "",
    expiry: ""
  };
  
  // Mock billing history
  const billingHistory: BillingRecord[] = [];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>
            Your current subscription and usage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{currentPlan.name} Plan</h3>
              <p className="text-sm text-muted-foreground">{currentPlan.description}</p>
            </div>
            <Badge variant="outline" className="text-sm">
              {currentPlan.price}/month
            </Badge>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Includes:</h4>
            <ul className="grid gap-2">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            Upgrade to Pro
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Manage your payment details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethod.type === "None" ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <CreditCard className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">No payment method</h3>
              <p className="text-sm text-muted-foreground max-w-md mt-1 mb-4">
                You haven&apos;t added a payment method yet. You&apos;ll need one to upgrade to a paid plan.
              </p>
              <Button>Add Payment Method</Button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5" />
                <div>
                  <p className="font-medium">Card ending in {paymentMethod.last4}</p>
                  <p className="text-sm text-muted-foreground">Expires {paymentMethod.expiry}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Update</Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>
            View your previous invoices and receipts
          </CardDescription>
        </CardHeader>
        <CardContent>
          {billingHistory.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <Calendar className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">No billing history</h3>
              <p className="text-sm text-muted-foreground max-w-md mt-1">
                Your previous invoices and receipts will appear here
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Billing history would be mapped here */}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 