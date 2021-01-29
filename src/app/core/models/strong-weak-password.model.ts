export class StrongAndWeakPasswordModel {
  width: string;
  percent: number;
  weaknesses: WeakPasswordModel[];
}

export class WeakPasswordModel {
  mismatched?: string;
  message: string;
  deduction: number;
}

export class ProgressLayoutModel {
  width?: string;
  color?: string;
  status?: string;
}

export enum MismatchedPassword {
  INVALID_CHARACTERS_LENGTH = 'INVALID_CHARACTERS_LENGTH',
  AT_LEAST_ONE_NUMBER = 'AT_LEAST_ONE_NUMBER',
  AT_LEAST_ONE_LOWERCASE = 'AT_LEAST_ONE_LOWERCASE',
  AT_LEAST_ONE_UPPERCASE = 'AT_LEAST_ONE_UPPERCASE',
  AT_LEAST_ONE_SPECIAL = 'AT_LEAST_ONE_SPECIAL',
}
