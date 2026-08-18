/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "statusReportCatalogue",
  "pageName": "Relatório de status",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmStatusReportCatalogueBase",
  "routePattern": "/buildFlowFsm/statusReportCatalogue/:projectProjectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:statusReportCatalogue",
    "contract:buildFlowFsm.statusReportCatalogue.qryListStatusReport",
    "contract:buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport",
    "contract:buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport",
    "contract:buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport",
    "contract:buildFlowFsm.statusReportCatalogue.qryProjectPicker"
  ],
  "operationIds": [
    "createStatusReport",
    "deleteStatusReport",
    "listProject",
    "listStatusReport",
    "updateStatusReport"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "statusReportCatalogue",
    "workspaceKind": "operation",
    "actor": "client",
    "entity": "StatusReport",
    "owners": [
      {
        "kind": "operation",
        "id": "createStatusReport",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createStatusReport.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteStatusReport",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteStatusReport.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listStatusReport",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listStatusReport.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateStatusReport",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateStatusReport.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createStatusReport",
          "commandName": "cmdCreateStatusReport",
          "steps": [
            "Gerar relatório profissional de status",
            "Um relatório baseado nos dados da obra fica gerado para revisão."
          ]
        },
        {
          "operationId": "deleteStatusReport",
          "commandName": "cmdDeleteStatusReport",
          "steps": [
            "Remover o registro escolhido."
          ]
        },
        {
          "operationId": "listProject",
          "commandName": "qryProjectPicker",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "listStatusReport",
          "commandName": "qryListStatusReport",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "updateStatusReport",
          "commandName": "cmdUpdateStatusReport",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/statusReportCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListStatusReport",
        "routeConst": "qryListStatusReportRoute"
      },
      {
        "commandName": "cmdCreateStatusReport",
        "routeConst": "cmdCreateStatusReportRoute"
      },
      {
        "commandName": "cmdUpdateStatusReport",
        "routeConst": "cmdUpdateStatusReportRoute"
      },
      {
        "commandName": "cmdDeleteStatusReport",
        "routeConst": "cmdDeleteStatusReportRoute"
      },
      {
        "commandName": "qryProjectPicker",
        "routeConst": "qryProjectPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/statusReportCatalogue.defs.ts",
    "layoutId": "statusReportCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.statusReportCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.action.qryListStatusReport.status",
      "name": "qryListStatusReportState",
      "kind": "actionStatus",
      "actionRef": "qryListStatusReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.statusReportCatalogue.data.qryListStatusReport",
      "name": "qryListStatusReportData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListStatusReport",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.statusReportCatalogue.action.cmdCreateStatusReport.status",
      "name": "cmdCreateStatusReportState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateStatusReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectProjectId",
      "name": "cmdCreateStatusReportProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdCreateStatusReport",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
      "name": "cmdCreateStatusReportProjectExecutionOverviewProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateStatusReport",
        "direction": "input",
        "field": "projectExecutionOverviewProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.title",
      "name": "cmdCreateStatusReportTitle",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateStatusReport",
        "direction": "input",
        "field": "title"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.content",
      "name": "cmdCreateStatusReportContent",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateStatusReport",
        "direction": "input",
        "field": "content"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.communicatedRisks",
      "name": "cmdCreateStatusReportCommunicatedRisks",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateStatusReport",
        "direction": "input",
        "field": "communicatedRisks"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.generatedByUserId",
      "name": "cmdCreateStatusReportGeneratedByUserId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateStatusReport",
        "direction": "input",
        "field": "generatedByUserId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.publishedByUserId",
      "name": "cmdCreateStatusReportPublishedByUserId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateStatusReport",
        "direction": "input",
        "field": "publishedByUserId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.output.cmdCreateStatusReport",
      "name": "cmdCreateStatusReportOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateStatusReport",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.statusReportCatalogue.action.cmdCreateStatusReport.error",
      "name": "cmdCreateStatusReportError",
      "kind": "actionError",
      "actionRef": "cmdCreateStatusReport",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.action.cmdUpdateStatusReport.status",
      "name": "cmdUpdateStatusReportState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateStatusReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.statusReportId",
      "name": "cmdUpdateStatusReportStatusReportId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "statusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.projectId",
      "name": "cmdUpdateStatusReportProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.status",
      "name": "cmdUpdateStatusReportStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.title",
      "name": "cmdUpdateStatusReportTitle",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "title"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.content",
      "name": "cmdUpdateStatusReportContent",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "content"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.communicatedRisks",
      "name": "cmdUpdateStatusReportCommunicatedRisks",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "communicatedRisks"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedAt",
      "name": "cmdUpdateStatusReportGeneratedAt",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "generatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedByUserId",
      "name": "cmdUpdateStatusReportGeneratedByUserId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "generatedByUserId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedAt",
      "name": "cmdUpdateStatusReportPublishedAt",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "publishedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedByUserId",
      "name": "cmdUpdateStatusReportPublishedByUserId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "publishedByUserId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.withdrawnAt",
      "name": "cmdUpdateStatusReportWithdrawnAt",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "input",
        "field": "withdrawnAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.output.cmdUpdateStatusReport",
      "name": "cmdUpdateStatusReportOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateStatusReport",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.statusReportCatalogue.action.cmdUpdateStatusReport.error",
      "name": "cmdUpdateStatusReportError",
      "kind": "actionError",
      "actionRef": "cmdUpdateStatusReport",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.action.cmdDeleteStatusReport.status",
      "name": "cmdDeleteStatusReportState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteStatusReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.statusReportCatalogue.input.cmdDeleteStatusReport.statusReportId",
      "name": "cmdDeleteStatusReportStatusReportId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteStatusReport",
        "direction": "input",
        "field": "statusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.output.cmdDeleteStatusReport",
      "name": "cmdDeleteStatusReportOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteStatusReport",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.statusReportCatalogue.action.cmdDeleteStatusReport.error",
      "name": "cmdDeleteStatusReportError",
      "kind": "actionError",
      "actionRef": "cmdDeleteStatusReport",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportCatalogue.action.qryProjectPicker.status",
      "name": "qryProjectPickerState",
      "kind": "actionStatus",
      "actionRef": "qryProjectPicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.statusReportCatalogue.data.qryProjectPicker",
      "name": "qryProjectPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryProjectPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryListStatusReport",
      "kind": "query",
      "commandRef": "qryListStatusReport",
      "routeKey": "buildFlowFsm.statusReportCatalogue.qryListStatusReport",
      "purpose": "Listar Relatório de status",
      "methodName": "loadQryListStatusReport",
      "handlerName": "handleQryListStatusReportClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.statusReportCatalogue.data.qryListStatusReport"
      ],
      "statusStateKey": "ui.statusReportCatalogue.action.qryListStatusReport.status"
    },
    {
      "actionId": "cmdCreateStatusReport",
      "kind": "command",
      "commandRef": "cmdCreateStatusReport",
      "routeKey": "buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport",
      "purpose": "Gerar relatório profissional de status",
      "methodName": "cmdCreateStatusReport",
      "handlerName": "handleCmdCreateStatusReportClick",
      "inputStateKeys": [
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectProjectId",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.title",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.content",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.communicatedRisks",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.generatedByUserId",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.publishedByUserId"
      ],
      "routeParamInputStateKeys": [
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectExecutionOverviewProjectId"
      ],
      "outputStateKeys": [
        "ui.statusReportCatalogue.output.cmdCreateStatusReport"
      ],
      "statusStateKey": "ui.statusReportCatalogue.action.cmdCreateStatusReport.status",
      "errorStateKey": "ui.statusReportCatalogue.action.cmdCreateStatusReport.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateStatusReport.success",
        "errorMessageKey": "action.cmdCreateStatusReport.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.title",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.content",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.communicatedRisks",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.generatedByUserId",
        "ui.statusReportCatalogue.input.cmdCreateStatusReport.publishedByUserId"
      ],
      "refreshActionIds": [
        "qryListStatusReport",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdUpdateStatusReport",
      "kind": "command",
      "commandRef": "cmdUpdateStatusReport",
      "routeKey": "buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport",
      "purpose": "Atualizar Relatório de status",
      "methodName": "cmdUpdateStatusReport",
      "handlerName": "handleCmdUpdateStatusReportClick",
      "inputStateKeys": [
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.statusReportId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.projectId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.status",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.title",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.content",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.communicatedRisks",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedAt",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedByUserId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedAt",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedByUserId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.withdrawnAt"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.statusReportId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.projectId"
      ],
      "outputStateKeys": [
        "ui.statusReportCatalogue.output.cmdUpdateStatusReport"
      ],
      "statusStateKey": "ui.statusReportCatalogue.action.cmdUpdateStatusReport.status",
      "errorStateKey": "ui.statusReportCatalogue.action.cmdUpdateStatusReport.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateStatusReport.success",
        "errorMessageKey": "action.cmdUpdateStatusReport.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.statusReportId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.projectId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.status",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.title",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.content",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.communicatedRisks",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedAt",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedByUserId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedAt",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedByUserId",
        "ui.statusReportCatalogue.input.cmdUpdateStatusReport.withdrawnAt"
      ],
      "refreshActionIds": [
        "qryListStatusReport",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdDeleteStatusReport",
      "kind": "command",
      "commandRef": "cmdDeleteStatusReport",
      "routeKey": "buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport",
      "purpose": "Excluir Relatório de status",
      "methodName": "cmdDeleteStatusReport",
      "handlerName": "handleCmdDeleteStatusReportClick",
      "inputStateKeys": [
        "ui.statusReportCatalogue.input.cmdDeleteStatusReport.statusReportId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.statusReportCatalogue.input.cmdDeleteStatusReport.statusReportId"
      ],
      "outputStateKeys": [
        "ui.statusReportCatalogue.output.cmdDeleteStatusReport"
      ],
      "statusStateKey": "ui.statusReportCatalogue.action.cmdDeleteStatusReport.status",
      "errorStateKey": "ui.statusReportCatalogue.action.cmdDeleteStatusReport.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteStatusReport.success",
        "errorMessageKey": "action.cmdDeleteStatusReport.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.statusReportCatalogue.input.cmdDeleteStatusReport.statusReportId"
      ],
      "refreshActionIds": [
        "qryListStatusReport",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "qryProjectPicker",
      "kind": "query",
      "commandRef": "qryProjectPicker",
      "routeKey": "buildFlowFsm.statusReportCatalogue.qryProjectPicker",
      "purpose": "Listar Obra",
      "methodName": "loadQryProjectPicker",
      "handlerName": "handleQryProjectPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.statusReportCatalogue.data.qryProjectPicker"
      ],
      "statusStateKey": "ui.statusReportCatalogue.action.qryProjectPicker.status"
    },
    {
      "actionId": "set.cmdCreateStatusReportProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectProjectId",
      "methodName": "setCmdCreateStatusReportProjectProjectId",
      "handlerName": "handleCmdCreateStatusReportProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportProjectExecutionOverviewProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
      "methodName": "setCmdCreateStatusReportProjectExecutionOverviewProjectId",
      "handlerName": "handleCmdCreateStatusReportProjectExecutionOverviewProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportTitle",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.title",
      "methodName": "setCmdCreateStatusReportTitle",
      "handlerName": "handleCmdCreateStatusReportTitleChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportContent",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.content",
      "methodName": "setCmdCreateStatusReportContent",
      "handlerName": "handleCmdCreateStatusReportContentChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportCommunicatedRisks",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.communicatedRisks",
      "methodName": "setCmdCreateStatusReportCommunicatedRisks",
      "handlerName": "handleCmdCreateStatusReportCommunicatedRisksChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportGeneratedByUserId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.generatedByUserId",
      "methodName": "setCmdCreateStatusReportGeneratedByUserId",
      "handlerName": "handleCmdCreateStatusReportGeneratedByUserIdChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportPublishedByUserId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdCreateStatusReport.publishedByUserId",
      "methodName": "setCmdCreateStatusReportPublishedByUserId",
      "handlerName": "handleCmdCreateStatusReportPublishedByUserIdChange"
    },
    {
      "actionId": "set.cmdUpdateStatusReportStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.statusReportId",
      "methodName": "setCmdUpdateStatusReportStatusReportId",
      "handlerName": "handleCmdUpdateStatusReportStatusReportIdChange",
      "prefill": {
        "command": "cmdUpdateStatusReport",
        "sourceStateKey": "ui.statusReportCatalogue.data.qryListStatusReport",
        "sourceOutputShape": "array",
        "matchField": "statusReportId",
        "fields": [
          {
            "itemField": "status",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.status"
          },
          {
            "itemField": "title",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.title"
          },
          {
            "itemField": "content",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.content"
          },
          {
            "itemField": "communicatedRisks",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.communicatedRisks"
          },
          {
            "itemField": "generatedAt",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedAt"
          },
          {
            "itemField": "generatedByUserId",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedByUserId"
          },
          {
            "itemField": "publishedAt",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedAt"
          },
          {
            "itemField": "publishedByUserId",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedByUserId"
          },
          {
            "itemField": "withdrawnAt",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.withdrawnAt"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateStatusReportProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.projectId",
      "methodName": "setCmdUpdateStatusReportProjectId",
      "handlerName": "handleCmdUpdateStatusReportProjectIdChange",
      "prefill": {
        "command": "cmdUpdateStatusReport",
        "sourceStateKey": "ui.statusReportCatalogue.data.qryListStatusReport",
        "sourceOutputShape": "array",
        "matchField": "projectId",
        "fields": [
          {
            "itemField": "status",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.status"
          },
          {
            "itemField": "title",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.title"
          },
          {
            "itemField": "content",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.content"
          },
          {
            "itemField": "communicatedRisks",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.communicatedRisks"
          },
          {
            "itemField": "generatedAt",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedAt"
          },
          {
            "itemField": "generatedByUserId",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedByUserId"
          },
          {
            "itemField": "publishedAt",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedAt"
          },
          {
            "itemField": "publishedByUserId",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedByUserId"
          },
          {
            "itemField": "withdrawnAt",
            "targetStateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.withdrawnAt"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateStatusReportStatus",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.status",
      "methodName": "setCmdUpdateStatusReportStatus",
      "handlerName": "handleCmdUpdateStatusReportStatusChange"
    },
    {
      "actionId": "set.cmdUpdateStatusReportTitle",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.title",
      "methodName": "setCmdUpdateStatusReportTitle",
      "handlerName": "handleCmdUpdateStatusReportTitleChange"
    },
    {
      "actionId": "set.cmdUpdateStatusReportContent",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.content",
      "methodName": "setCmdUpdateStatusReportContent",
      "handlerName": "handleCmdUpdateStatusReportContentChange"
    },
    {
      "actionId": "set.cmdUpdateStatusReportCommunicatedRisks",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.communicatedRisks",
      "methodName": "setCmdUpdateStatusReportCommunicatedRisks",
      "handlerName": "handleCmdUpdateStatusReportCommunicatedRisksChange"
    },
    {
      "actionId": "set.cmdUpdateStatusReportGeneratedAt",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedAt",
      "methodName": "setCmdUpdateStatusReportGeneratedAt",
      "handlerName": "handleCmdUpdateStatusReportGeneratedAtChange"
    },
    {
      "actionId": "set.cmdUpdateStatusReportGeneratedByUserId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedByUserId",
      "methodName": "setCmdUpdateStatusReportGeneratedByUserId",
      "handlerName": "handleCmdUpdateStatusReportGeneratedByUserIdChange"
    },
    {
      "actionId": "set.cmdUpdateStatusReportPublishedAt",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedAt",
      "methodName": "setCmdUpdateStatusReportPublishedAt",
      "handlerName": "handleCmdUpdateStatusReportPublishedAtChange"
    },
    {
      "actionId": "set.cmdUpdateStatusReportPublishedByUserId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedByUserId",
      "methodName": "setCmdUpdateStatusReportPublishedByUserId",
      "handlerName": "handleCmdUpdateStatusReportPublishedByUserIdChange"
    },
    {
      "actionId": "set.cmdUpdateStatusReportWithdrawnAt",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdUpdateStatusReport.withdrawnAt",
      "methodName": "setCmdUpdateStatusReportWithdrawnAt",
      "handlerName": "handleCmdUpdateStatusReportWithdrawnAtChange"
    },
    {
      "actionId": "set.cmdDeleteStatusReportStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportCatalogue.input.cmdDeleteStatusReport.statusReportId",
      "methodName": "setCmdDeleteStatusReportStatusReportId",
      "handlerName": "handleCmdDeleteStatusReportStatusReportIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListStatusReport",
      "stateKey": "ui.statusReportCatalogue.data.qryListStatusReport"
    },
    {
      "actionId": "qryProjectPicker",
      "stateKey": "ui.statusReportCatalogue.data.qryProjectPicker"
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
    "section.statusReportCatalogue.recordList.title": "Relatórios disponíveis",
    "organism.statusReportCatalogue.qryListStatusReport.title": "Listar Relatório de status",
    "intent.statusReportCatalogue.qryListStatusReport.list.title": "Listar Relatório de status",
    "intent.statusReportCatalogue.qryListStatusReport.list.empty": "Nenhum registro encontrado",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.statusReportId.label": "Status Report Id",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.projectId.label": "Project Id",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.status.label": "Status",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.title.label": "Title",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.content.label": "Content",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.communicatedRisks.label": "Communicated Risks",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.generatedAt.label": "Generated At",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.generatedByUserId.label": "Generated By User Id",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.publishedAt.label": "Published At",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.publishedByUserId.label": "Published By User Id",
    "intent.statusReportCatalogue.qryListStatusReport.list.column.withdrawnAt.label": "Withdrawn At",
    "organism.statusReportCatalogue.cmdDeleteStatusReport.title": "Excluir Relatório de status",
    "intent.statusReportCatalogue.cmdDeleteStatusReport.form.title": "Excluir Relatório de status",
    "intent.statusReportCatalogue.cmdDeleteStatusReport.form.action.cmdDeleteStatusReport": "Excluir Relatório de status",
    "section.statusReportCatalogue.recordForm.title": "Gerar ou corrigir relatório",
    "organism.statusReportCatalogue.qryProjectPicker.title": "Listar Obra",
    "intent.statusReportCatalogue.qryProjectPicker.list.title": "Listar Obra",
    "intent.statusReportCatalogue.qryProjectPicker.list.empty": "Nenhum registro encontrado",
    "intent.statusReportCatalogue.qryProjectPicker.list.column.projectId.label": "Project Id",
    "intent.statusReportCatalogue.qryProjectPicker.list.column.clientId.label": "Client Id",
    "intent.statusReportCatalogue.qryProjectPicker.list.column.name.label": "Name",
    "intent.statusReportCatalogue.qryProjectPicker.list.column.address.label": "Address",
    "intent.statusReportCatalogue.qryProjectPicker.list.column.status.label": "Status",
    "intent.statusReportCatalogue.qryProjectPicker.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.statusReportCatalogue.qryProjectPicker.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.statusReportCatalogue.qryProjectPicker.list.column.plannedEndDate.label": "Planned End Date",
    "organism.statusReportCatalogue.cmdCreateStatusReport.title": "Gerar relatório profissional de status",
    "intent.statusReportCatalogue.cmdCreateStatusReport.form.title": "Gerar relatório profissional de status",
    "intent.statusReportCatalogue.cmdCreateStatusReport.form.action.cmdCreateStatusReport": "Gerar relatório profissional de status",
    "intent.statusReportCatalogue.cmdCreateStatusReport.form.field.title.label": "Title",
    "intent.statusReportCatalogue.cmdCreateStatusReport.form.field.content.label": "Content",
    "intent.statusReportCatalogue.cmdCreateStatusReport.form.field.communicatedRisks.label": "Communicated Risks",
    "intent.statusReportCatalogue.cmdCreateStatusReport.form.field.generatedByUserId.label": "Generated By User Id",
    "intent.statusReportCatalogue.cmdCreateStatusReport.form.field.publishedByUserId.label": "Published By User Id",
    "organism.statusReportCatalogue.cmdUpdateStatusReport.title": "Atualizar Relatório de status",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.title": "Atualizar Relatório de status",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.action.cmdUpdateStatusReport": "Atualizar Relatório de status",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.status.label": "Status",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.title.label": "Title",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.content.label": "Content",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.communicatedRisks.label": "Communicated Risks",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.generatedAt.label": "Generated At",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.generatedByUserId.label": "Generated By User Id",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.publishedAt.label": "Published At",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.publishedByUserId.label": "Published By User Id",
    "intent.statusReportCatalogue.cmdUpdateStatusReport.form.field.withdrawnAt.label": "Withdrawn At",
    "action.cmdCreateStatusReport.success": "Gerar relatório profissional de status: OK",
    "action.cmdCreateStatusReport.error": "Gerar relatório profissional de status: falhou",
    "action.cmdUpdateStatusReport.success": "Atualizar Relatório de status: OK",
    "action.cmdUpdateStatusReport.error": "Atualizar Relatório de status: falhou",
    "action.cmdDeleteStatusReport.success": "Excluir Relatório de status: OK",
    "action.cmdDeleteStatusReport.error": "Excluir Relatório de status: falhou"
  },
  "automation": {
    "statePrefix": "ui.statusReportCatalogue",
    "stateKeys": [
      "ui.statusReportCatalogue.status",
      "ui.statusReportCatalogue.action.qryListStatusReport.status",
      "ui.statusReportCatalogue.data.qryListStatusReport",
      "ui.statusReportCatalogue.action.cmdCreateStatusReport.status",
      "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectProjectId",
      "ui.statusReportCatalogue.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
      "ui.statusReportCatalogue.input.cmdCreateStatusReport.title",
      "ui.statusReportCatalogue.input.cmdCreateStatusReport.content",
      "ui.statusReportCatalogue.input.cmdCreateStatusReport.communicatedRisks",
      "ui.statusReportCatalogue.input.cmdCreateStatusReport.generatedByUserId",
      "ui.statusReportCatalogue.input.cmdCreateStatusReport.publishedByUserId",
      "ui.statusReportCatalogue.output.cmdCreateStatusReport",
      "ui.statusReportCatalogue.action.cmdCreateStatusReport.error",
      "ui.statusReportCatalogue.action.cmdUpdateStatusReport.status",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.statusReportId",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.projectId",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.status",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.title",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.content",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.communicatedRisks",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedAt",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.generatedByUserId",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedAt",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.publishedByUserId",
      "ui.statusReportCatalogue.input.cmdUpdateStatusReport.withdrawnAt",
      "ui.statusReportCatalogue.output.cmdUpdateStatusReport",
      "ui.statusReportCatalogue.action.cmdUpdateStatusReport.error",
      "ui.statusReportCatalogue.action.cmdDeleteStatusReport.status",
      "ui.statusReportCatalogue.input.cmdDeleteStatusReport.statusReportId",
      "ui.statusReportCatalogue.output.cmdDeleteStatusReport",
      "ui.statusReportCatalogue.action.cmdDeleteStatusReport.error",
      "ui.statusReportCatalogue.action.qryProjectPicker.status",
      "ui.statusReportCatalogue.data.qryProjectPicker"
    ],
    "actionIds": [
      "qryListStatusReport",
      "cmdCreateStatusReport",
      "cmdUpdateStatusReport",
      "cmdDeleteStatusReport",
      "qryProjectPicker",
      "set.cmdCreateStatusReportProjectProjectId",
      "set.cmdCreateStatusReportProjectExecutionOverviewProjectId",
      "set.cmdCreateStatusReportTitle",
      "set.cmdCreateStatusReportContent",
      "set.cmdCreateStatusReportCommunicatedRisks",
      "set.cmdCreateStatusReportGeneratedByUserId",
      "set.cmdCreateStatusReportPublishedByUserId",
      "set.cmdUpdateStatusReportStatusReportId",
      "set.cmdUpdateStatusReportProjectId",
      "set.cmdUpdateStatusReportStatus",
      "set.cmdUpdateStatusReportTitle",
      "set.cmdUpdateStatusReportContent",
      "set.cmdUpdateStatusReportCommunicatedRisks",
      "set.cmdUpdateStatusReportGeneratedAt",
      "set.cmdUpdateStatusReportGeneratedByUserId",
      "set.cmdUpdateStatusReportPublishedAt",
      "set.cmdUpdateStatusReportPublishedByUserId",
      "set.cmdUpdateStatusReportWithdrawnAt",
      "set.cmdDeleteStatusReportStatusReportId"
    ]
  }
};

export const pipeline = [
  {
    "id": "statusReportCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/statusReportCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/statusReportCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "statusReportUsesProjectExecutionData",
      "onlyProjectManagerPublishesStatusReport",
      "clientSeesOnlyOwnProjectInformation",
      "clientVisibleStatusReport"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
