/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/assignWorkTask.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "assignWorkTask",
  "pageName": "Planejar e atribuir tarefa de campo",
  "baseClassName": "BuildFlowFsmAssignWorkTaskBase",
  "actor": "fieldCoordinator",
  "purpose": "Criar uma tarefa vinculada à obra e encaminhá-la ao trabalhador responsável.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "dataBindings": [
    {
      "id": "binding.assignWorkTask.qryLocateProject",
      "source": "bff.qryLocateProject",
      "command": "qryLocateProject",
      "description": "Selecionar a obra que exige atenção",
      "kind": "query",
      "stateKey": "ui.assignWorkTask.data.qryLocateProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.assignWorkTask.qryInspectProjectTimeline",
      "source": "bff.qryInspectProjectTimeline",
      "command": "qryInspectProjectTimeline",
      "description": "Consultar o cronograma da obra",
      "kind": "query",
      "stateKey": "ui.assignWorkTask.data.qryInspectProjectTimeline",
      "inputStateKeys": [
        "ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId"
      ],
      "inputs": [
        {
          "name": "projectTimelineProjectId",
          "stateKey": "ui.assignWorkTask.input.qryInspectProjectTimeline.projectTimelineProjectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.assignWorkTask.qryLocateFieldWorker",
      "source": "bff.qryLocateFieldWorker",
      "command": "qryLocateFieldWorker",
      "description": "Selecionar o trabalhador responsável",
      "kind": "query",
      "stateKey": "ui.assignWorkTask.data.qryLocateFieldWorker",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.assignWorkTask.cmdCreateWorkTask",
      "source": "bff.cmdCreateWorkTask",
      "command": "cmdCreateWorkTask",
      "description": "Registrar a tarefa atribuída",
      "kind": "command",
      "stateKey": "ui.assignWorkTask.output.cmdCreateWorkTask",
      "inputStateKeys": [
        "ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId",
        "ui.assignWorkTask.input.cmdCreateWorkTask.description",
        "ui.assignWorkTask.input.cmdCreateWorkTask.dueDate",
        "ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate"
      ],
      "inputs": [
        {
          "name": "projectProjectId",
          "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.projectProjectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "description",
          "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "dueDate",
          "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.dueDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "progressUpdate",
          "stateKey": "ui.assignWorkTask.input.cmdCreateWorkTask.progressUpdate",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.assignWorkTask.cmdHandoffWorkTaskToFieldWorker",
      "source": "bff.cmdHandoffWorkTaskToFieldWorker",
      "command": "cmdHandoffWorkTaskToFieldWorker",
      "description": "Encaminhar a tarefa ao trabalhador",
      "kind": "command",
      "stateKey": "ui.assignWorkTask.output.cmdHandoffWorkTaskToFieldWorker",
      "inputStateKeys": [
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId",
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description",
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate",
        "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate"
      ],
      "inputs": [
        {
          "name": "workTaskWorkTaskId",
          "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.workTaskWorkTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "description",
          "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "dueDate",
          "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.dueDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "progressUpdate",
          "stateKey": "ui.assignWorkTask.input.cmdHandoffWorkTaskToFieldWorker.progressUpdate",
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
    "id": "assignWorkTask__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/assignWorkTask.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page11/assignWorkTask.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/assignWorkTask.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "assignWorkTask__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
