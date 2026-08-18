/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/projectCoordinationAssignmentCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectCoordinationAssignmentCatalogue",
  "pageName": "Atribuição de coordenação da obra",
  "baseClassName": "BuildFlowFsmProjectCoordinationAssignmentCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Atribuição de coordenação da obra.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "dataBindings": [
    {
      "id": "binding.projectCoordinationAssignmentCatalogue.qryListProjectCoordinationAssignment",
      "source": "bff.qryListProjectCoordinationAssignment",
      "command": "qryListProjectCoordinationAssignment",
      "description": "Listar Atribuição de coordenação da obra",
      "kind": "query",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.data.qryListProjectCoordinationAssignment",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectCoordinationAssignmentCatalogue.cmdCreateProjectCoordinationAssignment",
      "source": "bff.cmdCreateProjectCoordinationAssignment",
      "command": "cmdCreateProjectCoordinationAssignment",
      "description": "Criar Atribuição de coordenação da obra",
      "kind": "command",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.output.cmdCreateProjectCoordinationAssignment",
      "inputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "fieldCoordinatorId",
          "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.fieldCoordinatorId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdCreateProjectCoordinationAssignment.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectCoordinationAssignmentCatalogue.cmdUpdateProjectCoordinationAssignment",
      "source": "bff.cmdUpdateProjectCoordinationAssignment",
      "command": "cmdUpdateProjectCoordinationAssignment",
      "description": "Atualizar Atribuição de coordenação da obra",
      "kind": "command",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.output.cmdUpdateProjectCoordinationAssignment",
      "inputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId",
        "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status"
      ],
      "inputs": [
        {
          "name": "projectCoordinationAssignmentId",
          "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectCoordinationAssignmentId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "projectId",
          "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "fieldCoordinatorId",
          "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.fieldCoordinatorId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdUpdateProjectCoordinationAssignment.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectCoordinationAssignmentCatalogue.cmdDeleteProjectCoordinationAssignment",
      "source": "bff.cmdDeleteProjectCoordinationAssignment",
      "command": "cmdDeleteProjectCoordinationAssignment",
      "description": "Excluir Atribuição de coordenação da obra",
      "kind": "command",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.output.cmdDeleteProjectCoordinationAssignment",
      "inputStateKeys": [
        "ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId"
      ],
      "inputs": [
        {
          "name": "projectCoordinationAssignmentId",
          "stateKey": "ui.projectCoordinationAssignmentCatalogue.input.cmdDeleteProjectCoordinationAssignment.projectCoordinationAssignmentId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.projectCoordinationAssignmentCatalogue.qryProjectPicker",
      "source": "bff.qryProjectPicker",
      "command": "qryProjectPicker",
      "description": "Listar Obra",
      "kind": "query",
      "stateKey": "ui.projectCoordinationAssignmentCatalogue.data.qryProjectPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "projectCoordinationAssignmentCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectCoordinationAssignmentCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/projectCoordinationAssignmentCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectCoordinationAssignmentCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
