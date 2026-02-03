/* eslint-disable */
import {
  signInWithPopup,
  signOut,
  googleProvider,
  auth,
  User as FirebaseUser,
  updateProfile as firebaseUpdateProfile,
} from '../config/firebase';
import { DbUser } from '../types/auth.types';
import { SupplementId } from '../types/supplement.types';
import { DiceColorId } from '../types/diceColors';

class AuthService {
  async loginWithGoogle(): Promise<{
    firebaseUser: FirebaseUser;
    dbUser: DbUser;
  }> {
    const result = await signInWithPopup(auth, googleProvider);
    const { user } = result;
    const dbUser = await this.syncUser();
    return { firebaseUser: user, dbUser };
  }

  async syncUser(): Promise<DbUser> {
    const user = auth.currentUser;
    if (!user) throw new Error('No user logged in');

    // Mock implementation since backend is missing
    return {
      _id: user.uid,
      firebaseUid: user.uid,
      email: user.email || '',
      username: user.displayName || 'User',
      fullName: user.displayName || undefined,
      photoURL: user.photoURL || undefined,
      emailVerified: user.emailVerified,
      isPremium: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      savedSheets: [],
      enabledSupplements: [SupplementId.TORMENTA20_CORE],
    };
  }

  async logout(): Promise<void> {
    await signOut(auth);
  }

  async updateProfile(updates: {
    username?: string;
    fullName?: string;
    photoURL?: string;
  }): Promise<DbUser> {
    const user = auth.currentUser;
    if (!user) throw new Error('No user logged in');

    if (updates.fullName || updates.photoURL) {
      await firebaseUpdateProfile(user, {
        displayName: updates.fullName,
        photoURL: updates.photoURL,
      });
    }

    // Mock update
    const dbUser = await this.syncUser();
    return {
      ...dbUser,
      username: updates.username || dbUser.username,
      fullName: updates.fullName || dbUser.fullName,
      photoURL: updates.photoURL || dbUser.photoURL,
    };
  }

  async saveSystemSetup(
    supplements: SupplementId[],
    hasCompletedInitialSetup: boolean
  ): Promise<DbUser> {
    const dbUser = await this.syncUser();
    return {
      ...dbUser,
      enabledSupplements: supplements,
      hasCompletedInitialSetup,
    };
  }

  async saveDice3DSettings(settings: {
    enabled?: boolean;
    color?: any;
  }): Promise<DbUser> {
      const dbUser = await this.syncUser();
      return {
          ...dbUser,
          dice3DEnabled: settings.enabled ?? dbUser.dice3DEnabled,
          diceColor: settings.color ?? dbUser.diceColor
      };
  }

  async saveAppearanceSettings(settings: {
    accentColor?: any;
    darkMode?: boolean;
  }): Promise<DbUser> {
      const dbUser = await this.syncUser();
      return {
          ...dbUser,
          accentColor: settings.accentColor ?? dbUser.accentColor,
          darkMode: settings.darkMode ?? dbUser.darkMode
      };
  }

  async acceptTerms(version: number): Promise<DbUser> {
    const dbUser = await this.syncUser();
    // Mock implementation
    return {
      ...dbUser,
      termsAcceptedVersion: version,
    };
  }
}

export default new AuthService();
