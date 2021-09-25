// NOTE: repository, translator, serviceのモジュールで使用する共通のinterfadce
// NOTE: domainそのものに紐づく型定義は`modules/domains/models`に書いてください

export interface IFetchService<T> {
  data: T;
  isLoading: boolean;
  error?: Error;
}
