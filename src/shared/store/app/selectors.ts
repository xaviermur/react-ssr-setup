/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { AppState, Locale, ReportData } from './types';

export const app = (state: { app: AppState }): AppState => state.app;

export const getLocale = createSelector([app], (app): Locale => app.locale);
export const getReportData = createSelector([app], (app): ReportData => app.reportData);
export const getReportDataTemplateItem = createSelector([app], (app, templateId, itemId): string =>
    app.reportData &&
    app.reportData.length > 0 &&
    app.reportData[templateId] &&
    app.reportData[templateId].data &&
    app.reportData[templateId].data[itemId]
        ? app.reportData[templateId].data[itemId]
        : null
);
