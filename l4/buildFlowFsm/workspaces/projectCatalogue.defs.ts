/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/projectCatalogue.defs.ts" enhancement="_blank"/>

export const projectCatalogueWorkspace = {
  "workspaceId": "projectCatalogue",
  "title": "Obra",
  "actors": [
    "billingStaff",
    "client",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "kind": "operation",
  "entity": "Project",
  "bffCalls": [
    {
      "bffId": "qryListProject",
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
      "route": "buildFlowFsm.projectCatalogue.qryListProject"
    },
    {
      "bffId": "cmdCreateProject",
      "kind": "command",
      "uses": [
        {
          "operationId": "createProject"
        }
      ],
      "input": [
        {
          "name": "clientId",
          "from": "createProject.clientId",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "name",
          "from": "createProject.name",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "address",
          "from": "createProject.address",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "status",
          "from": "createProject.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        },
        {
          "name": "authorizedBudget",
          "from": "createProject.authorizedBudget",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "plannedStartDate",
          "from": "createProject.plannedStartDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "plannedEndDate",
          "from": "createProject.plannedEndDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectId",
            "from": "createProject.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "createProject.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "createProject.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "createProject.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "createProject.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "createProject.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "createProject.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "createProject.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectCatalogue.cmdCreateProject"
    },
    {
      "bffId": "cmdUpdateProject",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateProject"
        }
      ],
      "input": [
        {
          "name": "projectId",
          "from": "updateProject.projectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        },
        {
          "name": "clientId",
          "from": "updateProject.clientId",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "name",
          "from": "updateProject.name",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "address",
          "from": "updateProject.address",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "status",
          "from": "updateProject.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        },
        {
          "name": "authorizedBudget",
          "from": "updateProject.authorizedBudget",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "plannedStartDate",
          "from": "updateProject.plannedStartDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "plannedEndDate",
          "from": "updateProject.plannedEndDate",
          "required": true,
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectId",
            "from": "updateProject.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "updateProject.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "updateProject.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "updateProject.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "updateProject.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "updateProject.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "updateProject.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "updateProject.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectCatalogue.cmdUpdateProject"
    },
    {
      "bffId": "cmdDeleteProject",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteProject"
        }
      ],
      "input": [
        {
          "name": "projectId",
          "from": "deleteProject.projectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "projectId",
            "from": "deleteProject.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "deleteProject.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "from": "deleteProject.name",
            "type": "string",
            "required": true
          },
          {
            "name": "address",
            "from": "deleteProject.address",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteProject.status",
            "type": "string",
            "required": true
          },
          {
            "name": "authorizedBudget",
            "from": "deleteProject.authorizedBudget",
            "type": "number",
            "required": true
          },
          {
            "name": "plannedStartDate",
            "from": "deleteProject.plannedStartDate",
            "type": "string",
            "required": true
          },
          {
            "name": "plannedEndDate",
            "from": "deleteProject.plannedEndDate",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.projectCatalogue.cmdDeleteProject"
    },
    {
      "bffId": "qryClientPicker",
      "kind": "query",
      "uses": [
        {
          "operationId": "listClient"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "clientId",
            "from": "listClient.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientName",
            "from": "listClient.$items.clientName",
            "type": "string",
            "required": true
          },
          {
            "name": "contactEmail",
            "from": "listClient.$items.contactEmail",
            "type": "string",
            "required": false
          },
          {
            "name": "contactPhone",
            "from": "listClient.$items.contactPhone",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.projectCatalogue.qryClientPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Obra.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListProject"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteProject"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Obra.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateProject"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateProject"
        },
        {
          "role": "filterControl",
          "dataSource": "qryClientPicker",
          "usage": "picker"
        }
      ]
    }
  ],
  "operationIds": [
    "createProject",
    "deleteProject",
    "listClient",
    "listProject",
    "updateProject"
  ],
  "purpose": "Cadastro de Obra.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:9f9cf845"
} as const;

export default projectCatalogueWorkspace;
