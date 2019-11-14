import React, { useEffect } from 'react';
import M from 'materialize-css';
import SearchWidget from '../../widgets/SearchWidget';
import DiagnosticsDataHelper from '../../datahelper/DiagnosticsDataHelper';

const Diagnostics = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  });

  const metadata = {
    0: [
      { id: 'requestId', type: 'text', label: 'REQUEST ID', width: 2, values: {}, maxColums: 6 },
      { id: 'customerId', type: 'text', label: 'CUSTOMER ID', width: 2, values: {}, maxColums: 6 },
      { id: 'startDate', type: 'date', label: 'START DATE', width: 2, values: {}, maxColums: 6 },
      { id: 'reportName', type: 'text', label: 'REPORT NAME', width: 2, values: {}, maxColums: 6 },
      {
        id: 'outputType',
        type: 'select',
        label: 'OUTPUT TYPE',
        width: 2,
        values: DiagnosticsDataHelper.getOutputTypes(),
        maxColums: 6
      },
      {
        id: 'applicationId',
        type: 'select',
        label: 'APPLICATION',
        width: 2,
        values: DiagnosticsDataHelper.getApplicationIds(),
        maxColums: 6
      }
    ],
    1: [
      { id: 'userId', type: 'text', label: 'USER ID', width: 2, values: {}, maxColums: 6 },
      { id: 'originalReqId', type: 'text', label: 'ORIG. REQUEST ID', width: 2, values: {}, maxColums: 6 },
      { id: 'endDate', type: 'date', label: 'END DATE', width: 2, values: {}, maxColums: 6 },
      { id: 'accountNumber', type: 'text', label: 'ACCOUNT NUMBER', width: 2, values: {}, maxColums: 6 },
      {
        id: 'reportId',
        type: 'select',
        label: 'REPORT ID',
        width: 2,
        values: DiagnosticsDataHelper.getReportIds(),
        maxColums: 6
      },
      {
        id: 'status',
        type: 'select',
        label: 'STATUS',
        width: 2,
        values: DiagnosticsDataHelper.getStatuses(),
        maxColums: 6
      }
    ],
    2: [
      {
        id: 'deliveryStatus',
        type: 'select',
        label: 'DELIVERY STATUS',
        width: 2,
        values: DiagnosticsDataHelper.getDeliveryStatuses(),
        maxColums: 6
      },
      {
        id: 'retryEnabled',
        type: 'select',
        label: 'RETRY ENABLED',
        width: 2,
        values: DiagnosticsDataHelper.getYesNoAll(),
        maxColums: 6
      },
      {
        id: 'scheduled',
        type: 'select',
        label: 'SCHEDULED',
        width: 2,
        values: DiagnosticsDataHelper.getYesNoAll(),
        maxColums: 6
      }
    ]
  };

  const search = params => {
    console.log({ params });
    let results = getSearchResults(params);
    return {
      size: Object.keys(results).length,
      results: results,
      message: ''
    };
  };

  const emptySearch = params => {
    return {
      size: 0,
      results: {},
      message: 'No data found for the given param search. Please modify the search criteria and try again'
    };
  };

  const getSearchResults = param => {
    return [
      {
        requestId: '20191114064504592_3323214',
        reportName: 'Balance and Transaction Report - Location',
        userId: 'rionly01',
        applicationId: 'RC',
        outputType: 'PDF',
        submissionDate: 'November 14 2019 :45:04 AM',
        completionDate: 'November 14 2019 1:45:07 AM',
        scheduled: true,
        status: 'SUCCESS',
        deliveryStatus: ''
      },
      {
        requestId: '20191114064503510_3323210',
        reportName: 'Balance and Transaction Report - Location',
        userId: 'r9imqanewcp20',
        applicationId: 'RC',
        outputType: 'PDF',
        submissionDate: 'November 14 2019 :45:03 AM',
        completionDate: 'November 14 2019 1:45:08 AM',
        scheduled: true,
        status: 'SUCCESS',
        deliveryStatus: ''
      },
      {
        requestId: '20191114064502213_3323206',
        reportName: 'Balance and Transaction Report - Location',
        userId: 'r9imqanewcp19',
        applicationId: 'RC',
        outputType: 'PDF',
        submissionDate: 'November 14 2019 :45:02 AM',
        completionDate: 'November 14 2019 1:45:08 AM',
        scheduled: true,
        status: 'SUCCESS',
        deliveryStatus: ''
      },
      {
        requestId: '20191114064500877_3323202',
        reportName: 'Balance and Transaction Report - Location',
        userId: 'r9imqanewcp10',
        applicationId: 'RC',
        outputType: 'PDF',
        submissionDate: 'November 14 2019 :45:00 AM',
        completionDate: 'November 14 2019 1:45:08 AM',
        scheduled: true,
        status: 'SUCCESS',
        deliveryStatus: ''
      },
      {
        requestId: '20191114060004420_3323198',
        reportName: 'Balance and Transaction Report - Summary and Detail paul',
        userId: 'r8crux',
        applicationId: 'RC',
        outputType: 'MT940_942',
        submissionDate: 'November 14 2019 1:00:04 AM',
        completionDate: '',
        scheduled: 'true',
        status: 'FAILED',
        deliveryStatus: ''
      },
      {
        requestId: '20191114060003908_3323194',
        reportName: 'Balance and Transaction Report - Summary and Detail paul',
        userId: 'r8crux',
        applicationId: 'RC',
        outputType: 'MT940_942',
        submissionDate: 'November 14 2019 1:00:03 AM',
        completionDate: '',
        scheduled: 'true',
        status: 'FAILED',
        deliveryStatus: ''
      },
      {
        requestId: '20191114042501276_3323190',
        reportName: 'test12',
        userId: 'r7otpuxx',
        applicationId: 'RC',
        outputType: 'PDF',
        submissionDate: 'November 13 2019 1:25:01 PM',
        completionDate: 'November 13 2019 11:25:08 PM',
        scheduled: true,
        status: 'SUCCESS',
        deliveryStatus: ''
      },
      {
        requestId: '20191114041425324_3323186',
        reportName: 'Balance and Transactions Report - Summary',
        userId: 'GLASS_USER',
        applicationId: 'GLAS',
        outputType: 'EXCEL',
        submissionDate: 'November 13 2019 11:14:25 PM',
        completionDate: '',
        scheduled: 'false',
        status: 'FAILED',
        deliveryStatus: ''
      },
      {
        requestId: '20191114040405648_3323182',
        reportName: 'Bal Tran pdf schedule',
        userId: 'r9ais4',
        applicationId: 'RC',
        outputType: 'ISO',
        submissionDate: 'November 13 2019 11:04:05 PM',
        completionDate: '',
        scheduled: 'true',
        status: 'FAILED',
        deliveryStatus: ''
      },
      {
        requestId: '20191114040405040_3323178',
        reportName: 'Bal Tran pdf schedule',
        userId: 'r9ais4',
        applicationId: 'RC',
        outputType: 'ISO',
        submissionDate: 'November 13 2019 11:04:05 PM',
        completionDate: '',
        scheduled: 'true',
        status: 'FAILED',
        deliveryStatus: ''
      },
      {
        requestId: '20191114040404502_3323174',
        reportName: 'Bal Tran pdf schedule',
        userId: 'r9ais4',
        applicationId: 'RC',
        outputType: 'ISO',
        submissionDate: 'November 13 2019 11:04:04 PM',
        completionDate: '',
        scheduled: 'true',
        status: 'FAILED',
        deliveryStatus: ''
      },
      {
        requestId: '20191114040403527_3323170',
        reportName: 'Bal Tran pdf schedule',
        userId: 'r9ais4',
        applicationId: 'RC',
        outputType: 'ISO',
        submissionDate: 'November 13 2019 11:04:03 PM',
        completionDate: '',
        scheduled: 'true',
        status: 'FAILED',
        deliveryStatus: ''
      },
      {
        requestId: '20191114040402699_3323166',
        reportName: 'Bal Tran pdf schedule',
        userId: 'r9ais4',
        applicationId: 'RC',
        outputType: 'ISO',
        submissionDate: 'November 13 2019 11:04:02 PM',
        completionDate: '',
        scheduled: 'true',
        status: 'FAILED',
        deliveryStatus: ''
      },
      {
        requestId: '20191114035302375_3323162',
        reportName: 'Balance and Transaction Report - Summary and Detail MT940',
        userId: 'r9imqanewcp10',
        applicationId: 'RC',
        outputType: 'MT940_942',
        submissionDate: 'November 13 2019 10:53:02 PM',
        completionDate: '',
        scheduled: 'true',
        status: 'FAILED',
        deliveryStatus: ''
      },
      {
        requestId: '20191113231501559_3323158',
        reportName: 'Share To hcqa6u15',
        userId: 'hcqa6u15',
        applicationId: 'RC',
        outputType: 'PDF',
        submissionDate: 'November 13 2019 6:15:01 PM',
        completionDate: '',
        scheduled: 'true',
        status: 'FAILED',
        deliveryStatus: ''
      }
    ];
  };

  return (
    <div>
      <SearchWidget metadata={metadata} title={'DIAGNOSTICS'} search={search} />
    </div>
  );
};

export default Diagnostics;
