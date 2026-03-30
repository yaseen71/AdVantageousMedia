
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    try {
      // Correctly initialize with process.env.API_KEY directly as per SDK requirements
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        console.warn("Gemini API Key is missing. AI features will be disabled.");
      }
      this.ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });
    } catch (error) {
      console.error("Failed to initialize Gemini AI:", error);
      // Initialize with a dummy key to prevent top-level crash
      this.ai = new GoogleGenAI({ apiKey: 'dummy-key' });
    }
  }

  // Use gemini-3-pro-preview for complex reasoning and strategic planning tasks
  async analyzeMarketingGoals(prompt: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `A client has shared the following goals/business info: "${prompt}". Provide a brief, high-impact 3-point AI marketing strategy for them.`,
        config: {
          systemInstruction: 'You are an AI Marketing Specialist at AdVantageousMedia. Keep it professional, visionary, and under 150 words.',
        }
      });
      // Access the .text property directly instead of calling it as a method
      return response.text || "I couldn't generate a strategy at this moment. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Error connecting to AI Assistant. Please ensure your API_KEY is valid.";
    }
  }

  // Use gemini-3-pro-preview and properly map provided history for contextual chat
  async chatWithAssistant(history: any[], newMessage: string): Promise<string> {
    try {
      // Map history to the format expected by the Google GenAI SDK: role must be 'user' or 'model'
      const mappedHistory = history.map(h => ({
        role: h.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: h.content }]
      }));

      const chat = this.ai.chats.create({
        model: 'gemini-3-pro-preview',
        history: mappedHistory,
        config: {
          systemInstruction: 'You are the AdVantageousMedia AI assistant. You help potential clients understand how AI can transform their marketing. You are sleek, helpful, and sophisticated.',
        },
      });
      // Use the correct parameter structure for sendMessage
      const response = await chat.sendMessage({ message: newMessage });
      // Access the .text property directly
      return response.text || "I'm processing that. One moment.";
    } catch (error) {
       console.error("Chat Error:", error);
       return "Our AI is currently recalibrating. Please contact us via the form below.";
    }
  }
}

export const geminiService = new GeminiService();
