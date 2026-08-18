/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectCoordinationAssignmentCatalogue",
  "pageName": "Atribuição de coordenação da obra",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmProjectCoordinationAssignmentCatalogueBase",
  "routePattern": "/buildFlowFsm/projectCoordinationAssignmentCatalogue",
  "sourceKind": "operation",
  "ownerIds": [
    "workspace:projectCoordinationAssignmentCatalogue",
    "contract:buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment",
    "contract:buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment",
    "contract:buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment",
    "contract:buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment",
    "contract:buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker"
  ],
  "operationIds": [
    "createProjectCoordinationAssignment",
    "deleteProjectCoordinationAssignment",
    "listProject",
    "listProjectCoordinationAssignment",
    "updateProjectCoordinationAssignment"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "projectCoordinationAssignmentCatalogue",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "ProjectCoordinationAssignment",
    "owners": [
      {
        "kind": "operation",
        "id": "createProjectCoordinationAssignment",
        "defPath": "_102046_/l4/buildFlowFsm/operations/createProjectCoordinationAssignment.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteProjectCoordinationAssignment",
        "defPath": "_102046_/l4/buildFlowFsm/operations/deleteProjectCoordinationAssignment.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listProject",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listProjectCoordinationAssignment",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listProjectCoordinationAssignment.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateProjectCoordinationAssignment",
        "defPath": "_102046_/l4/buildFlowFsm/operations/updateProjectCoordinationAssignment.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createProjectCoordinationAssignment",
          "commandName": "cmdCreateProjectCoordinationAssignment",
          "steps": [
            "Informar os dados do novo registro."
          ]
        },
        {
          "operationId": "deleteProjectCoordinationAssignment",
          "commandName": "cmdDeleteProjectCoordinationAssignment",
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
          "operationId": "listProjectCoordinationAssignment",
          "commandName": "qryListProjectCoordinationAssignment",
          "steps": [
            "Encontrar o registro."
          ]
        },
        {
          "operationId": "updateProjectCoordinationAssignment",
          "commandName": "cmdUpdateProjectCoordinationAssignment",
          "steps": [
            "Corrigir os dados do registro escolhido."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/projectCoordinationAssignmentCatalogue.ts",
    "contracts": [
      {
        "commandName": "qryListProjectCoordinationAssignment",
        "routeConst": "qryListProjectCoordinationAssignmentRoute"
      },
      {
        "commandName": "cmdCreateProjectCoordinationAssignment",
        "routeConst": "cmdCreateProjectCoordinationAssignmentRoute"
      },
      {
        "commandName": "cmdUpdateProjectCoordinationAssignment",
        "routeConst": "cmdUpdateProjectCoordinationAssignmentRoute"
      },
      {
        "commandName": "cmdDeleteProjectCoordinationAssignment",
        "routeConst": "cmdDeleteProjectCoordinationAssignmentRoute"
      },
      {
        "commandName": "qryProjectPicker",
        "routeConst": "qryProjectPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectCoordinationAssignmentCatalogue.defs.ts",
    "layoutId": "projectCoordinationAssignmentCatalogue-pos-workspace"
  },
  "states": [
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status",
      "name": "qryListProjectCoordinationAssignmentState",
      "kind": "actionStatus",
      "actionRef": "qryListProjectCoordinationAssignment",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment",
      "name": "qryListProjectCoordinationAssignmentData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryListProjectCoordinationAssignment",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status",
      "name": "cmdCreateProjectCoordinationAssignmentState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateProjectCoordinationAssignment",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId",
      "name": "cmdCreateProjectCoordinationAssignmentProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateProjectCoordinationAssignment",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId",
      "name": "cmdCreateProjectCoordinationAssignmentFieldCoordinatorId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateProjectCoordinationAssignment",
        "direction": "input",
        "field": "fieldCoordinatorId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status",
      "name": "cmdCreateProjectCoordinationAssignmentStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateProjectCoordinationAssignment",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment",
      "name": "cmdCreateProjectCoordinationAssignmentOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateProjectCoordinationAssignment",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.error",
      "name": "cmdCreateProjectCoordinationAssignmentError",
      "kind": "actionError",
      "actionRef": "cmdCreateProjectCoordinationAssignment",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status",
      "name": "cmdUpdateProjectCoordinationAssignmentState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateProjectCoordinationAssignment",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId",
      "name": "cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateProjectCoordinationAssignment",
        "direction": "input",
        "field": "projectCoordinationAssignmentId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId",
      "name": "cmdUpdateProjectCoordinationAssignmentProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateProjectCoordinationAssignment",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId",
      "name": "cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateProjectCoordinationAssignment",
        "direction": "input",
        "field": "fieldCoordinatorId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status",
      "name": "cmdUpdateProjectCoordinationAssignmentStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateProjectCoordinationAssignment",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment",
      "name": "cmdUpdateProjectCoordinationAssignmentOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateProjectCoordinationAssignment",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.error",
      "name": "cmdUpdateProjectCoordinationAssignmentError",
      "kind": "actionError",
      "actionRef": "cmdUpdateProjectCoordinationAssignment",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status",
      "name": "cmdDeleteProjectCoordinationAssignmentState",
      "kind": "actionStatus",
      "actionRef": "cmdDeleteProjectCoordinationAssignment",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId",
      "name": "cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdDeleteProjectCoordinationAssignment",
        "direction": "input",
        "field": "projectCoordinationAssignmentId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment",
      "name": "cmdDeleteProjectCoordinationAssignmentOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdDeleteProjectCoordinationAssignment",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.error",
      "name": "cmdDeleteProjectCoordinationAssignmentError",
      "kind": "actionError",
      "actionRef": "cmdDeleteProjectCoordinationAssignment",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status",
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
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker",
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
      "actionId": "qryListProjectCoordinationAssignment",
      "kind": "query",
      "commandRef": "qryListProjectCoordinationAssignment",
      "routeKey": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment",
      "purpose": "Listar Atribuição de coordenação da obra",
      "methodName": "loadQryListProjectCoordinationAssignment",
      "handlerName": "handleQryListProjectCoordinationAssignmentClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment"
      ],
      "statusStateKey": "ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status"
    },
    {
      "actionId": "cmdCreateProjectCoordinationAssignment",
      "kind": "command",
      "commandRef": "cmdCreateProjectCoordinationAssignment",
      "routeKey": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment",
      "purpose": "Criar Atribuição de coordenação da obra",
      "methodName": "cmdCreateProjectCoordinationAssignment",
      "handlerName": "handleCmdCreateProjectCoordinationAssignmentClick",
      "inputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId"
      ],
      "outputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment"
      ],
      "statusStateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status",
      "errorStateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateProjectCoordinationAssignment.success",
        "errorMessageKey": "action.cmdCreateProjectCoordinationAssignment.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status"
      ],
      "refreshActionIds": [
        "qryListProjectCoordinationAssignment",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdUpdateProjectCoordinationAssignment",
      "kind": "command",
      "commandRef": "cmdUpdateProjectCoordinationAssignment",
      "routeKey": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment",
      "purpose": "Atualizar Atribuição de coordenação da obra",
      "methodName": "cmdUpdateProjectCoordinationAssignment",
      "handlerName": "handleCmdUpdateProjectCoordinationAssignmentClick",
      "inputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId"
      ],
      "outputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment"
      ],
      "statusStateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status",
      "errorStateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateProjectCoordinationAssignment.success",
        "errorMessageKey": "action.cmdUpdateProjectCoordinationAssignment.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status"
      ],
      "refreshActionIds": [
        "qryListProjectCoordinationAssignment",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "cmdDeleteProjectCoordinationAssignment",
      "kind": "command",
      "commandRef": "cmdDeleteProjectCoordinationAssignment",
      "routeKey": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment",
      "purpose": "Excluir Atribuição de coordenação da obra",
      "methodName": "cmdDeleteProjectCoordinationAssignment",
      "handlerName": "handleCmdDeleteProjectCoordinationAssignmentClick",
      "inputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId"
      ],
      "outputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment"
      ],
      "statusStateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status",
      "errorStateKey": "ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.error",
      "feedback": {
        "successMessageKey": "action.cmdDeleteProjectCoordinationAssignment.success",
        "errorMessageKey": "action.cmdDeleteProjectCoordinationAssignment.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId"
      ],
      "refreshActionIds": [
        "qryListProjectCoordinationAssignment",
        "qryProjectPicker"
      ]
    },
    {
      "actionId": "qryProjectPicker",
      "kind": "query",
      "commandRef": "qryProjectPicker",
      "routeKey": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker",
      "purpose": "Listar Obra",
      "methodName": "loadQryProjectPicker",
      "handlerName": "handleQryProjectPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker"
      ],
      "statusStateKey": "ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status"
    },
    {
      "actionId": "set.cmdCreateProjectCoordinationAssignmentProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId",
      "methodName": "setCmdCreateProjectCoordinationAssignmentProjectId",
      "handlerName": "handleCmdCreateProjectCoordinationAssignmentProjectIdChange",
      "prefill": {
        "command": "cmdCreateProjectCoordinationAssignment",
        "sourceStateKey": "ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment",
        "sourceOutputShape": "array",
        "matchField": "projectId",
        "fields": [
          {
            "itemField": "fieldCoordinatorId",
            "targetStateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId",
      "methodName": "setCmdCreateProjectCoordinationAssignmentFieldCoordinatorId",
      "handlerName": "handleCmdCreateProjectCoordinationAssignmentFieldCoordinatorIdChange"
    },
    {
      "actionId": "set.cmdCreateProjectCoordinationAssignmentStatus",
      "kind": "stateSetter",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status",
      "methodName": "setCmdCreateProjectCoordinationAssignmentStatus",
      "handlerName": "handleCmdCreateProjectCoordinationAssignmentStatusChange"
    },
    {
      "actionId": "set.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId",
      "methodName": "setCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId",
      "handlerName": "handleCmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange",
      "prefill": {
        "command": "cmdUpdateProjectCoordinationAssignment",
        "sourceStateKey": "ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment",
        "sourceOutputShape": "array",
        "matchField": "projectCoordinationAssignmentId",
        "fields": [
          {
            "itemField": "fieldCoordinatorId",
            "targetStateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateProjectCoordinationAssignmentProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId",
      "methodName": "setCmdUpdateProjectCoordinationAssignmentProjectId",
      "handlerName": "handleCmdUpdateProjectCoordinationAssignmentProjectIdChange",
      "prefill": {
        "command": "cmdUpdateProjectCoordinationAssignment",
        "sourceStateKey": "ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment",
        "sourceOutputShape": "array",
        "matchField": "projectId",
        "fields": [
          {
            "itemField": "fieldCoordinatorId",
            "targetStateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status"
          }
        ]
      }
    },
    {
      "actionId": "set.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId",
      "methodName": "setCmdUpdateProjectCoordinationAssignmentFieldCoordinatorId",
      "handlerName": "handleCmdUpdateProjectCoordinationAssignmentFieldCoordinatorIdChange"
    },
    {
      "actionId": "set.cmdUpdateProjectCoordinationAssignmentStatus",
      "kind": "stateSetter",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status",
      "methodName": "setCmdUpdateProjectCoordinationAssignmentStatus",
      "handlerName": "handleCmdUpdateProjectCoordinationAssignmentStatusChange"
    },
    {
      "actionId": "set.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId",
      "kind": "stateSetter",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId",
      "methodName": "setCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId",
      "handlerName": "handleCmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryListProjectCoordinationAssignment",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment"
    },
    {
      "actionId": "qryProjectPicker",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker"
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
    "section.projectCoordinationAssignmentCatalogue.recordList.title": "Localização de atribuições",
    "organism.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.title": "Listar Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.title": "Listar Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.empty": "Nenhum registro encontrado",
    "intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectCoordinationAssignmentId.label": "Project Coordination Assignment Id",
    "intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.projectId.label": "Project Id",
    "intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.fieldCoordinatorId.label": "Field Coordinator Id",
    "intent.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.list.column.status.label": "Status",
    "organism.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.title": "Excluir Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.title": "Excluir Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.form.action.cmdDeleteProjectCoordinationAssignment": "Excluir Atribuição de coordenação da obra",
    "section.projectCoordinationAssignmentCatalogue.recordForm.title": "Criação e correção da atribuição",
    "organism.projectCoordinationAssignmentCatalogue.qryProjectPicker.title": "Listar Obra",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.title": "Listar Obra",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.empty": "Nenhum registro encontrado",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.projectId.label": "Project Id",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.clientId.label": "Client Id",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.name.label": "Name",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.address.label": "Address",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.status.label": "Status",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.authorizedBudget.label": "Authorized Budget",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedStartDate.label": "Planned Start Date",
    "intent.projectCoordinationAssignmentCatalogue.qryProjectPicker.list.column.plannedEndDate.label": "Planned End Date",
    "organism.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.title": "Criar Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.title": "Criar Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.action.cmdCreateProjectCoordinationAssignment": "Criar Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label": "Field Coordinator Id",
    "intent.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.form.field.status.label": "Status",
    "organism.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.title": "Atualizar Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.title": "Atualizar Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.action.cmdUpdateProjectCoordinationAssignment": "Atualizar Atribuição de coordenação da obra",
    "intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.fieldCoordinatorId.label": "Field Coordinator Id",
    "intent.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.form.field.status.label": "Status",
    "action.cmdCreateProjectCoordinationAssignment.success": "Criar Atribuição de coordenação da obra: OK",
    "action.cmdCreateProjectCoordinationAssignment.error": "Criar Atribuição de coordenação da obra: falhou",
    "action.cmdUpdateProjectCoordinationAssignment.success": "Atualizar Atribuição de coordenação da obra: OK",
    "action.cmdUpdateProjectCoordinationAssignment.error": "Atualizar Atribuição de coordenação da obra: falhou",
    "action.cmdDeleteProjectCoordinationAssignment.success": "Excluir Atribuição de coordenação da obra: OK",
    "action.cmdDeleteProjectCoordinationAssignment.error": "Excluir Atribuição de coordenação da obra: falhou",
    "section.projectCoordinationAssignmentCatalogue.assignmentWorkspace.title": "Atribuições de coordenação"
  },
  "automation": {
    "statePrefix": "ui.projectCoordinationAssignmentCatalogue",
    "stateKeys": [
      "ui.projectCoordinationAssignmentCatalogue.status",
      "ui.projectCoordinationAssignmentCatalogue.action.qryListProjectCoordinationAssignment.status",
      "ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment",
      "ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.status",
      "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId",
      "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId",
      "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status",
      "ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment",
      "ui.projectCoordinationAssignmentCatalogue.action.cmdCreateProjectCoordinationAssignment.error",
      "ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.status",
      "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId",
      "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId",
      "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId",
      "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status",
      "ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment",
      "ui.projectCoordinationAssignmentCatalogue.action.cmdUpdateProjectCoordinationAssignment.error",
      "ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.status",
      "ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId",
      "ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment",
      "ui.projectCoordinationAssignmentCatalogue.action.cmdDeleteProjectCoordinationAssignment.error",
      "ui.projectCoordinationAssignmentCatalogue.action.qryProjectPicker.status",
      "ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker"
    ],
    "actionIds": [
      "qryListProjectCoordinationAssignment",
      "cmdCreateProjectCoordinationAssignment",
      "cmdUpdateProjectCoordinationAssignment",
      "cmdDeleteProjectCoordinationAssignment",
      "qryProjectPicker",
      "set.cmdCreateProjectCoordinationAssignmentProjectId",
      "set.cmdCreateProjectCoordinationAssignmentFieldCoordinatorId",
      "set.cmdCreateProjectCoordinationAssignmentStatus",
      "set.cmdUpdateProjectCoordinationAssignmentProjectCoordinationAssignmentId",
      "set.cmdUpdateProjectCoordinationAssignmentProjectId",
      "set.cmdUpdateProjectCoordinationAssignmentFieldCoordinatorId",
      "set.cmdUpdateProjectCoordinationAssignmentStatus",
      "set.cmdDeleteProjectCoordinationAssignmentProjectCoordinationAssignmentId"
    ]
  }
};

export const pipeline = [
  {
    "id": "projectCoordinationAssignmentCatalogue__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/projectCoordinationAssignmentCatalogue.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "activeProjectCoordination"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
