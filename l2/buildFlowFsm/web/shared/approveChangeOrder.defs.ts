/// <mls fileReference="_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "approveChangeOrder",
  "pageName": "Aprovar ordem de mudança",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmApproveChangeOrderBase",
  "routePattern": "/buildFlowFsm/approveChangeOrder/:projectProjectId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workspace:approveChangeOrder",
    "contract:buildFlowFsm.approveChangeOrder.qryLocateChangeOrder",
    "contract:buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision",
    "contract:buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling",
    "contract:buildFlowFsm.approveChangeOrder.qryClientPicker"
  ],
  "operationIds": [
    "approveChangeOrderDecision",
    "handoffApprovedChangeOrderToBilling",
    "listClient",
    "locateChangeOrder"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "approveChangeOrder",
    "workspaceKind": "workflow",
    "workflowId": "changeOrderLifecycle",
    "actor": "client",
    "entity": "ChangeOrder",
    "owners": [
      {
        "kind": "operation",
        "id": "approveChangeOrderDecision",
        "defPath": "_102046_/l4/buildFlowFsm/operations/approveChangeOrderDecision.defs.ts"
      },
      {
        "kind": "operation",
        "id": "handoffApprovedChangeOrderToBilling",
        "defPath": "_102046_/l4/buildFlowFsm/operations/handoffApprovedChangeOrderToBilling.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listClient",
        "defPath": "_102046_/l4/buildFlowFsm/operations/listClient.defs.ts"
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
          "operationId": "approveChangeOrderDecision",
          "commandName": "cmdApproveChangeOrderDecision",
          "steps": [
            "Aprovar a ordem de mudança",
            "A ordem fica registrada como aprovada pelo cliente."
          ]
        },
        {
          "operationId": "handoffApprovedChangeOrderToBilling",
          "commandName": "cmdHandoffApprovedChangeOrderToBilling",
          "steps": [
            "Encaminhar a alteração aprovada ao faturamento",
            "A equipe de faturamento recebe a ordem aprovada."
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
    "tsPath": "_102046_/l2/buildFlowFsm/web/contracts/approveChangeOrder.ts",
    "contracts": [
      {
        "commandName": "qryLocateChangeOrder",
        "routeConst": "qryLocateChangeOrderRoute"
      },
      {
        "commandName": "cmdApproveChangeOrderDecision",
        "routeConst": "cmdApproveChangeOrderDecisionRoute"
      },
      {
        "commandName": "cmdHandoffApprovedChangeOrderToBilling",
        "routeConst": "cmdHandoffApprovedChangeOrderToBillingRoute"
      },
      {
        "commandName": "qryClientPicker",
        "routeConst": "qryClientPickerRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/approveChangeOrder.defs.ts",
    "layoutId": "approveChangeOrder-workflow-queue"
  },
  "states": [
    {
      "stateKey": "ui.approveChangeOrder.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.action.qryLocateChangeOrder.status",
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
      "stateKey": "ui.approveChangeOrder.data.qryLocateChangeOrder",
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
      "stateKey": "ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status",
      "name": "cmdApproveChangeOrderDecisionState",
      "kind": "actionStatus",
      "actionRef": "cmdApproveChangeOrderDecision",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId",
      "name": "cmdApproveChangeOrderDecisionChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdApproveChangeOrderDecision",
        "direction": "input",
        "field": "changeOrderChangeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId",
      "name": "cmdApproveChangeOrderDecisionClientClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdApproveChangeOrderDecision",
        "direction": "input",
        "field": "clientClientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId",
      "name": "cmdApproveChangeOrderDecisionProjectProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdApproveChangeOrderDecision",
        "direction": "input",
        "field": "projectProjectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status",
      "name": "cmdApproveChangeOrderDecisionStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdApproveChangeOrderDecision",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.output.cmdApproveChangeOrderDecision",
      "name": "cmdApproveChangeOrderDecisionOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdApproveChangeOrderDecision",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.error",
      "name": "cmdApproveChangeOrderDecisionError",
      "kind": "actionError",
      "actionRef": "cmdApproveChangeOrderDecision",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status",
      "name": "cmdHandoffApprovedChangeOrderToBillingState",
      "kind": "actionStatus",
      "actionRef": "cmdHandoffApprovedChangeOrderToBilling",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId",
      "name": "cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdHandoffApprovedChangeOrderToBilling",
        "direction": "input",
        "field": "changeOrderChangeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description",
      "name": "cmdHandoffApprovedChangeOrderToBillingDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffApprovedChangeOrderToBilling",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact",
      "name": "cmdHandoffApprovedChangeOrderToBillingScopeImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffApprovedChangeOrderToBilling",
        "direction": "input",
        "field": "scopeImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact",
      "name": "cmdHandoffApprovedChangeOrderToBillingScheduleImpact",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffApprovedChangeOrderToBilling",
        "direction": "input",
        "field": "scheduleImpact"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount",
      "name": "cmdHandoffApprovedChangeOrderToBillingChangeAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdHandoffApprovedChangeOrderToBilling",
        "direction": "input",
        "field": "changeAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling",
      "name": "cmdHandoffApprovedChangeOrderToBillingOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdHandoffApprovedChangeOrderToBilling",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.error",
      "name": "cmdHandoffApprovedChangeOrderToBillingError",
      "kind": "actionError",
      "actionRef": "cmdHandoffApprovedChangeOrderToBilling",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.approveChangeOrder.action.qryClientPicker.status",
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
      "stateKey": "ui.approveChangeOrder.data.qryClientPicker",
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
      "actionId": "qryLocateChangeOrder",
      "kind": "query",
      "commandRef": "qryLocateChangeOrder",
      "routeKey": "buildFlowFsm.approveChangeOrder.qryLocateChangeOrder",
      "purpose": "Localizar a ordem de mudança submetida",
      "methodName": "loadQryLocateChangeOrder",
      "handlerName": "handleQryLocateChangeOrderClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.approveChangeOrder.data.qryLocateChangeOrder"
      ],
      "statusStateKey": "ui.approveChangeOrder.action.qryLocateChangeOrder.status"
    },
    {
      "actionId": "cmdApproveChangeOrderDecision",
      "kind": "command",
      "commandRef": "cmdApproveChangeOrderDecision",
      "routeKey": "buildFlowFsm.approveChangeOrder.cmdApproveChangeOrderDecision",
      "purpose": "Aprovar a ordem de mudança",
      "methodName": "cmdApproveChangeOrderDecision",
      "handlerName": "handleCmdApproveChangeOrderDecisionClick",
      "inputStateKeys": [
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId",
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId",
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId",
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status"
      ],
      "routeParamInputStateKeys": [
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId"
      ],
      "selectedEntityInputStateKeys": [
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId",
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId"
      ],
      "outputStateKeys": [
        "ui.approveChangeOrder.output.cmdApproveChangeOrderDecision"
      ],
      "statusStateKey": "ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status",
      "errorStateKey": "ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.error",
      "feedback": {
        "successMessageKey": "action.cmdApproveChangeOrderDecision.success",
        "errorMessageKey": "action.cmdApproveChangeOrderDecision.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId",
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId",
        "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status"
      ],
      "refreshActionIds": [
        "qryLocateChangeOrder",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "cmdHandoffApprovedChangeOrderToBilling",
      "kind": "command",
      "commandRef": "cmdHandoffApprovedChangeOrderToBilling",
      "routeKey": "buildFlowFsm.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling",
      "purpose": "Encaminhar a alteração aprovada ao faturamento",
      "methodName": "cmdHandoffApprovedChangeOrderToBilling",
      "handlerName": "handleCmdHandoffApprovedChangeOrderToBillingClick",
      "inputStateKeys": [
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId"
      ],
      "outputStateKeys": [
        "ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling"
      ],
      "statusStateKey": "ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status",
      "errorStateKey": "ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.error",
      "feedback": {
        "successMessageKey": "action.cmdHandoffApprovedChangeOrderToBilling.success",
        "errorMessageKey": "action.cmdHandoffApprovedChangeOrderToBilling.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact",
        "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount"
      ],
      "refreshActionIds": [
        "qryLocateChangeOrder",
        "qryClientPicker"
      ]
    },
    {
      "actionId": "qryClientPicker",
      "kind": "query",
      "commandRef": "qryClientPicker",
      "routeKey": "buildFlowFsm.approveChangeOrder.qryClientPicker",
      "purpose": "Listar Cliente",
      "methodName": "loadQryClientPicker",
      "handlerName": "handleQryClientPickerClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.approveChangeOrder.data.qryClientPicker"
      ],
      "statusStateKey": "ui.approveChangeOrder.action.qryClientPicker.status"
    },
    {
      "actionId": "set.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId",
      "methodName": "setCmdApproveChangeOrderDecisionChangeOrderChangeOrderId",
      "handlerName": "handleCmdApproveChangeOrderDecisionChangeOrderChangeOrderIdChange"
    },
    {
      "actionId": "set.cmdApproveChangeOrderDecisionClientClientId",
      "kind": "stateSetter",
      "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId",
      "methodName": "setCmdApproveChangeOrderDecisionClientClientId",
      "handlerName": "handleCmdApproveChangeOrderDecisionClientClientIdChange"
    },
    {
      "actionId": "set.cmdApproveChangeOrderDecisionProjectProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId",
      "methodName": "setCmdApproveChangeOrderDecisionProjectProjectId",
      "handlerName": "handleCmdApproveChangeOrderDecisionProjectProjectIdChange"
    },
    {
      "actionId": "set.cmdApproveChangeOrderDecisionStatus",
      "kind": "stateSetter",
      "stateKey": "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status",
      "methodName": "setCmdApproveChangeOrderDecisionStatus",
      "handlerName": "handleCmdApproveChangeOrderDecisionStatusChange"
    },
    {
      "actionId": "set.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId",
      "methodName": "setCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId",
      "handlerName": "handleCmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderIdChange"
    },
    {
      "actionId": "set.cmdHandoffApprovedChangeOrderToBillingDescription",
      "kind": "stateSetter",
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description",
      "methodName": "setCmdHandoffApprovedChangeOrderToBillingDescription",
      "handlerName": "handleCmdHandoffApprovedChangeOrderToBillingDescriptionChange"
    },
    {
      "actionId": "set.cmdHandoffApprovedChangeOrderToBillingScopeImpact",
      "kind": "stateSetter",
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact",
      "methodName": "setCmdHandoffApprovedChangeOrderToBillingScopeImpact",
      "handlerName": "handleCmdHandoffApprovedChangeOrderToBillingScopeImpactChange"
    },
    {
      "actionId": "set.cmdHandoffApprovedChangeOrderToBillingScheduleImpact",
      "kind": "stateSetter",
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact",
      "methodName": "setCmdHandoffApprovedChangeOrderToBillingScheduleImpact",
      "handlerName": "handleCmdHandoffApprovedChangeOrderToBillingScheduleImpactChange"
    },
    {
      "actionId": "set.cmdHandoffApprovedChangeOrderToBillingChangeAmount",
      "kind": "stateSetter",
      "stateKey": "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount",
      "methodName": "setCmdHandoffApprovedChangeOrderToBillingChangeAmount",
      "handlerName": "handleCmdHandoffApprovedChangeOrderToBillingChangeAmountChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "qryLocateChangeOrder",
      "stateKey": "ui.approveChangeOrder.data.qryLocateChangeOrder"
    },
    {
      "actionId": "qryClientPicker",
      "stateKey": "ui.approveChangeOrder.data.qryClientPicker"
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
    "section.approveChangeOrder.locateChangeOrder.title": "Ordem pendente",
    "organism.approveChangeOrder.qryLocateChangeOrder.title": "Localizar a ordem de mudança submetida",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.title": "Localizar a ordem de mudança submetida",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.empty": "Nenhum registro encontrado",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label": "Change Order Id",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.clientRef.label": "Client Ref",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.projectRef.label": "Project Ref",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.description.label": "Description",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label": "Scope Impact",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label": "Schedule Impact",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label": "Change Amount",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label": "Submitted At",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label": "Forwarded For Client Approval At",
    "intent.approveChangeOrder.qryLocateChangeOrder.list.column.status.label": "Status",
    "section.approveChangeOrder.approveChangeOrderDecision.title": "Decisão de aprovação",
    "organism.approveChangeOrder.cmdApproveChangeOrderDecision.title": "Aprovar a ordem de mudança",
    "intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.title": "Aprovar a ordem de mudança",
    "intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.action.cmdApproveChangeOrderDecision": "Aprovar a ordem de mudança",
    "intent.approveChangeOrder.cmdApproveChangeOrderDecision.form.field.status.label": "Status",
    "organism.approveChangeOrder.qryClientPicker.title": "Listar Cliente",
    "intent.approveChangeOrder.qryClientPicker.list.title": "Listar Cliente",
    "intent.approveChangeOrder.qryClientPicker.list.empty": "Nenhum registro encontrado",
    "intent.approveChangeOrder.qryClientPicker.list.column.clientId.label": "Client Id",
    "intent.approveChangeOrder.qryClientPicker.list.column.clientName.label": "Client Name",
    "intent.approveChangeOrder.qryClientPicker.list.column.contactEmail.label": "Contact Email",
    "intent.approveChangeOrder.qryClientPicker.list.column.contactPhone.label": "Contact Phone",
    "section.approveChangeOrder.handoffApprovedChangeOrderToBilling.title": "Encaminhamento ao faturamento",
    "organism.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.title": "Encaminhar a alteração aprovada ao faturamento",
    "intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.title": "Encaminhar a alteração aprovada ao faturamento",
    "intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.action.cmdHandoffApprovedChangeOrderToBilling": "Encaminhar a alteração aprovada ao faturamento",
    "intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.description.label": "Description",
    "intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scopeImpact.label": "Scope Impact",
    "intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.scheduleImpact.label": "Schedule Impact",
    "intent.approveChangeOrder.cmdHandoffApprovedChangeOrderToBilling.form.field.changeAmount.label": "Change Amount",
    "action.cmdApproveChangeOrderDecision.success": "Aprovar a ordem de mudança: OK",
    "action.cmdApproveChangeOrderDecision.error": "Aprovar a ordem de mudança: falhou",
    "action.cmdHandoffApprovedChangeOrderToBilling.success": "Encaminhar a alteração aprovada ao faturamento: OK",
    "action.cmdHandoffApprovedChangeOrderToBilling.error": "Encaminhar a alteração aprovada ao faturamento: falhou",
    "section.approveChangeOrder.change-order-workspace.title": "Revisar e decidir ordem de mudança",
    "section.approveChangeOrder.billing-handoff.title": "Encaminhar aprovação ao faturamento"
  },
  "automation": {
    "statePrefix": "ui.approveChangeOrder",
    "stateKeys": [
      "ui.approveChangeOrder.status",
      "ui.approveChangeOrder.action.qryLocateChangeOrder.status",
      "ui.approveChangeOrder.data.qryLocateChangeOrder",
      "ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.status",
      "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.changeOrderChangeOrderId",
      "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.clientClientId",
      "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.projectProjectId",
      "ui.approveChangeOrder.input.cmdApproveChangeOrderDecision.status",
      "ui.approveChangeOrder.output.cmdApproveChangeOrderDecision",
      "ui.approveChangeOrder.action.cmdApproveChangeOrderDecision.error",
      "ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.status",
      "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeOrderChangeOrderId",
      "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.description",
      "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scopeImpact",
      "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.scheduleImpact",
      "ui.approveChangeOrder.input.cmdHandoffApprovedChangeOrderToBilling.changeAmount",
      "ui.approveChangeOrder.output.cmdHandoffApprovedChangeOrderToBilling",
      "ui.approveChangeOrder.action.cmdHandoffApprovedChangeOrderToBilling.error",
      "ui.approveChangeOrder.action.qryClientPicker.status",
      "ui.approveChangeOrder.data.qryClientPicker"
    ],
    "actionIds": [
      "qryLocateChangeOrder",
      "cmdApproveChangeOrderDecision",
      "cmdHandoffApprovedChangeOrderToBilling",
      "qryClientPicker",
      "set.cmdApproveChangeOrderDecisionChangeOrderChangeOrderId",
      "set.cmdApproveChangeOrderDecisionClientClientId",
      "set.cmdApproveChangeOrderDecisionProjectProjectId",
      "set.cmdApproveChangeOrderDecisionStatus",
      "set.cmdHandoffApprovedChangeOrderToBillingChangeOrderChangeOrderId",
      "set.cmdHandoffApprovedChangeOrderToBillingDescription",
      "set.cmdHandoffApprovedChangeOrderToBillingScopeImpact",
      "set.cmdHandoffApprovedChangeOrderToBillingScheduleImpact",
      "set.cmdHandoffApprovedChangeOrderToBillingChangeAmount"
    ]
  }
};

export const pipeline = [
  {
    "id": "approveChangeOrder__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/shared/approveChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/contracts/approveChangeOrder.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "clientApprovableChangeOrder",
      "approvedBillableChangeOrder"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
