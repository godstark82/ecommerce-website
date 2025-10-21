// components/sections/NewsletterCTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Gift, Percent, Bell } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: <Percent className="h-3 w-3" />,
    title: "Exclusive Discounts",
    description: "Get 15% off your first order"
  },
  {
    icon: <Bell className="h-3 w-3" />,
    title: "Early Access",
    description: "Be first to know about new arrivals"
  },
  {
    icon: <Gift className="h-3 w-3" />,
    title: "Special Offers",
    description: "Members-only deals and promotions"
  }
];

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <section className="py-6 md:py-8 bg-gradient-to-br from-primary/5 via-background to-primary/5" aria-label="Newsletter Subscription Success">
        <div className="container mx-auto px-4 max-w-xl">
          <Card className="overflow-hidden border border-primary/20 shadow-md">
            <CardContent className="p-4 md:p-5 text-center">
              <div className="mb-3">
                <div className="mx-auto w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-primary mb-1">
                  Welcome to Our Community!
                </h2>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Thank you for subscribing! Check your inbox for a special welcome offer.
                </p>
              </div>

              <Button 
                onClick={() => setIsSubscribed(false)}
                variant="outline"
                size="sm"
              >
                Subscribe Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 md:py-8 bg-gradient-to-br from-primary/5 via-background to-primary/5" aria-label="Newsletter Subscription">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="overflow-hidden border border-primary/20 shadow-md">
          <CardContent className="p-4 md:p-5">
            {/* Compact header */}
            <div className="text-center mb-4">
              <Badge variant="secondary" className="mb-2 text-xs">
                <Mail className="h-3 w-3 mr-1" />
                Newsletter
              </Badge>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                Stay in the Loop
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto">
                Join thousands of satisfied customers and never miss out on exclusive deals, 
                new arrivals, and insider updates.
              </p>
            </div>

            {/* Compact newsletter form */}
            <form onSubmit={handleSubmit} className="space-y-3 mb-4">
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 text-sm"
                  aria-label="Email address for newsletter subscription"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !email}
                  className="whitespace-nowrap text-sm"
                  size="sm"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to our privacy policy and consent to receive updates from our store.
              </p>
            </form>

            {/* Compact benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                    <div className="font-medium text-xs">{benefit.title}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{benefit.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
