
export enum AgentMode {
  KNOWLEDGE = 'Knowledge',
  VISUALS = 'Visuals',
  VIDEO = 'Video',
  ARCHITECT = 'Architect',
  AVATAR = 'Avatar',
  PPT = 'Presentation'
}

export enum PPTTheme {
  CYBERPUNK = 'Cyberpunk',
  CORPORATE = 'Modern Corporate',
  MINIMAL = 'Minimalist',
  DARK_ELEGANCE = 'Dark Elegance',
  VIBRANT = 'Vibrant Energy'
}

export enum ThumbnailStyle {
  CINEMATIC = 'Cinematic',
  DARK_CINEMATIC = 'Dark Cinematic',
  NEON_TECH = 'Neon Tech',
  MINIMAL = 'Minimal',
  FANTASY_ART = 'Fantasy Art',
  SCI_FI_CONCEPT = 'Sci-Fi Concept',
  ABSTRACT = 'Abstract'
}

export enum AspectRatio {
  LANDSCAPE = '16:9',
  PORTRAIT = '9:16',
  SQUARE = '1:1',
  CLASSIC = '4:3'
}

export enum OptimizationModel {
  FLASH = 'gemini-3-flash-preview',
  PRO = 'gemini-3-pro-preview'
}

export enum RenderingModel {
  FLASH = 'gemini-2.5-flash-image',
  PRO = 'gemini-3-pro-image-preview'
}

export type LoadingStage = 'idle' | 'thinking' | 'analyzing' | 'optimizing' | 'rendering' | 'polling';

export interface OverlayConfig {
  text: string;
  fontFamily: string;
  fontSize: number;
  color: string;
  position: 'top' | 'middle' | 'bottom';
}

export interface Slide {
  title: string;
  content: string[];
  visualPrompt: string;
}

export interface PresentationData {
  title: string;
  theme: PPTTheme;
  slides: Slide[];
}

export interface SavedItem {
  id: string;
  type: 'image' | 'video' | 'chat' | 'web' | 'ppt';
  name: string;
  content: any;
  timestamp: number;
}

export interface GenerationState {
  isGenerating: boolean;
  loadingStage: LoadingStage;
  generatedImageUrls: string[];
  generatedVideoUrl: string | null;
  generatedWebCode: string | null;
  generatedPPT: PresentationData | null;
  chatHistory: { role: 'user' | 'model'; text: string; urls?: string[] }[];
  error: string | null;
}

export interface UserInput {
  mode: AgentMode;
  images: File[];
  imagePreviews: string[];
  prompt: string;
  style: ThumbnailStyle;
  aspectRatio: AspectRatio;
  optModel: OptimizationModel;
  renderModel: RenderingModel;
  pptSlideCount: number;
  pptTheme: PPTTheme;
}
