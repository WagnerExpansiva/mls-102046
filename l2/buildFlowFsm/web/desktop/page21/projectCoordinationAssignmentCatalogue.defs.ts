/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectCoordinationAssignmentCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Coordenador de campo ou operador administrativo responsável por manter as atribuições de coordenação das obras.",
    "jobToBeDone": "Localizar uma obra e garantir que sua atribuição de coordenação esteja correta, criando, corrigindo ou removendo o registro necessário.",
    "primaryDecision": "Qual atribuição selecionada deve ser corrigida ou removida, ou para qual obra deve ser criada uma nova atribuição.",
    "decisiveInfo": [
      "projectId",
      "fieldCoordinatorId",
      "status",
      "projectCoordinationAssignmentId",
      "name",
      "address"
    ],
    "usageFrequency": "Ocasionally/back-office, whenever project coordination responsibility changes or records need maintenance.",
    "informationHierarchy": [
      "atribuições existentes e sua obra",
      "coordenador de campo associado",
      "estado atual da atribuição",
      "contexto da obra selecionada",
      "ações de corrigir, remover ou criar",
      "feedback da operação"
    ],
    "successCriteria": "O usuário identifica o registro correto sem digitar identificadores, entende o estado atual antes de alterar, executa a manutenção em contexto e recebe feedback claro após atualização ou remoção.",
    "antiPatterns": [
      "formulário CRUD separado para cada operação",
      "status como select livre ou entrada manual",
      "ids técnicos digitados manualmente",
      "exclusão sem confirmação",
      "seção independente apenas para o picker de obras",
      "duplicar a lista em uma seção por comando"
    ],
    "criticalActions": [
      {
        "action": "Localizar e selecionar uma atribuição",
        "presentation": "master-detail"
      },
      {
        "action": "Corrigir a atribuição selecionada",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Remover a atribuição selecionada",
        "presentation": "inline-row-command com confirmação destrutiva"
      },
      {
        "action": "Criar uma atribuição para uma obra",
        "presentation": "primary-button abrindo formulário contextual com picker"
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
    "id": "projectCoordinationAssignmentCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectCoordinationAssignmentCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/projectCoordinationAssignmentCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectCoordinationAssignmentCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectCoordinationAssignmentCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
