/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consultApprovedProjectChangeOrders",
  "pageName": "Consultar alterações aprovadas da obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmConsultApprovedProjectChangeOrdersBase",
  "routePattern": "/buildFlowFsm/consultApprovedProjectChangeOrders",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:consultApprovedProjectChangeOrders",
    "contract:buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject",
    "contract:buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders",
    "contract:buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary"
  ],
  "operationIds": [
    "inspectApprovedChangeOrders",
    "inspectClientBillingSummary",
    "locateProject"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "consultApprovedProjectChangeOrders",
    "workspaceKind": "operation",
    "actor": "client",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "inspectApprovedChangeOrders",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectApprovedChangeOrders.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectClientBillingSummary",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectClientBillingSummary.defs.ts"
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
          "operationId": "inspectApprovedChangeOrders",
          "commandName": "qryInspectApprovedChangeOrders",
          "steps": [
            "Consultar as alterações aprovadas",
            "Ordens aprovadas da obra, descrições e valores estão visíveis."
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
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/consultApprovedProjectChangeOrders.ts",
    "contracts": [
      {
        "commandName": "qryLocateProject",
        "routeConst": "qryLocateProjectRoute"
      },
      {
        "commandName": "qryInspectApprovedChangeOrders",
        "routeConst": "qryInspectApprovedChangeOrdersRoute"
      },
      {
        "commandName": "qryInspectClientBillingSummary",
        "routeConst": "qryInspectClientBillingSummaryRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/consultApprovedProjectChangeOrders.defs.ts",
    "layoutId": "consultApprovedProjectChangeOrders-status-overview"
  },
  "states": [
    {
      "stateKey": "ui.consultApprovedProjectChangeOrders.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status",
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
      "stateKey": "ui.consultApprovedProjectChangeOrders.data.qryLocateProject",
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
      "stateKey": "ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status",
      "name": "qryInspectApprovedChangeOrdersState",
      "kind": "actionStatus",
      "actionRef": "qryInspectApprovedChangeOrders",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId",
      "name": "qryInspectApprovedChangeOrdersChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryInspectApprovedChangeOrders",
        "direction": "input",
        "field": "changeOrderChangeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders",
      "name": "qryInspectApprovedChangeOrdersData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectApprovedChangeOrders",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status",
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
      "stateKey": "ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
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
      "stateKey": "ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary",
      "name": "qryInspectClientBillingSummaryData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectClientBillingSummary",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateProject",
      "kind": "query",
      "commandRef": "qryLocateProject",
      "routeKey": "buildFlowFsm.consultApprovedProjectChangeOrders.qryLocateProject",
      "purpose": "Selecionar a obra que exige atenção",
      "methodName": "loadQryLocateProject",
      "handlerName": "handleQryLocateProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.consultApprovedProjectChangeOrders.data.qryLocateProject"
      ],
      "statusStateKey": "ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status"
    },
    {
      "actionId": "qryInspectApprovedChangeOrders",
      "kind": "query",
      "commandRef": "qryInspectApprovedChangeOrders",
      "routeKey": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders",
      "purpose": "Consultar as alterações aprovadas",
      "methodName": "loadQryInspectApprovedChangeOrders",
      "handlerName": "handleQryInspectApprovedChangeOrdersClick",
      "inputStateKeys": [
        "ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId"
      ],
      "outputStateKeys": [
        "ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders"
      ],
      "statusStateKey": "ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status"
    },
    {
      "actionId": "qryInspectClientBillingSummary",
      "kind": "query",
      "commandRef": "qryInspectClientBillingSummary",
      "routeKey": "buildFlowFsm.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary",
      "purpose": "Consultar o resumo de faturamento",
      "methodName": "loadQryInspectClientBillingSummary",
      "handlerName": "handleQryInspectClientBillingSummaryClick",
      "inputStateKeys": [
        "ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId"
      ],
      "outputStateKeys": [
        "ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary"
      ],
      "statusStateKey": "ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status"
    },
    {
      "actionId": "set.qryInspectApprovedChangeOrdersChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId",
      "methodName": "setQryInspectApprovedChangeOrdersChangeOrderChangeOrderId",
      "handlerName": "handleQryInspectApprovedChangeOrdersChangeOrderChangeOrderIdChange"
    },
    {
      "actionId": "set.qryInspectClientBillingSummaryClientBillingSummaryClientId",
      "kind": "stateSetter",
      "stateKey": "ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
      "methodName": "setQryInspectClientBillingSummaryClientBillingSummaryClientId",
      "handlerName": "handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateProject",
      "stateKey": "ui.consultApprovedProjectChangeOrders.data.qryLocateProject"
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
    "section.consultApprovedProjectChangeOrders.project-context.title": "Obra selecionada",
    "organism.consultApprovedProjectChangeOrders.qryLocateProject.title": "Selecionar a obra que exige atenção",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.title": "Selecionar a obra que exige atenção",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.empty": "Nenhum registro encontrado",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.projectId.label": "Project Id",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.clientId.label": "Client Id",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.name.label": "Name",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.address.label": "Address",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.status.label": "Status",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.consultApprovedProjectChangeOrders.qryLocateProject.list.column.plannedEndDate.label": "Planned End Date",
    "section.consultApprovedProjectChangeOrders.approved-change-orders.title": "Alterações aprovadas",
    "organism.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.title": "Consultar as alterações aprovadas",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.title": "Consultar as alterações aprovadas",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.empty": "Nenhum registro encontrado",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeOrderId.label": "Change Order Id",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.clientRef.label": "Client Ref",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.projectRef.label": "Project Ref",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.description.label": "Description",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scopeImpact.label": "Scope Impact",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.scheduleImpact.label": "Schedule Impact",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.changeAmount.label": "Change Amount",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.submittedAt.label": "Submitted At",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.forwardedForClientApprovalAt.label": "Forwarded For Client Approval At",
    "intent.consultApprovedProjectChangeOrders.qryInspectApprovedChangeOrders.list.column.status.label": "Status",
    "section.consultApprovedProjectChangeOrders.billing-summary.title": "Reflexo no faturamento",
    "organism.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.title": "Consultar o resumo de faturamento",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.title": "Consultar o resumo de faturamento",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.empty": "Nenhum registro encontrado",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientId.label": "Client Id",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.projectId.label": "Project Id",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label": "Approved Change Order References",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoiceReferences.label": "Invoice References",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label": "Approved Change Order Amount",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.billableAmount.label": "Billable Amount",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.invoicedAmount.label": "Invoiced Amount",
    "intent.consultApprovedProjectChangeOrders.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label": "Client Available Amount",
    "section.consultApprovedProjectChangeOrders.projectAndApprovedChanges.title": "Obra e alterações aprovadas",
    "section.consultApprovedProjectChangeOrders.billingImpact.title": "Reflexo no faturamento",
    "section.consultApprovedProjectChangeOrders.approvedChangeOrdersWorkspace.title": "Obra e alterações aprovadas",
    "section.consultApprovedProjectChangeOrders.billingImpactSummary.title": "Reflexo no faturamento"
  },
  "automation": {
    "statePrefix": "ui.consultApprovedProjectChangeOrders",
    "stateKeys": [
      "ui.consultApprovedProjectChangeOrders.status",
      "ui.consultApprovedProjectChangeOrders.action.qryLocateProject.status",
      "ui.consultApprovedProjectChangeOrders.data.qryLocateProject",
      "ui.consultApprovedProjectChangeOrders.action.qryInspectApprovedChangeOrders.status",
      "ui.consultApprovedProjectChangeOrders.input.qryInspectApprovedChangeOrders.changeOrderChangeOrderId",
      "ui.consultApprovedProjectChangeOrders.data.qryInspectApprovedChangeOrders",
      "ui.consultApprovedProjectChangeOrders.action.qryInspectClientBillingSummary.status",
      "ui.consultApprovedProjectChangeOrders.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
      "ui.consultApprovedProjectChangeOrders.data.qryInspectClientBillingSummary"
    ],
    "actionIds": [
      "qryLocateProject",
      "qryInspectApprovedChangeOrders",
      "qryInspectClientBillingSummary",
      "set.qryInspectApprovedChangeOrdersChangeOrderChangeOrderId",
      "set.qryInspectClientBillingSummaryClientBillingSummaryClientId"
    ]
  }
};

export const pipeline = [
  {
    "id": "consultApprovedProjectChangeOrders__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/consultApprovedProjectChangeOrders.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/consultApprovedProjectChangeOrders.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "clientVisibleApprovedChangeOrder",
      "invoiceIncludesApprovedChangeOrdersOnly"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
