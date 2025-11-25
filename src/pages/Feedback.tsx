import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const moods = [
    { emoji: "😊", label: "Ótimo", value: "great" },
    { emoji: "😐", label: "Normal", value: "okay" },
    { emoji: "😟", label: "Preocupado", value: "concerned" },
    { emoji: "😠", label: "Frustrado", value: "frustrated" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim()) {
      toast({
        title: "Atenção",
        description: "Por favor, escreva seu feedback antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    // Aqui você faria a chamada para salvar o feedback
    // Por enquanto, apenas simulamos o envio
    console.log({ feedback, mood: selectedMood });
    
    setIsSubmitted(true);
    setFeedback("");
    setSelectedMood(null);

    // Reset após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">VoiceHub</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  Compartilhe seu feedback
                </h1>
                <p className="text-lg text-muted-foreground">
                  Suas ideias são valiosas e completamente anônimas. Não coletamos nenhum dado pessoal.
                </p>
              </div>

              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Mood Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Como você está se sentindo hoje? (Opcional)
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {moods.map((mood) => (
                        <button
                          key={mood.value}
                          type="button"
                          onClick={() => setSelectedMood(mood.value)}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            selectedMood === mood.value
                              ? "border-primary bg-primary/5 scale-105"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                        >
                          <div className="text-4xl mb-1">{mood.emoji}</div>
                          <div className="text-xs font-medium text-foreground">{mood.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Seu feedback, sugestão ou crítica
                    </label>
                    <Textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Escreva aqui sua mensagem de forma livre. Pode ser uma crítica construtiva, uma sugestão de melhoria, um elogio, ou qualquer coisa que você gostaria que a liderança soubesse..."
                      className="min-h-[200px] resize-none bg-background/50"
                      maxLength={1000}
                    />
                    <div className="mt-2 text-xs text-muted-foreground text-right">
                      {feedback.length}/1000 caracteres
                    </div>
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-accent/30 border border-accent rounded-xl p-4">
                    <p className="text-sm text-accent-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Garantia de anonimato:</strong> Não solicitamos login, não rastreamos IP, 
                        não coletamos cookies. Sua mensagem é 100% anônima.
                      </span>
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary border-0 hover:opacity-90 text-lg h-14"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Feedback Anônimo
                  </Button>
                </form>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Feedback enviado com sucesso!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Obrigado por compartilhar sua opinião de forma anônima e segura.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                size="lg"
              >
                Enviar outro feedback
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
