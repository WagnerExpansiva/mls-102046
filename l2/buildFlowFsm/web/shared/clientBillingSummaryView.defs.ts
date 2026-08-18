/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientBillingSummaryView",
  "pageName": "Resumo de faturamento do cliente",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmClientBillingSummaryViewBase",
  "routePattern": "/buildFlowFsm/clientBillingSummaryView",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:clientBillingSummaryView",
    "contract:buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView"
  ],
  "operationIds": [
    "inspectClientBillingSummary"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "clientBillingSummaryView",
    "workspaceKind": "landing",
    "actor": "billingStaff",
    "entity": "ClientBillingSummary",
    "owners": [
      {
        "kind": "operation",
        "id": "inspectClientBillingSummary",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectClientBillingSummary.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "inspectClientBillingSummary",
          "commandName": "qryClientBillingSummaryView",
          "steps": [
            "Consultar o reflexo no faturamento",
            "O resumo apresenta alterações aprovadas, faturas e valores."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/clientBillingSummaryView.ts",
    "contracts": [
      {
        "commandName": "qryClientBillingSummaryView",
        "routeConst": "qryClientBillingSummaryViewRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/clientBillingSummaryView.defs.ts",
    "layoutId": "split_detail"
  },
  "states": [
    {
      "stateKey": "ui.clientBillingSummaryView.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status",
      "name": "qryClientBillingSummaryViewState",
      "kind": "actionStatus",
      "actionRef": "qryClientBillingSummaryView",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId",
      "name": "qryClientBillingSummaryViewClientBillingSummaryClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryClientBillingSummaryView",
        "direction": "input",
        "field": "clientBillingSummaryClientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientBillingSummaryView.data.qryClientBillingSummaryView",
      "name": "qryClientBillingSummaryViewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryClientBillingSummaryView",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "qryClientBillingSummaryView",
      "kind": "query",
      "commandRef": "qryClientBillingSummaryView",
      "routeKey": "buildFlowFsm.clientBillingSummaryView.qryClientBillingSummaryView",
      "purpose": "Consultar o resumo de faturamento",
      "methodName": "loadQryClientBillingSummaryView",
      "handlerName": "handleQryClientBillingSummaryViewClick",
      "inputStateKeys": [
        "ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId"
      ],
      "outputStateKeys": [
        "ui.clientBillingSummaryView.data.qryClientBillingSummaryView"
      ],
      "statusStateKey": "ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status"
    },
    {
      "actionId": "set.qryClientBillingSummaryViewClientBillingSummaryClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId",
      "methodName": "setQryClientBillingSummaryViewClientBillingSummaryClientId",
      "handlerName": "handleQryClientBillingSummaryViewClientBillingSummaryClientIdChange"
    }
  ],
  "initialLoads": [],
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
    "section.clientBillingSummaryView.overview.title": "Resumo de faturamento",
    "organism.clientBillingSummaryView.qryClientBillingSummaryView.title": "Consultar o resumo de faturamento",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.title": "Consultar o resumo de faturamento",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty": "Nenhum registro encontrado",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientId.label": "Client Id",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.projectId.label": "Project Id",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label": "Approved Change Order References",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoiceReferences.label": "Invoice References",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label": "Approved Change Order Amount",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.billableAmount.label": "Billable Amount",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoicedAmount.label": "Invoiced Amount",
    "intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientAvailableAmount.label": "Client Available Amount"
  },
  "automation": {
    "statePrefix": "ui.clientBillingSummaryView",
    "stateKeys": [
      "ui.clientBillingSummaryView.status",
      "ui.clientBillingSummaryView.action.qryClientBillingSummaryView.status",
      "ui.clientBillingSummaryView.input.qryClientBillingSummaryView.clientBillingSummaryClientId",
      "ui.clientBillingSummaryView.data.qryClientBillingSummaryView"
    ],
    "actionIds": [
      "qryClientBillingSummaryView",
      "set.qryClientBillingSummaryViewClientBillingSummaryClientId"
    ]
  }
};

export const pipeline = [
  {
    "id": "clientBillingSummaryView__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/clientBillingSummaryView.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
