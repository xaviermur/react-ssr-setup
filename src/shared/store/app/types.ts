export type Locale = 'en_US' | 'de_DE';

export type ReportChange = {
    templateIndex: integer;
    itemId: string;
    itemValue: string;
    userChange: boolean;
};

export type AppState = Readonly<{
    locale: Locale;
    reportData: ReportDataTemplate[];
}>;

export type Action = {
    type: string;
    payload: any;
};

export type ReportDataTemplate = {
    data: {};
    templateName: string;
    type: string;
    config: ReportDataTemplateConfig;
};
export type ReportDataTemplateConfig = {
    taskId: integer;
    isAddendum: boolean;
    isReadOnly: boolean;
    examTypes: ExamType[];
};
export type ExamType = {
    code: string;
    name: string;
};
