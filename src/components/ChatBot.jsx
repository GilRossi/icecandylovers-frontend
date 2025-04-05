'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './ChatBot.module.css';

const CONFIG = {
  ENDPOINTS: {
    CHAT: '/api/chat/message'
  }
};

export default function ChatBot() {
  const [chatAberto, setChatAberto] = useState(false);
  const [mensagens, setMensagens] = useState([]);
  const [mensagemAtual, setMensagemAtual] = useState('');
  const [carregando, setCarregando] = useState(false);
  const messagesEndRef = useRef(null);
  const chatInputRef = useRef(null);

  const toggleChat = () => {
    setChatAberto(prev => !prev);
  };

  const addMessage = (remetente, texto) => {
    setMensagens(prev => [...prev, { remetente, texto }]);
  };

  const enviarMensagem = async () => {
    const message = mensagemAtual.trim();
    if (!message || carregando) return;

    setCarregando(true);
    addMessage('Você', message);
    setMensagemAtual('');

    try {
      const response = await fetch(CONFIG.ENDPOINTS.CHAT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      
      if (!response.ok) throw new Error('Erro no chat: ' + response.status);
      
      const resposta = await response.text();
      addMessage('Gelyto', resposta);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      addMessage('Gelyto', 'Ops! Tente novamente mais tarde.');
    } finally {
      setCarregando(false);
    }
  };

  // Auto-scroll para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensagens]);

  // Focar no input quando o chat abrir
  useEffect(() => {
    if (chatAberto) {
      setTimeout(() => {
        chatInputRef.current?.focus();
      }, 100);
    }
  }, [chatAberto]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      enviarMensagem();
    }
  };

  return (
    <div className={styles.chatWrapper}>
      <button 
        onClick={toggleChat}
        className={styles.chatToggle}
        title="Converse com Gelyto"
        aria-expanded={chatAberto}
      >
        <i className="bi bi-chat-dots"></i>
      </button>

      <div 
        className={`${styles.chatContainer} ${chatAberto ? styles.visible : ''}`}
        aria-hidden={!chatAberto}
      >
        <div className={styles.chatHeader}>
          Converse com Gelyto
          <button 
            onClick={toggleChat}
            className={styles.chatClose}
            aria-label="Fechar chat"
          >
            &times;
          </button>
        </div>
        
        <div className={styles.chatMessages}>
          {mensagens.length === 0 && (
            <div className={styles.welcomeMessage}>
              Olá! Sou o Gelyto, como posso ajudar?
            </div>
          )}
          
          {mensagens.map((msg, index) => (
            <div
              key={index}
              className={msg.remetente === 'Gelyto' ? styles.botMessage : styles.userMessage}
            >
              <strong>{msg.remetente}:</strong> {msg.texto}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className={styles.chatInputArea}>
          <input
            ref={chatInputRef}
            type="text"
            value={mensagemAtual}
            onChange={(e) => setMensagemAtual(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={carregando}
            placeholder="Digite sua mensagem..."
            className={styles.chatInput}
            aria-label="Digite sua mensagem"
          />
          <button 
            onClick={enviarMensagem}
            disabled={carregando || !mensagemAtual.trim()}
            className={styles.chatSend}
            aria-label="Enviar mensagem"
          >
            {carregando ? (
              <span className={styles.spinner} aria-hidden="true"></span>
            ) : (
              'Enviar'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}