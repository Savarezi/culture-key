import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, MessageSquare, BarChart3, Zap, Lock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroTeamImage from "@/assets/hero-team.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Anônimo",
      description: "Sem login, sem rastreamento. Garantia total de privacidade.",
    },
    {
      icon: MessageSquare,
      title: "Feedback Contínuo",
      description: "Colaboradores expressam opiniões de forma livre e segura.",
    },
    {
      icon: BarChart3,
      title: "Insights com IA",
      description: "Análise automática de sentimentos e categorização de tópicos.",
    },
    {
      icon: Zap,
      title: "Simples e Rápido",
      description: "Interface intuitiva, sem complicação. Foco no que importa.",
    },
  ];

  const benefits = [
    {
      icon: Lock,
      title: "Segurança Total",
      description: "Nenhum dado pessoal é coletado ou armazenado.",
    },
    {
      icon: Users,
      title: "Para Pequenas Empresas",
      description: "Solução acessível e escalável para equipes de todos os tamanhos.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">Porta Aberta</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3"
          >
            <Button variant="ghost" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button asChild className="bg-gradient-primary border-0 hover:opacity-90">
              <Link to="/feedback">Enviar Feedback</Link>
            </Button>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroTeamImage})` }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Porta Aberta
                </span>
                <br />
                <span className="text-3xl md:text-5xl">Confiança em Primeiro Lugar</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              Feedback anônimo e contínuo para construir uma cultura organizacional mais transparente e saudável.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="bg-gradient-primary border-0 hover:opacity-90 text-lg h-14 px-8">
                <Link to="/feedback">Comece Agora - É Grátis</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Ver Como Funciona
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--secondary) / 0.15) 0%, transparent 50%)' }} />
        
        <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Por que escolher a Porta Aberta?
          </h2>
          <p className="text-xl text-muted-foreground">
            Simplicidade, segurança e insights poderosos para sua empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-medium transition-all duration-300 border-border/50 bg-card/50 backdrop-blur">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-medium transition-all duration-300 border-border/50 bg-card/50 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-12 text-center bg-gradient-primary border-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Pronto para ouvir sua equipe?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Crie um ambiente mais transparente e saudável hoje mesmo.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-lg h-14 px-8">
                <Link to="/feedback">Começar Agora</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-foreground">Porta Aberta</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Porta Aberta. Transparência e inclusão sem expor ninguém.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
