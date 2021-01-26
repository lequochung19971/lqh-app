export interface StrongAndWeakPasswordModel {
  width: string;
  percent: number;
  weaknesses: WeakPasswordModel[];
}

export interface WeakPasswordModel {
  mismatched?: string;
  message: string;
  deduction: number;
}

export interface ProgressLayoutModel {
  width: string;
  color: string;
  status: string;
}
