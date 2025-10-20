"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-background text-muted-foreground border-b border-border">
            <div className="container mx-auto px-4 py-20 md:py-28 max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 text-center md:text-left space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
                        Elevate Your Style
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                        Discover premium collections, handpicked for your comfort and confidence.
                        Shop the latest trends with secure checkout and fast delivery.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
                        <Button asChild size="lg" className="px-8">
                            <Link href="/collections/new">Shop New Arrivals</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="px-8">
                            <Link href="/collections/all">Explore All</Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Right: Product or Model Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <Card className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden shadow-xl rounded-2xl border border-border">
                        <CardContent className="p-0">
                            <Image
                                src={'/store-logo.png'} // replace with your product or model image
                                alt="Featured Product"
                                // width={600}
                                // height={600}
                                fill
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* Subtle Decorative Blur */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 blur-3xl rounded-full opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full opacity-40"></div>
        </section>
    );
}
