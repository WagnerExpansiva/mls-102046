/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "generateAndPublishProjectStatusReport",
  "pageName": "Gerar e publicar relatório de status",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmGenerateAndPublishProjectStatusReportBase",
  "routePattern": "/buildFlowFsm/generateAndPublishProjectStatusReport/:projectProjectId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workspace:generateAndPublishProjectStatusReport",
    "contract:buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject",
    "contract:buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview",
    "contract:buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment",
    "contract:buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport",
    "contract:buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport",
    "contract:buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient"
  ],
  "operationIds": [
    "createStatusReport",
    "handoffStatusReportToClient",
    "inspectProjectExecutionOverview",
    "inspectScheduleRiskAssessment",
    "locateProject",
    "publishStatusReport"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "generateAndPublishProjectStatusReport",
    "workspaceKind": "workflow",
    "workflowId": "statusReportLifecycle",
    "actor": "projectManager",
    "entity": "StatusReport",
    "owners": [
      {
        "kind": "operation",
        "id": "createStatusReport",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createStatusReport.defs.ts"
      },
      {
        "kind": "operation",
        "id": "handoffStatusReportToClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffStatusReportToClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectProjectExecutionOverview",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectExecutionOverview.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectScheduleRiskAssessment",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectScheduleRiskAssessment.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "publishStatusReport",
        "defPath": "_102046_/l4/buildFlowFsm/operations/publishStatusReport.defs.ts"
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
          "operationId": "handoffStatusReportToClient",
          "commandName": "cmdHandoffStatusReportToClient",
          "steps": [
            "Encaminhar o relatório ao cliente",
            "O cliente recebe o relatório publicado."
          ]
        },
        {
          "operationId": "inspectProjectExecutionOverview",
          "commandName": "qryInspectProjectExecutionOverview",
          "steps": [
            "Acompanhar a execução com os registros diários",
            "Andamento, registros e próximos prazos estão consolidados."
          ]
        },
        {
          "operationId": "inspectScheduleRiskAssessment",
          "commandName": "qryInspectScheduleRiskAssessment",
          "steps": [
            "Consultar tarefas em risco de atraso",
            "Tarefas em risco e seus indicadores estão identificados."
          ]
        },
        {
          "operationId": "locateProject",
          "commandName": "qryLocateProject",
          "steps": [
            "Localizar a própria obra",
            "Uma obra associada ao cliente está selecionada."
          ]
        },
        {
          "operationId": "publishStatusReport",
          "commandName": "cmdPublishStatusReport",
          "steps": [
            "Publicar o relatório de status",
            "O relatório fica aprovado para comunicação ao cliente."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/generateAndPublishProjectStatusReport.ts",
    "contracts": [
      {
        "commandName": "qryLocateProject",
        "routeConst": "qryLocateProjectRoute"
      },
      {
        "commandName": "qryInspectProjectExecutionOverview",
        "routeConst": "qryInspectProjectExecutionOverviewRoute"
      },
      {
        "commandName": "qryInspectScheduleRiskAssessment",
        "routeConst": "qryInspectScheduleRiskAssessmentRoute"
      },
      {
        "commandName": "cmdCreateStatusReport",
        "routeConst": "cmdCreateStatusReportRoute"
      },
      {
        "commandName": "cmdPublishStatusReport",
        "routeConst": "cmdPublishStatusReportRoute"
      },
      {
        "commandName": "cmdHandoffStatusReportToClient",
        "routeConst": "cmdHandoffStatusReportToClientRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/generateAndPublishProjectStatusReport.defs.ts",
    "layoutId": "generateAndPublishProjectStatusReport-workflow_queue"
  },
  "states": [
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.data.qryLocateProject",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status",
      "name": "qryInspectProjectExecutionOverviewState",
      "kind": "actionStatus",
      "actionRef": "qryInspectProjectExecutionOverview",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
      "name": "qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryInspectProjectExecutionOverview",
        "direction": "input",
        "field": "projectExecutionOverviewProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview",
      "name": "qryInspectProjectExecutionOverviewData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectProjectExecutionOverview",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status",
      "name": "qryInspectScheduleRiskAssessmentState",
      "kind": "actionStatus",
      "actionRef": "qryInspectScheduleRiskAssessment",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId",
      "name": "qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "qryInspectScheduleRiskAssessment",
        "direction": "input",
        "field": "scheduleRiskAssessmentProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment",
      "name": "qryInspectScheduleRiskAssessmentData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectScheduleRiskAssessment",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId",
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
      "stateKey": "ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport",
      "name": "cmdCreateStatusReportOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateStatusReport",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.error",
      "name": "cmdCreateStatusReportError",
      "kind": "actionError",
      "actionRef": "cmdCreateStatusReport",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status",
      "name": "cmdPublishStatusReportState",
      "kind": "actionStatus",
      "actionRef": "cmdPublishStatusReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId",
      "name": "cmdPublishStatusReportProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdPublishStatusReport",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId",
      "name": "cmdPublishStatusReportProjectExecutionOverviewProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdPublishStatusReport",
        "direction": "input",
        "field": "projectExecutionOverviewProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId",
      "name": "cmdPublishStatusReportStatusReportStatusReportId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdPublishStatusReport",
        "direction": "input",
        "field": "statusReportStatusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status",
      "name": "cmdPublishStatusReportStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdPublishStatusReport",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport",
      "name": "cmdPublishStatusReportOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdPublishStatusReport",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.error",
      "name": "cmdPublishStatusReportError",
      "kind": "actionError",
      "actionRef": "cmdPublishStatusReport",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status",
      "name": "cmdHandoffStatusReportToClientState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffStatusReportToClient",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId",
      "name": "cmdHandoffStatusReportToClientStatusReportStatusReportId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffStatusReportToClient",
        "direction": "input",
        "field": "statusReportStatusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title",
      "name": "cmdHandoffStatusReportToClientTitle",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffStatusReportToClient",
        "direction": "input",
        "field": "title"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content",
      "name": "cmdHandoffStatusReportToClientContent",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffStatusReportToClient",
        "direction": "input",
        "field": "content"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks",
      "name": "cmdHandoffStatusReportToClientCommunicatedRisks",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffStatusReportToClient",
        "direction": "input",
        "field": "communicatedRisks"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId",
      "name": "cmdHandoffStatusReportToClientGeneratedByUserId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffStatusReportToClient",
        "direction": "input",
        "field": "generatedByUserId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId",
      "name": "cmdHandoffStatusReportToClientPublishedByUserId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffStatusReportToClient",
        "direction": "input",
        "field": "publishedByUserId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient",
      "name": "cmdHandoffStatusReportToClientOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffStatusReportToClient",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.error",
      "name": "cmdHandoffStatusReportToClientError",
      "kind": "actionError",
      "actionRef": "cmdHandoffStatusReportToClient",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateProject",
      "kind": "query",
      "commandRef": "qryLocateProject",
      "routeKey": "buildFlowFsm.generateAndPublishProjectStatusReport.qryLocateProject",
      "purpose": "Selecionar a obra que exige atenção",
      "methodName": "loadQryLocateProject",
      "handlerName": "handleQryLocateProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.data.qryLocateProject"
      ],
      "statusStateKey": "ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status"
    },
    {
      "actionId": "qryInspectProjectExecutionOverview",
      "kind": "query",
      "commandRef": "qryInspectProjectExecutionOverview",
      "routeKey": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview",
      "purpose": "Analisar a execução da obra",
      "methodName": "loadQryInspectProjectExecutionOverview",
      "handlerName": "handleQryInspectProjectExecutionOverviewClick",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId"
      ],
      "outputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview"
      ],
      "statusStateKey": "ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status"
    },
    {
      "actionId": "qryInspectScheduleRiskAssessment",
      "kind": "query",
      "commandRef": "qryInspectScheduleRiskAssessment",
      "routeKey": "buildFlowFsm.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment",
      "purpose": "Consultar tarefas em risco de atraso",
      "methodName": "loadQryInspectScheduleRiskAssessment",
      "handlerName": "handleQryInspectScheduleRiskAssessmentClick",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId"
      ],
      "outputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment"
      ],
      "statusStateKey": "ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status"
    },
    {
      "actionId": "cmdCreateStatusReport",
      "kind": "command",
      "commandRef": "cmdCreateStatusReport",
      "routeKey": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdCreateStatusReport",
      "purpose": "Gerar relatório profissional de status",
      "methodName": "cmdCreateStatusReport",
      "handlerName": "handleCmdCreateStatusReportClick",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId"
      ],
      "routeParamInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId"
      ],
      "outputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport"
      ],
      "statusStateKey": "ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status",
      "errorStateKey": "ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateStatusReport.success",
        "errorMessageKey": "action.cmdCreateStatusReport.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId",
        "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId"
      ],
      "refreshActionIds": [
        "qryLocateProject",
        "qryInspectProjectExecutionOverview",
        "qryInspectScheduleRiskAssessment"
      ]
    },
    {
      "actionId": "cmdPublishStatusReport",
      "kind": "command",
      "commandRef": "cmdPublishStatusReport",
      "routeKey": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdPublishStatusReport",
      "purpose": "Publicar o relatório de status",
      "methodName": "cmdPublishStatusReport",
      "handlerName": "handleCmdPublishStatusReportClick",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId",
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status"
      ],
      "routeParamInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId"
      ],
      "outputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport"
      ],
      "statusStateKey": "ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status",
      "errorStateKey": "ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.error",
      "feedback": {
        "successMessageKey": "action.cmdPublishStatusReport.success",
        "errorMessageKey": "action.cmdPublishStatusReport.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId",
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId",
        "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status"
      ],
      "refreshActionIds": [
        "qryLocateProject",
        "qryInspectProjectExecutionOverview",
        "qryInspectScheduleRiskAssessment"
      ]
    },
    {
      "actionId": "cmdHandoffStatusReportToClient",
      "kind": "command",
      "commandRef": "cmdHandoffStatusReportToClient",
      "routeKey": "buildFlowFsm.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient",
      "purpose": "Encaminhar o relatório ao cliente",
      "methodName": "cmdHandoffStatusReportToClient",
      "handlerName": "handleCmdHandoffStatusReportToClientClick",
      "inputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId"
      ],
      "outputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient"
      ],
      "statusStateKey": "ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status",
      "errorStateKey": "ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffStatusReportToClient.success",
        "errorMessageKey": "action.cmdHandoffStatusReportToClient.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId",
        "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId"
      ],
      "refreshActionIds": [
        "qryLocateProject",
        "qryInspectProjectExecutionOverview",
        "qryInspectScheduleRiskAssessment"
      ]
    },
    {
      "actionId": "set.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
      "methodName": "setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "handlerName": "handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange"
    },
    {
      "actionId": "set.qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId",
      "methodName": "setQryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId",
      "handlerName": "handleQryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId",
      "methodName": "setCmdCreateStatusReportProjectProjectId",
      "handlerName": "handleCmdCreateStatusReportProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportProjectExecutionOverviewProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
      "methodName": "setCmdCreateStatusReportProjectExecutionOverviewProjectId",
      "handlerName": "handleCmdCreateStatusReportProjectExecutionOverviewProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportTitle",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title",
      "methodName": "setCmdCreateStatusReportTitle",
      "handlerName": "handleCmdCreateStatusReportTitleChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportContent",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content",
      "methodName": "setCmdCreateStatusReportContent",
      "handlerName": "handleCmdCreateStatusReportContentChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportCommunicatedRisks",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks",
      "methodName": "setCmdCreateStatusReportCommunicatedRisks",
      "handlerName": "handleCmdCreateStatusReportCommunicatedRisksChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportGeneratedByUserId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId",
      "methodName": "setCmdCreateStatusReportGeneratedByUserId",
      "handlerName": "handleCmdCreateStatusReportGeneratedByUserIdChange"
    },
    {
      "actionId": "set.cmdCreateStatusReportPublishedByUserId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId",
      "methodName": "setCmdCreateStatusReportPublishedByUserId",
      "handlerName": "handleCmdCreateStatusReportPublishedByUserIdChange"
    },
    {
      "actionId": "set.cmdPublishStatusReportProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId",
      "methodName": "setCmdPublishStatusReportProjectProjectId",
      "handlerName": "handleCmdPublishStatusReportProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdPublishStatusReportProjectExecutionOverviewProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId",
      "methodName": "setCmdPublishStatusReportProjectExecutionOverviewProjectId",
      "handlerName": "handleCmdPublishStatusReportProjectExecutionOverviewProjectIdChange"
    },
    {
      "actionId": "set.cmdPublishStatusReportStatusReportStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId",
      "methodName": "setCmdPublishStatusReportStatusReportStatusReportId",
      "handlerName": "handleCmdPublishStatusReportStatusReportStatusReportIdChange"
    },
    {
      "actionId": "set.cmdPublishStatusReportStatus",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status",
      "methodName": "setCmdPublishStatusReportStatus",
      "handlerName": "handleCmdPublishStatusReportStatusChange"
    },
    {
      "actionId": "set.cmdHandoffStatusReportToClientStatusReportStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId",
      "methodName": "setCmdHandoffStatusReportToClientStatusReportStatusReportId",
      "handlerName": "handleCmdHandoffStatusReportToClientStatusReportStatusReportIdChange"
    },
    {
      "actionId": "set.cmdHandoffStatusReportToClientTitle",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title",
      "methodName": "setCmdHandoffStatusReportToClientTitle",
      "handlerName": "handleCmdHandoffStatusReportToClientTitleChange"
    },
    {
      "actionId": "set.cmdHandoffStatusReportToClientContent",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content",
      "methodName": "setCmdHandoffStatusReportToClientContent",
      "handlerName": "handleCmdHandoffStatusReportToClientContentChange"
    },
    {
      "actionId": "set.cmdHandoffStatusReportToClientCommunicatedRisks",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks",
      "methodName": "setCmdHandoffStatusReportToClientCommunicatedRisks",
      "handlerName": "handleCmdHandoffStatusReportToClientCommunicatedRisksChange"
    },
    {
      "actionId": "set.cmdHandoffStatusReportToClientGeneratedByUserId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId",
      "methodName": "setCmdHandoffStatusReportToClientGeneratedByUserId",
      "handlerName": "handleCmdHandoffStatusReportToClientGeneratedByUserIdChange"
    },
    {
      "actionId": "set.cmdHandoffStatusReportToClientPublishedByUserId",
      "kind": "stateSetter",
      "stateKey": "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId",
      "methodName": "setCmdHandoffStatusReportToClientPublishedByUserId",
      "handlerName": "handleCmdHandoffStatusReportToClientPublishedByUserIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateProject",
      "stateKey": "ui.generateAndPublishProjectStatusReport.data.qryLocateProject"
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
    "section.generateAndPublishProjectStatusReport.locateProject.title": "Localizar obra",
    "organism.generateAndPublishProjectStatusReport.qryLocateProject.title": "Selecionar a obra que exige atenção",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.title": "Selecionar a obra que exige atenção",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.empty": "Nenhum registro encontrado",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.projectId.label": "Project Id",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.clientId.label": "Client Id",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.name.label": "Name",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.address.label": "Address",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.status.label": "Status",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.generateAndPublishProjectStatusReport.qryLocateProject.list.column.plannedEndDate.label": "Planned End Date",
    "section.generateAndPublishProjectStatusReport.projectAssessment.title": "Analisar execução e riscos",
    "organism.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.title": "Analisar a execução da obra",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.title": "Analisar a execução da obra",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.empty": "Nenhum registro encontrado",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectId.label": "Project Id",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectName.label": "Project Name",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.projectStatus.label": "Project Status",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.workTaskIds.label": "Work Task Ids",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.taskSummary.label": "Task Summary",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label": "Upcoming Commitments",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.timeLogIds.label": "Time Log Ids",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label": "Total Logged Hours",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label": "Material Usage Ids",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label": "Material Usage Summary",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label": "Actual Labor Cost",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label": "Actual Material Cost",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.actualCost.label": "Actual Cost",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.budgetAmount.label": "Budget Amount",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.costVariance.label": "Cost Variance",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label": "Change Order Ids",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label": "Change Order Impact Summary",
    "intent.generateAndPublishProjectStatusReport.qryInspectProjectExecutionOverview.list.column.calculatedAt.label": "Calculated At",
    "organism.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.title": "Consultar tarefas em risco de atraso",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.title": "Consultar tarefas em risco de atraso",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.empty": "Nenhum registro encontrado",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.projectId.label": "Project Id",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.workTaskId.label": "Work Task Id",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.taskStatus.label": "Task Status",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.dueDate.label": "Due Date",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.progressPercent.label": "Progress Percent",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskIndicators.label": "Risk Indicators",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.riskExplanation.label": "Risk Explanation",
    "intent.generateAndPublishProjectStatusReport.qryInspectScheduleRiskAssessment.list.column.assessedAt.label": "Assessed At",
    "section.generateAndPublishProjectStatusReport.reportWorkflow.title": "Gerar, publicar e encaminhar",
    "organism.generateAndPublishProjectStatusReport.cmdCreateStatusReport.title": "Gerar relatório profissional de status",
    "intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.title": "Gerar relatório profissional de status",
    "intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.action.cmdCreateStatusReport": "Gerar relatório profissional de status",
    "intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.title.label": "Title",
    "intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.content.label": "Content",
    "intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.communicatedRisks.label": "Communicated Risks",
    "intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.generatedByUserId.label": "Generated By User Id",
    "intent.generateAndPublishProjectStatusReport.cmdCreateStatusReport.form.field.publishedByUserId.label": "Published By User Id",
    "organism.generateAndPublishProjectStatusReport.cmdPublishStatusReport.title": "Publicar o relatório de status",
    "intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.title": "Publicar o relatório de status",
    "intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.action.cmdPublishStatusReport": "Publicar o relatório de status",
    "intent.generateAndPublishProjectStatusReport.cmdPublishStatusReport.form.field.status.label": "Status",
    "organism.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.title": "Encaminhar o relatório ao cliente",
    "intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.title": "Encaminhar o relatório ao cliente",
    "intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.action.cmdHandoffStatusReportToClient": "Encaminhar o relatório ao cliente",
    "intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.title.label": "Title",
    "intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.content.label": "Content",
    "intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.communicatedRisks.label": "Communicated Risks",
    "intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.generatedByUserId.label": "Generated By User Id",
    "intent.generateAndPublishProjectStatusReport.cmdHandoffStatusReportToClient.form.field.publishedByUserId.label": "Published By User Id",
    "action.cmdCreateStatusReport.success": "Gerar relatório profissional de status: OK",
    "action.cmdCreateStatusReport.error": "Gerar relatório profissional de status: falhou",
    "action.cmdPublishStatusReport.success": "Publicar o relatório de status: OK",
    "action.cmdPublishStatusReport.error": "Publicar o relatório de status: falhou",
    "action.cmdHandoffStatusReportToClient.success": "Encaminhar o relatório ao cliente: OK",
    "action.cmdHandoffStatusReportToClient.error": "Encaminhar o relatório ao cliente: falhou",
    "section.generateAndPublishProjectStatusReport.projectContext.title": "Contexto e diagnóstico da obra",
    "section.generateAndPublishProjectStatusReport.reportPreparation.title": "Preparação do relatório",
    "organism.generateAndPublishProjectStatusReport.master-detail20.title": "Master detail",
    "intent.generateAndPublishProjectStatusReport.master-detail20.content.title": "Master detail",
    "section.generateAndPublishProjectStatusReport.publicationAndHandoff.title": "Publicação e envio ao cliente",
    "section.generateAndPublishProjectStatusReport.reportWorkflowWorkspace.title": "Status report workspace"
  },
  "automation": {
    "statePrefix": "ui.generateAndPublishProjectStatusReport",
    "stateKeys": [
      "ui.generateAndPublishProjectStatusReport.status",
      "ui.generateAndPublishProjectStatusReport.action.qryLocateProject.status",
      "ui.generateAndPublishProjectStatusReport.data.qryLocateProject",
      "ui.generateAndPublishProjectStatusReport.action.qryInspectProjectExecutionOverview.status",
      "ui.generateAndPublishProjectStatusReport.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
      "ui.generateAndPublishProjectStatusReport.data.qryInspectProjectExecutionOverview",
      "ui.generateAndPublishProjectStatusReport.action.qryInspectScheduleRiskAssessment.status",
      "ui.generateAndPublishProjectStatusReport.input.qryInspectScheduleRiskAssessment.scheduleRiskAssessmentProjectId",
      "ui.generateAndPublishProjectStatusReport.data.qryInspectScheduleRiskAssessment",
      "ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.status",
      "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectProjectId",
      "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.projectExecutionOverviewProjectId",
      "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.title",
      "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.content",
      "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.communicatedRisks",
      "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.generatedByUserId",
      "ui.generateAndPublishProjectStatusReport.input.cmdCreateStatusReport.publishedByUserId",
      "ui.generateAndPublishProjectStatusReport.output.cmdCreateStatusReport",
      "ui.generateAndPublishProjectStatusReport.action.cmdCreateStatusReport.error",
      "ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.status",
      "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectProjectId",
      "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.projectExecutionOverviewProjectId",
      "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.statusReportStatusReportId",
      "ui.generateAndPublishProjectStatusReport.input.cmdPublishStatusReport.status",
      "ui.generateAndPublishProjectStatusReport.output.cmdPublishStatusReport",
      "ui.generateAndPublishProjectStatusReport.action.cmdPublishStatusReport.error",
      "ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.status",
      "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.statusReportStatusReportId",
      "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.title",
      "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.content",
      "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.communicatedRisks",
      "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.generatedByUserId",
      "ui.generateAndPublishProjectStatusReport.input.cmdHandoffStatusReportToClient.publishedByUserId",
      "ui.generateAndPublishProjectStatusReport.output.cmdHandoffStatusReportToClient",
      "ui.generateAndPublishProjectStatusReport.action.cmdHandoffStatusReportToClient.error"
    ],
    "actionIds": [
      "qryLocateProject",
      "qryInspectProjectExecutionOverview",
      "qryInspectScheduleRiskAssessment",
      "cmdCreateStatusReport",
      "cmdPublishStatusReport",
      "cmdHandoffStatusReportToClient",
      "set.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "set.qryInspectScheduleRiskAssessmentScheduleRiskAssessmentProjectId",
      "set.cmdCreateStatusReportProjectProjectId",
      "set.cmdCreateStatusReportProjectExecutionOverviewProjectId",
      "set.cmdCreateStatusReportTitle",
      "set.cmdCreateStatusReportContent",
      "set.cmdCreateStatusReportCommunicatedRisks",
      "set.cmdCreateStatusReportGeneratedByUserId",
      "set.cmdCreateStatusReportPublishedByUserId",
      "set.cmdPublishStatusReportProjectProjectId",
      "set.cmdPublishStatusReportProjectExecutionOverviewProjectId",
      "set.cmdPublishStatusReportStatusReportStatusReportId",
      "set.cmdPublishStatusReportStatus",
      "set.cmdHandoffStatusReportToClientStatusReportStatusReportId",
      "set.cmdHandoffStatusReportToClientTitle",
      "set.cmdHandoffStatusReportToClientContent",
      "set.cmdHandoffStatusReportToClientCommunicatedRisks",
      "set.cmdHandoffStatusReportToClientGeneratedByUserId",
      "set.cmdHandoffStatusReportToClientPublishedByUserId"
    ]
  }
};

export const pipeline = [
  {
    "id": "generateAndPublishProjectStatusReport__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/generateAndPublishProjectStatusReport.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/generateAndPublishProjectStatusReport.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "activeProjectCostVisibility",
      "unfinishedWorkTask",
      "statusReportUsesProjectExecutionData",
      "clientVisibleStatusReport"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
