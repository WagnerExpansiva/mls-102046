/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/workTaskCatalogue.defs.ts" enhancement="_blank"/>

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
    "actor": "Responsável pelo acompanhamento e planejamento de tarefas de uma obra, como gestor de projeto ou trabalhador de campo autorizado.",
    "jobToBeDone": "Localizar tarefas do projeto, registrar novas atribuições e atualizar rapidamente o andamento da tarefa escolhida.",
    "primaryDecision": "Decidir qual tarefa selecionada deve ser criada, atualizada ou removida, priorizando o registro correto e seu andamento atual.",
    "decisiveInfo": [
      "workTaskId",
      "projectId",
      "assignedFieldWorkerId",
      "description",
      "dueDate",
      "status",
      "progressUpdate"
    ],
    "usageFrequency": "Frequentemente durante o acompanhamento operacional da obra, com consultas e atualizações recorrentes.",
    "informationHierarchy": [
      "tarefa selecionada e sua descrição",
      "status atual e andamento",
      "prazo",
      "responsável e projeto",
      "ações válidas para atualizar ou remover",
      "criação de uma nova tarefa"
    ],
    "successCriteria": "O usuário encontra a tarefa correta rapidamente, entende seu estado atual, registra andamento sem editar status diretamente e cria ou remove registros com baixo risco.",
    "antiPatterns": [
      "formulário CRUD separado e sempre aberto para cada operação",
      "campo de status livre ou select com todos os estados",
      "digitação manual de ids de projeto ou tarefa",
      "exclusão sem confirmação",
      "ocultar a tarefa selecionada enquanto ela é editada"
    ],
    "criticalActions": [
      {
        "action": "Selecionar e revisar uma tarefa",
        "presentation": "master-detail"
      },
      {
        "action": "Registrar o andamento da tarefa selecionada",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Criar uma tarefa atribuída",
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
    "id": "workTaskCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/workTaskCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/workTaskCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/workTaskCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "workTaskCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
