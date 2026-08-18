/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/statusReportCatalogue.defs.ts" enhancement="_blank"/>

export const statusReportCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "statusReportCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "statusReportCatalogue",
    "controllerName": "StatusReportCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "statusReportCatalogue",
    "actors": [
      "client",
      "projectManager"
    ],
    "allowedScopes": [
      "external",
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "statusReportCatalogueQryListStatusReportHandler",
        "command": "qryListStatusReport",
        "bffId": "qryListStatusReport",
        "route": "buildFlowFsm.statusReportCatalogue.qryListStatusReport",
        "kind": "query",
        "usecaseRef": "listStatusReport",
        "usecaseRefs": [
          "listStatusReport"
        ],
        "inputTypeName": "ListStatusReportInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "statusReportId",
              "operationId": "listStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listStatusReport",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "title",
              "operationId": "listStatusReport",
              "path": [
                "title"
              ],
              "fromItems": true
            },
            {
              "name": "content",
              "operationId": "listStatusReport",
              "path": [
                "content"
              ],
              "fromItems": true
            },
            {
              "name": "communicatedRisks",
              "operationId": "listStatusReport",
              "path": [
                "communicatedRisks"
              ],
              "fromItems": true
            },
            {
              "name": "generatedAt",
              "operationId": "listStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": true
            },
            {
              "name": "generatedByUserId",
              "operationId": "listStatusReport",
              "path": [
                "generatedByUserId"
              ],
              "fromItems": true
            },
            {
              "name": "publishedAt",
              "operationId": "listStatusReport",
              "path": [
                "publishedAt"
              ],
              "fromItems": true
            },
            {
              "name": "publishedByUserId",
              "operationId": "listStatusReport",
              "path": [
                "publishedByUserId"
              ],
              "fromItems": true
            },
            {
              "name": "withdrawnAt",
              "operationId": "listStatusReport",
              "path": [
                "withdrawnAt"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "statusReportCatalogueCmdCreateStatusReportHandler",
        "command": "cmdCreateStatusReport",
        "bffId": "cmdCreateStatusReport",
        "route": "buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport",
        "kind": "command",
        "usecaseRef": "createStatusReport",
        "usecaseRefs": [
          "createStatusReport"
        ],
        "inputTypeName": "CreateStatusReportInput",
        "inputContract": [
          {
            "inputId": "projectProjectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Obra"
          },
          {
            "inputId": "projectExecutionOverviewProjectId",
            "fieldRef": "ProjectExecutionOverview.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Visão consolidada de execução da obra"
          },
          {
            "inputId": "title",
            "fieldRef": "StatusReport.title",
            "required": true,
            "source": "userInput",
            "description": "Título profissional que identifica a comunicação de status da obra."
          },
          {
            "inputId": "content",
            "fieldRef": "StatusReport.content",
            "required": true,
            "source": "userInput",
            "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação."
          },
          {
            "inputId": "communicatedRisks",
            "fieldRef": "StatusReport.communicatedRisks",
            "required": false,
            "source": "userInput",
            "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório."
          },
          {
            "inputId": "generatedByUserId",
            "fieldRef": "StatusReport.generatedByUserId",
            "required": true,
            "source": "userInput",
            "description": "Identificador do gerente responsável por gerar o relatório para revisão."
          },
          {
            "inputId": "publishedByUserId",
            "fieldRef": "StatusReport.publishedByUserId",
            "required": false,
            "source": "userInput",
            "description": "Identificador do gerente responsável pela publicação observável do relatório."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "createStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createStatusReport",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "createStatusReport",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "content",
              "operationId": "createStatusReport",
              "path": [
                "content"
              ],
              "fromItems": false
            },
            {
              "name": "communicatedRisks",
              "operationId": "createStatusReport",
              "path": [
                "communicatedRisks"
              ],
              "fromItems": false
            },
            {
              "name": "generatedAt",
              "operationId": "createStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": false
            },
            {
              "name": "generatedByUserId",
              "operationId": "createStatusReport",
              "path": [
                "generatedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "publishedAt",
              "operationId": "createStatusReport",
              "path": [
                "publishedAt"
              ],
              "fromItems": false
            },
            {
              "name": "publishedByUserId",
              "operationId": "createStatusReport",
              "path": [
                "publishedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "withdrawnAt",
              "operationId": "createStatusReport",
              "path": [
                "withdrawnAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "statusReportCatalogueCmdUpdateStatusReportHandler",
        "command": "cmdUpdateStatusReport",
        "bffId": "cmdUpdateStatusReport",
        "route": "buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport",
        "kind": "command",
        "usecaseRef": "updateStatusReport",
        "usecaseRefs": [
          "updateStatusReport"
        ],
        "inputTypeName": "UpdateStatusReportInput",
        "inputContract": [
          {
            "inputId": "statusReportId",
            "fieldRef": "StatusReport.statusReportId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do relatório, transportado entre as etapas conectadas da jornada."
          },
          {
            "inputId": "projectId",
            "fieldRef": "StatusReport.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à obra específica cuja situação é comunicada pelo relatório."
          },
          {
            "inputId": "status",
            "fieldRef": "StatusReport.status",
            "required": true,
            "source": "systemDefault",
            "description": "Estado do ciclo de vida do relatório para revisão, comunicação ao cliente ou retirada."
          },
          {
            "inputId": "title",
            "fieldRef": "StatusReport.title",
            "required": true,
            "source": "userInput",
            "description": "Título profissional que identifica a comunicação de status da obra."
          },
          {
            "inputId": "content",
            "fieldRef": "StatusReport.content",
            "required": true,
            "source": "userInput",
            "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação."
          },
          {
            "inputId": "communicatedRisks",
            "fieldRef": "StatusReport.communicatedRisks",
            "required": false,
            "source": "userInput",
            "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório."
          },
          {
            "inputId": "generatedAt",
            "fieldRef": "StatusReport.generatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora em que o relatório foi gerado para revisão."
          },
          {
            "inputId": "generatedByUserId",
            "fieldRef": "StatusReport.generatedByUserId",
            "required": true,
            "source": "userInput",
            "description": "Identificador do gerente responsável por gerar o relatório para revisão."
          },
          {
            "inputId": "publishedAt",
            "fieldRef": "StatusReport.publishedAt",
            "required": false,
            "source": "systemDefault",
            "description": "Data e hora em que o relatório foi aprovado para comunicação ao cliente."
          },
          {
            "inputId": "publishedByUserId",
            "fieldRef": "StatusReport.publishedByUserId",
            "required": false,
            "source": "userInput",
            "description": "Identificador do gerente responsável pela publicação observável do relatório."
          },
          {
            "inputId": "withdrawnAt",
            "fieldRef": "StatusReport.withdrawnAt",
            "required": false,
            "source": "systemDefault",
            "description": "Data e hora em que um relatório publicado foi retirado de circulação."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "updateStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateStatusReport",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "updateStatusReport",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "content",
              "operationId": "updateStatusReport",
              "path": [
                "content"
              ],
              "fromItems": false
            },
            {
              "name": "communicatedRisks",
              "operationId": "updateStatusReport",
              "path": [
                "communicatedRisks"
              ],
              "fromItems": false
            },
            {
              "name": "generatedAt",
              "operationId": "updateStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": false
            },
            {
              "name": "generatedByUserId",
              "operationId": "updateStatusReport",
              "path": [
                "generatedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "publishedAt",
              "operationId": "updateStatusReport",
              "path": [
                "publishedAt"
              ],
              "fromItems": false
            },
            {
              "name": "publishedByUserId",
              "operationId": "updateStatusReport",
              "path": [
                "publishedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "withdrawnAt",
              "operationId": "updateStatusReport",
              "path": [
                "withdrawnAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "statusReportCatalogueCmdDeleteStatusReportHandler",
        "command": "cmdDeleteStatusReport",
        "bffId": "cmdDeleteStatusReport",
        "route": "buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport",
        "kind": "command",
        "usecaseRef": "deleteStatusReport",
        "usecaseRefs": [
          "deleteStatusReport"
        ],
        "inputTypeName": "DeleteStatusReportInput",
        "inputContract": [
          {
            "inputId": "statusReportId",
            "fieldRef": "StatusReport.statusReportId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do relatório, transportado entre as etapas conectadas da jornada."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "deleteStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "deleteStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteStatusReport",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "deleteStatusReport",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "content",
              "operationId": "deleteStatusReport",
              "path": [
                "content"
              ],
              "fromItems": false
            },
            {
              "name": "communicatedRisks",
              "operationId": "deleteStatusReport",
              "path": [
                "communicatedRisks"
              ],
              "fromItems": false
            },
            {
              "name": "generatedAt",
              "operationId": "deleteStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": false
            },
            {
              "name": "generatedByUserId",
              "operationId": "deleteStatusReport",
              "path": [
                "generatedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "publishedAt",
              "operationId": "deleteStatusReport",
              "path": [
                "publishedAt"
              ],
              "fromItems": false
            },
            {
              "name": "publishedByUserId",
              "operationId": "deleteStatusReport",
              "path": [
                "publishedByUserId"
              ],
              "fromItems": false
            },
            {
              "name": "withdrawnAt",
              "operationId": "deleteStatusReport",
              "path": [
                "withdrawnAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "statusReportCatalogueQryProjectPickerHandler",
        "command": "qryProjectPicker",
        "bffId": "qryProjectPicker",
        "route": "buildFlowFsm.statusReportCatalogue.qryProjectPicker",
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
        "key": "buildFlowFsm.statusReportCatalogue.qryListStatusReport",
        "handlerName": "statusReportCatalogueQryListStatusReportHandler"
      },
      {
        "key": "buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport",
        "handlerName": "statusReportCatalogueCmdCreateStatusReportHandler"
      },
      {
        "key": "buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport",
        "handlerName": "statusReportCatalogueCmdUpdateStatusReportHandler"
      },
      {
        "key": "buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport",
        "handlerName": "statusReportCatalogueCmdDeleteStatusReportHandler"
      },
      {
        "key": "buildFlowFsm.statusReportCatalogue.qryProjectPicker",
        "handlerName": "statusReportCatalogueQryProjectPickerHandler"
      }
    ]
  }
} as const;

export default statusReportCatalogueController;

export const pipeline = [
  {
    "id": "statusReportCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/statusReportCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/statusReportCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listStatusReport.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/statusReportCatalogue.qryListStatusReport.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createStatusReport.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/statusReportCatalogue.cmdCreateStatusReport.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReport.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/statusReportCatalogue.cmdUpdateStatusReport.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteStatusReport.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/statusReportCatalogue.cmdDeleteStatusReport.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/statusReportCatalogue.qryProjectPicker.defs.ts"
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
