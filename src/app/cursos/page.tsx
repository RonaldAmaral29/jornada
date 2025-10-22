"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // ✅ Import correto
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function CoursesPage() {
  const courses = [
    {
      title: "Exploradores da Robótica",
      description: "Introdução à robótica com LEGO e Arduino.",
      image: "/courses/robotics1.jpg",
    },
    {
      title: "MakerBee",
      description: "Criação de protótipos e projetos maker criativos.",
      image: "/courses/maker2.jpg",
    },
    {
      title: "IA para Líderes",
      description: "Entenda como aplicar IA na gestão e inovação.",
      image: "/courses/ia1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-secondary">
            Nossos <span className="text-primary">Cursos</span>
          </h1>

          <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
            <CarouselContent className="-ml-6">
              {courses.map((course, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden border-2 hover:shadow-primary transition-all duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <CardContent className="p-6 text-left">
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-muted-foreground mb-4">{course.description}</p>
                      <Button>
                        Saiba Mais
                        <ArrowRight className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <Footer />
    </div>
  );
}
