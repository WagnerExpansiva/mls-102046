/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/recordWorkTime.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "recordWorkTime",
  "pageName": "Registrar horas trabalhadas",
  "baseClassName": "BuildFlowFsmRecordWorkTimeBase",
  "actor": "fieldWorker",
  "purpose": "Registrar horas de execução para apoiar o custo realizado da obra.",
  "presentation": {
    "categoryRef": "processWizard"
  },
  "pageObjective": {
    "actor": "Trabalhador de campo que registra a própria execução, com eventual acompanhamento do coordenador de campo.",
    "jobToBeDone": "Registrar as horas executadas em uma tarefa específica e encaminhar o registro diário ao coordenador para acompanhamento.",
    "primaryDecision": "Confirmar a tarefa e os dados de horas corretos para registrar e, depois, encaminhar o registro criado quando estiver pronto.",
    "decisiveInfo": [
      "platformUserId",
      "workTaskId",
      "description",
      "assignedFieldWorkerId",
      "status",
      "workDate",
      "hoursWorked",
      "hourlyLaborCost",
      "timeLogId"
    ],
    "usageFrequency": "Recorrente durante ou ao final de cada jornada/execução de tarefa, possivelmente em contexto operacional móvel.",
    "informationHierarchy": [
      "trabalhador identificado",
      "tarefa selecionada e seu estado/progresso",
      "data do trabalho",
      "horas trabalhadas",
      "custo horário",
      "resultado/status do registro",
      "ação de encaminhar ao coordenador"
    ],
    "successCriteria": "O usuário identifica rapidamente a tarefa correta, informa apenas os dados necessários, cria um registro sem digitar identificadores e consegue encaminhá-lo a partir do contexto do registro criado.",
    "antiPatterns": [
      "formulário CRUD separado para cada etapa",
      "ids técnicos digitados manualmente",
      "campo de status editável livremente",
      "encaminhamento sem mostrar o registro e seu estado atual",
      "duplicar consultas em seções independentes sem contexto compartilhado",
      "expor campos derivados como entradas manuais"
    ],
    "criticalActions": [
      {
        "action": "Selecionar trabalhador e tarefa",
        "presentation": "master-detail"
      },
      {
        "action": "Registrar horas trabalhadas",
        "presentation": "summary-first primary-button"
      },
      {
        "action": "Encaminhar registro diário ao coordenador",
        "presentation": "contextual-transition-actions"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.recordWorkTime.qryLocateFieldWorker",
      "source": "bff.qryLocateFieldWorker",
      "command": "qryLocateFieldWorker",
      "description": "Selecionar o trabalhador responsável",
      "kind": "query",
      "stateKey": "ui.recordWorkTime.data.qryLocateFieldWorker",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.recordWorkTime.qryLocateWorkTask",
      "source": "bff.qryLocateWorkTask",
      "command": "qryLocateWorkTask",
      "description": "Localizar a tarefa atribuída",
      "kind": "query",
      "stateKey": "ui.recordWorkTime.data.qryLocateWorkTask",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.recordWorkTime.cmdCreateTimeLog",
      "source": "bff.cmdCreateTimeLog",
      "command": "cmdCreateTimeLog",
      "description": "Registrar as horas trabalhadas",
      "kind": "command",
      "stateKey": "ui.recordWorkTime.output.cmdCreateTimeLog",
      "inputStateKeys": [
        "ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId",
        "ui.recordWorkTime.input.cmdCreateTimeLog.workDate",
        "ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked",
        "ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost"
      ],
      "inputs": [
        {
          "name": "workTaskWorkTaskId",
          "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.workTaskWorkTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "workDate",
          "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.workDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hoursWorked",
          "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.hoursWorked",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hourlyLaborCost",
          "stateKey": "ui.recordWorkTime.input.cmdCreateTimeLog.hourlyLaborCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.recordWorkTime.cmdHandoffTimeLogToFieldCoordinator",
      "source": "bff.cmdHandoffTimeLogToFieldCoordinator",
      "command": "cmdHandoffTimeLogToFieldCoordinator",
      "description": "Encaminhar o registro diário",
      "kind": "command",
      "stateKey": "ui.recordWorkTime.output.cmdHandoffTimeLogToFieldCoordinator",
      "inputStateKeys": [
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId",
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate",
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked",
        "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost"
      ],
      "inputs": [
        {
          "name": "timeLogTimeLogId",
          "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.timeLogTimeLogId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "workDate",
          "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.workDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hoursWorked",
          "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hoursWorked",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hourlyLaborCost",
          "stateKey": "ui.recordWorkTime.input.cmdHandoffTimeLogToFieldCoordinator.hourlyLaborCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "recordWorkTime__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/recordWorkTime.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/recordWorkTime.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "recordWorkTime__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
