
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    try {
      // Use GEMINI_API_KEY as primary (standard for AI Studio Build free tier)
      // and API_KEY as fallback (standard for user-selected keys)
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
      
      if (!apiKey) {
        console.warn("Gemini API Key is missing. AI features will be disabled.");
      }
      
      this.ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });
    } catch (error) {
      console.error("Failed to initialize Gemini AI:", error);
      this.ai = new GoogleGenAI({ apiKey: 'dummy-key' });
    }
  }

  private getApiKey(): string | undefined {
    return process.env.GEMINI_API_KEY || process.env.API_KEY;
  }

  // Use gemini-3.1-pro-preview for complex reasoning and strategic planning tasks
  async analyzeMarketingGoals(prompt: string): Promise<string> {
    try {
      const apiKey = this.getApiKey();
      if (!apiKey) {
        return "AI features are currently unavailable. Please ensure the Gemini API Key is configured in the environment.";
      }

      // Re-initialize to ensure latest key is used (handles dynamic key selection)
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: `A client has shared the following goals/business info: "${prompt}". Provide a brief, high-impact 3-point AI marketing strategy for them.`,
        config: {
          systemInstruction: 'You are an AI Marketing Specialist at AdVantageousMedia. Keep it professional, visionary, and under 150 words.',
        }
      });
      return response.text || "I couldn't generate a strategy at this moment. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      // Fallback to flash if pro is restricted or fails
      try {
        const apiKey = this.getApiKey();
        if (!apiKey) throw error;
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `A client has shared the following goals/business info: "${prompt}". Provide a brief, high-impact 3-point AI marketing strategy for them.`,
          config: {
            systemInstruction: 'You are an AI Marketing Specialist at AdVantageousMedia. Keep it professional, visionary, and under 150 words.',
          }
        });
        return response.text || "I couldn't generate a strategy at this moment. Please try again.";
      } catch (innerError) {
        console.error("Gemini Fallback Error:", innerError);
        return "Error connecting to AI Assistant. Please ensure your API_KEY is valid.";
      }
    }
  }

  // Use gemini-3.1-pro-preview and properly map provided history for contextual chat
  async chatWithAssistant(history: any[], newMessage: string): Promise<string> {
    try {
      const apiKey = this.getApiKey();
      if (!apiKey) {
        return "I'm currently offline. Please check back later or contact us via the form.";
      }

      // Re-initialize to ensure latest key is used
      const ai = new GoogleGenAI({ apiKey });
      
      // Map history to the format expected by the Google GenAI SDK: role must be 'user' or 'model'
      const mappedHistory = history.map(h => ({
        role: h.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: h.content }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3.1-pro-preview',
        history: mappedHistory,
        config: {
          systemInstruction: 'You are the AdVantageousMedia AI assistant. You help potential clients understand how AI can transform their marketing. You are sleek, helpful, and sophisticated.',
        },
      });
      const response = await chat.sendMessage({ message: newMessage });
      return response.text || "I'm processing that. One moment.";
    } catch (error) {
       console.error("Chat Error:", error);
       // Fallback to flash for chat
       try {
         const apiKey = this.getApiKey();
         if (!apiKey) throw error;
         const ai = new GoogleGenAI({ apiKey });
         const chat = ai.chats.create({
           model: 'gemini-3-flash-preview',
           history: history.map(h => ({
             role: h.role === 'assistant' ? 'model' : 'user',
             parts: [{ text: h.content }]
           })),
           config: {
             systemInstruction: 'You are the AdVantageousMedia AI assistant. You help potential clients understand how AI can transform their marketing. You are sleek, helpful, and sophisticated.',
           },
         });
         const response = await chat.sendMessage({ message: newMessage });
         return response.text || "I'm processing that. One moment.";
       } catch (innerError) {
         console.error("Chat Fallback Error:", innerError);
         return "Our AI is currently recalibrating. Please contact us via the form below.";
       }
    }
  }
}

export const geminiService = new GeminiService();
