/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/statusReportCatalogue.defs.ts" enhancement="_blank"/>

export const statusReportCatalogueWorkspace = {
  "workspaceId": "statusReportCatalogue",
  "title": "Relatório de status",
  "actors": [
    "client",
    "projectManager"
  ],
  "kind": "operation",
  "entity": "StatusReport",
  "bffCalls": [
    {
      "bffId": "qryListStatusReport",
      "kind": "query",
      "uses": [
        {
          "operationId": "listStatusReport"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "statusReportId",
            "from": "listStatusReport.$items.statusReportId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listStatusReport.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "listStatusReport.$items.status",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "from": "listStatusReport.$items.title",
            "type": "string",
            "required": true
          },
          {
            "name": "content",
            "from": "listStatusReport.$items.content",
            "type": "string",
            "required": true
          },
          {
            "name": "communicatedRisks",
            "from": "listStatusReport.$items.communicatedRisks",
            "type": "string",
            "required": false
          },
          {
            "name": "generatedAt",
            "from": "listStatusReport.$items.generatedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "generatedByUserId",
            "from": "listStatusReport.$items.generatedByUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "publishedAt",
            "from": "listStatusReport.$items.publishedAt",
            "type": "string",
            "required": false
          },
          {
            "name": "publishedByUserId",
            "from": "listStatusReport.$items.publishedByUserId",
            "type": "string",
            "required": false
          },
          {
            "name": "withdrawnAt",
            "from": "listStatusReport.$items.withdrawnAt",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.statusReportCatalogue.qryListStatusReport"
    },
    {
      "bffId": "cmdCreateStatusReport",
      "kind": "command",
      "uses": [
        {
          "operationId": "createStatusReport"
        }
      ],
      "input": [
        {
          "name": "projectProjectId",
          "from": "createStatusReport.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "projectExecutionOverviewProjectId",
          "from": "createStatusReport.projectExecutionOverviewProjectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryProjectPicker",
          "type": "string"
        },
        {
          "name": "title",
          "from": "createStatusReport.title",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "content",
          "from": "createStatusReport.content",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "communicatedRisks",
          "from": "createStatusReport.communicatedRisks",
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "generatedByUserId",
          "from": "createStatusReport.generatedByUserId",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "publishedByUserId",
          "from": "createStatusReport.publishedByUserId",
          "source": "userInput",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "statusReportId",
            "from": "createStatusReport.statusReportId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "createStatusReport.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "createStatusReport.status",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "from": "createStatusReport.title",
            "type": "string",
            "required": true
          },
          {
            "name": "content",
            "from": "createStatusReport.content",
            "type": "string",
            "required": true
          },
          {
            "name": "communicatedRisks",
            "from": "createStatusReport.communicatedRisks",
            "type": "string",
            "required": false
          },
          {
            "name": "generatedAt",
            "from": "createStatusReport.generatedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "generatedByUserId",
            "from": "createStatusReport.generatedByUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "publishedAt",
            "from": "createStatusReport.publishedAt",
            "type": "string",
            "required": false
          },
          {
            "name": "publishedByUserId",
            "from": "createStatusReport.publishedByUserId",
            "type": "string",
            "required": false
          },
          {
            "name": "withdrawnAt",
            "from": "createStatusReport.withdrawnAt",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.statusReportCatalogue.cmdCreateStatusReport"
    },
    {
      "bffId": "cmdUpdateStatusReport",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateStatusReport"
        }
      ],
      "input": [
        {
          "name": "statusReportId",
          "from": "updateStatusReport.statusReportId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "projectId",
          "from": "updateStatusReport.projectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryProjectPicker",
          "type": "string"
        },
        {
          "name": "status",
          "from": "updateStatusReport.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        },
        {
          "name": "title",
          "from": "updateStatusReport.title",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "content",
          "from": "updateStatusReport.content",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "communicatedRisks",
          "from": "updateStatusReport.communicatedRisks",
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "generatedAt",
          "from": "updateStatusReport.generatedAt",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        },
        {
          "name": "generatedByUserId",
          "from": "updateStatusReport.generatedByUserId",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "publishedAt",
          "from": "updateStatusReport.publishedAt",
          "source": "systemDefault",
          "type": "string"
        },
        {
          "name": "publishedByUserId",
          "from": "updateStatusReport.publishedByUserId",
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "withdrawnAt",
          "from": "updateStatusReport.withdrawnAt",
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "statusReportId",
            "from": "updateStatusReport.statusReportId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "updateStatusReport.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "updateStatusReport.status",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "from": "updateStatusReport.title",
            "type": "string",
            "required": true
          },
          {
            "name": "content",
            "from": "updateStatusReport.content",
            "type": "string",
            "required": true
          },
          {
            "name": "communicatedRisks",
            "from": "updateStatusReport.communicatedRisks",
            "type": "string",
            "required": false
          },
          {
            "name": "generatedAt",
            "from": "updateStatusReport.generatedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "generatedByUserId",
            "from": "updateStatusReport.generatedByUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "publishedAt",
            "from": "updateStatusReport.publishedAt",
            "type": "string",
            "required": false
          },
          {
            "name": "publishedByUserId",
            "from": "updateStatusReport.publishedByUserId",
            "type": "string",
            "required": false
          },
          {
            "name": "withdrawnAt",
            "from": "updateStatusReport.withdrawnAt",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.statusReportCatalogue.cmdUpdateStatusReport"
    },
    {
      "bffId": "cmdDeleteStatusReport",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteStatusReport"
        }
      ],
      "input": [
        {
          "name": "statusReportId",
          "from": "deleteStatusReport.statusReportId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "statusReportId",
            "from": "deleteStatusReport.statusReportId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "deleteStatusReport.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteStatusReport.status",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "from": "deleteStatusReport.title",
            "type": "string",
            "required": true
          },
          {
            "name": "content",
            "from": "deleteStatusReport.content",
            "type": "string",
            "required": true
          },
          {
            "name": "communicatedRisks",
            "from": "deleteStatusReport.communicatedRisks",
            "type": "string",
            "required": false
          },
          {
            "name": "generatedAt",
            "from": "deleteStatusReport.generatedAt",
            "type": "string",
            "required": true
          },
          {
            "name": "generatedByUserId",
            "from": "deleteStatusReport.generatedByUserId",
            "type": "string",
            "required": true
          },
          {
            "name": "publishedAt",
            "from": "deleteStatusReport.publishedAt",
            "type": "string",
            "required": false
          },
          {
            "name": "publishedByUserId",
            "from": "deleteStatusReport.publishedByUserId",
            "type": "string",
            "required": false
          },
          {
            "name": "withdrawnAt",
            "from": "deleteStatusReport.withdrawnAt",
            "type": "string",
            "required": false
          }
        ]
      },
      "route": "buildFlowFsm.statusReportCatalogue.cmdDeleteStatusReport"
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
      "route": "buildFlowFsm.statusReportCatalogue.qryProjectPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Relatório de status.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListStatusReport"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteStatusReport"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Relatório de status.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateStatusReport"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateStatusReport"
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
    "createStatusReport",
    "deleteStatusReport",
    "listProject",
    "listStatusReport",
    "updateStatusReport"
  ],
  "purpose": "Cadastro de Relatório de status.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:5d3e5a99"
} as const;

export default statusReportCatalogueWorkspace;
