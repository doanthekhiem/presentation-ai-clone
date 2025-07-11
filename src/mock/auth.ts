// Mock authentication service to replace NextAuth
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

// Mock user data
const mockUser: MockUser = {
  id: "mock-user-id",
  name: "Mock User",
  email: "mock@example.com",
  image: "https://via.placeholder.com/150",
};

// Mock session
const mockSession: MockSession = {
  user: mockUser,
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
};

// Mock auth function that always returns a valid session
export const mockAuth = async (): Promise<MockSession | null> => {
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 10));
  return mockSession;
};

// Mock signIn function
export const mockSignIn = async (provider?: string) => {
  console.log(`Mock sign in with provider: ${provider ?? 'default'}`);
  return { ok: true, error: null };
};

// Mock signOut function
export const mockSignOut = async () => {
  console.log('Mock sign out');
  return { ok: true, error: null };
};

// Mock useSession hook for client components
export const useSession = () => {
  return {
    data: mockSession,
    status: "authenticated" as const,
    update: async () => mockSession,
  };
};

// Mock getSession function
export const getSession = async () => {
  return mockSession;
};

// Export for compatibility with existing code
export const auth = mockAuth;
export const signIn = mockSignIn;
export const signOut = mockSignOut; 