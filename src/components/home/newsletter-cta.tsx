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
    icon: <Percent className="h-4 w-4" />,
    title: "Exclusive Discounts",
    description: "Get 15% off your first order"
  },
  {
    icon: <Bell className="h-4 w-4" />,
    title: "Early Access",
    description: "Be first to know about new arrivals"
  },
  {
    icon: <Gift className="h-4 w-4" />,
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5" aria-label="Newsletter Subscription Success">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="overflow-hidden border border-primary/20 shadow-lg">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-4">
                <div className="mx-auto w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                  Welcome to Our Community!
                </h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Thank you for subscribing! Check your inbox for a special welcome offer.
                </p>
              </div>

              <Button 
                onClick={() => setIsSubscribed(false)}
                variant="outline"
                size="default"
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
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5" aria-label="Newsletter Subscription">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card className="overflow-hidden border border-primary/20 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="mb-3">
                <Mail className="h-3 w-3 mr-1" />
                Newsletter
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                Stay in the Loop
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                Join thousands of satisfied customers and never miss out on exclusive deals, 
                new arrivals, and insider updates.
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  aria-label="Email address for newsletter subscription"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !email}
                  className="whitespace-nowrap"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                By subscribing, you agree to our privacy policy and consent to receive updates from our store.
              </p>
            </form>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                    <div className="font-medium text-sm">{benefit.title}</div>
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
