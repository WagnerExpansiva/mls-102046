/// <mls fileReference="_102046_/l4/buildFlowFsm/workspaces/invoiceCatalogue.defs.ts" enhancement="_blank"/>

export const invoiceCatalogueWorkspace = {
  "workspaceId": "invoiceCatalogue",
  "title": "Fatura",
  "actors": [
    "billingStaff"
  ],
  "kind": "operation",
  "entity": "Invoice",
  "bffCalls": [
    {
      "bffId": "qryListInvoice",
      "kind": "query",
      "uses": [
        {
          "operationId": "listInvoice"
        }
      ],
      "input": [],
      "output": {
        "kind": "list",
        "fields": [
          {
            "name": "invoiceId",
            "from": "listInvoice.$items.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "listInvoice.$items.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "listInvoice.$items.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "commercialReference",
            "from": "listInvoice.$items.commercialReference",
            "type": "string",
            "required": true
          },
          {
            "name": "amount",
            "from": "listInvoice.$items.amount",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "listInvoice.$items.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceCatalogue.qryListInvoice"
    },
    {
      "bffId": "cmdCreateInvoice",
      "kind": "command",
      "uses": [
        {
          "operationId": "createInvoice"
        }
      ],
      "input": [
        {
          "name": "clientClientId",
          "from": "createInvoice.clientClientId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        },
        {
          "name": "projectProjectId",
          "from": "createInvoice.projectProjectId",
          "required": true,
          "source": "routeParam",
          "type": "string"
        },
        {
          "name": "commercialReference",
          "from": "createInvoice.commercialReference",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "amount",
          "from": "createInvoice.amount",
          "required": true,
          "source": "userInput",
          "type": "number"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "invoiceId",
            "from": "createInvoice.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "createInvoice.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "createInvoice.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "commercialReference",
            "from": "createInvoice.commercialReference",
            "type": "string",
            "required": true
          },
          {
            "name": "amount",
            "from": "createInvoice.amount",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "createInvoice.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceCatalogue.cmdCreateInvoice"
    },
    {
      "bffId": "cmdUpdateInvoice",
      "kind": "command",
      "uses": [
        {
          "operationId": "updateInvoice"
        }
      ],
      "input": [
        {
          "name": "invoiceId",
          "from": "updateInvoice.invoiceId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        },
        {
          "name": "clientId",
          "from": "updateInvoice.clientId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryClientPicker",
          "type": "string"
        },
        {
          "name": "projectId",
          "from": "updateInvoice.projectId",
          "required": true,
          "source": "selectedEntity",
          "sourceRef": "qryProjectPicker",
          "type": "string"
        },
        {
          "name": "commercialReference",
          "from": "updateInvoice.commercialReference",
          "required": true,
          "source": "userInput",
          "type": "string"
        },
        {
          "name": "amount",
          "from": "updateInvoice.amount",
          "required": true,
          "source": "userInput",
          "type": "number"
        },
        {
          "name": "status",
          "from": "updateInvoice.status",
          "required": true,
          "source": "systemDefault",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "invoiceId",
            "from": "updateInvoice.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "updateInvoice.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "updateInvoice.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "commercialReference",
            "from": "updateInvoice.commercialReference",
            "type": "string",
            "required": true
          },
          {
            "name": "amount",
            "from": "updateInvoice.amount",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "updateInvoice.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceCatalogue.cmdUpdateInvoice"
    },
    {
      "bffId": "cmdDeleteInvoice",
      "kind": "command",
      "uses": [
        {
          "operationId": "deleteInvoice"
        }
      ],
      "input": [
        {
          "name": "invoiceId",
          "from": "deleteInvoice.invoiceId",
          "required": true,
          "source": "selectedEntity",
          "type": "string"
        }
      ],
      "output": {
        "kind": "object",
        "fields": [
          {
            "name": "invoiceId",
            "from": "deleteInvoice.invoiceId",
            "type": "string",
            "required": true
          },
          {
            "name": "clientId",
            "from": "deleteInvoice.clientId",
            "type": "string",
            "required": true
          },
          {
            "name": "projectId",
            "from": "deleteInvoice.projectId",
            "type": "string",
            "required": true
          },
          {
            "name": "commercialReference",
            "from": "deleteInvoice.commercialReference",
            "type": "string",
            "required": true
          },
          {
            "name": "amount",
            "from": "deleteInvoice.amount",
            "type": "number",
            "required": true
          },
          {
            "name": "status",
            "from": "deleteInvoice.status",
            "type": "string",
            "required": true
          }
        ]
      },
      "route": "buildFlowFsm.invoiceCatalogue.cmdDeleteInvoice"
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
      "route": "buildFlowFsm.invoiceCatalogue.qryClientPicker"
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
      "route": "buildFlowFsm.invoiceCatalogue.qryProjectPicker"
    }
  ],
  "sections": [
    {
      "sectionId": "recordList",
      "intent": "Localizar Fatura.",
      "organisms": [
        {
          "role": "primarySurface",
          "dataSource": "qryListInvoice"
        },
        {
          "role": "contextualAction",
          "action": "cmdDeleteInvoice"
        }
      ]
    },
    {
      "sectionId": "recordForm",
      "intent": "Criar ou corrigir Fatura.",
      "organisms": [
        {
          "role": "primarySurface",
          "action": "cmdCreateInvoice"
        },
        {
          "role": "contextualAction",
          "action": "cmdUpdateInvoice"
        },
        {
          "role": "filterControl",
          "dataSource": "qryClientPicker",
          "usage": "picker"
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
    "createInvoice",
    "deleteInvoice",
    "listClient",
    "listInvoice",
    "listProject",
    "updateInvoice"
  ],
  "purpose": "Cadastro de Fatura.",
  "presentation": {
    "categoryRef": "entityRecordManagement",
    "confidence": 10,
    "classificationNote": "Derived from the recordCatalogue tier of the approved E8 model; the category is structural, not a guess."
  },
  "sliceHash": "sha256:a862338d"
} as const;

export default invoiceCatalogueWorkspace;
