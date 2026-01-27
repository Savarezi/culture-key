import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MessageSquare, 
  Shield, 
  Users, 
  BarChart3, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";

const Institucional = () => {
  const features = [
    {
      icon: Shield,
      title: "Anonimato Garantido",
      description: "Nenhum dado pessoal é coletado. Feedback 100% anônimo.",
    },
    {
      icon: MessageSquare,
      title: "Comunicação Aberta",
      description: "Canal seguro para colaboradores expressarem suas opiniões.",
    },
    {
      icon: BarChart3,
      title: "Insights com IA",
      description: "Análise automática de sentimentos e tendências.",
    },
    {
      icon: Users,
      title: "Para Todas as Equipes",
      description: "Escalável para empresas de todos os tamanhos.",
    },
  ];

  const partners = [
    { name: "TechNova", logo: "TN" },
    { name: "Innovatech", logo: "IT" },
    { name: "FutureWorks", logo: "FW" },
    { name: "CloudPeak", logo: "CP" },
    { name: "DataSphere", logo: "DS" },
    { name: "NexGen", logo: "NG" },
  ];

  const stats = [
    { value: "500+", label: "Empresas Ativas" },
    { value: "50k+", label: "Feedbacks Recebidos" },
    { value: "98%", label: "Satisfação" },
    { value: "24/7", label: "Suporte" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">Porta Aberta</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#plataforma" className="text-muted-foreground hover:text-foreground transition-colors">
                Plataforma
              </a>
              <a href="#parceiros" className="text-muted-foreground hover:text-foreground transition-colors">
                Parceiros
              </a>
              <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </div>

            <Button asChild className="bg-gradient-primary border-0 hover:opacity-90">
              <Link to="/login">Acessar Plataforma</Link>
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
              >
                🚀 A plataforma que dá voz às equipes
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block"
                >
                  Transforme a
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block bg-gradient-primary bg-clip-text text-transparent"
                >
                  Cultura da sua Empresa
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Feedback anônimo e contínuo para construir ambientes de trabalho mais transparentes, inclusivos e produtivos.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="bg-gradient-primary border-0 hover:opacity-90 text-lg h-14 px-8 group">
                <Link to="/login">
                  Sua empresa já tem cadastro?
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                <a href="#contato">Fale Conosco</a>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-medium">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
              Nascemos para dar voz a quem precisa ser ouvido
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Porta Aberta surgiu da necessidade de criar ambientes corporativos mais saudáveis. 
              Acreditamos que toda pessoa merece um espaço seguro para expressar suas opiniões, 
              sem medo de retaliação. Nossa missão é construir pontes de comunicação transparente 
              entre colaboradores e líderes.
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Shield, title: "Confiança", description: "Anonimato total para garantir feedback genuíno" },
              { icon: Users, title: "Inclusão", description: "Todos têm voz, independente do cargo" },
              { icon: BarChart3, title: "Ação", description: "Dados que se transformam em melhorias reais" },
            ].map((item, index) => (
              <motion.div key={index} {...staggerItem}>
                <Card className="p-8 text-center h-full hover:shadow-medium transition-all duration-300 group border-border/50">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plataforma */}
      <section id="plataforma" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-primary font-medium">Nossa Plataforma</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
              Tudo que você precisa para ouvir sua equipe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma solução completa para coletar, analisar e agir sobre o feedback dos colaboradores.
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} {...staggerItem}>
                <Card className="p-6 h-full hover:shadow-medium transition-all duration-300 group border-border/50 hover:-translate-y-2">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="mt-16 max-w-4xl mx-auto"
          >
            <Card className="p-8 md:p-12 bg-gradient-primary border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                    Pronto para transformar sua empresa?
                  </h3>
                  <p className="text-white/80">
                    Entre em contato e agende uma demonstração gratuita.
                  </p>
                </div>
                <Button size="lg" variant="secondary" asChild className="shrink-0">
                  <a href="#contato">Agendar Demo</a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parceiros */}
      <section id="parceiros" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-primary font-medium">Nossos Parceiros</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
              Empresas que confiam na Porta Aberta
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já transformaram sua cultura organizacional.
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                {...staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 h-32 flex flex-col items-center justify-center hover:shadow-medium transition-all duration-300 border-border/50">
                  <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-lg">{partner.logo}</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{partner.name}</span>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Implementação rápida",
                "Suporte dedicado",
                "Dados seguros",
                "ROI comprovado"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full"
                >
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-primary font-medium">Contato</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
              Vamos conversar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para ajudar sua empresa a construir um ambiente mais transparente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div {...fadeInUp}>
              <Card className="p-8 h-full border-border/50">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">E-mail</div>
                      <div className="text-foreground font-medium">contato@portaaberta.com.br</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Telefone</div>
                      <div className="text-foreground font-medium">(11) 99999-9999</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Endereço</div>
                      <div className="text-foreground font-medium">São Paulo, SP - Brasil</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Horário</div>
                      <div className="text-foreground font-medium">Seg - Sex: 9h às 18h</div>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="p-8 border-border/50">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Envie uma mensagem
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary border-0 hover:opacity-90 h-12">
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">Porta Aberta</span>
            </div>
            
            <div className="flex gap-8">
              <a href="#sobre" className="text-background/70 hover:text-background transition-colors">Sobre</a>
              <a href="#plataforma" className="text-background/70 hover:text-background transition-colors">Plataforma</a>
              <a href="#parceiros" className="text-background/70 hover:text-background transition-colors">Parceiros</a>
              <a href="#contato" className="text-background/70 hover:text-background transition-colors">Contato</a>
            </div>

            <p className="text-sm text-background/60">
              © 2025 Porta Aberta. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Institucional;
