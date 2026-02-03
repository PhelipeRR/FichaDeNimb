/* eslint-disable */
import { SystemId, SystemSettings, SystemInfo, AVAILABLE_SYSTEMS } from '../types/system.types';

class SystemService {
  async getSystemSettings(systemId: SystemId): Promise<SystemSettings> {
    // Mock implementation
    return {
      systemId,
      settings: {},
    } as SystemSettings;
  }

  async saveSystemSettings(settings: SystemSettings): Promise<SystemSettings> {
    // Mock implementation
    return settings;
  }

  async fetchAvailableSystems(): Promise<SystemInfo[]> {
    return AVAILABLE_SYSTEMS;
  }

  async syncSystemWithBackend(systemId: SystemId): Promise<void> {
    // no-op
  }
}

export default new SystemService();
