export default {
  getOutputTypes: function() {
    return Object.assign({}, ['ALL', 'PDF', 'EXCEL', 'EXCEL2', 'SSEXCEL', 'TXT', 'ONLINE', 'CSV', 'BAI2', 'X12_820', 'MT940_942', 'OFX', 'ISO', 'ISO54', 'BTR3', 'XML'])
  },
  getStatuses: function() {
    return Object.assign({}, ['ALL', 'SUCCESS', 'PENDING', 'FIRST_PAGE_READY', 'FAILED', 'NO_DATA']);

  },
  getYesNoAll: function() {
    return Object.assign({}, ['ALL', 'YES', 'NO'])
  },
  getApplicationIds: function() {
    return {
      ALL: 'ALL',
      APAC_AD: 'APAC Advice',
      AC: 'Admin center',
      COL: 'Cash Online',
      ESCROW: 'Escrow',
      ERE: 'Enterprise Reports',
      GLAS: 'Global Liquidity & Acount Services',
      HPP: 'HPP',
      LIQ: 'Liquidity',
      CMS: 'Merchant Services',
      RC: 'Report Center',
      TEST: 'Test App',
      TS: 'Transaction Services'
    }
  },
  getDeliveryStatuses: function() {
    return Object.assign({}, ['','Email Error', 'PaperMail Error', 'IVault Error', 'H2H Error']);
  },
  getReportIds: function() {
    const reportIds = ['ALL', 'AMPM Report', 'Account Statement', 'Admin center LES Report', 'ApprovalRuleReport', 'Audit', 'BalTranDate', 'BalTranDatePotrait', 'BalTranLocation', 'BalTranLocationPotrait', 'BalTranTransaction', 'BalTranTransactionPortrait', 'BalTranValueDate', 'BalTranValueDatePotrait', 'Balance and Transaction Report', 'BaltranStatement', 'BatchDetail', 'Benefeciary Branch_Activity Detail', 'Benefeciary Payment Detail', 'Beneficiary Advice', 'CUSTC002', 'CUSTR090 GLE', 'CUSTR091 GLE', 'CUSTR092 GLE', 'CUSTR093 RBLM', 'CUSTR094 GLE', 'CUSTR095 GLE', 'CUSTR097', 'CUSTR097_XLS', 'Cancel Advice', 'CategoryReport', 'CheckDraftCollections', 'CheckStatusLandscape', 'CheckStatusPortrait', 'ChecksPaid', 'China Credit Advice', 'China Debit Advice', 'ColTemplateDetail', 'ControlledDisbursement', 'Deposit Activity Summary Report', 'DirectDebit', 'EDI', 'Entitlement Configurable Report', 'EntitlementReport', 'Event', 'FileDetail', 'GPX Payment Status Report', 'General Report', 'Grid Export', 'HPPFileRecapDetail', 'HPPFileRecapSummary', 'HPPFileTransactionDetail', 'InteractiveFundsTransferExtract', 'InteractiveITCPayment', 'InteractiveITCTemplate', 'InteractiveTransactionDetail', 'Interest Statement', 'Investment Holdings', 'Korea FX Certificate', 'Local Language Statement', 'MatrixApprovalGroup', 'MatrixApprovalTable', 'Maturity Advice', 'MerchantChargebackActivityReport', 'MerchantServiceChargeDetailReport', 'MerchantTransactionsDetailReport', 'Payment Detail Enhanced report', 'PaymentDetail', 'PaymentElectronicReceipt', 'PaymentSummary', 'Placement Advice', 'Pooling - CUSTP001', 'Pooling - CUSTP006', 'Pooling - CUSTP007', 'Pooling - CUSTP009', 'Pooling - CUSTP011', 'Pooling - CUSTP012', 'Pooling - Cash Forecast', 'Pooling - Daily Pool and Participant Summary', 'Pooling - Daily Summary', 'Pooling - Generate Account Interest Statement Report', 'Pooling - Multi Currency Cash Forecast', 'Pooling - Multi Currency Pool and Participant Summary', 'PostDatedCheck', 'RequestReport', 'ReturnsAndExceptions', 'Standard Credit Advice', 'Standard Debit Advice', 'Standard Incoming MT103 Advice', 'Standard Outgoing MT103 Advice', 'StandardCollections', 'TEST_demo', 'TemplateDetail', 'TemplateSummary', 'TransactionList', 'UserApproverAuthorityReport', 'UserEntitlements', 'UserEntitlementsInvoker', 'Virtual Account Balance And Interest Interco (VTA/VSA)', 'WireDetail', 'WithholdingTaxReport'];
    return Object.assign({}, reportIds);
  }
}