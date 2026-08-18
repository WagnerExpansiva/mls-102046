/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectCoordinationAssignmentCatalogue.defs.ts" enhancement="_blank"/>

export const projectCoordinationAssignmentCatalogueController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "projectCoordinationAssignmentCatalogue",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "projectCoordinationAssignmentCatalogue",
    "controllerName": "ProjectCoordinationAssignmentCatalogueController",
    "ownerKind": "workspace",
    "workspaceId": "projectCoordinationAssignmentCatalogue",
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
        "handlerName": "projectCoordinationAssignmentCatalogueQryListProjectCoordinationAssignmentHandler",
        "command": "qryListProjectCoordinationAssignment",
        "bffId": "qryListProjectCoordinationAssignment",
        "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment",
        "kind": "query",
        "usecaseRef": "listProjectCoordinationAssignment",
        "usecaseRefs": [
          "listProjectCoordinationAssignment"
        ],
        "inputTypeName": "ListProjectCoordinationAssignmentInput",
        "inputContract": [],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "projectCoordinationAssignmentId",
              "operationId": "listProjectCoordinationAssignment",
              "path": [
                "projectCoordinationAssignmentId"
              ],
              "fromItems": true
            },
            {
              "name": "projectId",
              "operationId": "listProjectCoordinationAssignment",
              "path": [
                "projectId"
              ],
              "fromItems": true
            },
            {
              "name": "fieldCoordinatorId",
              "operationId": "listProjectCoordinationAssignment",
              "path": [
                "fieldCoordinatorId"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "listProjectCoordinationAssignment",
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
        "handlerName": "projectCoordinationAssignmentCatalogueCmdCreateProjectCoordinationAssignmentHandler",
        "command": "cmdCreateProjectCoordinationAssignment",
        "bffId": "cmdCreateProjectCoordinationAssignment",
        "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment",
        "kind": "command",
        "usecaseRef": "createProjectCoordinationAssignment",
        "usecaseRefs": [
          "createProjectCoordinationAssignment"
        ],
        "inputTypeName": "CreateProjectCoordinationAssignmentInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "ProjectCoordinationAssignment.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à obra específica encaminhada para acompanhamento de campo."
          },
          {
            "inputId": "fieldCoordinatorId",
            "fieldRef": "ProjectCoordinationAssignment.fieldCoordinatorId",
            "required": true,
            "source": "actorSession",
            "description": "Referência de contexto ao coordenador de campo responsável pelo acompanhamento da obra."
          },
          {
            "inputId": "status",
            "fieldRef": "ProjectCoordinationAssignment.status",
            "required": true,
            "source": "systemDefault",
            "description": "Estado operacional atual da atribuição de coordenação da obra."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectCoordinationAssignmentId",
              "operationId": "createProjectCoordinationAssignment",
              "path": [
                "projectCoordinationAssignmentId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createProjectCoordinationAssignment",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "fieldCoordinatorId",
              "operationId": "createProjectCoordinationAssignment",
              "path": [
                "fieldCoordinatorId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createProjectCoordinationAssignment",
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
        "handlerName": "projectCoordinationAssignmentCatalogueCmdUpdateProjectCoordinationAssignmentHandler",
        "command": "cmdUpdateProjectCoordinationAssignment",
        "bffId": "cmdUpdateProjectCoordinationAssignment",
        "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment",
        "kind": "command",
        "usecaseRef": "updateProjectCoordinationAssignment",
        "usecaseRefs": [
          "updateProjectCoordinationAssignment"
        ],
        "inputTypeName": "UpdateProjectCoordinationAssignmentInput",
        "inputContract": [
          {
            "inputId": "projectCoordinationAssignmentId",
            "fieldRef": "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do registro operacional de encaminhamento da obra para coordenação de campo."
          },
          {
            "inputId": "projectId",
            "fieldRef": "ProjectCoordinationAssignment.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Referência de contexto à obra específica encaminhada para acompanhamento de campo."
          },
          {
            "inputId": "fieldCoordinatorId",
            "fieldRef": "ProjectCoordinationAssignment.fieldCoordinatorId",
            "required": true,
            "source": "actorSession",
            "description": "Referência de contexto ao coordenador de campo responsável pelo acompanhamento da obra."
          },
          {
            "inputId": "status",
            "fieldRef": "ProjectCoordinationAssignment.status",
            "required": true,
            "source": "systemDefault",
            "description": "Estado operacional atual da atribuição de coordenação da obra."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectCoordinationAssignmentId",
              "operationId": "updateProjectCoordinationAssignment",
              "path": [
                "projectCoordinationAssignmentId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateProjectCoordinationAssignment",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "fieldCoordinatorId",
              "operationId": "updateProjectCoordinationAssignment",
              "path": [
                "fieldCoordinatorId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateProjectCoordinationAssignment",
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
        "handlerName": "projectCoordinationAssignmentCatalogueCmdDeleteProjectCoordinationAssignmentHandler",
        "command": "cmdDeleteProjectCoordinationAssignment",
        "bffId": "cmdDeleteProjectCoordinationAssignment",
        "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment",
        "kind": "command",
        "usecaseRef": "deleteProjectCoordinationAssignment",
        "usecaseRefs": [
          "deleteProjectCoordinationAssignment"
        ],
        "inputTypeName": "DeleteProjectCoordinationAssignmentInput",
        "inputContract": [
          {
            "inputId": "projectCoordinationAssignmentId",
            "fieldRef": "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador estável do registro operacional de encaminhamento da obra para coordenação de campo."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectCoordinationAssignmentId",
              "operationId": "deleteProjectCoordinationAssignment",
              "path": [
                "projectCoordinationAssignmentId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "deleteProjectCoordinationAssignment",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "fieldCoordinatorId",
              "operationId": "deleteProjectCoordinationAssignment",
              "path": [
                "fieldCoordinatorId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "deleteProjectCoordinationAssignment",
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
        "handlerName": "projectCoordinationAssignmentCatalogueQryProjectPickerHandler",
        "command": "qryProjectPicker",
        "bffId": "qryProjectPicker",
        "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker",
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
        "key": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment",
        "handlerName": "projectCoordinationAssignmentCatalogueQryListProjectCoordinationAssignmentHandler"
      },
      {
        "key": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment",
        "handlerName": "projectCoordinationAssignmentCatalogueCmdCreateProjectCoordinationAssignmentHandler"
      },
      {
        "key": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment",
        "handlerName": "projectCoordinationAssignmentCatalogueCmdUpdateProjectCoordinationAssignmentHandler"
      },
      {
        "key": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment",
        "handlerName": "projectCoordinationAssignmentCatalogueCmdDeleteProjectCoordinationAssignmentHandler"
      },
      {
        "key": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker",
        "handlerName": "projectCoordinationAssignmentCatalogueQryProjectPickerHandler"
      }
    ]
  }
} as const;

export default projectCoordinationAssignmentCatalogueController;

export const pipeline = [
  {
    "id": "projectCoordinationAssignmentCatalogue__httpController",
    "type": "httpController",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectCoordinationAssignmentCatalogue.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectCoordinationAssignmentCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProjectCoordinationAssignment.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createProjectCoordinationAssignment.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectCoordinationAssignment.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteProjectCoordinationAssignment.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment.defs.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/usecases/listProject.d.ts",
      "_102046_/l4/buildFlowFsm/contracts/projectCoordinationAssignmentCatalogue.qryProjectPicker.defs.ts"
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
