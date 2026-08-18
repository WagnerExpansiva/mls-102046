/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "reviewProjectPortfolio",
  "pageName": "Monitorar portfólio e direcionar obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmReviewProjectPortfolioBase",
  "routePattern": "/buildFlowFsm/reviewProjectPortfolio/:projectProjectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:reviewProjectPortfolio",
    "contract:buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard",
    "contract:buildFlowFsm.reviewProjectPortfolio.qryLocateProject",
    "contract:buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview",
    "contract:buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator"
  ],
  "operationIds": [
    "handoffProjectToFieldCoordinator",
    "inspectProjectDashboard",
    "inspectProjectExecutionOverview",
    "locateProject"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "reviewProjectPortfolio",
    "workspaceKind": "operation",
    "actor": "projectManager",
    "entity": "ProjectDashboard",
    "owners": [
      {
        "kind": "operation",
        "id": "handoffProjectToFieldCoordinator",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffProjectToFieldCoordinator.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectProjectDashboard",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectDashboard.defs.ts"
      },
      {
        "kind": "operation",
        "id": "inspectProjectExecutionOverview",
        "defPath": "_102046_/l4/buildFlowFsm/operations/inspectProjectExecutionOverview.defs.ts"
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
          "operationId": "handoffProjectToFieldCoordinator",
          "commandName": "cmdHandoffProjectToFieldCoordinator",
          "steps": [
            "Encaminhar a obra para acompanhamento de campo",
            "O coordenador de campo recebe a obra para coordenar a execução."
          ]
        },
        {
          "operationId": "inspectProjectDashboard",
          "commandName": "qryProjectDashboardView",
          "steps": [
            "Consultar o painel de obras",
            "Projetos ativos, orçamento versus realizado e tarefas próximas estão visíveis."
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
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/reviewProjectPortfolio.ts",
    "contracts": [
      {
        "commandName": "qryInspectProjectDashboard",
        "routeConst": "qryInspectProjectDashboardRoute"
      },
      {
        "commandName": "qryLocateProject",
        "routeConst": "qryLocateProjectRoute"
      },
      {
        "commandName": "qryInspectProjectExecutionOverview",
        "routeConst": "qryInspectProjectExecutionOverviewRoute"
      },
      {
        "commandName": "cmdHandoffProjectToFieldCoordinator",
        "routeConst": "cmdHandoffProjectToFieldCoordinatorRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/reviewProjectPortfolio.defs.ts",
    "layoutId": "reviewProjectPortfolio-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.reviewProjectPortfolio.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status",
      "name": "qryInspectProjectDashboardState",
      "kind": "actionStatus",
      "actionRef": "qryInspectProjectDashboard",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.data.qryInspectProjectDashboard",
      "name": "qryInspectProjectDashboardData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryInspectProjectDashboard",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.action.qryLocateProject.status",
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
      "stateKey": "ui.reviewProjectPortfolio.data.qryLocateProject",
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
      "stateKey": "ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status",
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
      "stateKey": "ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
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
      "stateKey": "ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview",
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
      "stateKey": "ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status",
      "name": "cmdHandoffProjectToFieldCoordinatorState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffProjectToFieldCoordinator",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId",
      "name": "cmdHandoffProjectToFieldCoordinatorProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdHandoffProjectToFieldCoordinator",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId",
      "name": "cmdHandoffProjectToFieldCoordinatorClientId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffProjectToFieldCoordinator",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name",
      "name": "cmdHandoffProjectToFieldCoordinatorName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffProjectToFieldCoordinator",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address",
      "name": "cmdHandoffProjectToFieldCoordinatorAddress",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffProjectToFieldCoordinator",
        "direction": "input",
        "field": "address"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget",
      "name": "cmdHandoffProjectToFieldCoordinatorAuthorizedBudget",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffProjectToFieldCoordinator",
        "direction": "input",
        "field": "authorizedBudget"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate",
      "name": "cmdHandoffProjectToFieldCoordinatorPlannedStartDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffProjectToFieldCoordinator",
        "direction": "input",
        "field": "plannedStartDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate",
      "name": "cmdHandoffProjectToFieldCoordinatorPlannedEndDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffProjectToFieldCoordinator",
        "direction": "input",
        "field": "plannedEndDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator",
      "name": "cmdHandoffProjectToFieldCoordinatorOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffProjectToFieldCoordinator",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.error",
      "name": "cmdHandoffProjectToFieldCoordinatorError",
      "kind": "actionError",
      "actionRef": "cmdHandoffProjectToFieldCoordinator",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryInspectProjectDashboard",
      "kind": "query",
      "commandRef": "qryInspectProjectDashboard",
      "routeKey": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectDashboard",
      "purpose": "Consultar o painel de obras",
      "methodName": "loadQryInspectProjectDashboard",
      "handlerName": "handleQryInspectProjectDashboardClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.reviewProjectPortfolio.data.qryInspectProjectDashboard"
      ],
      "statusStateKey": "ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status"
    },
    {
      "actionId": "qryLocateProject",
      "kind": "query",
      "commandRef": "qryLocateProject",
      "routeKey": "buildFlowFsm.reviewProjectPortfolio.qryLocateProject",
      "purpose": "Selecionar a obra que exige atenção",
      "methodName": "loadQryLocateProject",
      "handlerName": "handleQryLocateProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.reviewProjectPortfolio.data.qryLocateProject"
      ],
      "statusStateKey": "ui.reviewProjectPortfolio.action.qryLocateProject.status"
    },
    {
      "actionId": "qryInspectProjectExecutionOverview",
      "kind": "query",
      "commandRef": "qryInspectProjectExecutionOverview",
      "routeKey": "buildFlowFsm.reviewProjectPortfolio.qryInspectProjectExecutionOverview",
      "purpose": "Analisar a execução da obra",
      "methodName": "loadQryInspectProjectExecutionOverview",
      "handlerName": "handleQryInspectProjectExecutionOverviewClick",
      "inputStateKeys": [
        "ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId"
      ],
      "outputStateKeys": [
        "ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview"
      ],
      "statusStateKey": "ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status"
    },
    {
      "actionId": "cmdHandoffProjectToFieldCoordinator",
      "kind": "command",
      "commandRef": "cmdHandoffProjectToFieldCoordinator",
      "routeKey": "buildFlowFsm.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator",
      "purpose": "Encaminhar a obra para acompanhamento de campo",
      "methodName": "cmdHandoffProjectToFieldCoordinator",
      "handlerName": "handleCmdHandoffProjectToFieldCoordinatorClick",
      "inputStateKeys": [
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate"
      ],
      "routeParamInputStateKeys": [
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator"
      ],
      "statusStateKey": "ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status",
      "errorStateKey": "ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffProjectToFieldCoordinator.success",
        "errorMessageKey": "action.cmdHandoffProjectToFieldCoordinator.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate",
        "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate"
      ],
      "refreshActionIds": [
        "qryInspectProjectDashboard",
        "qryLocateProject",
        "qryInspectProjectExecutionOverview"
      ]
    },
    {
      "actionId": "set.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
      "methodName": "setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "handlerName": "handleQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectIdChange"
    },
    {
      "actionId": "set.cmdHandoffProjectToFieldCoordinatorProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId",
      "methodName": "setCmdHandoffProjectToFieldCoordinatorProjectProjectId",
      "handlerName": "handleCmdHandoffProjectToFieldCoordinatorProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdHandoffProjectToFieldCoordinatorClientId",
      "kind": "stateSetter",
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId",
      "methodName": "setCmdHandoffProjectToFieldCoordinatorClientId",
      "handlerName": "handleCmdHandoffProjectToFieldCoordinatorClientIdChange"
    },
    {
      "actionId": "set.cmdHandoffProjectToFieldCoordinatorName",
      "kind": "stateSetter",
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name",
      "methodName": "setCmdHandoffProjectToFieldCoordinatorName",
      "handlerName": "handleCmdHandoffProjectToFieldCoordinatorNameChange"
    },
    {
      "actionId": "set.cmdHandoffProjectToFieldCoordinatorAddress",
      "kind": "stateSetter",
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address",
      "methodName": "setCmdHandoffProjectToFieldCoordinatorAddress",
      "handlerName": "handleCmdHandoffProjectToFieldCoordinatorAddressChange"
    },
    {
      "actionId": "set.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget",
      "kind": "stateSetter",
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget",
      "methodName": "setCmdHandoffProjectToFieldCoordinatorAuthorizedBudget",
      "handlerName": "handleCmdHandoffProjectToFieldCoordinatorAuthorizedBudgetChange"
    },
    {
      "actionId": "set.cmdHandoffProjectToFieldCoordinatorPlannedStartDate",
      "kind": "stateSetter",
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate",
      "methodName": "setCmdHandoffProjectToFieldCoordinatorPlannedStartDate",
      "handlerName": "handleCmdHandoffProjectToFieldCoordinatorPlannedStartDateChange"
    },
    {
      "actionId": "set.cmdHandoffProjectToFieldCoordinatorPlannedEndDate",
      "kind": "stateSetter",
      "stateKey": "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate",
      "methodName": "setCmdHandoffProjectToFieldCoordinatorPlannedEndDate",
      "handlerName": "handleCmdHandoffProjectToFieldCoordinatorPlannedEndDateChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryInspectProjectDashboard",
      "stateKey": "ui.reviewProjectPortfolio.data.qryInspectProjectDashboard"
    },
    {
      "actionId": "qryLocateProject",
      "stateKey": "ui.reviewProjectPortfolio.data.qryLocateProject"
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
    "section.reviewProjectPortfolio.projectDashboardSection.title": "Visão do portfólio",
    "organism.reviewProjectPortfolio.qryInspectProjectDashboard.title": "Consultar o painel de obras",
    "intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.title": "Consultar o painel de obras",
    "intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.empty": "Nenhum registro encontrado",
    "intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjects.label": "Active Projects",
    "intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.activeProjectCount.label": "Active Project Count",
    "intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalBudget.label": "Total Budget",
    "intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.totalActualCost.label": "Total Actual Cost",
    "intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.budgetVariance.label": "Budget Variance",
    "intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.costAttentionProjects.label": "Cost Attention Projects",
    "intent.reviewProjectPortfolio.qryInspectProjectDashboard.list.column.upcomingTasks.label": "Upcoming Tasks",
    "section.reviewProjectPortfolio.projectSelectionSection.title": "Obra em foco",
    "organism.reviewProjectPortfolio.qryLocateProject.title": "Selecionar a obra que exige atenção",
    "intent.reviewProjectPortfolio.qryLocateProject.list.title": "Selecionar a obra que exige atenção",
    "intent.reviewProjectPortfolio.qryLocateProject.list.empty": "Nenhum registro encontrado",
    "intent.reviewProjectPortfolio.qryLocateProject.list.column.projectId.label": "Project Id",
    "intent.reviewProjectPortfolio.qryLocateProject.list.column.clientId.label": "Client Id",
    "intent.reviewProjectPortfolio.qryLocateProject.list.column.name.label": "Name",
    "intent.reviewProjectPortfolio.qryLocateProject.list.column.address.label": "Address",
    "intent.reviewProjectPortfolio.qryLocateProject.list.column.status.label": "Status",
    "intent.reviewProjectPortfolio.qryLocateProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.reviewProjectPortfolio.qryLocateProject.list.column.plannedEndDate.label": "Planned End Date",
    "organism.reviewProjectPortfolio.qryInspectProjectExecutionOverview.title": "Analisar a execução da obra",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.title": "Analisar a execução da obra",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.empty": "Nenhum registro encontrado",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectId.label": "Project Id",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectName.label": "Project Name",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.projectStatus.label": "Project Status",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.workTaskIds.label": "Work Task Ids",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.taskSummary.label": "Task Summary",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label": "Upcoming Commitments",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.timeLogIds.label": "Time Log Ids",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label": "Total Logged Hours",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageIds.label": "Material Usage Ids",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label": "Material Usage Summary",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label": "Actual Labor Cost",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label": "Actual Material Cost",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.actualCost.label": "Actual Cost",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.budgetAmount.label": "Budget Amount",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.costVariance.label": "Cost Variance",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderIds.label": "Change Order Ids",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label": "Change Order Impact Summary",
    "intent.reviewProjectPortfolio.qryInspectProjectExecutionOverview.list.column.calculatedAt.label": "Calculated At",
    "organism.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.title": "Encaminhar a obra para acompanhamento de campo",
    "intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.title": "Encaminhar a obra para acompanhamento de campo",
    "intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.action.cmdHandoffProjectToFieldCoordinator": "Encaminhar a obra para acompanhamento de campo",
    "intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.clientId.label": "Client Id",
    "intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.name.label": "Name",
    "intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.address.label": "Address",
    "intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.authorizedBudget.label": "Authorized Budget",
    "intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedStartDate.label": "Planned Start Date",
    "intent.reviewProjectPortfolio.cmdHandoffProjectToFieldCoordinator.form.field.plannedEndDate.label": "Planned End Date",
    "action.cmdHandoffProjectToFieldCoordinator.success": "Encaminhar a obra para acompanhamento de campo: OK",
    "action.cmdHandoffProjectToFieldCoordinator.error": "Encaminhar a obra para acompanhamento de campo: falhou",
    "section.reviewProjectPortfolio.portfolioOverview.title": "Visão do portfólio",
    "section.reviewProjectPortfolio.projectAttentionWorkspace.title": "Obra que exige atenção",
    "section.reviewProjectPortfolio.portfolio-overview.title": "Visão do portfólio",
    "section.reviewProjectPortfolio.project-triage.title": "Obras que exigem atenção"
  },
  "automation": {
    "statePrefix": "ui.reviewProjectPortfolio",
    "stateKeys": [
      "ui.reviewProjectPortfolio.status",
      "ui.reviewProjectPortfolio.action.qryInspectProjectDashboard.status",
      "ui.reviewProjectPortfolio.data.qryInspectProjectDashboard",
      "ui.reviewProjectPortfolio.action.qryLocateProject.status",
      "ui.reviewProjectPortfolio.data.qryLocateProject",
      "ui.reviewProjectPortfolio.action.qryInspectProjectExecutionOverview.status",
      "ui.reviewProjectPortfolio.input.qryInspectProjectExecutionOverview.projectExecutionOverviewProjectId",
      "ui.reviewProjectPortfolio.data.qryInspectProjectExecutionOverview",
      "ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.status",
      "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.projectProjectId",
      "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.clientId",
      "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.name",
      "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.address",
      "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.authorizedBudget",
      "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedStartDate",
      "ui.reviewProjectPortfolio.input.cmdHandoffProjectToFieldCoordinator.plannedEndDate",
      "ui.reviewProjectPortfolio.output.cmdHandoffProjectToFieldCoordinator",
      "ui.reviewProjectPortfolio.action.cmdHandoffProjectToFieldCoordinator.error"
    ],
    "actionIds": [
      "qryInspectProjectDashboard",
      "qryLocateProject",
      "qryInspectProjectExecutionOverview",
      "cmdHandoffProjectToFieldCoordinator",
      "set.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId",
      "set.cmdHandoffProjectToFieldCoordinatorProjectProjectId",
      "set.cmdHandoffProjectToFieldCoordinatorClientId",
      "set.cmdHandoffProjectToFieldCoordinatorName",
      "set.cmdHandoffProjectToFieldCoordinatorAddress",
      "set.cmdHandoffProjectToFieldCoordinatorAuthorizedBudget",
      "set.cmdHandoffProjectToFieldCoordinatorPlannedStartDate",
      "set.cmdHandoffProjectToFieldCoordinatorPlannedEndDate"
    ]
  }
};

export const pipeline = [
  {
    "id": "reviewProjectPortfolio__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/reviewProjectPortfolio.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/reviewProjectPortfolio.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "activeProjectCostVisibility",
      "activeProjectCoordination",
      "ongoingProject"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
