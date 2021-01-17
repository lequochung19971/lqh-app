export interface StrongAndWeakPasswordModel {
  width: string;
  percent: number;
  weakness: WeakPasswordModel[];
}

export interface WeakPasswordModel {
  message: string;
  deduction: number;
}

export interface ProgressLayoutModel {
  width: string;
  color: string;
  status: string;
}
