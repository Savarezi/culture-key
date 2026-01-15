import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, TrendingUp, BarChart3, Users, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  // Dados mockados para demonstração
  const stats = [
    { label: "Total de Feedbacks", value: "127", change: "+12%", trend: "up" },
    { label: "Humor Geral", value: "😊 Positivo", change: "+5%", trend: "up" },
    { label: "Participação", value: "73%", change: "+8%", trend: "up" },
  ];

  const feedbacks = [
    {
      id: 1,
      content: "A comunicação entre os times poderia ser melhorada. Às vezes fica difícil saber o que está acontecendo em outras áreas.",
      category: "Comunicação",
      mood: "😐",
      date: "Há 2 horas",
    },
    {
      id: 2,
      content: "Adorei a nova política de trabalho híbrido! Está fazendo muita diferença na minha qualidade de vida.",
      category: "Elogio",
      mood: "😊",
      date: "Há 5 horas",
    },
    {
      id: 3,
      content: "O processo de aprovação de despesas está muito burocrático. Poderia ser simplificado para ganhar agilidade.",
      category: "Processos",
      mood: "😟",
      date: "Há 1 dia",
    },
    {
      id: 4,
      content: "Seria ótimo ter mais oportunidades de desenvolvimento e treinamento. Quero crescer junto com a empresa.",
      category: "Desenvolvimento",
      mood: "😊",
      date: "Há 2 dias",
    },
    {
      id: 5,
      content: "A gestão do nosso time está excelente! Sempre abertos ao diálogo e super transparentes.",
      category: "Gestão",
      mood: "😊",
      date: "Há 2 dias",
    },
  ];

  const categories = ["Todos", "Gestão", "Processos", "Comunicação", "Elogio", "Desenvolvimento"];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 border-b border-border/50">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">Porta Aberta</span>
          </Link>
          
          <div className="flex gap-3">
            <Button variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Minha Empresa
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Visão geral dos feedbacks da sua equipe
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="bg-secondary/20 text-secondary-foreground">
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-3xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <Card className="p-4 bg-card/50 backdrop-blur border-border/50">
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Categorias:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  size="sm"
                  className={category === "Todos" ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Feedbacks List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              Feedbacks Recentes
            </h2>
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Ver Análise Completa
            </Button>
          </div>

          <div className="space-y-4">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{feedback.mood}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {feedback.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{feedback.date}</span>
                      </div>
                      <p className="text-foreground leading-relaxed">{feedback.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
