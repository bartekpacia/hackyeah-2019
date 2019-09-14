
export enum SnackbarType {
  Info = 'info',
  Error = 'error',
  Warning = 'warning',
  Success = 'Success'
}
export interface ISnackbar {
  type: SnackbarType;
  message: string;
  id?: string;
  closeable?: boolean;
}
