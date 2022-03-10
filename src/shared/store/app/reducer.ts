import { produce } from 'immer';
import Format from 'string-format';
import { ActionTypes } from './actions';
import { Action, AppState } from './types';

export const initialState = Object.freeze<AppState>({
    locale: 'en_US',
    reportData: [],
});

export default (state: AppState = initialState, action: Action): AppState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.SETLOCALE: {
                draft.locale = action.payload;
                return;
            }
            case ActionTypes.SETREPORTCHANGE: {
                console.debug('SETREPORTCHANGE', action, state);
                const reportChange = action.payload as ReportChange;
                if (!draft.reportData[reportChange.templateIndex]) {
                    draft.reportData[reportChange.templateIndex] = {};
                }
                if (!draft.reportData[reportChange.templateIndex].data) {
                    draft.reportData[reportChange.templateIndex].data = {};
                }
                draft.reportData[reportChange.templateIndex].data[reportChange.itemId] =
                    reportChange.itemValue;
                return;
            }
        }
    });
