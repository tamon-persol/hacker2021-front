import { httpClient } from 'modules/utils/httpClient';
import {
  SalaryRepositoryImpl,
  SalaryServiceImpl,
  SalaryTranslatorImpl
} from 'modules/domains/salary';

const salaryTranslator = new SalaryTranslatorImpl();
const salaryRepository = new SalaryRepositoryImpl(httpClient);
const salaryService = new SalaryServiceImpl(salaryRepository, salaryTranslator);

export { salaryService };
