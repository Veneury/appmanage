export interface Currency {
  id: number;
  deleted: boolean;
  creationDate: string;
  modificationDate: string;
  creationUser: string;
  modificationUser: string;
  codeIso: string;
  description: string;
  exchangeRate: number;
}
