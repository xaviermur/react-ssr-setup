import { Locale, ReportChange } from './types';

export const ActionTypes = {
    SETLOCALE: 'app/set-locale',
    SETREPORTCHANGE: 'app/set-report-content',
};

export const setLocale = (locale: Locale) => ({
    type: ActionTypes.SETLOCALE,
    payload: locale,
});

export const setReportChange = (reportChange: ReportChange) => ({
    type: ActionTypes.SETREPORTCHANGE,
    payload: reportChange,
});
