/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/updateWorkTaskProgress.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "updateWorkTaskProgress",
  "pageName": "Atualizar andamento da tarefa",
  "baseClassName": "BuildFlowFsmUpdateWorkTaskProgressBase",
  "actor": "fieldWorker",
  "purpose": "Manter o status da tarefa alinhado à execução observada.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Trabalhador de campo responsável pela tarefa atribuída",
    "jobToBeDone": "Confirmar a tarefa em execução, registrar seu andamento atual e comunicar esse progresso ao coordenador de campo.",
    "primaryDecision": "Registrar e enviar o andamento correto da tarefa selecionada ao coordenador.",
    "decisiveInfo": [
      "workTaskId",
      "description",
      "dueDate",
      "status",
      "progressUpdate",
      "projectId",
      "assignedFieldWorkerId"
    ],
    "usageFrequency": "Contínua ou frequente durante a execução em campo, possivelmente em condições de atenção e mãos ocupadas.",
    "informationHierarchy": [
      "tarefa selecionada e identificação contextual",
      "status atual e andamento registrado",
      "prazo e descrição da tarefa",
      "ação de salvar o andamento",
      "ação contextual de comunicar ao coordenador",
      "feedback de sucesso ou erro"
    ],
    "successCriteria": "O trabalhador identifica a tarefa sem digitar ids, entende seu status atual, registra rapidamente o progresso e recebe confirmação clara de que a atualização e o handoff foram concluídos.",
    "antiPatterns": [
      "campo manual para workTaskId ou projectId",
      "edição livre do status",
      "ação de handoff desconectada da tarefa selecionada",
      "formulários duplicados e extensos para cada comando",
      "ocultar o status atual antes da confirmação da mudança",
      "exigir redigitação do mesmo andamento para salvar e comunicar"
    ],
    "criticalActions": [
      {
        "action": "Registrar o andamento da tarefa",
        "presentation": "primary-button no painel contextual da tarefa selecionada"
      },
      {
        "action": "Informar o andamento ao coordenador",
        "presentation": "contextual-transition-actions junto ao detalhe da tarefa, habilitadas somente para a seleção válida"
      },
      {
        "action": "Selecionar a tarefa atribuída",
        "presentation": "master-detail com seleção direta na superfície de localização"
      },
      {
        "action": "Atualizar a lista após sucesso",
        "presentation": "refresh da superfície com feedback textual descartável"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.updateWorkTaskProgress.qryLocateWorkTask",
      "source": "bff.qryLocateWorkTask",
      "command": "qryLocateWorkTask",
      "description": "Localizar a tarefa atribuída",
      "kind": "query",
      "stateKey": "ui.updateWorkTaskProgress.data.qryLocateWorkTask",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.updateWorkTaskProgress.cmdUpdateWorkTask",
      "source": "bff.cmdUpdateWorkTask",
      "command": "cmdUpdateWorkTask",
      "description": "Registrar o andamento da tarefa",
      "kind": "command",
      "stateKey": "ui.updateWorkTaskProgress.output.cmdUpdateWorkTask",
      "inputStateKeys": [
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate",
        "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate"
      ],
      "inputs": [
        {
          "name": "projectProjectId",
          "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "workTaskWorkTaskId",
          "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.workTaskWorkTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "description",
          "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "dueDate",
          "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.dueDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "progressUpdate",
          "stateKey": "ui.updateWorkTaskProgress.input.cmdUpdateWorkTask.progressUpdate",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.updateWorkTaskProgress.cmdHandoffWorkTaskProgressToFieldCoordinator",
      "source": "bff.cmdHandoffWorkTaskProgressToFieldCoordinator",
      "command": "cmdHandoffWorkTaskProgressToFieldCoordinator",
      "description": "Informar o andamento ao coordenador",
      "kind": "command",
      "stateKey": "ui.updateWorkTaskProgress.output.cmdHandoffWorkTaskProgressToFieldCoordinator",
      "inputStateKeys": [
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId",
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description",
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate",
        "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate"
      ],
      "inputs": [
        {
          "name": "workTaskWorkTaskId",
          "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.workTaskWorkTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "description",
          "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "dueDate",
          "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.dueDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "progressUpdate",
          "stateKey": "ui.updateWorkTaskProgress.input.cmdHandoffWorkTaskProgressToFieldCoordinator.progressUpdate",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "updateWorkTaskProgress__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/updateWorkTaskProgress.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/updateWorkTaskProgress.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "updateWorkTaskProgress__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
