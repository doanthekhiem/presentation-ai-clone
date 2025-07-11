// Export tất cả mock services
export { auth, signIn, signOut, useSession, getSession, mockAuth, mockSignIn, mockSignOut } from './auth';
export { db, mockPresentations, mockFavorites, mockThemes, mockGeneratedImages } from './database';
export type { 
  MockPresentation, 
  MockFavorite, 
  MockTheme, 
  MockGeneratedImage, 
  MockUser, 
  MockSession,
  PresentationDocument,
  BaseDocument
} from './types'; 