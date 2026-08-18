/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/workTaskCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "workTaskCatalogue",
  "pageName": "Tarefa de trabalho",
  "baseClassName": "BuildFlowFsmWorkTaskCatalogueBase",
  "actor": "fieldCoordinator",
  "purpose": "Cadastro de Tarefa de trabalho.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Responsável pelo acompanhamento de tarefas de uma obra, como gestor de projeto ou trabalhador de campo autorizado.",
    "jobToBeDone": "Encontrar tarefas da obra, registrar novas atribuições e atualizar rapidamente o andamento da tarefa selecionada.",
    "primaryDecision": "Qual tarefa selecionar para registrar ou corrigir seu andamento, ou criar uma nova atribuição quando ela ainda não existir.",
    "decisiveInfo": [
      "description",
      "dueDate",
      "assignedFieldWorkerId",
      "status",
      "progressUpdate",
      "projectId"
    ],
    "usageFrequency": "Recorrente durante o acompanhamento da obra, com consultas frequentes e atualizações ocasionais conforme o trabalho avança.",
    "informationHierarchy": [
      "Tarefas existentes e sua situação atual",
      "Descrição, prazo, responsável, status e andamento da tarefa selecionada",
      "Ações de registrar andamento ou excluir a tarefa selecionada",
      "Criação de uma nova tarefa com descrição, prazo e andamento inicial"
    ],
    "successCriteria": "O usuário localiza uma tarefa sem esforço, entende seu estado atual antes de editar, registra o andamento com poucos campos e recebe confirmação após criar, atualizar ou excluir.",
    "antiPatterns": [
      "formulário CRUD separado e duplicado para cada operação",
      "campo manual para projectId ou workTaskId",
      "status como select livre ou campo editável",
      "exclusão sem confirmação",
      "ocultar a tarefa selecionada durante a edição",
      "transformar a consulta e cada comando em seções independentes"
    ],
    "criticalActions": [
      {
        "action": "Selecionar tarefa e revisar seu estado atual",
        "presentation": "master-detail"
      },
      {
        "action": "Registrar o andamento da tarefa selecionada",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Criar uma nova tarefa atribuída",
        "presentation": "primary-button"
      },
      {
        "action": "Excluir a tarefa selecionada",
        "presentation": "inline-row-command com confirmação"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.workTaskCatalogue.qryListWorkTask",
      "source": "bff.qryListWorkTask",
      "command": "qryListWorkTask",
      "description": "Listar Tarefa de trabalho",
      "kind": "query",
      "stateKey": "ui.workTaskCatalogue.data.qryListWorkTask",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.workTaskCatalogue.cmdCreateWorkTask",
      "source": "bff.cmdCreateWorkTask",
      "command": "cmdCreateWorkTask",
      "description": "Registrar a tarefa atribuída",
      "kind": "command",
      "stateKey": "ui.workTaskCatalogue.output.cmdCreateWorkTask",
      "inputStateKeys": [
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId",
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.description",
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate",
        "ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate"
      ],
      "inputs": [
        {
          "name": "projectProjectId",
          "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "description",
          "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "dueDate",
          "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.dueDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "progressUpdate",
          "stateKey": "ui.workTaskCatalogue.input.cmdCreateWorkTask.progressUpdate",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.workTaskCatalogue.cmdUpdateWorkTask",
      "source": "bff.cmdUpdateWorkTask",
      "command": "cmdUpdateWorkTask",
      "description": "Registrar o andamento da tarefa",
      "kind": "command",
      "stateKey": "ui.workTaskCatalogue.output.cmdUpdateWorkTask",
      "inputStateKeys": [
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.description",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate",
        "ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate"
      ],
      "inputs": [
        {
          "name": "projectProjectId",
          "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "workTaskWorkTaskId",
          "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.workTaskWorkTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "description",
          "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "dueDate",
          "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.dueDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "progressUpdate",
          "stateKey": "ui.workTaskCatalogue.input.cmdUpdateWorkTask.progressUpdate",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.workTaskCatalogue.cmdDeleteWorkTask",
      "source": "bff.cmdDeleteWorkTask",
      "command": "cmdDeleteWorkTask",
      "description": "Excluir Tarefa de trabalho",
      "kind": "command",
      "stateKey": "ui.workTaskCatalogue.output.cmdDeleteWorkTask",
      "inputStateKeys": [
        "ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId"
      ],
      "inputs": [
        {
          "name": "workTaskId",
          "stateKey": "ui.workTaskCatalogue.input.cmdDeleteWorkTask.workTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "workTaskCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/workTaskCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/workTaskCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "workTaskCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
