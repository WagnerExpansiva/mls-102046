/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/recordWorkTime.defs.ts" enhancement="_blank"/>

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
    "actor": "Trabalhador de campo responsável por executar a tarefa e registrar sua jornada.",
    "jobToBeDone": "Registrar rapidamente as horas e o custo do trabalho realizado em uma tarefa atribuída e, quando pronto, encaminhar o registro diário ao coordenador de campo.",
    "primaryDecision": "Confirmar a tarefa executada e registrar o lançamento de horas correto para ela.",
    "decisiveInfo": [
      "platformUserId",
      "workTaskId",
      "description",
      "projectId",
      "status",
      "progressUpdate",
      "workDate",
      "hoursWorked",
      "hourlyLaborCost",
      "timeLogId"
    ],
    "usageFrequency": "Frequente durante a rotina diária de campo, possivelmente em dispositivo móvel e com atenção limitada.",
    "informationHierarchy": [
      "trabalhador confirmado",
      "tarefa selecionada e seu status/progresso",
      "data do trabalho",
      "horas trabalhadas",
      "custo horário",
      "confirmação do registro criado",
      "ação de encaminhar ao coordenador"
    ],
    "successCriteria": "O trabalhador identifica a tarefa sem digitar IDs, registra somente os dados necessários em poucos passos, vê a confirmação do lançamento e consegue encaminhá-lo ao coordenador sem redigitar os dados.",
    "antiPatterns": [
      "formulário CRUD expondo IDs técnicos",
      "campo manual para trabalhador, tarefa ou timeLog",
      "status como select livre",
      "formulário de encaminhamento separado e redundante",
      "ocultar a tarefa e seu status antes do lançamento",
      "adicionar campos não previstos no contrato"
    ],
    "criticalActions": [
      {
        "action": "Selecionar a tarefa atribuída",
        "presentation": "master-detail"
      },
      {
        "action": "Registrar as horas trabalhadas",
        "presentation": "primary-button"
      },
      {
        "action": "Encaminhar o registro diário",
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
    "id": "recordWorkTime__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/recordWorkTime.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/recordWorkTime.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/recordWorkTime.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "recordWorkTime__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/processWizard/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
