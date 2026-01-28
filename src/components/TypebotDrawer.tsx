import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TypebotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const TypebotDrawer = ({ isOpen, onClose }: TypebotDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
            className="fixed z-50 inset-4 md:inset-auto md:right-4 md:bottom-4 md:top-20 md:w-[420px] bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-primary">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Faça seu Cadastro</h3>
                  <p className="text-white/80 text-sm">Porta Aberta</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-xl"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Typebot iframe */}
            <div className="flex-1 bg-background">
              <iframe
                src="https://typebot.co/porta-aberta-1c2pd9k"
                className="w-full h-full border-0"
                allow="microphone"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TypebotDrawer;
