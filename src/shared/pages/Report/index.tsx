import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Items from 'shared/components/Items/items';
import css from './Report.module.css';

import { setReportChange } from 'store/app/actions';
import { ReportChange } from 'store/app/types';

import { useSelector } from 'react-redux';
import { getReportData } from '../../store/app/selectors';

const Page: React.FC<any> = () => {

  const report = [
    {
      "type" : "report",
      "items" : [
        {
          "type" : "header",
          "id" : "clinical_information",
          "default" : "Clinical information",
          "editable" : true
        },
        {
          "type" : "textarea",
          "id" : "clinical_information"
        },
        {
          "type" : "header",
          "id" : "exam_type",
          "default" : "#exam_type#",
          "editable" : true
        },
        {
          "type" : "textarea",
          "id" : "exam_type"
        },
        {
          "type" : "header",
          "id" : "diagnosis",
          "default" : "Diagnosis",
          "editable" : true
        },
        {
          "type" : "textarea",
          "id" : "diagnosis"
        }
      ]
    }
  ];

  const dispatch = useDispatch();
  const reportData = useSelector(getReportData);
  console.debug("reportData",reportData);

  const handleReportChange = (reportChange) => {
    console.debug("handleReportChange",reportChange);
    dispatch(setReportChange(reportChange));
  }

  return (
    <React.Fragment>
      <div className={css.report}>
        { report.map(function(template,templateIndex) {
            return (
              <div className={css.template} key={templateIndex}>
                { template.items.map(function(item,itemIndex) {
                    return Items(
                      item,
                      itemIndex,
                      templateIndex,
                      (itemId,itemValue) => handleReportChange({
                        templateIndex: templateIndex,
                        itemId: itemId,
                        itemValue: itemValue
                      })
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
    </React.Fragment>
  );

}

export default Page;
