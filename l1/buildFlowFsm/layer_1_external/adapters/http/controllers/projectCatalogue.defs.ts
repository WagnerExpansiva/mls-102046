/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectCatalogue.defs.ts" enhancement="_blank"/>

export const projectCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "projectCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "projectCatalogue",
    "controllerName": "ProjectCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "projectCatalogue",
    "actors": [
      "billingStaff",
      "client",
      "fieldCoordinator",
      "fieldWorker",
      "projectManager"
    ],
    "allowedScopes": [
      "internal",
      "external",
      "internal",
      "internal",
      "internal"
    ],
    "handlers": [
      {
        "handlerName": "projectCatalogueQryListProjectHandler",
        "command": "qryListProject",
        "bffId": "qryListProject",
        "route": "buildFlowFsm.projectCatalogue.qryListProject",
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
      },
      {
        "handlerName": "projectCatalogueCmdCreateProjectHandler",
        "command": "cmdCreateProject",
        "bffId": "cmdCreateProject",
        "route": "buildFlowFsm.projectCatalogue.cmdCreateProject",
        "kind": "command",
        "usecaseRef": "createProject",
        "usecaseRefs": [
          "createProject"
        ],
        "inputTypeName": "CreateProjectInput",
        "inputContract": [
          {
            "inputId": "clientId",
            "fieldRef": "Project.clientId",
            "required": true,
            "source": "userInput",
            "description": "Referência ao cliente selecionado ao qual a obra pertence."
          },
          {
            "inputId": "name",
            "fieldRef": "Project.name",
            "required": true,
            "source": "userInput",
            "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente."
          },
          {
            "inputId": "address",
            "fieldRef": "Project.address",
            "required": true,
            "source": "userInput",
            "description": "Endereço do local de execução da obra."
          },
          {
            "inputId": "status",
            "fieldRef": "Project.status",
            "required": true,
            "source": "systemDefault",
            "description": "Situação operacional atual da obra."
          },
          {
            "inputId": "authorizedBudget",
            "fieldRef": "Project.authorizedBudget",
            "required": true,
            "source": "userInput",
            "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra."
          },
          {
            "inputId": "plannedStartDate",
            "fieldRef": "Project.plannedStartDate",
            "required": true,
            "source": "userInput",
            "description": "Data planejada para início da execução da obra."
          },
          {
            "inputId": "plannedEndDate",
            "fieldRef": "Project.plannedEndDate",
            "required": true,
            "source": "userInput",
            "description": "Data planejada para conclusão da obra."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "createProject",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "createProject",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "createProject",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "address",
              "operationId": "createProject",
              "path": [
                "address"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createProject",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "authorizedBudget",
              "operationId": "createProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": false
            },
            {
              "name": "plannedStartDate",
              "operationId": "createProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": false
            },
            {
              "name": "plannedEndDate",
              "operationId": "createProject",
              "path": [
                "plannedEndDate"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectCatalogueCmdUpdateProjectHandler",
        "command": "cmdUpdateProject",
        "bffId": "cmdUpdateProject",
        "route": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
        "kind": "command",
        "usecaseRef": "updateProject",
        "usecaseRefs": [
          "updateProject"
        ],
        "inputTypeName": "UpdateProjectInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável da obra, transportado entre etapas e registros relacionados."
          },
          {
            "inputId": "clientId",
            "fieldRef": "Project.clientId",
            "required": true,
            "source": "userInput",
            "description": "Referência ao cliente selecionado ao qual a obra pertence."
          },
          {
            "inputId": "name",
            "fieldRef": "Project.name",
            "required": true,
            "source": "userInput",
            "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente."
          },
          {
            "inputId": "address",
            "fieldRef": "Project.address",
            "required": true,
            "source": "userInput",
            "description": "Endereço do local de execução da obra."
          },
          {
            "inputId": "status",
            "fieldRef": "Project.status",
            "required": true,
            "source": "systemDefault",
            "description": "Situação operacional atual da obra."
          },
          {
            "inputId": "authorizedBudget",
            "fieldRef": "Project.authorizedBudget",
            "required": true,
            "source": "userInput",
            "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra."
          },
          {
            "inputId": "plannedStartDate",
            "fieldRef": "Project.plannedStartDate",
            "required": true,
            "source": "userInput",
            "description": "Data planejada para início da execução da obra."
          },
          {
            "inputId": "plannedEndDate",
            "fieldRef": "Project.plannedEndDate",
            "required": true,
            "source": "userInput",
            "description": "Data planejada para conclusão da obra."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "updateProject",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "updateProject",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "updateProject",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "address",
              "operationId": "updateProject",
              "path": [
                "address"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateProject",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "authorizedBudget",
              "operationId": "updateProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": false
            },
            {
              "name": "plannedStartDate",
              "operationId": "updateProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": false
            },
            {
              "name": "plannedEndDate",
              "operationId": "updateProject",
              "path": [
                "plannedEndDate"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectCatalogueCmdDeleteProjectHandler",
        "command": "cmdDeleteProject",
        "bffId": "cmdDeleteProject",
        "route": "buildFlowFsm.projectCatalogue.cmdDeleteProject",
        "kind": "command",
        "usecaseRef": "deleteProject",
        "usecaseRefs": [
          "deleteProject"
        ],
        "inputTypeName": "DeleteProjectInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável da obra, transportado entre etapas e registros relacionados."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "deleteProject",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "deleteProject",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "deleteProject",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "address",
              "operationId": "deleteProject",
              "path": [
                "address"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteProject",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "authorizedBudget",
              "operationId": "deleteProject",
              "path": [
                "authorizedBudget"
              ],
              "fromItems": false
            },
            {
              "name": "plannedStartDate",
              "operationId": "deleteProject",
              "path": [
                "plannedStartDate"
              ],
              "fromItems": false
            },
            {
              "name": "plannedEndDate",
              "operationId": "deleteProject",
              "path": [
                "plannedEndDate"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectCatalogueQryClientPickerHandler",
        "command": "qryClientPicker",
        "bffId": "qryClientPicker",
        "route": "buildFlowFsm.projectCatalogue.qryClientPicker",
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
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.projectCatalogue.qryListProject",
        "handlerName": "projectCatalogueQryListProjectHandler"
      },
      {
        "key": "buildFlowFsm.projectCatalogue.cmdCreateProject",
        "handlerName": "projectCatalogueCmdCreateProjectHandler"
      },
      {
        "key": "buildFlowFsm.projectCatalogue.cmdUpdateProject",
        "handlerName": "projectCatalogueCmdUpdateProjectHandler"
      },
      {
        "key": "buildFlowFsm.projectCatalogue.cmdDeleteProject",
        "handlerName": "projectCatalogueCmdDeleteProjectHandler"
      },
      {
        "key": "buildFlowFsm.projectCatalogue.qryClientPicker",
        "handlerName": "projectCatalogueQryClientPickerHandler"
      }
    ]
  }
} as const;

export default projectCatalogueController;

export const pipeline = [
  {
    "id": "projectCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCatalogue.qryListProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCatalogue.cmdCreateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCatalogue.cmdUpdateProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCatalogue.cmdDeleteProject.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listClient.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCatalogue.qryClientPicker.defs.ts"
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
