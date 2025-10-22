"use client";

import Image from "next/image";
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
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function CoursesPage() {
    const courses = {
        exploradores: [
            {
                title: "Robôs em Ação",
                desc: "Monte e programe robôs LEGO e Arduino em desafios divertidos de lógica e criatividade.",
                image: "/courses/robotics1.jpg",
            },
            {
                title: "Missão Lunar",
                desc: "Construa um robô capaz de atravessar obstáculos e simular missões espaciais.",
                image: "/courses/robotics2.jpg",
            },
            {
                title: "Engenheiros Mirins",
                desc: "Aprenda mecânica e eletrônica com projetos práticos de movimento e sensores.",
                image: "/courses/robotics3.jpg",
            },
        ],
        makerbee: [
            {
                title: "Mundo Maker",
                desc: "Crie protótipos com impressoras 3D, corte a laser e eletrônica básica.",
                image: "/courses/maker1.jpg",
            },
            {
                title: "Design e Criação",
                desc: "Aprenda design digital e desenvolva produtos personalizados com criatividade.",
                image: "/courses/maker2.jpg",
            },
            {
                title: "Arduino Avançado",
                desc: "Domine automações e sensores inteligentes para projetos de robótica criativa.",
                image: "/courses/maker3.jpg",
            },
        ],
        ia: [
            {
                title: "Liderando com IA",
                desc: "Descubra como aplicar inteligência artificial em decisões estratégicas e inovação.",
                image: "/courses/ia1.jpg",
            },
            {
                title: "Transformação Digital",
                desc: "Compreenda o papel da IA nos negócios e como ela pode impulsionar a produtividade.",
                image: "/courses/ia2.jpg",
            },
            {
                title: "Gestão do Futuro",
                desc: "Aprenda a usar ferramentas de IA para otimizar processos e liderar times inteligentes.",
                image: "/courses/ia3.jpg",
            },
        ],
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />

            {/* Hero */}
            <section className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden">
                <Image
                    src="/hero-courses.jpg"
                    alt="Cursos de Robótica"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/60 via-yellow-600/60 to-background backdrop-blur-[3px]" />
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
                        Nossos <span className="text-yellow-200">Cursos</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Conheça os programas da MetaBee que unem tecnologia, criatividade e aprendizado prático.
                    </p>
                </div>
            </section>

            {/* Tabs */}
            <section className="bg-yellow-500 py-16">
                <div className="container mx-auto px-6 text-center">
                    <Tabs defaultValue="exploradores" className="w-full">
                        {/* Botões */}
                        <TabsList className="bg-transparent flex justify-center gap-4 flex-wrap">
                            <TabsTrigger
                                value="exploradores"
                                className="data-[state=active]:bg-secondary data-[state=active]:text-white bg-white text-foreground rounded-2xl px-8 py-3 font-medium shadow-md transition-all hover:scale-105"
                            >
                                Exploradores da Robótica
                            </TabsTrigger>
                            <TabsTrigger
                                value="makerbee"
                                className="data-[state=active]:bg-secondary data-[state=active]:text-white bg-white text-foreground rounded-2xl px-8 py-3 font-medium shadow-md transition-all hover:scale-105"
                            >
                                MakerBee
                            </TabsTrigger>
                            <TabsTrigger
                                value="ia"
                                className="data-[state=active]:bg-secondary data-[state=active]:text-white bg-white text-foreground rounded-2xl px-8 py-3 font-medium shadow-md transition-all hover:scale-105"
                            >
                                IA para Líderes
                            </TabsTrigger>
                        </TabsList>

                        {/* Conteúdo de cada aba */}
                        <div className="mt-12">
                            {/* Exploradores */}
                            <TabsContent value="exploradores">
                                <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-5xl mx-auto">
                                    <CarouselContent className="-ml-6">
                                        {courses.exploradores.map((c, i) => (
                                            <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                                <Card className="overflow-hidden border-2 hover:shadow-primary transition-all duration-300">
                                                    <div className="relative h-48 w-full">
                                                        <Image
                                                            src={c.image}
                                                            alt={c.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                    </div>
                                                    <CardContent className="p-6 text-left">
                                                        <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                                                        <p className="text-muted-foreground mb-4">{c.desc}</p>
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
                            </TabsContent>

                            {/* MakerBee */}
                            <TabsContent value="makerbee">
                                <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-5xl mx-auto">
                                    <CarouselContent className="-ml-6">
                                        {courses.makerbee.map((c, i) => (
                                            <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                                <Card className="overflow-hidden border-2 hover:shadow-primary transition-all duration-300">
                                                    <div className="relative h-48 w-full">
                                                        <Image src={c.image} alt={c.title} fill className="object-cover" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                    </div>
                                                    <CardContent className="p-6 text-left">
                                                        <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                                                        <p className="text-muted-foreground mb-4">{c.desc}</p>
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
                            </TabsContent>

                            {/* IA */}
                            <TabsContent value="ia">
                                <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-5xl mx-auto">
                                    <CarouselContent className="-ml-6">
                                        {courses.ia.map((c, i) => (
                                            <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                                <Card className="overflow-hidden border-2 hover:shadow-primary transition-all duration-300">
                                                    <div className="relative h-48 w-full">
                                                        <Image src={c.image} alt={c.title} fill className="object-cover" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                    </div>
                                                    <CardContent className="p-6 text-left">
                                                        <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                                                        <p className="text-muted-foreground mb-4">{c.desc}</p>
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
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </section>

            <Footer />
        </div>
    );
}
