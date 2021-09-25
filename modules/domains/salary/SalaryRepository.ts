import { AxiosInstance } from 'axios';
import { ISalary } from 'modules/domains/models';

export interface ISalaryRepository {
  fetchMarketSalaryList(): Promise<ISalary[]>;
}

export class SalaryRepositoryImpl implements ISalaryRepository {
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  public async fetchMarketSalaryList(): Promise<ISalary[]> {
    const res = await this.httpClient.get<ISalary[]>(
      `${process.env.NEXT_PUBLIC_API_HOST}/market/salaries`
    );
    return res.data;
  }
}
