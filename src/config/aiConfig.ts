export type AIProvider = 'gemini' | 'openai' | 'groq' | 'custom' | 'offline';

export interface AIConfig {
  provider: AIProvider;
  apiKey: string;
  model: string;
  endpoint: string;
}

export class AIConfigManager {
  private static instance: AIConfigManager;

  private config: AIConfig = {
    provider: 'gemini',
    apiKey: '',
    model: 'gemini-1.5-flash',
    endpoint: ''
  };

  private constructor() {
    this.loadFromEnvAndStorage();
  }

  public static getInstance(): AIConfigManager {
    if (!AIConfigManager.instance) {
      AIConfigManager.instance = new AIConfigManager();
    }
    return AIConfigManager.instance;
  }

  private loadFromEnvAndStorage(): void {
    // 1. Read from Vite import.meta.env
    const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env || {};
    
    const envApiKey = 
      env.VITE_GEMINI_API_KEY ||
      env.VITE_AI_API_KEY ||
      env.VITE_OPENAI_API_KEY ||
      env.VITE_GROQ_API_KEY ||
      '';

    const envProvider = (env.VITE_AI_PROVIDER as AIProvider) || 
      (env.VITE_OPENAI_API_KEY ? 'openai' : env.VITE_GROQ_API_KEY ? 'groq' : 'gemini');

    const envModel = env.VITE_AI_MODEL || 
      (envProvider === 'openai' ? 'gpt-4o-mini' : envProvider === 'groq' ? 'llama-3.1-8b-instant' : 'gemini-1.5-flash');

    const envEndpoint = env.VITE_AI_ENDPOINT || '';

    // 2. Read user overrides from localStorage
    try {
      const storedKey = localStorage.getItem('retro3d_ai_api_key');
      const storedProvider = localStorage.getItem('retro3d_ai_provider') as AIProvider | null;
      const storedModel = localStorage.getItem('retro3d_ai_model');
      const storedEndpoint = localStorage.getItem('retro3d_ai_endpoint');

      this.config = {
        apiKey: storedKey !== null ? storedKey : envApiKey,
        provider: storedProvider || envProvider,
        model: storedModel || envModel,
        endpoint: storedEndpoint || envEndpoint
      };
    } catch {
      this.config = {
        apiKey: envApiKey,
        provider: envProvider,
        model: envModel,
        endpoint: envEndpoint
      };
    }
  }

  public getConfig(): AIConfig {
    return { ...this.config };
  }

  public getApiKey(): string {
    return this.config.apiKey.trim();
  }

  public getProvider(): AIProvider {
    return this.config.provider;
  }

  public getModel(): string {
    return this.config.model;
  }

  public getEndpoint(): string {
    return this.config.endpoint;
  }

  public setApiKey(apiKey: string): void {
    this.config.apiKey = apiKey.trim();
    try {
      localStorage.setItem('retro3d_ai_api_key', this.config.apiKey);
    } catch {}
  }

  public setProvider(provider: AIProvider): void {
    this.config.provider = provider;
    try {
      localStorage.setItem('retro3d_ai_provider', provider);
    } catch {}
  }

  public setModel(model: string): void {
    this.config.model = model.trim();
    try {
      localStorage.setItem('retro3d_ai_model', this.config.model);
    } catch {}
  }

  public setEndpoint(endpoint: string): void {
    this.config.endpoint = endpoint.trim();
    try {
      localStorage.setItem('retro3d_ai_endpoint', this.config.endpoint);
    } catch {}
  }

  public hasActiveKey(): boolean {
    return this.config.apiKey.trim().length > 0;
  }
}

export const aiConfigManager = AIConfigManager.getInstance();
