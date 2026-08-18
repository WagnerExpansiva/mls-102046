/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceChangeOrderCatalogue.defs.ts" enhancement="_blank"/>

export const invoiceChangeOrderCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "invoiceChangeOrderCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "invoiceChangeOrderCatalogue",
    "controllerName": "InvoiceChangeOrderCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "invoiceChangeOrderCatalogue",
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
        "handlerName": "invoiceChangeOrderCatalogueQryListInvoiceChangeOrderHandler",
        "command": "qryListInvoiceChangeOrder",
        "bffId": "qryListInvoiceChangeOrder",
        "route": "buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder",
        "kind": "query",
        "usecaseRef": "listInvoiceChangeOrder",
        "usecaseRefs": [
          "listInvoiceChangeOrder"
        ],
        "inputTypeName": "ListInvoiceChangeOrderInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "invoiceChangeOrderId",
              "operationId": "listInvoiceChangeOrder",
              "path": [
                "invoiceChangeOrderId"
              ],
              "fromItems": true
            },
            {
              "name": "invoiceId",
              "operationId": "listInvoiceChangeOrder",
              "path": [
                "invoiceId"
              ],
              "fromItems": true
            },
            {
              "name": "changeOrderId",
              "operationId": "listInvoiceChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": true
            },
            {
              "name": "billedAmount",
              "operationId": "listInvoiceChangeOrder",
              "path": [
                "billedAmount"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "invoiceChangeOrderCatalogueCmdCreateInvoiceChangeOrderHandler",
        "command": "cmdCreateInvoiceChangeOrder",
        "bffId": "cmdCreateInvoiceChangeOrder",
        "route": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder",
        "kind": "command",
        "usecaseRef": "createInvoiceChangeOrder",
        "usecaseRefs": [
          "createInvoiceChangeOrder"
        ],
        "inputTypeName": "CreateInvoiceChangeOrderInput",
        "inputContract": [
          {
            "inputId": "invoiceId",
            "fieldRef": "InvoiceChangeOrder.invoiceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à fatura emitida que incorpora a ordem de mudança."
          },
          {
            "inputId": "changeOrderId",
            "fieldRef": "InvoiceChangeOrder.changeOrderId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à ordem de mudança aprovada incorporada na fatura."
          },
          {
            "inputId": "billedAmount",
            "fieldRef": "InvoiceChangeOrder.billedAmount",
            "required": true,
            "source": "userInput",
            "description": "Valor efetivamente faturado nesta fatura em razão da ordem de mudança vinculada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceChangeOrderId",
              "operationId": "createInvoiceChangeOrder",
              "path": [
                "invoiceChangeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "invoiceId",
              "operationId": "createInvoiceChangeOrder",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderId",
              "operationId": "createInvoiceChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "billedAmount",
              "operationId": "createInvoiceChangeOrder",
              "path": [
                "billedAmount"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "invoiceChangeOrderCatalogueCmdUpdateInvoiceChangeOrderHandler",
        "command": "cmdUpdateInvoiceChangeOrder",
        "bffId": "cmdUpdateInvoiceChangeOrder",
        "route": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder",
        "kind": "command",
        "usecaseRef": "updateInvoiceChangeOrder",
        "usecaseRefs": [
          "updateInvoiceChangeOrder"
        ],
        "inputTypeName": "UpdateInvoiceChangeOrderInput",
        "inputContract": [
          {
            "inputId": "invoiceChangeOrderId",
            "fieldRef": "InvoiceChangeOrder.invoiceChangeOrderId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do vínculo de faturamento entre uma fatura e uma ordem de mudança aprovada."
          },
          {
            "inputId": "invoiceId",
            "fieldRef": "InvoiceChangeOrder.invoiceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à fatura emitida que incorpora a ordem de mudança."
          },
          {
            "inputId": "changeOrderId",
            "fieldRef": "InvoiceChangeOrder.changeOrderId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à ordem de mudança aprovada incorporada na fatura."
          },
          {
            "inputId": "billedAmount",
            "fieldRef": "InvoiceChangeOrder.billedAmount",
            "required": true,
            "source": "userInput",
            "description": "Valor efetivamente faturado nesta fatura em razão da ordem de mudança vinculada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceChangeOrderId",
              "operationId": "updateInvoiceChangeOrder",
              "path": [
                "invoiceChangeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "invoiceId",
              "operationId": "updateInvoiceChangeOrder",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderId",
              "operationId": "updateInvoiceChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "billedAmount",
              "operationId": "updateInvoiceChangeOrder",
              "path": [
                "billedAmount"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "invoiceChangeOrderCatalogueCmdDeleteInvoiceChangeOrderHandler",
        "command": "cmdDeleteInvoiceChangeOrder",
        "bffId": "cmdDeleteInvoiceChangeOrder",
        "route": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder",
        "kind": "command",
        "usecaseRef": "deleteInvoiceChangeOrder",
        "usecaseRefs": [
          "deleteInvoiceChangeOrder"
        ],
        "inputTypeName": "DeleteInvoiceChangeOrderInput",
        "inputContract": [
          {
            "inputId": "invoiceChangeOrderId",
            "fieldRef": "InvoiceChangeOrder.invoiceChangeOrderId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do vínculo de faturamento entre uma fatura e uma ordem de mudança aprovada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceChangeOrderId",
              "operationId": "deleteInvoiceChangeOrder",
              "path": [
                "invoiceChangeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "invoiceId",
              "operationId": "deleteInvoiceChangeOrder",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderId",
              "operationId": "deleteInvoiceChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "billedAmount",
              "operationId": "deleteInvoiceChangeOrder",
              "path": [
                "billedAmount"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "invoiceChangeOrderCatalogueQryInvoicePickerHandler",
        "command": "qryInvoicePicker",
        "bffId": "qryInvoicePicker",
        "route": "buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker",
        "kind": "query",
        "usecaseRef": "listInvoice",
        "usecaseRefs": [
          "listInvoice"
        ],
        "inputTypeName": "ListInvoiceInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "invoiceId",
              "operationId": "listInvoice",
              "path": [
                "invoiceId"
              ],
              "fromItems": true
            },
            {
              "name": "clientId",
              "operationId": "listInvoice",
              "path": [
                "clientId"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listInvoice",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "commercialReference",
              "operationId": "listInvoice",
              "path": [
                "commercialReference"
              ],
              "fromItems": true
            },
            {
              "name": "amount",
              "operationId": "listInvoice",
              "path": [
                "amount"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listInvoice",
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
        "handlerName": "invoiceChangeOrderCatalogueQryChangeOrderPickerHandler",
        "command": "qryChangeOrderPicker",
        "bffId": "qryChangeOrderPicker",
        "route": "buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker",
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
        "key": "buildFlowFsm.invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder",
        "handlerName": "invoiceChangeOrderCatalogueQryListInvoiceChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder",
        "handlerName": "invoiceChangeOrderCatalogueCmdCreateInvoiceChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder",
        "handlerName": "invoiceChangeOrderCatalogueCmdUpdateInvoiceChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder",
        "handlerName": "invoiceChangeOrderCatalogueCmdDeleteInvoiceChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.invoiceChangeOrderCatalogue.qryInvoicePicker",
        "handlerName": "invoiceChangeOrderCatalogueQryInvoicePickerHandler"
      },
      {
        "key": "buildFlowFsm.invoiceChangeOrderCatalogue.qryChangeOrderPicker",
        "handlerName": "invoiceChangeOrderCatalogueQryChangeOrderPickerHandler"
      }
    ]
  }
} as const;

export default invoiceChangeOrderCatalogueController;

export const pipeline = [
  {
    "id": "invoiceChangeOrderCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceChangeOrderCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceChangeOrderCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoiceChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.qryListInvoiceChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoiceChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.cmdCreateInvoiceChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInvoiceChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.cmdUpdateInvoiceChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoiceChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.cmdDeleteInvoiceChangeOrder.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.qryInvoicePicker.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listChangeOrder.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceChangeOrderCatalogue.qryChangeOrderPicker.defs.ts"
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
