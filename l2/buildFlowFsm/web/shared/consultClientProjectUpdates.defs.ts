/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consultClientProjectUpdates",
  "pageName": "Consultar status e faturamento da obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmConsultClientProjectUpdatesBase",
  "routePattern": "/buildFlowFsm/consultClientProjectUpdates",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:consultClientProjectUpdates",
    "contract:buildFlowFsm.consultClientProjectUpdates.qryLocateProject",
    "contract:buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport",
    "contract:buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary"
  ],
  "operationIds": [
    "inspectClientBillingSummary",
    "inspectStatusReport",
    "locateProject"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "consultClientProjectUpdates",
    "workspaceKind": "operation",
    "actor": "client",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "inspectClientBillingSummary",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectClientBillingSummary.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectStatusReport",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectStatusReport.defs.ts"
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
          "operationId": "inspectClientBillingSummary",
          "commandName": "qryClientBillingSummaryView",
          "steps": [
            "Consultar o reflexo no faturamento",
            "O resumo apresenta alterações aprovadas, faturas e valores."
          ]
        },
        {
          "operationId": "inspectStatusReport",
          "commandName": "qryInspectStatusReport",
          "steps": [
            "Consultar o relatório de status publicado",
            "O relatório publicado, incluindo riscos comunicados, está visível."
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
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/consultClientProjectUpdates.ts",
    "contracts": [
      {
        "commandName": "qryLocateProject",
        "routeConst": "qryLocateProjectRoute"
      },
      {
        "commandName": "qryInspectStatusReport",
        "routeConst": "qryInspectStatusReportRoute"
      },
      {
        "commandName": "qryInspectClientBillingSummary",
        "routeConst": "qryInspectClientBillingSummaryRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/consultClientProjectUpdates.defs.ts",
    "layoutId": "consultClientProjectUpdates-status-overview"
  },
  "states": [
    {
      "stateKey": "ui.consultClientProjectUpdates.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.consultClientProjectUpdates.action.qryLocateProject.status",
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
      "stateKey": "ui.consultClientProjectUpdates.data.qryLocateProject",
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
      "stateKey": "ui.consultClientProjectUpdates.action.qryInspectStatusReport.status",
      "name": "qryInspectStatusReportState",
      "kind": "actionStatus",
      "actionRef": "qryInspectStatusReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.consultClientProjectUpdates.input.qryInspectStatusReport.statusReportStatusReportId",
      "name": "qryInspectStatusReportStatusReportStatusReportId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryInspectStatusReport",
        "direction": "input",
        "field": "statusReportStatusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.consultClientProjectUpdates.data.qryInspectStatusReport",
      "name": "qryInspectStatusReportData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectStatusReport",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.consultClientProjectUpdates.action.qryInspectClientBillingSummary.status",
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
      "stateKey": "ui.consultClientProjectUpdates.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
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
      "stateKey": "ui.consultClientProjectUpdates.data.qryInspectClientBillingSummary",
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
      "routeKey": "buildFlowFsm.consultClientProjectUpdates.qryLocateProject",
      "purpose": "Selecionar a obra que exige atenção",
      "methodName": "loadQryLocateProject",
      "handlerName": "handleQryLocateProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.consultClientProjectUpdates.data.qryLocateProject"
      ],
      "statusStateKey": "ui.consultClientProjectUpdates.action.qryLocateProject.status"
    },
    {
      "actionId": "qryInspectStatusReport",
      "kind": "query",
      "commandRef": "qryInspectStatusReport",
      "routeKey": "buildFlowFsm.consultClientProjectUpdates.qryInspectStatusReport",
      "purpose": "Consultar o relatório de status publicado",
      "methodName": "loadQryInspectStatusReport",
      "handlerName": "handleQryInspectStatusReportClick",
      "inputStateKeys": [
        "ui.consultClientProjectUpdates.input.qryInspectStatusReport.statusReportStatusReportId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.consultClientProjectUpdates.input.qryInspectStatusReport.statusReportStatusReportId"
      ],
      "outputStateKeys": [
        "ui.consultClientProjectUpdates.data.qryInspectStatusReport"
      ],
      "statusStateKey": "ui.consultClientProjectUpdates.action.qryInspectStatusReport.status"
    },
    {
      "actionId": "qryInspectClientBillingSummary",
      "kind": "query",
      "commandRef": "qryInspectClientBillingSummary",
      "routeKey": "buildFlowFsm.consultClientProjectUpdates.qryInspectClientBillingSummary",
      "purpose": "Consultar o resumo de faturamento",
      "methodName": "loadQryInspectClientBillingSummary",
      "handlerName": "handleQryInspectClientBillingSummaryClick",
      "inputStateKeys": [
        "ui.consultClientProjectUpdates.input.qryInspectClientBillingSummary.clientBillingSummaryClientId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.consultClientProjectUpdates.input.qryInspectClientBillingSummary.clientBillingSummaryClientId"
      ],
      "outputStateKeys": [
        "ui.consultClientProjectUpdates.data.qryInspectClientBillingSummary"
      ],
      "statusStateKey": "ui.consultClientProjectUpdates.action.qryInspectClientBillingSummary.status"
    },
    {
      "actionId": "set.qryInspectStatusReportStatusReportStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.consultClientProjectUpdates.input.qryInspectStatusReport.statusReportStatusReportId",
      "methodName": "setQryInspectStatusReportStatusReportStatusReportId",
      "handlerName": "handleQryInspectStatusReportStatusReportStatusReportIdChange"
    },
    {
      "actionId": "set.qryInspectClientBillingSummaryClientBillingSummaryClientId",
      "kind": "stateSetter",
      "stateKey": "ui.consultClientProjectUpdates.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
      "methodName": "setQryInspectClientBillingSummaryClientBillingSummaryClientId",
      "handlerName": "handleQryInspectClientBillingSummaryClientBillingSummaryClientIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateProject",
      "stateKey": "ui.consultClientProjectUpdates.data.qryLocateProject"
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
    "section.consultClientProjectUpdates.locateProject.title": "Obra selecionada",
    "organism.consultClientProjectUpdates.qryLocateProject.title": "Selecionar a obra que exige atenção",
    "intent.consultClientProjectUpdates.qryLocateProject.list.title": "Selecionar a obra que exige atenção",
    "intent.consultClientProjectUpdates.qryLocateProject.list.empty": "Nenhum registro encontrado",
    "intent.consultClientProjectUpdates.qryLocateProject.list.column.projectId.label": "Project Id",
    "intent.consultClientProjectUpdates.qryLocateProject.list.column.clientId.label": "Client Id",
    "intent.consultClientProjectUpdates.qryLocateProject.list.column.name.label": "Name",
    "intent.consultClientProjectUpdates.qryLocateProject.list.column.address.label": "Address",
    "intent.consultClientProjectUpdates.qryLocateProject.list.column.status.label": "Status",
    "intent.consultClientProjectUpdates.qryLocateProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.consultClientProjectUpdates.qryLocateProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.consultClientProjectUpdates.qryLocateProject.list.column.plannedEndDate.label": "Planned End Date",
    "section.consultClientProjectUpdates.inspectStatusReport.title": "Atualizações da obra",
    "organism.consultClientProjectUpdates.qryInspectStatusReport.title": "Consultar o relatório de status publicado",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.title": "Consultar o relatório de status publicado",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.empty": "Nenhum registro encontrado",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.statusReportId.label": "Status Report Id",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.projectId.label": "Project Id",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.status.label": "Status",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.title.label": "Title",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.content.label": "Content",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.communicatedRisks.label": "Communicated Risks",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.generatedAt.label": "Generated At",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.generatedByUserId.label": "Generated By User Id",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.publishedAt.label": "Published At",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.publishedByUserId.label": "Published By User Id",
    "intent.consultClientProjectUpdates.qryInspectStatusReport.list.column.withdrawnAt.label": "Withdrawn At",
    "section.consultClientProjectUpdates.inspectClientBillingSummary.title": "Resumo de faturamento",
    "organism.consultClientProjectUpdates.qryInspectClientBillingSummary.title": "Consultar o resumo de faturamento",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.title": "Consultar o resumo de faturamento",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.empty": "Nenhum registro encontrado",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.clientId.label": "Client Id",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.projectId.label": "Project Id",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderReferences.label": "Approved Change Order References",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoiceReferences.label": "Invoice References",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.approvedChangeOrderAmount.label": "Approved Change Order Amount",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.billableAmount.label": "Billable Amount",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.invoicedAmount.label": "Invoiced Amount",
    "intent.consultClientProjectUpdates.qryInspectClientBillingSummary.list.column.clientAvailableAmount.label": "Client Available Amount",
    "section.consultClientProjectUpdates.projectContextSection.title": "Obra selecionada",
    "section.consultClientProjectUpdates.projectUpdatesSection.title": "Atualizações da obra",
    "section.consultClientProjectUpdates.projectOverview.title": "Obra selecionada",
    "section.consultClientProjectUpdates.projectInsights.title": "Visão da obra"
  },
  "automation": {
    "statePrefix": "ui.consultClientProjectUpdates",
    "stateKeys": [
      "ui.consultClientProjectUpdates.status",
      "ui.consultClientProjectUpdates.action.qryLocateProject.status",
      "ui.consultClientProjectUpdates.data.qryLocateProject",
      "ui.consultClientProjectUpdates.action.qryInspectStatusReport.status",
      "ui.consultClientProjectUpdates.input.qryInspectStatusReport.statusReportStatusReportId",
      "ui.consultClientProjectUpdates.data.qryInspectStatusReport",
      "ui.consultClientProjectUpdates.action.qryInspectClientBillingSummary.status",
      "ui.consultClientProjectUpdates.input.qryInspectClientBillingSummary.clientBillingSummaryClientId",
      "ui.consultClientProjectUpdates.data.qryInspectClientBillingSummary"
    ],
    "actionIds": [
      "qryLocateProject",
      "qryInspectStatusReport",
      "qryInspectClientBillingSummary",
      "set.qryInspectStatusReportStatusReportStatusReportId",
      "set.qryInspectClientBillingSummaryClientBillingSummaryClientId"
    ]
  }
};

export const pipeline = [
  {
    "id": "consultClientProjectUpdates__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/consultClientProjectUpdates.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/consultClientProjectUpdates.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "clientVisibleStatusReport",
      "invoiceIncludesApprovedChangeOrdersOnly"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
