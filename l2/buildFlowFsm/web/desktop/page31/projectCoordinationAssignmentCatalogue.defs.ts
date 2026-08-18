/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectCoordinationAssignmentCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectCoordinationAssignmentCatalogue",
  "pageName": "Atribuição de coordenação da obra",
  "baseClassName": "BuildFlowFsmProjectCoordinationAssignmentCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Atribuição de coordenação da obra.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Gestor ou administrador responsável pela coordenação das obras",
    "jobToBeDone": "Localizar uma obra e manter a atribuição do coordenador de campo correta, criando, corrigindo ou removendo o registro quando necessário.",
    "primaryDecision": "Qual atribuição de coordenação deve ser criada ou alterada para a obra selecionada?",
    "decisiveInfo": [
      "projectId",
      "name",
      "address",
      "fieldCoordinatorId",
      "status"
    ],
    "usageFrequency": "Ocassional, em rotinas administrativas de cadastro e correção de responsáveis por obra",
    "informationHierarchy": [
      "obra identificada por nome e contexto do projeto",
      "coordenador de campo atualmente atribuído",
      "status atual da atribuição",
      "ações de criar ou corrigir",
      "remoção da atribuição selecionada"
    ],
    "successCriteria": "O gestor encontra a obra sem digitar identificadores, entende imediatamente o responsável e o status atuais, consegue criar ou corrigir uma atribuição no contexto selecionado e remove registros apenas com confirmação.",
    "antiPatterns": [
      "campo manual para projectCoordinationAssignmentId ou projectId",
      "status como select livre com todos os valores",
      "formulários separados e desconectados para cada operação",
      "exclusão sem confirmação",
      "ocultar a atribuição atual antes de pedir uma correção"
    ],
    "criticalActions": [
      {
        "action": "Selecionar uma obra e criar a atribuição",
        "presentation": "contextual-detail-primary-action com project picker"
      },
      {
        "action": "Corrigir a atribuição selecionada",
        "presentation": "master-detail contextual-action com dados pre preenchidos"
      },
      {
        "action": "Excluir a atribuição selecionada",
        "presentation": "inline-row-command com confirmação destrutiva"
      },
      {
        "action": "Recarregar a lista após mutações",
        "presentation": "automatic-refresh-and-dismissible-feedback"
      }
    ]
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
    "id": "projectCoordinationAssignmentCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectCoordinationAssignmentCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectCoordinationAssignmentCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectCoordinationAssignmentCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
