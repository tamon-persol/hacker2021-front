import useSWR from 'swr';
import { ISalary } from 'modules/domains/models';
import { ISalaryRepository, ISalaryTranslator } from 'modules/domains/salary';
import { swrCacheKeys } from 'modules/utils/swrCacheKeys';
import { IFetchService } from 'modules/utils/interfaces';

export interface ISalaryService {
  useFetchMarketSalaryList(): IFetchService<ISalary[]>;
}

export class SalaryServiceImpl implements ISalaryService {
  private repository: ISalaryRepository;
  private translator: ISalaryTranslator;

  constructor(repository: ISalaryRepository, translator: ISalaryTranslator) {
    this.repository = repository;
    this.translator = translator;
  }

  public useFetchMarketSalaryList(): IFetchService<ISalary[]> {
    const { data: swrData, error } = useSWR<ISalary[], Error>(
      swrCacheKeys.FETCH_SALARY,
      () => this.repository.fetchMarketSalaryList()
    );

    // NOTE: 実際に画面で使う実データのundefinedの含め、translator層で吸収する
    const data = this.translator.translateElementListToSalaryList(swrData);

    // NOTE: isLoadingの判定でdataがundefinedかを見るので、isLoadingの判定ではtranslator通した値は見ない
    return { data, isLoading: !swrData && !error, error };
  }
}
