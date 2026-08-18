/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderDecisionCatalogue.defs.ts" enhancement="_blank"/>

export const changeOrderDecisionCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "changeOrderDecisionCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "changeOrderDecisionCatalogue",
    "controllerName": "ChangeOrderDecisionCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "changeOrderDecisionCatalogue",
    "actors": [
      "billingStaff",
      "fieldCoordinator",
      "fieldWorker",
      "projectManager"
    ],
    "allowedScopes": [
      "internal",
      "internal",
      "internal",
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "changeOrderDecisionCatalogueQryListChangeOrderDecisionHandler",
        "command": "qryListChangeOrderDecision",
        "bffId": "qryListChangeOrderDecision",
        "route": "buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision",
        "kind": "query",
        "usecaseRef": "listChangeOrderDecision",
        "usecaseRefs": [
          "listChangeOrderDecision"
        ],
        "inputTypeName": "ListChangeOrderDecisionInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "changeOrderDecisionId",
              "operationId": "listChangeOrderDecision",
              "path": [
                "changeOrderDecisionId"
              ],
              "fromItems": true
            },
            {
              "name": "changeOrder",
              "operationId": "listChangeOrderDecision",
              "path": [
                "changeOrder"
              ],
              "fromItems": true
            },
            {
              "name": "madeByPlatformUser",
              "operationId": "listChangeOrderDecision",
              "path": [
                "madeByPlatformUser"
              ],
              "fromItems": true
            },
            {
              "name": "decision",
              "operationId": "listChangeOrderDecision",
              "path": [
                "decision"
              ],
              "fromItems": true
            },
            {
              "name": "decidedAt",
              "operationId": "listChangeOrderDecision",
              "path": [
                "decidedAt"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderDecisionCatalogueCmdCreateChangeOrderDecisionHandler",
        "command": "cmdCreateChangeOrderDecision",
        "bffId": "cmdCreateChangeOrderDecision",
        "route": "buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision",
        "kind": "command",
        "usecaseRef": "createChangeOrderDecision",
        "usecaseRefs": [
          "createChangeOrderDecision"
        ],
        "inputTypeName": "CreateChangeOrderDecisionInput",
        "inputContract": [
          {
            "inputId": "changeOrder",
            "fieldRef": "ChangeOrderDecision.changeOrder",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência à ordem de mudança que recebeu a decisão."
          },
          {
            "inputId": "madeByPlatformUser",
            "fieldRef": "ChangeOrderDecision.madeByPlatformUser",
            "required": true,
            "source": "actorSession",
            "description": "Referência ao usuário que aprovou ou recusou a ordem de mudança."
          },
          {
            "inputId": "decision",
            "fieldRef": "ChangeOrderDecision.decision",
            "required": true,
            "source": "userInput",
            "description": "Resultado registrado para a ordem de mudança."
          },
          {
            "inputId": "decidedAt",
            "fieldRef": "ChangeOrderDecision.decidedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora em que a decisão foi registrada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderDecisionId",
              "operationId": "createChangeOrderDecision",
              "path": [
                "changeOrderDecisionId"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrder",
              "operationId": "createChangeOrderDecision",
              "path": [
                "changeOrder"
              ],
              "fromItems": false
            },
            {
              "name": "madeByPlatformUser",
              "operationId": "createChangeOrderDecision",
              "path": [
                "madeByPlatformUser"
              ],
              "fromItems": false
            },
            {
              "name": "decision",
              "operationId": "createChangeOrderDecision",
              "path": [
                "decision"
              ],
              "fromItems": false
            },
            {
              "name": "decidedAt",
              "operationId": "createChangeOrderDecision",
              "path": [
                "decidedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderDecisionCatalogueCmdUpdateChangeOrderDecisionHandler",
        "command": "cmdUpdateChangeOrderDecision",
        "bffId": "cmdUpdateChangeOrderDecision",
        "route": "buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision",
        "kind": "command",
        "usecaseRef": "updateChangeOrderDecision",
        "usecaseRefs": [
          "updateChangeOrderDecision"
        ],
        "inputTypeName": "UpdateChangeOrderDecisionInput",
        "inputContract": [
          {
            "inputId": "changeOrderDecisionId",
            "fieldRef": "ChangeOrderDecision.changeOrderDecisionId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável da decisão registrada sobre uma ordem de mudança."
          },
          {
            "inputId": "changeOrder",
            "fieldRef": "ChangeOrderDecision.changeOrder",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência à ordem de mudança que recebeu a decisão."
          },
          {
            "inputId": "madeByPlatformUser",
            "fieldRef": "ChangeOrderDecision.madeByPlatformUser",
            "required": true,
            "source": "actorSession",
            "description": "Referência ao usuário que aprovou ou recusou a ordem de mudança."
          },
          {
            "inputId": "decision",
            "fieldRef": "ChangeOrderDecision.decision",
            "required": true,
            "source": "userInput",
            "description": "Resultado registrado para a ordem de mudança."
          },
          {
            "inputId": "decidedAt",
            "fieldRef": "ChangeOrderDecision.decidedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora em que a decisão foi registrada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderDecisionId",
              "operationId": "updateChangeOrderDecision",
              "path": [
                "changeOrderDecisionId"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrder",
              "operationId": "updateChangeOrderDecision",
              "path": [
                "changeOrder"
              ],
              "fromItems": false
            },
            {
              "name": "madeByPlatformUser",
              "operationId": "updateChangeOrderDecision",
              "path": [
                "madeByPlatformUser"
              ],
              "fromItems": false
            },
            {
              "name": "decision",
              "operationId": "updateChangeOrderDecision",
              "path": [
                "decision"
              ],
              "fromItems": false
            },
            {
              "name": "decidedAt",
              "operationId": "updateChangeOrderDecision",
              "path": [
                "decidedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderDecisionCatalogueCmdDeleteChangeOrderDecisionHandler",
        "command": "cmdDeleteChangeOrderDecision",
        "bffId": "cmdDeleteChangeOrderDecision",
        "route": "buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision",
        "kind": "command",
        "usecaseRef": "deleteChangeOrderDecision",
        "usecaseRefs": [
          "deleteChangeOrderDecision"
        ],
        "inputTypeName": "DeleteChangeOrderDecisionInput",
        "inputContract": [
          {
            "inputId": "changeOrderDecisionId",
            "fieldRef": "ChangeOrderDecision.changeOrderDecisionId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável da decisão registrada sobre uma ordem de mudança."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderDecisionId",
              "operationId": "deleteChangeOrderDecision",
              "path": [
                "changeOrderDecisionId"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrder",
              "operationId": "deleteChangeOrderDecision",
              "path": [
                "changeOrder"
              ],
              "fromItems": false
            },
            {
              "name": "madeByPlatformUser",
              "operationId": "deleteChangeOrderDecision",
              "path": [
                "madeByPlatformUser"
              ],
              "fromItems": false
            },
            {
              "name": "decision",
              "operationId": "deleteChangeOrderDecision",
              "path": [
                "decision"
              ],
              "fromItems": false
            },
            {
              "name": "decidedAt",
              "operationId": "deleteChangeOrderDecision",
              "path": [
                "decidedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderDecisionCatalogueQryChangeOrderPickerHandler",
        "command": "qryChangeOrderPicker",
        "bffId": "qryChangeOrderPicker",
        "route": "buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker",
        "kind": "query",
        "usecaseRef": "listChangeOrder",
        "usecaseRefs": [
          "listChangeOrder"
        ],
        "inputTypeName": "ListChangeOrderInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "changeOrderId",
              "operationId": "listChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": true
            },
            {
              "name": "clientRef",
              "operationId": "listChangeOrder",
              "path": [
                "clientRef"
              ],
              "fromItems": true
            },
            {
              "name": "projectRef",
              "operationId": "listChangeOrder",
              "path": [
                "projectRef"
              ],
              "fromItems": true
            },
            {
              "name": "description",
              "operationId": "listChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": true
            },
            {
              "name": "scopeImpact",
              "operationId": "listChangeOrder",
              "path": [
                "scopeImpact"
              ],
              "fromItems": true
            },
            {
              "name": "scheduleImpact",
              "operationId": "listChangeOrder",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": true
            },
            {
              "name": "changeAmount",
              "operationId": "listChangeOrder",
              "path": [
                "changeAmount"
              ],
              "fromItems": true
            },
            {
              "name": "submittedAt",
              "operationId": "listChangeOrder",
              "path": [
                "submittedAt"
              ],
              "fromItems": true
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "listChangeOrder",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.changeOrderDecisionCatalogue.qryListChangeOrderDecision",
        "handlerName": "changeOrderDecisionCatalogueQryListChangeOrderDecisionHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision",
        "handlerName": "changeOrderDecisionCatalogueCmdCreateChangeOrderDecisionHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision",
        "handlerName": "changeOrderDecisionCatalogueCmdUpdateChangeOrderDecisionHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision",
        "handlerName": "changeOrderDecisionCatalogueCmdDeleteChangeOrderDecisionHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderDecisionCatalogue.qryChangeOrderPicker",
        "handlerName": "changeOrderDecisionCatalogueQryChangeOrderPickerHandler"
      }
    ]
  }
} as const;

export default changeOrderDecisionCatalogueController;

export const pipeline = [
  {
    "id": "changeOrderDecisionCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderDecisionCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderDecisionCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrderDecision.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.qryListChangeOrderDecision.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrderDecision.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.cmdCreateChangeOrderDecision.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderDecision.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.cmdUpdateChangeOrderDecision.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteChangeOrderDecision.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.cmdDeleteChangeOrderDecision.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderDecisionCatalogue.qryChangeOrderPicker.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
