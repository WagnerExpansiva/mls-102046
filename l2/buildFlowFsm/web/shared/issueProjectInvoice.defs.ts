/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "issueProjectInvoice",
  "pageName": "Emitir fatura da obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmIssueProjectInvoiceBase",
  "routePattern": "/buildFlowFsm/issueProjectInvoice/:projectProjectId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workspace:issueProjectInvoice",
    "contract:buildFlowFsm.issueProjectInvoice.qryLocateClient",
    "contract:buildFlowFsm.issueProjectInvoice.qryLocateProject",
    "contract:buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary",
    "contract:buildFlowFsm.issueProjectInvoice.cmdCreateInvoice",
    "contract:buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient"
  ],
  "operationIds": [
    "createInvoice",
    "handoffInvoiceToClient",
    "inspectClientBillingSummary",
    "locateClient",
    "locateProject"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "issueProjectInvoice",
    "workspaceKind": "workflow",
    "workflowId": "invoiceLifecycle",
    "actor": "billingStaff",
    "entity": "Invoice",
    "owners": [
      {
        "kind": "operation",
        "id": "createInvoice",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createInvoice.defs.ts"
      },
      {
        "kind": "operation",
        "id": "handoffInvoiceToClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffInvoiceToClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectClientBillingSummary",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectClientBillingSummary.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateProject.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createInvoice",
          "commandName": "cmdCreateInvoice",
          "steps": [
            "Emitir a fatura",
            "Uma fatura vinculada ao cliente e à obra fica registrada."
          ]
        },
        {
          "operationId": "handoffInvoiceToClient",
          "commandName": "cmdHandoffInvoiceToClient",
          "steps": [
            "Disponibilizar a fatura ao cliente",
            "O cliente recebe a fatura para consulta."
          ]
        },
        {
          "operationId": "inspectClientBillingSummary",
          "commandName": "qryClientBillingSummaryView",
          "steps": [
            "Consultar o reflexo no faturamento",
            "O resumo apresenta alterações aprovadas, faturas e valores."
          ]
        },
        {
          "operationId": "locateClient",
          "commandName": "qryLocateClient",
          "steps": [
            "Localizar o cliente",
            "Um cliente do catálogo compartilhado está selecionado."
          ]
        },
        {
          "operationId": "locateProject",
          "commandName": "qryLocateProject",
          "steps": [
            "Localizar a própria obra",
            "Uma obra associada ao cliente está selecionada."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/issueProjectInvoice.ts",
    "contracts": [
      {
        "commandName": "qryLocateClient",
        "routeConst": "qryLocateClientRoute"
      },
      {
        "commandName": "qryLocateProject",
        "routeConst": "qryLocateProjectRoute"
      },
      {
        "commandName": "qryInspectClientBillingSummary",
        "routeConst": "qryInspectClientBillingSummaryRoute"
      },
      {
        "commandName": "cmdCreateInvoice",
        "routeConst": "cmdCreateInvoiceRoute"
      },
      {
        "commandName": "cmdHandoffInvoiceToClient",
        "routeConst": "cmdHandoffInvoiceToClientRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/issueProjectInvoice.defs.ts",
    "layoutId": "issueProjectInvoice-workflow-queue"
  },
  "states": [
    {
      "stateKey": "ui.issueProjectInvoice.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.action.qryLocateClient.status",
      "name": "qryLocateClientState",
      "kind": "actionStatus",
      "actionRef": "qryLocateClient",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.issueProjectInvoice.data.qryLocateClient",
      "name": "qryLocateClientData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateClient",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.issueProjectInvoice.action.qryLocateProject.status",
      "name": "qryLocateProjectState",
      "kind": "actionStatus",
      "actionRef": "qryLocateProject",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.issueProjectInvoice.data.qryLocateProject",
      "name": "qryLocateProjectData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateProject",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status",
      "name": "qryInspectClientBillingSummaryState",
      "kind": "actionStatus",
      "actionRef": "qryInspectClientBillingSummary",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
      "name": "qryInspectClientBillingSummaryClientBillingSummaryClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryInspectClientBillingSummary",
        "direction": "input",
        "field": "clientBillingSummaryClientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.data.qryInspectClientBillingSummary",
      "name": "qryInspectClientBillingSummaryData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectClientBillingSummary",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.issueProjectInvoice.action.cmdCreateInvoice.status",
      "name": "cmdCreateInvoiceState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateInvoice",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId",
      "name": "cmdCreateInvoiceClientClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "input",
        "field": "clientClientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId",
      "name": "cmdCreateInvoiceProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference",
      "name": "cmdCreateInvoiceCommercialReference",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "input",
        "field": "commercialReference"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.amount",
      "name": "cmdCreateInvoiceAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "input",
        "field": "amount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.output.cmdCreateInvoice",
      "name": "cmdCreateInvoiceOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateInvoice",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.issueProjectInvoice.action.cmdCreateInvoice.error",
      "name": "cmdCreateInvoiceError",
      "kind": "actionError",
      "actionRef": "cmdCreateInvoice",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status",
      "name": "cmdHandoffInvoiceToClientState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffInvoiceToClient",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId",
      "name": "cmdHandoffInvoiceToClientInvoiceInvoiceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffInvoiceToClient",
        "direction": "input",
        "field": "invoiceInvoiceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference",
      "name": "cmdHandoffInvoiceToClientCommercialReference",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffInvoiceToClient",
        "direction": "input",
        "field": "commercialReference"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount",
      "name": "cmdHandoffInvoiceToClientAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffInvoiceToClient",
        "direction": "input",
        "field": "amount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient",
      "name": "cmdHandoffInvoiceToClientOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffInvoiceToClient",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.error",
      "name": "cmdHandoffInvoiceToClientError",
      "kind": "actionError",
      "actionRef": "cmdHandoffInvoiceToClient",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateClient",
      "kind": "query",
      "commandRef": "qryLocateClient",
      "routeKey": "buildFlowFsm.issueProjectInvoice.qryLocateClient",
      "purpose": "Localizar o cliente",
      "methodName": "loadQryLocateClient",
      "handlerName": "handleQryLocateClientClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.issueProjectInvoice.data.qryLocateClient"
      ],
      "statusStateKey": "ui.issueProjectInvoice.action.qryLocateClient.status"
    },
    {
      "actionId": "qryLocateProject",
      "kind": "query",
      "commandRef": "qryLocateProject",
      "routeKey": "buildFlowFsm.issueProjectInvoice.qryLocateProject",
      "purpose": "Selecionar a obra que exige atenção",
      "methodName": "loadQryLocateProject",
      "handlerName": "handleQryLocateProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.issueProjectInvoice.data.qryLocateProject"
      ],
      "statusStateKey": "ui.issueProjectInvoice.action.qryLocateProject.status"
    },
    {
      "actionId": "qryInspectClientBillingSummary",
      "kind": "query",
      "commandRef": "qryInspectClientBillingSummary",
      "routeKey": "buildFlowFsm.issueProjectInvoice.qryInspectClientBillingSummary",
      "purpose": "Consultar o resumo de faturamento",
      "methodName": "loadQryInspectClientBillingSummary",
      "handlerName": "handleQryInspectClientBillingSummaryClick",
      "inputStateKeys": [
        "ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId"
      ],
      "outputStateKeys": [
        "ui.issueProjectInvoice.data.qryInspectClientBillingSummary"
      ],
      "statusStateKey": "ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status"
    },
    {
      "actionId": "cmdCreateInvoice",
      "kind": "command",
      "commandRef": "cmdCreateInvoice",
      "routeKey": "buildFlowFsm.issueProjectInvoice.cmdCreateInvoice",
      "purpose": "Emitir a fatura",
      "methodName": "cmdCreateInvoice",
      "handlerName": "handleCmdCreateInvoiceClick",
      "inputStateKeys": [
        "ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId",
        "ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId",
        "ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference",
        "ui.issueProjectInvoice.input.cmdCreateInvoice.amount"
      ],
      "routeParamInputStateKeys": [
        "ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId"
      ],
      "outputStateKeys": [
        "ui.issueProjectInvoice.output.cmdCreateInvoice"
      ],
      "statusStateKey": "ui.issueProjectInvoice.action.cmdCreateInvoice.status",
      "errorStateKey": "ui.issueProjectInvoice.action.cmdCreateInvoice.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateInvoice.success",
        "errorMessageKey": "action.cmdCreateInvoice.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId",
        "ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference",
        "ui.issueProjectInvoice.input.cmdCreateInvoice.amount"
      ],
      "refreshActionIds": [
        "qryLocateClient",
        "qryLocateProject",
        "qryInspectClientBillingSummary"
      ]
    },
    {
      "actionId": "cmdHandoffInvoiceToClient",
      "kind": "command",
      "commandRef": "cmdHandoffInvoiceToClient",
      "routeKey": "buildFlowFsm.issueProjectInvoice.cmdHandoffInvoiceToClient",
      "purpose": "Disponibilizar a fatura ao cliente",
      "methodName": "cmdHandoffInvoiceToClient",
      "handlerName": "handleCmdHandoffInvoiceToClientClick",
      "inputStateKeys": [
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId",
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference",
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId"
      ],
      "outputStateKeys": [
        "ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient"
      ],
      "statusStateKey": "ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status",
      "errorStateKey": "ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffInvoiceToClient.success",
        "errorMessageKey": "action.cmdHandoffInvoiceToClient.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId",
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference",
        "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount"
      ],
      "refreshActionIds": [
        "qryLocateClient",
        "qryLocateProject",
        "qryInspectClientBillingSummary"
      ]
    },
    {
      "actionId": "set.qryInspectClientBillingSummaryClientBillingSummaryClientId",
      "kind": "stateSetter",
      "stateKey": "ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
      "methodName": "setQryInspectClientBillingSummaryClientBillingSummaryClientId",
      "handlerName": "handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange"
    },
    {
      "actionId": "set.cmdCreateInvoiceClientClientId",
      "kind": "stateSetter",
      "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId",
      "methodName": "setCmdCreateInvoiceClientClientId",
      "handlerName": "handleCmdCreateInvoiceClientClientIdChange"
    },
    {
      "actionId": "set.cmdCreateInvoiceProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId",
      "methodName": "setCmdCreateInvoiceProjectProjectId",
      "handlerName": "handleCmdCreateInvoiceProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateInvoiceCommercialReference",
      "kind": "stateSetter",
      "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference",
      "methodName": "setCmdCreateInvoiceCommercialReference",
      "handlerName": "handleCmdCreateInvoiceCommercialReferenceChange"
    },
    {
      "actionId": "set.cmdCreateInvoiceAmount",
      "kind": "stateSetter",
      "stateKey": "ui.issueProjectInvoice.input.cmdCreateInvoice.amount",
      "methodName": "setCmdCreateInvoiceAmount",
      "handlerName": "handleCmdCreateInvoiceAmountChange"
    },
    {
      "actionId": "set.cmdHandoffInvoiceToClientInvoiceInvoiceId",
      "kind": "stateSetter",
      "stateKey": "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId",
      "methodName": "setCmdHandoffInvoiceToClientInvoiceInvoiceId",
      "handlerName": "handleCmdHandoffInvoiceToClientInvoiceInvoiceIdChange"
    },
    {
      "actionId": "set.cmdHandoffInvoiceToClientCommercialReference",
      "kind": "stateSetter",
      "stateKey": "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference",
      "methodName": "setCmdHandoffInvoiceToClientCommercialReference",
      "handlerName": "handleCmdHandoffInvoiceToClientCommercialReferenceChange"
    },
    {
      "actionId": "set.cmdHandoffInvoiceToClientAmount",
      "kind": "stateSetter",
      "stateKey": "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount",
      "methodName": "setCmdHandoffInvoiceToClientAmount",
      "handlerName": "handleCmdHandoffInvoiceToClientAmountChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateClient",
      "stateKey": "ui.issueProjectInvoice.data.qryLocateClient"
    },
    {
      "actionId": "qryLocateProject",
      "stateKey": "ui.issueProjectInvoice.data.qryLocateProject"
    }
  ],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt",
      "en",
      "es"
    ],
    "runtimeLocales": [
      "pt-br",
      "en",
      "es"
    ]
  },
  "i18n": {
    "section.issueProjectInvoice.locateClient.title": "Localizar cliente",
    "organism.issueProjectInvoice.qryLocateClient.title": "Localizar o cliente",
    "intent.issueProjectInvoice.qryLocateClient.list.title": "Localizar o cliente",
    "intent.issueProjectInvoice.qryLocateClient.list.empty": "Nenhum registro encontrado",
    "intent.issueProjectInvoice.qryLocateClient.list.column.clientId.label": "Client Id",
    "intent.issueProjectInvoice.qryLocateClient.list.column.clientName.label": "Client Name",
    "intent.issueProjectInvoice.qryLocateClient.list.column.contactEmail.label": "Contact Email",
    "intent.issueProjectInvoice.qryLocateClient.list.column.contactPhone.label": "Contact Phone",
    "section.issueProjectInvoice.locateProject.title": "Selecionar obra",
    "organism.issueProjectInvoice.qryLocateProject.title": "Selecionar a obra que exige atenção",
    "intent.issueProjectInvoice.qryLocateProject.list.title": "Selecionar a obra que exige atenção",
    "intent.issueProjectInvoice.qryLocateProject.list.empty": "Nenhum registro encontrado",
    "intent.issueProjectInvoice.qryLocateProject.list.column.projectId.label": "Project Id",
    "intent.issueProjectInvoice.qryLocateProject.list.column.clientId.label": "Client Id",
    "intent.issueProjectInvoice.qryLocateProject.list.column.name.label": "Name",
    "intent.issueProjectInvoice.qryLocateProject.list.column.address.label": "Address",
    "intent.issueProjectInvoice.qryLocateProject.list.column.status.label": "Status",
    "intent.issueProjectInvoice.qryLocateProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.issueProjectInvoice.qryLocateProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.issueProjectInvoice.qryLocateProject.list.column.plannedEndDate.label": "Planned End Date",
    "section.issueProjectInvoice.inspectClientBillingSummary.title": "Resumo de faturamento",
    "organism.issueProjectInvoice.qryInspectClientBillingSummary.title": "Consultar o resumo de faturamento",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.title": "Consultar o resumo de faturamento",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.empty": "Nenhum registro encontrado",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientId.label": "Client Id",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.projectId.label": "Project Id",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label": "Approved Change Order References",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoiceReferences.label": "Invoice References",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label": "Approved Change Order Amount",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.billableAmount.label": "Billable Amount",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.invoicedAmount.label": "Invoiced Amount",
    "intent.issueProjectInvoice.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label": "Client Available Amount",
    "section.issueProjectInvoice.createInvoice.title": "Emitir fatura",
    "organism.issueProjectInvoice.cmdCreateInvoice.title": "Emitir a fatura",
    "intent.issueProjectInvoice.cmdCreateInvoice.form.title": "Emitir a fatura",
    "intent.issueProjectInvoice.cmdCreateInvoice.form.action.cmdCreateInvoice": "Emitir a fatura",
    "intent.issueProjectInvoice.cmdCreateInvoice.form.field.commercialReference.label": "Commercial Reference",
    "intent.issueProjectInvoice.cmdCreateInvoice.form.field.amount.label": "Amount",
    "section.issueProjectInvoice.handoffInvoiceToClient.title": "Disponibilizar ao cliente",
    "organism.issueProjectInvoice.cmdHandoffInvoiceToClient.title": "Disponibilizar a fatura ao cliente",
    "intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.title": "Disponibilizar a fatura ao cliente",
    "intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.action.cmdHandoffInvoiceToClient": "Disponibilizar a fatura ao cliente",
    "intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.commercialReference.label": "Commercial Reference",
    "intent.issueProjectInvoice.cmdHandoffInvoiceToClient.form.field.amount.label": "Amount",
    "action.cmdCreateInvoice.success": "Emitir a fatura: OK",
    "action.cmdCreateInvoice.error": "Emitir a fatura: falhou",
    "action.cmdHandoffInvoiceToClient.success": "Disponibilizar a fatura ao cliente: OK",
    "action.cmdHandoffInvoiceToClient.error": "Disponibilizar a fatura ao cliente: falhou",
    "section.issueProjectInvoice.billing-context.title": "Contexto de faturamento",
    "section.issueProjectInvoice.invoice-issuance.title": "Emissão da fatura",
    "section.issueProjectInvoice.invoice-handoff.title": "Disponibilização ao cliente",
    "section.issueProjectInvoice.invoicePreparation.title": "Preparar emissão",
    "section.issueProjectInvoice.invoiceHandoff.title": "Disponibilizar ao cliente"
  },
  "automation": {
    "statePrefix": "ui.issueProjectInvoice",
    "stateKeys": [
      "ui.issueProjectInvoice.status",
      "ui.issueProjectInvoice.action.qryLocateClient.status",
      "ui.issueProjectInvoice.data.qryLocateClient",
      "ui.issueProjectInvoice.action.qryLocateProject.status",
      "ui.issueProjectInvoice.data.qryLocateProject",
      "ui.issueProjectInvoice.action.qryInspectClientBillingSummary.status",
      "ui.issueProjectInvoice.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
      "ui.issueProjectInvoice.data.qryInspectClientBillingSummary",
      "ui.issueProjectInvoice.action.cmdCreateInvoice.status",
      "ui.issueProjectInvoice.input.cmdCreateInvoice.clientClientId",
      "ui.issueProjectInvoice.input.cmdCreateInvoice.projectProjectId",
      "ui.issueProjectInvoice.input.cmdCreateInvoice.commercialReference",
      "ui.issueProjectInvoice.input.cmdCreateInvoice.amount",
      "ui.issueProjectInvoice.output.cmdCreateInvoice",
      "ui.issueProjectInvoice.action.cmdCreateInvoice.error",
      "ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.status",
      "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.invoiceInvoiceId",
      "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.commercialReference",
      "ui.issueProjectInvoice.input.cmdHandoffInvoiceToClient.amount",
      "ui.issueProjectInvoice.output.cmdHandoffInvoiceToClient",
      "ui.issueProjectInvoice.action.cmdHandoffInvoiceToClient.error"
    ],
    "actionIds": [
      "qryLocateClient",
      "qryLocateProject",
      "qryInspectClientBillingSummary",
      "cmdCreateInvoice",
      "cmdHandoffInvoiceToClient",
      "set.qryInspectClientBillingSummaryClientBillingSummaryClientId",
      "set.cmdCreateInvoiceClientClientId",
      "set.cmdCreateInvoiceProjectProjectId",
      "set.cmdCreateInvoiceCommercialReference",
      "set.cmdCreateInvoiceAmount",
      "set.cmdHandoffInvoiceToClientInvoiceInvoiceId",
      "set.cmdHandoffInvoiceToClientCommercialReference",
      "set.cmdHandoffInvoiceToClientAmount"
    ]
  }
};

export const pipeline = [
  {
    "id": "issueProjectInvoice__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/issueProjectInvoice.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/issueProjectInvoice.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly",
      "invoiceRequiresClientAndProject",
      "clientVisibleInvoice"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
