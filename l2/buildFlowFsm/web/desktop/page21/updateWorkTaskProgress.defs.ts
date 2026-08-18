/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/updateWorkTaskProgress.defs.ts" enhancement="_blank"/>

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
    "jobToBeDone": "Atualizar o andamento observado da tarefa e encaminhar esse registro ao coordenador de campo.",
    "primaryDecision": "Confirmar a tarefa selecionada e escolher entre registrar a atualização ou encaminhá-la ao coordenador.",
    "decisiveInfo": [
      "workTaskId",
      "description",
      "dueDate",
      "status",
      "progressUpdate",
      "assignedFieldWorkerId"
    ],
    "usageFrequency": "Recorrente durante a execução em campo, possivelmente em condições móveis e de atenção limitada.",
    "informationHierarchy": [
      "tarefa selecionada e seu contexto",
      "status atual e andamento registrado",
      "data prevista e descrição da tarefa",
      "ação de registrar atualização",
      "ação de encaminhar ao coordenador",
      "feedback do resultado da ação"
    ],
    "successCriteria": "O trabalhador identifica rapidamente a tarefa correta, entende seu estado atual, registra apenas o andamento necessário e consegue encaminhar a atualização sem redigitar identificadores.",
    "antiPatterns": [
      "formulário separado para cada etapa do fluxo",
      "campo manual para workTaskId ou projectProjectId",
      "edição livre do status por select",
      "duplicação de contexto entre atualização e encaminhamento",
      "ações de transição afastadas da tarefa selecionada"
    ],
    "criticalActions": [
      {
        "action": "Registrar o andamento da tarefa",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Informar o andamento ao coordenador",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "Selecionar a tarefa localizada",
        "presentation": "master-detail"
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
    "id": "updateWorkTaskProgress__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/updateWorkTaskProgress.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/updateWorkTaskProgress.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/updateWorkTaskProgress.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "updateWorkTaskProgress__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
