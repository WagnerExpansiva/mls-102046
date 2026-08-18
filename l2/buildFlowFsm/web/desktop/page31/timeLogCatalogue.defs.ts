/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/timeLogCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "timeLogCatalogue",
  "pageName": "Registro de horas",
  "baseClassName": "BuildFlowFsmTimeLogCatalogueBase",
  "actor": "fieldCoordinator",
  "purpose": "Cadastro de Registro de horas.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Trabalhador de campo ou responsável operacional pelo apontamento de horas",
    "jobToBeDone": "Registrar rapidamente as horas trabalhadas em uma tarefa e corrigir ou remover um apontamento existente quando necessário.",
    "primaryDecision": "Escolher a tarefa e o registro de horas a lançar ou corrigir, então salvar a alteração apropriada.",
    "decisiveInfo": [
      "workTaskId",
      "description",
      "workDate",
      "hoursWorked",
      "hourlyLaborCost",
      "status",
      "fieldWorkerId"
    ],
    "usageFrequency": "Frequente durante ou ao final de cada jornada/tarefa, com revisões ocasionais pelo responsável operacional.",
    "informationHierarchy": [
      "tarefa e contexto do apontamento selecionado",
      "data do trabalho e horas trabalhadas",
      "custo labor-hora e trabalhador associado",
      "status atual do registro",
      "ações de salvar correção ou remover registro"
    ],
    "successCriteria": "O usuário identifica a tarefa sem digitar IDs, registra ou corrige um apontamento em poucos passos, vê o estado atual antes de editar e consegue remover somente o registro correto.",
    "antiPatterns": [
      "expor timeLogId, workTaskId ou fieldWorkerId como campos digitáveis",
      "permitir edição manual livre do status",
      "separar a atualização em um formulário desconectado da linha selecionada",
      "exigir navegação para outra tela para consultar tarefas",
      "oferecer exclusão sem confirmação"
    ],
    "criticalActions": [
      {
        "action": "Registrar horas trabalhadas",
        "presentation": "primary-button no painel contextual de criação, com seletor de tarefa e defaults seguros"
      },
      {
        "action": "Corrigir registro selecionado",
        "presentation": "contextual-transition-actions no painel master-detail, preenchido a partir da linha selecionada"
      },
      {
        "action": "Excluir registro escolhido",
        "presentation": "inline-row-command contextual à linha, com confirmação destrutiva"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.timeLogCatalogue.qryListTimeLog",
      "source": "bff.qryListTimeLog",
      "command": "qryListTimeLog",
      "description": "Listar Registro de horas",
      "kind": "query",
      "stateKey": "ui.timeLogCatalogue.data.qryListTimeLog",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.timeLogCatalogue.cmdCreateTimeLog",
      "source": "bff.cmdCreateTimeLog",
      "command": "cmdCreateTimeLog",
      "description": "Registrar as horas trabalhadas",
      "kind": "command",
      "stateKey": "ui.timeLogCatalogue.output.cmdCreateTimeLog",
      "inputStateKeys": [
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost"
      ],
      "inputs": [
        {
          "name": "workTaskWorkTaskId",
          "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "workDate",
          "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hoursWorked",
          "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hourlyLaborCost",
          "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.timeLogCatalogue.cmdUpdateTimeLog",
      "source": "bff.cmdUpdateTimeLog",
      "command": "cmdUpdateTimeLog",
      "description": "Atualizar Registro de horas",
      "kind": "command",
      "stateKey": "ui.timeLogCatalogue.output.cmdUpdateTimeLog",
      "inputStateKeys": [
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost"
      ],
      "inputs": [
        {
          "name": "timeLogId",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "status",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "workTaskId",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "fieldWorkerId",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "workDate",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hoursWorked",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hourlyLaborCost",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.timeLogCatalogue.cmdDeleteTimeLog",
      "source": "bff.cmdDeleteTimeLog",
      "command": "cmdDeleteTimeLog",
      "description": "Excluir Registro de horas",
      "kind": "command",
      "stateKey": "ui.timeLogCatalogue.output.cmdDeleteTimeLog",
      "inputStateKeys": [
        "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId"
      ],
      "inputs": [
        {
          "name": "timeLogId",
          "stateKey": "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.timeLogCatalogue.qryWorkTaskPicker",
      "source": "bff.qryWorkTaskPicker",
      "command": "qryWorkTaskPicker",
      "description": "Listar Tarefa de trabalho",
      "kind": "query",
      "stateKey": "ui.timeLogCatalogue.data.qryWorkTaskPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "timeLogCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/timeLogCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/timeLogCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "timeLogCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
