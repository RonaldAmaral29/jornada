"use client";

import Image from "next/image";
import { ArrowRight, Code, Users, Trophy, Lightbulb, Rocket, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function HomePage() {
  const courses = [
    {
      title: "Exploradores da Robótica",
      description: "Introdução à robótica com projetos práticos e divertidos usando LEGO e Arduino.",
      level: "Iniciante",
      age: "8-12 anos",
    },
    {
      title: "Programação Avançada",
      description: "Aprenda a programar robôs autônomos com sensores e algoritmos inteligentes.",
      level: "Intermediário",
      age: "12-16 anos",
    },
    {
      title: "Inovadores Maker",
      description: "Crie seus próprios projetos de robótica e automação do zero.",
      level: "Avançado",
      age: "14+ anos",
    },
  ];

  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Aprendizado Prático",
      description: "Aprenda fazendo! Todos os cursos incluem projetos reais e hands-on.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Turmas Reduzidas",
      description: "Atendimento personalizado com turmas pequenas para melhor aproveitamento.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Certificação",
      description: "Certificado de conclusão reconhecido ao final de cada módulo.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Material Incluso",
      description: "Kits de robótica e todo material necessário fornecido durante as aulas.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-robotics.jpg"
            alt="Robótica"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-600 backdrop-blur-[5px]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-secondary-foreground drop-shadow-lg">
              Exploradores da <span className="text-primary">Robótica</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90 drop-shadow-md">
              Aprenda robótica com o curso que transforma curiosidade em criação.
              Educação, inovação e tecnologia para o futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="text-lg group">
                Inscreva-se Agora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg bg-background/90 backdrop-blur-sm">
                Conheça os Cursos
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted/30">
        <div className="container mx-auto px-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-primary">MetaBee</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A MetaBee é uma empresa de educação em robótica que acredita no poder da
              tecnologia para transformar vidas. Nossos cursos são desenvolvidos para
              despertar a criatividade, desenvolver o raciocínio lógico e preparar
              os jovens para os desafios do futuro.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Com metodologia hands-on e professores especializados, oferecemos uma
              experiência única de aprendizado onde teoria e prática se encontram.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-yellow-500  mb-2">500+</div>
                <div className="text-muted-foreground">Alunos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500  mb-2">50+</div>
                <div className="text-muted-foreground">Projetos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500  mb-2">5+</div>
                <div className="text-muted-foreground">Anos</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <Image
              src="/robotics-components.jpg"
              alt="Componentes de robótica"
              width={600}
              height={400}
              className="rounded-2xl shadow-card hover:shadow-primary transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos <span className="text-primary">Cursos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Programas desenvolvidos especialmente para cada faixa etária e nível de conhecimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up border-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                      {course.age}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Saiba Mais
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="diferenciais" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que escolher a <span className="text-primary">MetaBee</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos a melhor experiência em educação tecnológica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <Rocket className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Junte-se a centenas de alunos que já estão construindo o futuro com a MetaBee
          </p>
          <Button size="lg" className="text-lg shadow-primary group">
            Inscreva-se Agora
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
