/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/projectCoordinationAssignmentCatalogue.defs.ts" enhancement="_blank"/>

export const projectCoordinationAssignmentCatalogueWorkspace = {
  "workspaceId": "projectCoordinationAssignmentCatalogue",
  "title": "Atribuição de coordenação da obra",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "kind": "operation",
  "entity": "ProjectCoordinationAssignment",
  "bffCalls": [
    {
      "bffId": "qryListProjectCoordinationAssignment",
      "kind": "query",
      "uses": [
        {
          "operationId": "listProjectCoordinationAssignment"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectCoordinationAssignmentId",
            "from": "listProjectCoordinationAssignment.$items.projectCoordinationAssignmentId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listProjectCoordinationAssignment.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldCoordinatorId",
            "from": "listProjectCoordinationAssignment.$items.fieldCoordinatorId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listProjectCoordinationAssignment.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment"
    },
    {
      "bffId": "cmdCreateProjectCoordinationAssignment",
      "kind": "command",
      "uses": [
        {
          "operationId": "createProjectCoordinationAssignment"
        }
      ],
      "input": [
        {
          "name": "projectId",
          "from": "createProjectCoordinationAssignment.projectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryProjectPicker",
          "type": "string"
        },
        {
          "name": "fieldCoordinatorId",
          "from": "createProjectCoordinationAssignment.fieldCoordinatorId",
          "required": true,
          "source": "actorSession",
          "type": "string"
        },
        {
          "name": "status",
          "from": "createProjectCoordinationAssignment.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectCoordinationAssignmentId",
            "from": "createProjectCoordinationAssignment.projectCoordinationAssignmentId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "createProjectCoordinationAssignment.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldCoordinatorId",
            "from": "createProjectCoordinationAssignment.fieldCoordinatorId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "createProjectCoordinationAssignment.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment"
    },
    {
      "bffId": "cmdUpdateProjectCoordinationAssignment",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateProjectCoordinationAssignment"
        }
      ],
      "input": [
        {
          "name": "projectCoordinationAssignmentId",
          "from": "updateProjectCoordinationAssignment.projectCoordinationAssignmentId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "projectId",
          "from": "updateProjectCoordinationAssignment.projectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryProjectPicker",
          "type": "string"
        },
        {
          "name": "fieldCoordinatorId",
          "from": "updateProjectCoordinationAssignment.fieldCoordinatorId",
          "required": true,
          "source": "actorSession",
          "type": "string"
        },
        {
          "name": "status",
          "from": "updateProjectCoordinationAssignment.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectCoordinationAssignmentId",
            "from": "updateProjectCoordinationAssignment.projectCoordinationAssignmentId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "updateProjectCoordinationAssignment.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldCoordinatorId",
            "from": "updateProjectCoordinationAssignment.fieldCoordinatorId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "updateProjectCoordinationAssignment.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment"
    },
    {
      "bffId": "cmdDeleteProjectCoordinationAssignment",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteProjectCoordinationAssignment"
        }
      ],
      "input": [
        {
          "name": "projectCoordinationAssignmentId",
          "from": "deleteProjectCoordinationAssignment.projectCoordinationAssignmentId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectCoordinationAssignmentId",
            "from": "deleteProjectCoordinationAssignment.projectCoordinationAssignmentId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "deleteProjectCoordinationAssignment.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "fieldCoordinatorId",
            "from": "deleteProjectCoordinationAssignment.fieldCoordinatorId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteProjectCoordinationAssignment.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment"
    },
    {
      "bffId": "qryProjectPicker",
      "kind": "query",
      "uses": [
        {
          "operationId": "listProject"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "projectId",
            "from": "listProject.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "listProject.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "listProject.$items.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "listProject.$items.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listProject.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "listProject.$items.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "listProject.$items.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "listProject.$items.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectCoordinationAssignmentCatalogue.qryProjectPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Atribuição de coordenação da obra.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListProjectCoordinationAssignment"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteProjectCoordinationAssignment"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Atribuição de coordenação da obra.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateProjectCoordinationAssignment"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateProjectCoordinationAssignment"
        },
        {
          "role": "filterControl",
          "dataSource": "qryProjectPicker",
          "usage": "picker"
        }
      ]
    }
  ],
  "operationIds": [
    "createProjectCoordinationAssignment",
    "deleteProjectCoordinationAssignment",
    "listProject",
    "listProjectCoordinationAssignment",
    "updateProjectCoordinationAssignment"
  ],
  "purpose": "Cadastro de Atribuição de coordenação da obra.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:4e65197d"
} as const;

export default projectCoordinationAssignmentCatalogueWorkspace;
