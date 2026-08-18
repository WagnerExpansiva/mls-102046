/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceCatalogue.defs.ts" enhancement="_blank"/>

export const invoiceCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "invoiceCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "invoiceCatalogue",
    "controllerName": "InvoiceCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "invoiceCatalogue",
    "actors": [
      "billingStaff"
    ],
    "allowedScopes": [
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "invoiceCatalogueQryListInvoiceHandler",
        "command": "qryListInvoice",
        "bffId": "qryListInvoice",
        "route": "buildFlowFsm.invoiceCatalogue.qryListInvoice",
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
        "handlerName": "invoiceCatalogueCmdCreateInvoiceHandler",
        "command": "cmdCreateInvoice",
        "bffId": "cmdCreateInvoice",
        "route": "buildFlowFsm.invoiceCatalogue.cmdCreateInvoice",
        "kind": "command",
        "usecaseRef": "createInvoice",
        "usecaseRefs": [
          "createInvoice"
        ],
        "inputTypeName": "CreateInvoiceInput",
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
            "inputId": "commercialReference",
            "fieldRef": "Invoice.commercialReference",
            "required": true,
            "source": "userInput",
            "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente."
          },
          {
            "inputId": "amount",
            "fieldRef": "Invoice.amount",
            "required": true,
            "source": "userInput",
            "description": "Valor comercial total faturado para a obra."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceId",
              "operationId": "createInvoice",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "createInvoice",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createInvoice",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "commercialReference",
              "operationId": "createInvoice",
              "path": [
                "commercialReference"
              ],
              "fromItems": false
            },
            {
              "name": "amount",
              "operationId": "createInvoice",
              "path": [
                "amount"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createInvoice",
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
        "handlerName": "invoiceCatalogueCmdUpdateInvoiceHandler",
        "command": "cmdUpdateInvoice",
        "bffId": "cmdUpdateInvoice",
        "route": "buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice",
        "kind": "command",
        "usecaseRef": "updateInvoice",
        "usecaseRefs": [
          "updateInvoice"
        ],
        "inputTypeName": "UpdateInvoiceInput",
        "inputContract": [
          {
            "inputId": "invoiceId",
            "fieldRef": "Invoice.invoiceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável da fatura, mantido entre as etapas conectadas da jornada."
          },
          {
            "inputId": "clientId",
            "fieldRef": "Invoice.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto ao cliente para o qual a fatura é emitida."
          },
          {
            "inputId": "projectId",
            "fieldRef": "Invoice.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à obra faturável à qual a fatura está vinculada."
          },
          {
            "inputId": "commercialReference",
            "fieldRef": "Invoice.commercialReference",
            "required": true,
            "source": "userInput",
            "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente."
          },
          {
            "inputId": "amount",
            "fieldRef": "Invoice.amount",
            "required": true,
            "source": "userInput",
            "description": "Valor comercial total faturado para a obra."
          },
          {
            "inputId": "status",
            "fieldRef": "Invoice.status",
            "required": true,
            "source": "systemDefault",
            "description": "Situação da fatura, incluindo sua disponibilidade para consulta externa pelo cliente."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceId",
              "operationId": "updateInvoice",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "updateInvoice",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateInvoice",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "commercialReference",
              "operationId": "updateInvoice",
              "path": [
                "commercialReference"
              ],
              "fromItems": false
            },
            {
              "name": "amount",
              "operationId": "updateInvoice",
              "path": [
                "amount"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateInvoice",
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
        "handlerName": "invoiceCatalogueCmdDeleteInvoiceHandler",
        "command": "cmdDeleteInvoice",
        "bffId": "cmdDeleteInvoice",
        "route": "buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice",
        "kind": "command",
        "usecaseRef": "deleteInvoice",
        "usecaseRefs": [
          "deleteInvoice"
        ],
        "inputTypeName": "DeleteInvoiceInput",
        "inputContract": [
          {
            "inputId": "invoiceId",
            "fieldRef": "Invoice.invoiceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável da fatura, mantido entre as etapas conectadas da jornada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceId",
              "operationId": "deleteInvoice",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "deleteInvoice",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "deleteInvoice",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "commercialReference",
              "operationId": "deleteInvoice",
              "path": [
                "commercialReference"
              ],
              "fromItems": false
            },
            {
              "name": "amount",
              "operationId": "deleteInvoice",
              "path": [
                "amount"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteInvoice",
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
        "handlerName": "invoiceCatalogueQryClientPickerHandler",
        "command": "qryClientPicker",
        "bffId": "qryClientPicker",
        "route": "buildFlowFsm.invoiceCatalogue.qryClientPicker",
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
        "handlerName": "invoiceCatalogueQryProjectPickerHandler",
        "command": "qryProjectPicker",
        "bffId": "qryProjectPicker",
        "route": "buildFlowFsm.invoiceCatalogue.qryProjectPicker",
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
        "key": "buildFlowFsm.invoiceCatalogue.qryListInvoice",
        "handlerName": "invoiceCatalogueQryListInvoiceHandler"
      },
      {
        "key": "buildFlowFsm.invoiceCatalogue.cmdCreateInvoice",
        "handlerName": "invoiceCatalogueCmdCreateInvoiceHandler"
      },
      {
        "key": "buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice",
        "handlerName": "invoiceCatalogueCmdUpdateInvoiceHandler"
      },
      {
        "key": "buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice",
        "handlerName": "invoiceCatalogueCmdDeleteInvoiceHandler"
      },
      {
        "key": "buildFlowFsm.invoiceCatalogue.qryClientPicker",
        "handlerName": "invoiceCatalogueQryClientPickerHandler"
      },
      {
        "key": "buildFlowFsm.invoiceCatalogue.qryProjectPicker",
        "handlerName": "invoiceCatalogueQryProjectPickerHandler"
      }
    ]
  }
} as const;

export default invoiceCatalogueController;

export const pipeline = [
  {
    "id": "invoiceCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listInvoice.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceCatalogue.qryListInvoice.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceCatalogue.cmdCreateInvoice.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateInvoice.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceCatalogue.cmdUpdateInvoice.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteInvoice.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceCatalogue.cmdDeleteInvoice.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceCatalogue.qryClientPicker.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/invoiceCatalogue.qryProjectPicker.defs.ts"
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
