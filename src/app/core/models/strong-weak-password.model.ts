export class StrongAndWeakPasswordModel {
  width: string;
  percent: number;
  weakness: WeakPasswordModel[];
}

export class WeakPasswordModel {
  message: string;
  deduction: number;
}

export class ProgressLayoutModel {
  width: string;
  color: string;
  status: string;
}
