/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "forwardChangeOrderForClientApproval",
  "pageName": "Encaminhar ordem de mudança ao cliente",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmForwardChangeOrderForClientApprovalBase",
  "routePattern": "/buildFlowFsm/forwardChangeOrderForClientApproval",
  "sourceKind": "workflow",
  "ownerIds": [
    "workspace:forwardChangeOrderForClientApproval",
    "contract:buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder",
    "contract:buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient"
  ],
  "operationIds": [
    "handoffChangeOrderToClient",
    "locateChangeOrder"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "forwardChangeOrderForClientApproval",
    "workspaceKind": "workflow",
    "workflowId": "changeOrderLifecycle",
    "actor": "projectManager",
    "entity": "ChangeOrder",
    "owners": [
      {
        "kind": "operation",
        "id": "handoffChangeOrderToClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffChangeOrderToClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "locateChangeOrder",
        "defPath": "_102046_/l4/buildFlowFsm/operations/locateChangeOrder.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "handoffChangeOrderToClient",
          "commandName": "cmdHandoffChangeOrderToClient",
          "steps": [
            "Solicitar aprovação do cliente",
            "O cliente recebe a ordem de mudança para decidir sua aprovação."
          ]
        },
        {
          "operationId": "locateChangeOrder",
          "commandName": "qryLocateChangeOrder",
          "steps": [
            "Localizar a ordem de mudança submetida",
            "Uma ordem pendente de tratamento está selecionada."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/forwardChangeOrderForClientApproval.ts",
    "contracts": [
      {
        "commandName": "qryLocateChangeOrder",
        "routeConst": "qryLocateChangeOrderRoute"
      },
      {
        "commandName": "cmdHandoffChangeOrderToClient",
        "routeConst": "cmdHandoffChangeOrderToClientRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/forwardChangeOrderForClientApproval.defs.ts",
    "layoutId": "workflow_queue"
  },
  "states": [
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status",
      "name": "qryLocateChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "qryLocateChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder",
      "name": "qryLocateChangeOrderData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "qryLocateChangeOrder",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status",
      "name": "cmdHandoffChangeOrderToClientState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffChangeOrderToClient",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId",
      "name": "cmdHandoffChangeOrderToClientChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToClient",
        "direction": "input",
        "field": "changeOrderChangeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description",
      "name": "cmdHandoffChangeOrderToClientDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToClient",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact",
      "name": "cmdHandoffChangeOrderToClientScopeImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToClient",
        "direction": "input",
        "field": "scopeImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact",
      "name": "cmdHandoffChangeOrderToClientScheduleImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToClient",
        "direction": "input",
        "field": "scheduleImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount",
      "name": "cmdHandoffChangeOrderToClientChangeAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToClient",
        "direction": "input",
        "field": "changeAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient",
      "name": "cmdHandoffChangeOrderToClientOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffChangeOrderToClient",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.error",
      "name": "cmdHandoffChangeOrderToClientError",
      "kind": "actionError",
      "actionRef": "cmdHandoffChangeOrderToClient",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "qryLocateChangeOrder",
      "kind": "query",
      "commandRef": "qryLocateChangeOrder",
      "routeKey": "buildFlowFsm.forwardChangeOrderForClientApproval.qryLocateChangeOrder",
      "purpose": "Localizar a ordem de mudança submetida",
      "methodName": "loadQryLocateChangeOrder",
      "handlerName": "handleQryLocateChangeOrderClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder"
      ],
      "statusStateKey": "ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status"
    },
    {
      "actionId": "cmdHandoffChangeOrderToClient",
      "kind": "command",
      "commandRef": "cmdHandoffChangeOrderToClient",
      "routeKey": "buildFlowFsm.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient",
      "purpose": "Solicitar aprovação do cliente",
      "methodName": "cmdHandoffChangeOrderToClient",
      "handlerName": "handleCmdHandoffChangeOrderToClientClick",
      "inputStateKeys": [
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId"
      ],
      "outputStateKeys": [
        "ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient"
      ],
      "statusStateKey": "ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status",
      "errorStateKey": "ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffChangeOrderToClient.success",
        "errorMessageKey": "action.cmdHandoffChangeOrderToClient.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact",
        "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount"
      ],
      "refreshActionIds": [
        "qryLocateChangeOrder"
      ]
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId",
      "methodName": "setCmdHandoffChangeOrderToClientChangeOrderChangeOrderId",
      "handlerName": "handleCmdHandoffChangeOrderToClientChangeOrderChangeOrderIdChange"
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToClientDescription",
      "kind": "stateSetter",
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description",
      "methodName": "setCmdHandoffChangeOrderToClientDescription",
      "handlerName": "handleCmdHandoffChangeOrderToClientDescriptionChange"
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToClientScopeImpact",
      "kind": "stateSetter",
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact",
      "methodName": "setCmdHandoffChangeOrderToClientScopeImpact",
      "handlerName": "handleCmdHandoffChangeOrderToClientScopeImpactChange"
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToClientScheduleImpact",
      "kind": "stateSetter",
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact",
      "methodName": "setCmdHandoffChangeOrderToClientScheduleImpact",
      "handlerName": "handleCmdHandoffChangeOrderToClientScheduleImpactChange"
    },
    {
      "actionId": "set.cmdHandoffChangeOrderToClientChangeAmount",
      "kind": "stateSetter",
      "stateKey": "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount",
      "methodName": "setCmdHandoffChangeOrderToClientChangeAmount",
      "handlerName": "handleCmdHandoffChangeOrderToClientChangeAmountChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateChangeOrder",
      "stateKey": "ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder"
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
    "section.forwardChangeOrderForClientApproval.locateChangeOrder.title": "Localizar ordem de mudança",
    "organism.forwardChangeOrderForClientApproval.qryLocateChangeOrder.title": "Localizar a ordem de mudança submetida",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title": "Localizar a ordem de mudança submetida",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty": "Nenhum registro encontrado",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label": "Change Order Id",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.clientRef.label": "Client Ref",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.projectRef.label": "Project Ref",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.description.label": "Description",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scopeImpact.label": "Scope Impact",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scheduleImpact.label": "Schedule Impact",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeAmount.label": "Change Amount",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.submittedAt.label": "Submitted At",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label": "Forwarded For Client Approval At",
    "intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.status.label": "Status",
    "section.forwardChangeOrderForClientApproval.handoffChangeOrderToClient.title": "Encaminhar para aprovação do cliente",
    "organism.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.title": "Solicitar aprovação do cliente",
    "intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title": "Solicitar aprovação do cliente",
    "intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.action.cmdHandoffChangeOrderToClient": "Solicitar aprovação do cliente",
    "intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.description.label": "Description",
    "intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scopeImpact.label": "Scope Impact",
    "intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scheduleImpact.label": "Schedule Impact",
    "intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.changeAmount.label": "Change Amount",
    "action.cmdHandoffChangeOrderToClient.success": "Solicitar aprovação do cliente: OK",
    "action.cmdHandoffChangeOrderToClient.error": "Solicitar aprovação do cliente: falhou",
    "section.forwardChangeOrderForClientApproval.change-order-workspace.title": "Ordem de mudança para encaminhamento",
    "section.forwardChangeOrderForClientApproval.changeOrderApprovalWorkspace.title": "Ordem de mudança para aprovação"
  },
  "automation": {
    "statePrefix": "ui.forwardChangeOrderForClientApproval",
    "stateKeys": [
      "ui.forwardChangeOrderForClientApproval.status",
      "ui.forwardChangeOrderForClientApproval.action.qryLocateChangeOrder.status",
      "ui.forwardChangeOrderForClientApproval.data.qryLocateChangeOrder",
      "ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.status",
      "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeOrderChangeOrderId",
      "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.description",
      "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scopeImpact",
      "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.scheduleImpact",
      "ui.forwardChangeOrderForClientApproval.input.cmdHandoffChangeOrderToClient.changeAmount",
      "ui.forwardChangeOrderForClientApproval.output.cmdHandoffChangeOrderToClient",
      "ui.forwardChangeOrderForClientApproval.action.cmdHandoffChangeOrderToClient.error"
    ],
    "actionIds": [
      "qryLocateChangeOrder",
      "cmdHandoffChangeOrderToClient",
      "set.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId",
      "set.cmdHandoffChangeOrderToClientDescription",
      "set.cmdHandoffChangeOrderToClientScopeImpact",
      "set.cmdHandoffChangeOrderToClientScheduleImpact",
      "set.cmdHandoffChangeOrderToClientChangeAmount"
    ]
  }
};

export const pipeline = [
  {
    "id": "forwardChangeOrderForClientApproval__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/forwardChangeOrderForClientApproval.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "managerActionableChangeOrder"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
