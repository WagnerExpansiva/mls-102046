/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateProject.defs.ts" enhancement="_blank"/>

export const operationUpdateProject = {
  "operationId": "updateProject",
  "title": "Atualizar Obra",
  "actors": [
    "billingStaff",
    "client",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "Project",
  "kind": "update",
  "reads": [
    "Client",
    "Project"
  ],
  "writes": [
    "Project"
  ],
  "rulesApplied": [
    "activeProject",
    "ongoingProject"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Atualizar Obra",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Obra",
    "entity": "Project",
    "keyField": "Project.projectId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "Project.projectId",
      "Project.clientId",
      "Project.name",
      "Project.address",
      "Project.status",
      "Project.authorizedBudget",
      "Project.plannedStartDate",
      "Project.plannedEndDate"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "Project.projectId"
      },
      {
        "name": "clientId",
        "type": "string",
        "required": true,
        "fieldRef": "Project.clientId"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "fieldRef": "Project.name"
      },
      {
        "name": "address",
        "type": "string",
        "required": true,
        "fieldRef": "Project.address"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Project.status"
      },
      {
        "name": "authorizedBudget",
        "type": "number",
        "required": true,
        "fieldRef": "Project.authorizedBudget"
      },
      {
        "name": "plannedStartDate",
        "type": "string",
        "required": true,
        "fieldRef": "Project.plannedStartDate"
      },
      {
        "name": "plannedEndDate",
        "type": "string",
        "required": true,
        "fieldRef": "Project.plannedEndDate"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável da obra, transportado entre etapas e registros relacionados."
    },
    {
      "inputId": "clientId",
      "fieldRef": "Project.clientId",
      "required": true,
      "source": "userInput",
      "description": "Referência ao cliente selecionado ao qual a obra pertence."
    },
    {
      "inputId": "name",
      "fieldRef": "Project.name",
      "required": true,
      "source": "userInput",
      "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente."
    },
    {
      "inputId": "address",
      "fieldRef": "Project.address",
      "required": true,
      "source": "userInput",
      "description": "Endereço do local de execução da obra."
    },
    {
      "inputId": "status",
      "fieldRef": "Project.status",
      "required": true,
      "source": "systemDefault",
      "description": "Situação operacional atual da obra."
    },
    {
      "inputId": "authorizedBudget",
      "fieldRef": "Project.authorizedBudget",
      "required": true,
      "source": "userInput",
      "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra."
    },
    {
      "inputId": "plannedStartDate",
      "fieldRef": "Project.plannedStartDate",
      "required": true,
      "source": "userInput",
      "description": "Data planejada para início da execução da obra."
    },
    {
      "inputId": "plannedEndDate",
      "fieldRef": "Project.plannedEndDate",
      "required": true,
      "source": "userInput",
      "description": "Data planejada para conclusão da obra."
    }
  ],
  "pageId": "projectCatalogue",
  "commandName": "cmdUpdateProject",
  "bffName": "cmdUpdateProject"
} as const;

export default operationUpdateProject;
