/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderCatalogue.defs.ts" enhancement="_blank"/>

export const changeOrderCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "changeOrderCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "changeOrderCatalogue",
    "controllerName": "ChangeOrderCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "changeOrderCatalogue",
    "actors": [
      "client",
      "fieldCoordinator",
      "projectManager"
    ],
    "allowedScopes": [
      "external",
      "internal",
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "changeOrderCatalogueQryListChangeOrderHandler",
        "command": "qryListChangeOrder",
        "bffId": "qryListChangeOrder",
        "route": "buildFlowFsm.changeOrderCatalogue.qryListChangeOrder",
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
      },
      {
        "handlerName": "changeOrderCatalogueCmdCreateChangeOrderHandler",
        "command": "cmdCreateChangeOrder",
        "bffId": "cmdCreateChangeOrder",
        "route": "buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder",
        "kind": "command",
        "usecaseRef": "createChangeOrder",
        "usecaseRefs": [
          "createChangeOrder"
        ],
        "inputTypeName": "CreateChangeOrderInput",
        "inputContract": [
          {
            "inputId": "clientClientId",
            "fieldRef": "Client.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Cliente"
          },
          {
            "inputId": "projectProjectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Obra"
          },
          {
            "inputId": "description",
            "fieldRef": "ChangeOrder.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
          },
          {
            "inputId": "scopeImpact",
            "fieldRef": "ChangeOrder.scopeImpact",
            "required": true,
            "source": "userInput",
            "description": "Impacto proposto da alteração no escopo da obra."
          },
          {
            "inputId": "scheduleImpact",
            "fieldRef": "ChangeOrder.scheduleImpact",
            "required": true,
            "source": "userInput",
            "description": "Impacto proposto da alteração no prazo de execução da obra."
          },
          {
            "inputId": "changeAmount",
            "fieldRef": "ChangeOrder.changeAmount",
            "required": true,
            "source": "userInput",
            "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "createChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "createChangeOrder",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "createChangeOrder",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "createChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "createChangeOrder",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "createChangeOrder",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "createChangeOrder",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "createChangeOrder",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "createChangeOrder",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderCatalogueCmdUpdateChangeOrderHandler",
        "command": "cmdUpdateChangeOrder",
        "bffId": "cmdUpdateChangeOrder",
        "route": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
        "kind": "command",
        "usecaseRef": "updateChangeOrder",
        "usecaseRefs": [
          "updateChangeOrder"
        ],
        "inputTypeName": "UpdateChangeOrderInput",
        "inputContract": [
          {
            "inputId": "changeOrderId",
            "fieldRef": "ChangeOrder.changeOrderId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável da ordem de mudança, transportado entre as etapas conectadas."
          },
          {
            "inputId": "clientRef",
            "fieldRef": "ChangeOrder.clientRef",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto ao cliente para o qual a alteração é proposta, selecionada no catálogo compartilhado."
          },
          {
            "inputId": "projectRef",
            "fieldRef": "ChangeOrder.projectRef",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à obra do cliente à qual a alteração está vinculada."
          },
          {
            "inputId": "description",
            "fieldRef": "ChangeOrder.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
          },
          {
            "inputId": "scopeImpact",
            "fieldRef": "ChangeOrder.scopeImpact",
            "required": true,
            "source": "userInput",
            "description": "Impacto proposto da alteração no escopo da obra."
          },
          {
            "inputId": "scheduleImpact",
            "fieldRef": "ChangeOrder.scheduleImpact",
            "required": true,
            "source": "userInput",
            "description": "Impacto proposto da alteração no prazo de execução da obra."
          },
          {
            "inputId": "changeAmount",
            "fieldRef": "ChangeOrder.changeAmount",
            "required": true,
            "source": "userInput",
            "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
          },
          {
            "inputId": "submittedAt",
            "fieldRef": "ChangeOrder.submittedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora em que a alteração foi formalizada e submetida para tratamento gerencial."
          },
          {
            "inputId": "forwardedForClientApprovalAt",
            "fieldRef": "ChangeOrder.forwardedForClientApprovalAt",
            "required": false,
            "source": "systemDefault",
            "description": "Data e hora em que a ordem foi encaminhada ao cliente para decisão."
          },
          {
            "inputId": "status",
            "fieldRef": "ChangeOrder.status",
            "required": true,
            "source": "systemDefault",
            "description": "Estado atual da ordem de mudança no ciclo de tratamento, aprovação do cliente e faturamento."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "updateChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "updateChangeOrder",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "updateChangeOrder",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "updateChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "updateChangeOrder",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "updateChangeOrder",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "updateChangeOrder",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "updateChangeOrder",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "updateChangeOrder",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderCatalogueCmdDeleteChangeOrderHandler",
        "command": "cmdDeleteChangeOrder",
        "bffId": "cmdDeleteChangeOrder",
        "route": "buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder",
        "kind": "command",
        "usecaseRef": "deleteChangeOrder",
        "usecaseRefs": [
          "deleteChangeOrder"
        ],
        "inputTypeName": "DeleteChangeOrderInput",
        "inputContract": [
          {
            "inputId": "changeOrderId",
            "fieldRef": "ChangeOrder.changeOrderId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável da ordem de mudança, transportado entre as etapas conectadas."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "deleteChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "clientRef",
              "operationId": "deleteChangeOrder",
              "path": [
                "clientRef"
              ],
              "fromItems": false
            },
            {
              "name": "projectRef",
              "operationId": "deleteChangeOrder",
              "path": [
                "projectRef"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "deleteChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "scopeImpact",
              "operationId": "deleteChangeOrder",
              "path": [
                "scopeImpact"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleImpact",
              "operationId": "deleteChangeOrder",
              "path": [
                "scheduleImpact"
              ],
              "fromItems": false
            },
            {
              "name": "changeAmount",
              "operationId": "deleteChangeOrder",
              "path": [
                "changeAmount"
              ],
              "fromItems": false
            },
            {
              "name": "submittedAt",
              "operationId": "deleteChangeOrder",
              "path": [
                "submittedAt"
              ],
              "fromItems": false
            },
            {
              "name": "forwardedForClientApprovalAt",
              "operationId": "deleteChangeOrder",
              "path": [
                "forwardedForClientApprovalAt"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderCatalogueQryClientPickerHandler",
        "command": "qryClientPicker",
        "bffId": "qryClientPicker",
        "route": "buildFlowFsm.changeOrderCatalogue.qryClientPicker",
        "kind": "query",
        "usecaseRef": "listClient",
        "usecaseRefs": [
          "listClient"
        ],
        "inputTypeName": "ListClientInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "clientId",
              "operationId": "listClient",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "clientName",
              "operationId": "listClient",
              "path": [
                "clientName"
              ],
              "fromItems": true
            },
            {
              "name": "contactEmail",
              "operationId": "listClient",
              "path": [
                "contactEmail"
              ],
              "fromItems": true
            },
            {
              "name": "contactPhone",
              "operationId": "listClient",
              "path": [
                "contactPhone"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderCatalogueQryProjectPickerHandler",
        "command": "qryProjectPicker",
        "bffId": "qryProjectPicker",
        "route": "buildFlowFsm.changeOrderCatalogue.qryProjectPicker",
        "kind": "query",
        "usecaseRef": "listProject",
        "usecaseRefs": [
          "listProject"
        ],
        "inputTypeName": "ListProjectInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "projectId",
              "operationId": "listProject",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "listProject",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "listProject",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "address",
              "operationId": "listProject",
              "path": [
                "address"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listProject",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "authorizedBudget",
              "operationId": "listProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": true
            },
            {
              "name": "plannedStartDate",
              "operationId": "listProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": true
            },
            {
              "name": "plannedEndDate",
              "operationId": "listProject",
              "path": [
                "plannedEndDate"
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
        "key": "buildFlowFsm.changeOrderCatalogue.qryListChangeOrder",
        "handlerName": "changeOrderCatalogueQryListChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderCatalogue.cmdCreateChangeOrder",
        "handlerName": "changeOrderCatalogueCmdCreateChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderCatalogue.cmdUpdateChangeOrder",
        "handlerName": "changeOrderCatalogueCmdUpdateChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderCatalogue.cmdDeleteChangeOrder",
        "handlerName": "changeOrderCatalogueCmdDeleteChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderCatalogue.qryClientPicker",
        "handlerName": "changeOrderCatalogueQryClientPickerHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderCatalogue.qryProjectPicker",
        "handlerName": "changeOrderCatalogueQryProjectPickerHandler"
      }
    ]
  }
} as const;

export default changeOrderCatalogueController;

export const pipeline = [
  {
    "id": "changeOrderCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderCatalogue.qryListChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderCatalogue.cmdCreateChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderCatalogue.cmdUpdateChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderCatalogue.cmdDeleteChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderCatalogue.qryClientPicker.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/changeOrderCatalogue.qryProjectPicker.defs.ts"
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
