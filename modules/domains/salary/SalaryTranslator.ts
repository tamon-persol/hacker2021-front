import { ISalary } from 'modules/domains/models';

export interface ISalaryTranslator {
  // NOTE: SWRにおいて、dataがndefinedのタイミングがあるので、undefinedも可としておく
  translateElementListToSalaryList(list?: ISalary[]): ISalary[];
}

export class SalaryTranslatorImpl implements ISalaryTranslator {
  translateElementListToSalaryList(list?: ISalary[]): ISalary[] {
    return list || [];
  }
}
