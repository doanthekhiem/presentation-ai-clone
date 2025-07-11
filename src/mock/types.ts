// Mock types cho dự án presentation

export interface MockPresentation {
  id: string;
  title: string;
  userId: string;
  updatedAt: string;
  isPublic: boolean;
  presentation: {
    content: { slides: unknown[] };
    theme: string;
    imageModel: string;
    presentationStyle: string;
    language: string;
    outline: string[];
  };
}

export interface MockFavorite {
  documentId: string;
  userId: string;
}

export interface MockTheme {
  id: string;
  userId: string;
  name: string;
}

export interface MockGeneratedImage {
  id: string;
  url: string;
  prompt: string;
  userId: string;
}

export interface MockUser {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface MockSession {
  user: MockUser;
  expires: string;
}

// Export type alias để tương thích với code cũ
export type PresentationDocument = MockPresentation;
export type BaseDocument = MockPresentation; 