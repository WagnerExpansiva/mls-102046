/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectCatalogue",
  "pageName": "Obra",
  "baseClassName": "BuildFlowFsmProjectCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Obra.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "dataBindings": [
    {
      "id": "binding.projectCatalogue.qryListProject",
      "source": "bff.qryListProject",
      "command": "qryListProject",
      "description": "Listar Obra",
      "kind": "query",
      "stateKey": "ui.projectCatalogue.data.qryListProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectCatalogue.cmdCreateProject",
      "source": "bff.cmdCreateProject",
      "command": "cmdCreateProject",
      "description": "Criar Obra",
      "kind": "command",
      "stateKey": "ui.projectCatalogue.output.cmdCreateProject",
      "inputStateKeys": [
        "ui.projectCatalogue.input.cmdCreateProject.clientId",
        "ui.projectCatalogue.input.cmdCreateProject.name",
        "ui.projectCatalogue.input.cmdCreateProject.address",
        "ui.projectCatalogue.input.cmdCreateProject.status",
        "ui.projectCatalogue.input.cmdCreateProject.authorizedBudget",
        "ui.projectCatalogue.input.cmdCreateProject.plannedStartDate",
        "ui.projectCatalogue.input.cmdCreateProject.plannedEndDate"
      ],
      "inputs": [
        {
          "name": "clientId",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.clientId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "name",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "address",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.address",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "authorizedBudget",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.authorizedBudget",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedStartDate",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.plannedStartDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedEndDate",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.plannedEndDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectCatalogue.cmdUpdateProject",
      "source": "bff.cmdUpdateProject",
      "command": "cmdUpdateProject",
      "description": "Atualizar Obra",
      "kind": "command",
      "stateKey": "ui.projectCatalogue.output.cmdUpdateProject",
      "inputStateKeys": [
        "ui.projectCatalogue.input.cmdUpdateProject.projectId",
        "ui.projectCatalogue.input.cmdUpdateProject.clientId",
        "ui.projectCatalogue.input.cmdUpdateProject.name",
        "ui.projectCatalogue.input.cmdUpdateProject.address",
        "ui.projectCatalogue.input.cmdUpdateProject.status",
        "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget",
        "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate",
        "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "clientId",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.clientId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "name",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "address",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.address",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "authorizedBudget",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedStartDate",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedEndDate",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectCatalogue.cmdDeleteProject",
      "source": "bff.cmdDeleteProject",
      "command": "cmdDeleteProject",
      "description": "Excluir Obra",
      "kind": "command",
      "stateKey": "ui.projectCatalogue.output.cmdDeleteProject",
      "inputStateKeys": [
        "ui.projectCatalogue.input.cmdDeleteProject.projectId"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectCatalogue.input.cmdDeleteProject.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.projectCatalogue.qryClientPicker",
      "source": "bff.qryClientPicker",
      "command": "qryClientPicker",
      "description": "Listar Cliente",
      "kind": "query",
      "stateKey": "ui.projectCatalogue.data.qryClientPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "projectCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
