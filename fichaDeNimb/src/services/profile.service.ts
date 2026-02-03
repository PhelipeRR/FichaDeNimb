/* eslint-disable */
export interface PublicProfile {
  _id: string;
  username: string;
  fullName?: string;
  totalSheets?: number;
  photoURL?: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    github?: string;
    youtube?: string;
    twitch?: string;
  };
  createdAt: string;
  stats?: {
    buildsCount: number;
    followersCount: number;
    followingCount: number;
    likesReceived: number;
  };
  badges?: string[];
  isSupporter?: boolean;
  supportLevel?: string;
}

class ProfileService {
  async getProfileByUsername(username: string): Promise<PublicProfile> {
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          _id: 'mock-id',
          username,
          photoURL: undefined,
          bio: 'This is a mock profile.',
          createdAt: new Date().toISOString(),
          stats: {
            buildsCount: 0,
            followersCount: 0,
            followingCount: 0,
            likesReceived: 0,
          },
        });
      }, 500);
    });
  }

  async updateProfile(data: Partial<PublicProfile>): Promise<PublicProfile> {
     // Mock implementation
     return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                _id: 'mock-id',
                username: 'User',
                ...data,
                createdAt: new Date().toISOString(),
            } as PublicProfile);
        }, 500);
     });
  }
}

export default new ProfileService();
