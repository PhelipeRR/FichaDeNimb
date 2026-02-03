/* eslint-disable */
import CharacterSheet from '../interfaces/CharacterSheet';

export interface SheetData extends CharacterSheet {
  _id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
  system: string;
  name: string;
  class?: string;
  level?: number;
  sheetData?: CharacterSheet; // For compatibility
  image?: string;
  ownerFirebaseUid?: string;
  description?: string;
  assignedTableId?: {
    _id: string;
    name: string;
  };
}

export interface CreateSheetRequest {
  name: string;
  system: string;
  [key: string]: any;
}

export interface UpdateSheetRequest {
  [key: string]: any;
}

class SheetsService {
  async getUserSheets(): Promise<SheetData[]> {
    return [];
  }

  async getSheetById(id: string): Promise<SheetData> {
    throw new Error('Sheet not found');
  }

  async createSheet(data: CreateSheetRequest): Promise<SheetData> {
    throw new Error('Feature unavailable');
  }

  async updateSheet(id: string, data: UpdateSheetRequest): Promise<SheetData> {
    throw new Error('Feature unavailable');
  }

  async deleteSheet(id: string): Promise<void> {
    // no-op
  }

  async duplicateSheet(id: string): Promise<SheetData> {
    throw new Error('Feature unavailable');
  }
}

export default new SheetsService();
