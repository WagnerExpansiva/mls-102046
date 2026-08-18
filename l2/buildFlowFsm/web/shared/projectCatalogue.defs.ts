/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectCatalogue",
  "pageName": "Obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmProjectCatalogueBase",
  "routePattern": "/buildFlowFsm/projectCatalogue",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:projectCatalogue",
    "contract:buildFlowFsm.projectCatalogue.qryListProject",
    "contract:buildFlowFsm.projectCatalogue.cmdCreateProject",
    "contract:buildFlowFsm.projectCatalogue.cmdUpdateProject",
    "contract:buildFlowFsm.projectCatalogue.cmdDeleteProject",
    "contract:buildFlowFsm.projectCatalogue.qryClientPicker"
  ],
  "operationIds": [
    "createProject",
    "deleteProject",
    "listClient",
    "listProject",
    "updateProject"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "projectCatalogue",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "createProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateProject.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createProject",
          "commandName": "cmdCreateProject",
          "steps": [
            "Informar os dados do novo registro."
          ]
        },
        {
          "operationId": "deleteProject",
          "commandName": "cmdDeleteProject",
          "steps": [
            "Remover o registro escolhido."
          ]
        },
        {
          "operationId": "listClient",
          "commandName": "qryClientPicker",
          "steps": [
            "Encontrar o registro."
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
          "operationId": "updateProject",
          "commandName": "cmdUpdateProject",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/projectCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListProject",
        "routeConst": "qryListProjectRoute"
      },
      {
        "commandName": "cmdCreateProject",
        "routeConst": "cmdCreateProjectRoute"
      },
      {
        "commandName": "cmdUpdateProject",
        "routeConst": "cmdUpdateProjectRoute"
      },
      {
        "commandName": "cmdDeleteProject",
        "routeConst": "cmdDeleteProjectRoute"
      },
      {
        "commandName": "qryClientPicker",
        "routeConst": "qryClientPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectCatalogue.defs.ts",
    "layoutId": "projectCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.projectCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.action.qryListProject.status",
      "name": "qryListProjectState",
      "kind": "actionStatus",
      "actionRef": "qryListProject",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectCatalogue.data.qryListProject",
      "name": "qryListProjectData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListProject",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.projectCatalogue.action.cmdCreateProject.status",
      "name": "cmdCreateProjectState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateProject",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.clientId",
      "name": "cmdCreateProjectClientId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateProject",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.name",
      "name": "cmdCreateProjectName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateProject",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.address",
      "name": "cmdCreateProjectAddress",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateProject",
        "direction": "input",
        "field": "address"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.status",
      "name": "cmdCreateProjectStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateProject",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.authorizedBudget",
      "name": "cmdCreateProjectAuthorizedBudget",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateProject",
        "direction": "input",
        "field": "authorizedBudget"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.plannedStartDate",
      "name": "cmdCreateProjectPlannedStartDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateProject",
        "direction": "input",
        "field": "plannedStartDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.plannedEndDate",
      "name": "cmdCreateProjectPlannedEndDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateProject",
        "direction": "input",
        "field": "plannedEndDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.output.cmdCreateProject",
      "name": "cmdCreateProjectOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateProject",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectCatalogue.action.cmdCreateProject.error",
      "name": "cmdCreateProjectError",
      "kind": "actionError",
      "actionRef": "cmdCreateProject",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.action.cmdUpdateProject.status",
      "name": "cmdUpdateProjectState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateProject",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.projectId",
      "name": "cmdUpdateProjectProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateProject",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.clientId",
      "name": "cmdUpdateProjectClientId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateProject",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.name",
      "name": "cmdUpdateProjectName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateProject",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.address",
      "name": "cmdUpdateProjectAddress",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateProject",
        "direction": "input",
        "field": "address"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.status",
      "name": "cmdUpdateProjectStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateProject",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget",
      "name": "cmdUpdateProjectAuthorizedBudget",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateProject",
        "direction": "input",
        "field": "authorizedBudget"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate",
      "name": "cmdUpdateProjectPlannedStartDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateProject",
        "direction": "input",
        "field": "plannedStartDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate",
      "name": "cmdUpdateProjectPlannedEndDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateProject",
        "direction": "input",
        "field": "plannedEndDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.output.cmdUpdateProject",
      "name": "cmdUpdateProjectOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateProject",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectCatalogue.action.cmdUpdateProject.error",
      "name": "cmdUpdateProjectError",
      "kind": "actionError",
      "actionRef": "cmdUpdateProject",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.action.cmdDeleteProject.status",
      "name": "cmdDeleteProjectState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteProject",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectCatalogue.input.cmdDeleteProject.projectId",
      "name": "cmdDeleteProjectProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteProject",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.output.cmdDeleteProject",
      "name": "cmdDeleteProjectOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteProject",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectCatalogue.action.cmdDeleteProject.error",
      "name": "cmdDeleteProjectError",
      "kind": "actionError",
      "actionRef": "cmdDeleteProject",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCatalogue.action.qryClientPicker.status",
      "name": "qryClientPickerState",
      "kind": "actionStatus",
      "actionRef": "qryClientPicker",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectCatalogue.data.qryClientPicker",
      "name": "qryClientPickerData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryClientPicker",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "qryListProject",
      "kind": "query",
      "commandRef": "qryListProject",
      "routeKey": "buildFlowFsm.projectCatalogue.qryListProject",
      "purpose": "Listar Obra",
      "methodName": "loadQryListProject",
      "handlerName": "handleQryListProjectClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectCatalogue.data.qryListProject"
      ],
      "statusStateKey": "ui.projectCatalogue.action.qryListProject.status"
    },
    {
      "actionId": "cmdCreateProject",
      "kind": "command",
      "commandRef": "cmdCreateProject",
      "routeKey": "buildFlowFsm.projectCatalogue.cmdCreateProject",
      "purpose": "Criar Obra",
      "methodName": "cmdCreateProject",
      "handlerName": "handleCmdCreateProjectClick",
      "inputStateKeys": [
        "ui.projectCatalogue.input.cmdCreateProject.clientId",
        "ui.projectCatalogue.input.cmdCreateProject.name",
        "ui.projectCatalogue.input.cmdCreateProject.address",
        "ui.projectCatalogue.input.cmdCreateProject.status",
        "ui.projectCatalogue.input.cmdCreateProject.authorizedBudget",
        "ui.projectCatalogue.input.cmdCreateProject.plannedStartDate",
        "ui.projectCatalogue.input.cmdCreateProject.plannedEndDate"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectCatalogue.output.cmdCreateProject"
      ],
      "statusStateKey": "ui.projectCatalogue.action.cmdCreateProject.status",
      "errorStateKey": "ui.projectCatalogue.action.cmdCreateProject.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateProject.success",
        "errorMessageKey": "action.cmdCreateProject.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectCatalogue.input.cmdCreateProject.clientId",
        "ui.projectCatalogue.input.cmdCreateProject.name",
        "ui.projectCatalogue.input.cmdCreateProject.address",
        "ui.projectCatalogue.input.cmdCreateProject.status",
        "ui.projectCatalogue.input.cmdCreateProject.authorizedBudget",
        "ui.projectCatalogue.input.cmdCreateProject.plannedStartDate",
        "ui.projectCatalogue.input.cmdCreateProject.plannedEndDate"
      ],
      "refreshActionIds": [
        "qryListProject",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "cmdUpdateProject",
      "kind": "command",
      "commandRef": "cmdUpdateProject",
      "routeKey": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
      "purpose": "Atualizar Obra",
      "methodName": "cmdUpdateProject",
      "handlerName": "handleCmdUpdateProjectClick",
      "inputStateKeys": [
        "ui.projectCatalogue.input.cmdUpdateProject.projectId",
        "ui.projectCatalogue.input.cmdUpdateProject.clientId",
        "ui.projectCatalogue.input.cmdUpdateProject.name",
        "ui.projectCatalogue.input.cmdUpdateProject.address",
        "ui.projectCatalogue.input.cmdUpdateProject.status",
        "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget",
        "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate",
        "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectCatalogue.input.cmdUpdateProject.projectId"
      ],
      "outputStateKeys": [
        "ui.projectCatalogue.output.cmdUpdateProject"
      ],
      "statusStateKey": "ui.projectCatalogue.action.cmdUpdateProject.status",
      "errorStateKey": "ui.projectCatalogue.action.cmdUpdateProject.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateProject.success",
        "errorMessageKey": "action.cmdUpdateProject.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectCatalogue.input.cmdUpdateProject.projectId",
        "ui.projectCatalogue.input.cmdUpdateProject.clientId",
        "ui.projectCatalogue.input.cmdUpdateProject.name",
        "ui.projectCatalogue.input.cmdUpdateProject.address",
        "ui.projectCatalogue.input.cmdUpdateProject.status",
        "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget",
        "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate",
        "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate"
      ],
      "refreshActionIds": [
        "qryListProject",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "cmdDeleteProject",
      "kind": "command",
      "commandRef": "cmdDeleteProject",
      "routeKey": "buildFlowFsm.projectCatalogue.cmdDeleteProject",
      "purpose": "Excluir Obra",
      "methodName": "cmdDeleteProject",
      "handlerName": "handleCmdDeleteProjectClick",
      "inputStateKeys": [
        "ui.projectCatalogue.input.cmdDeleteProject.projectId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectCatalogue.input.cmdDeleteProject.projectId"
      ],
      "outputStateKeys": [
        "ui.projectCatalogue.output.cmdDeleteProject"
      ],
      "statusStateKey": "ui.projectCatalogue.action.cmdDeleteProject.status",
      "errorStateKey": "ui.projectCatalogue.action.cmdDeleteProject.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteProject.success",
        "errorMessageKey": "action.cmdDeleteProject.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectCatalogue.input.cmdDeleteProject.projectId"
      ],
      "refreshActionIds": [
        "qryListProject",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "qryClientPicker",
      "kind": "query",
      "commandRef": "qryClientPicker",
      "routeKey": "buildFlowFsm.projectCatalogue.qryClientPicker",
      "purpose": "Listar Cliente",
      "methodName": "loadQryClientPicker",
      "handlerName": "handleQryClientPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectCatalogue.data.qryClientPicker"
      ],
      "statusStateKey": "ui.projectCatalogue.action.qryClientPicker.status"
    },
    {
      "actionId": "set.cmdCreateProjectClientId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.clientId",
      "methodName": "setCmdCreateProjectClientId",
      "handlerName": "handleCmdCreateProjectClientIdChange"
    },
    {
      "actionId": "set.cmdCreateProjectName",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.name",
      "methodName": "setCmdCreateProjectName",
      "handlerName": "handleCmdCreateProjectNameChange"
    },
    {
      "actionId": "set.cmdCreateProjectAddress",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.address",
      "methodName": "setCmdCreateProjectAddress",
      "handlerName": "handleCmdCreateProjectAddressChange"
    },
    {
      "actionId": "set.cmdCreateProjectStatus",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.status",
      "methodName": "setCmdCreateProjectStatus",
      "handlerName": "handleCmdCreateProjectStatusChange"
    },
    {
      "actionId": "set.cmdCreateProjectAuthorizedBudget",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.authorizedBudget",
      "methodName": "setCmdCreateProjectAuthorizedBudget",
      "handlerName": "handleCmdCreateProjectAuthorizedBudgetChange"
    },
    {
      "actionId": "set.cmdCreateProjectPlannedStartDate",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.plannedStartDate",
      "methodName": "setCmdCreateProjectPlannedStartDate",
      "handlerName": "handleCmdCreateProjectPlannedStartDateChange"
    },
    {
      "actionId": "set.cmdCreateProjectPlannedEndDate",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdCreateProject.plannedEndDate",
      "methodName": "setCmdCreateProjectPlannedEndDate",
      "handlerName": "handleCmdCreateProjectPlannedEndDateChange"
    },
    {
      "actionId": "set.cmdUpdateProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.projectId",
      "methodName": "setCmdUpdateProjectProjectId",
      "handlerName": "handleCmdUpdateProjectProjectIdChange",
      "prefill": {
        "command": "cmdUpdateProject",
        "sourceStateKey": "ui.projectCatalogue.data.qryListProject",
        "sourceOutputShape": "array",
        "matchField": "projectId",
        "fields": [
          {
            "itemField": "clientId",
            "targetStateKey": "ui.projectCatalogue.input.cmdUpdateProject.clientId"
          },
          {
            "itemField": "name",
            "targetStateKey": "ui.projectCatalogue.input.cmdUpdateProject.name"
          },
          {
            "itemField": "address",
            "targetStateKey": "ui.projectCatalogue.input.cmdUpdateProject.address"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.projectCatalogue.input.cmdUpdateProject.status"
          },
          {
            "itemField": "authorizedBudget",
            "targetStateKey": "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget"
          },
          {
            "itemField": "plannedStartDate",
            "targetStateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate"
          },
          {
            "itemField": "plannedEndDate",
            "targetStateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateProjectClientId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.clientId",
      "methodName": "setCmdUpdateProjectClientId",
      "handlerName": "handleCmdUpdateProjectClientIdChange"
    },
    {
      "actionId": "set.cmdUpdateProjectName",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.name",
      "methodName": "setCmdUpdateProjectName",
      "handlerName": "handleCmdUpdateProjectNameChange"
    },
    {
      "actionId": "set.cmdUpdateProjectAddress",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.address",
      "methodName": "setCmdUpdateProjectAddress",
      "handlerName": "handleCmdUpdateProjectAddressChange"
    },
    {
      "actionId": "set.cmdUpdateProjectStatus",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.status",
      "methodName": "setCmdUpdateProjectStatus",
      "handlerName": "handleCmdUpdateProjectStatusChange"
    },
    {
      "actionId": "set.cmdUpdateProjectAuthorizedBudget",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget",
      "methodName": "setCmdUpdateProjectAuthorizedBudget",
      "handlerName": "handleCmdUpdateProjectAuthorizedBudgetChange"
    },
    {
      "actionId": "set.cmdUpdateProjectPlannedStartDate",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate",
      "methodName": "setCmdUpdateProjectPlannedStartDate",
      "handlerName": "handleCmdUpdateProjectPlannedStartDateChange"
    },
    {
      "actionId": "set.cmdUpdateProjectPlannedEndDate",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate",
      "methodName": "setCmdUpdateProjectPlannedEndDate",
      "handlerName": "handleCmdUpdateProjectPlannedEndDateChange"
    },
    {
      "actionId": "set.cmdDeleteProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCatalogue.input.cmdDeleteProject.projectId",
      "methodName": "setCmdDeleteProjectProjectId",
      "handlerName": "handleCmdDeleteProjectProjectIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListProject",
      "stateKey": "ui.projectCatalogue.data.qryListProject"
    },
    {
      "actionId": "qryClientPicker",
      "stateKey": "ui.projectCatalogue.data.qryClientPicker"
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
    "section.projectCatalogue.recordList.title": "Localizar obra",
    "organism.projectCatalogue.qryListProject.title": "Listar Obra",
    "intent.projectCatalogue.qryListProject.list.title": "Listar Obra",
    "intent.projectCatalogue.qryListProject.list.empty": "Nenhum registro encontrado",
    "intent.projectCatalogue.qryListProject.list.column.projectId.label": "Project Id",
    "intent.projectCatalogue.qryListProject.list.column.clientId.label": "Client Id",
    "intent.projectCatalogue.qryListProject.list.column.name.label": "Name",
    "intent.projectCatalogue.qryListProject.list.column.address.label": "Address",
    "intent.projectCatalogue.qryListProject.list.column.status.label": "Status",
    "intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.projectCatalogue.qryListProject.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.projectCatalogue.qryListProject.list.column.plannedEndDate.label": "Planned End Date",
    "organism.projectCatalogue.cmdDeleteProject.title": "Excluir Obra",
    "intent.projectCatalogue.cmdDeleteProject.form.title": "Excluir Obra",
    "intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject": "Excluir Obra",
    "section.projectCatalogue.recordForm.title": "Criar ou corrigir obra",
    "organism.projectCatalogue.cmdCreateProject.title": "Criar Obra",
    "intent.projectCatalogue.cmdCreateProject.form.title": "Criar Obra",
    "intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject": "Criar Obra",
    "intent.projectCatalogue.cmdCreateProject.form.field.clientId.label": "Client Id",
    "intent.projectCatalogue.cmdCreateProject.form.field.name.label": "Name",
    "intent.projectCatalogue.cmdCreateProject.form.field.address.label": "Address",
    "intent.projectCatalogue.cmdCreateProject.form.field.status.label": "Status",
    "intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label": "Authorized Budget",
    "intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label": "Planned Start Date",
    "intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label": "Planned End Date",
    "organism.projectCatalogue.cmdUpdateProject.title": "Atualizar Obra",
    "intent.projectCatalogue.cmdUpdateProject.form.title": "Atualizar Obra",
    "intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject": "Atualizar Obra",
    "intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label": "Client Id",
    "intent.projectCatalogue.cmdUpdateProject.form.field.name.label": "Name",
    "intent.projectCatalogue.cmdUpdateProject.form.field.address.label": "Address",
    "intent.projectCatalogue.cmdUpdateProject.form.field.status.label": "Status",
    "intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label": "Authorized Budget",
    "intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label": "Planned Start Date",
    "intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label": "Planned End Date",
    "organism.projectCatalogue.qryClientPicker.title": "Listar Cliente",
    "intent.projectCatalogue.qryClientPicker.list.title": "Listar Cliente",
    "intent.projectCatalogue.qryClientPicker.list.empty": "Nenhum registro encontrado",
    "intent.projectCatalogue.qryClientPicker.list.column.clientId.label": "Client Id",
    "intent.projectCatalogue.qryClientPicker.list.column.clientName.label": "Client Name",
    "intent.projectCatalogue.qryClientPicker.list.column.contactEmail.label": "Contact Email",
    "intent.projectCatalogue.qryClientPicker.list.column.contactPhone.label": "Contact Phone",
    "action.cmdCreateProject.success": "Criar Obra: OK",
    "action.cmdCreateProject.error": "Criar Obra: falhou",
    "action.cmdUpdateProject.success": "Atualizar Obra: OK",
    "action.cmdUpdateProject.error": "Atualizar Obra: falhou",
    "action.cmdDeleteProject.success": "Excluir Obra: OK",
    "action.cmdDeleteProject.error": "Excluir Obra: falhou",
    "section.projectCatalogue.projectWorkbench.title": "Obras",
    "section.projectCatalogue.projectCreation.title": "Nova obra",
    "section.projectCatalogue.projectWorkspace.title": "Localização e manutenção de obras"
  },
  "automation": {
    "statePrefix": "ui.projectCatalogue",
    "stateKeys": [
      "ui.projectCatalogue.status",
      "ui.projectCatalogue.action.qryListProject.status",
      "ui.projectCatalogue.data.qryListProject",
      "ui.projectCatalogue.action.cmdCreateProject.status",
      "ui.projectCatalogue.input.cmdCreateProject.clientId",
      "ui.projectCatalogue.input.cmdCreateProject.name",
      "ui.projectCatalogue.input.cmdCreateProject.address",
      "ui.projectCatalogue.input.cmdCreateProject.status",
      "ui.projectCatalogue.input.cmdCreateProject.authorizedBudget",
      "ui.projectCatalogue.input.cmdCreateProject.plannedStartDate",
      "ui.projectCatalogue.input.cmdCreateProject.plannedEndDate",
      "ui.projectCatalogue.output.cmdCreateProject",
      "ui.projectCatalogue.action.cmdCreateProject.error",
      "ui.projectCatalogue.action.cmdUpdateProject.status",
      "ui.projectCatalogue.input.cmdUpdateProject.projectId",
      "ui.projectCatalogue.input.cmdUpdateProject.clientId",
      "ui.projectCatalogue.input.cmdUpdateProject.name",
      "ui.projectCatalogue.input.cmdUpdateProject.address",
      "ui.projectCatalogue.input.cmdUpdateProject.status",
      "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget",
      "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate",
      "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate",
      "ui.projectCatalogue.output.cmdUpdateProject",
      "ui.projectCatalogue.action.cmdUpdateProject.error",
      "ui.projectCatalogue.action.cmdDeleteProject.status",
      "ui.projectCatalogue.input.cmdDeleteProject.projectId",
      "ui.projectCatalogue.output.cmdDeleteProject",
      "ui.projectCatalogue.action.cmdDeleteProject.error",
      "ui.projectCatalogue.action.qryClientPicker.status",
      "ui.projectCatalogue.data.qryClientPicker"
    ],
    "actionIds": [
      "qryListProject",
      "cmdCreateProject",
      "cmdUpdateProject",
      "cmdDeleteProject",
      "qryClientPicker",
      "set.cmdCreateProjectClientId",
      "set.cmdCreateProjectName",
      "set.cmdCreateProjectAddress",
      "set.cmdCreateProjectStatus",
      "set.cmdCreateProjectAuthorizedBudget",
      "set.cmdCreateProjectPlannedStartDate",
      "set.cmdCreateProjectPlannedEndDate",
      "set.cmdUpdateProjectProjectId",
      "set.cmdUpdateProjectClientId",
      "set.cmdUpdateProjectName",
      "set.cmdUpdateProjectAddress",
      "set.cmdUpdateProjectStatus",
      "set.cmdUpdateProjectAuthorizedBudget",
      "set.cmdUpdateProjectPlannedStartDate",
      "set.cmdUpdateProjectPlannedEndDate",
      "set.cmdDeleteProjectProjectId"
    ]
  }
};

export const pipeline = [
  {
    "id": "projectCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/projectCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "activeProject",
      "ongoingProject"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
