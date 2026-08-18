{
  "savedAt": "2026-08-18T12:29:56.576Z",
  "agentName": "agentCbUsecase",
  "stepId": 53,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "updateWorkTask",
          "ports": [
            "WorkTask",
            "Project"
          ],
          "rulesApplied": [
            "onlyAssignedWorkerReportsTaskProgress"
          ],
          "functions": [
            {
              "functionName": "updateWorkTask",
              "inputTypeName": "UpdateWorkTaskInput",
              "outputTypeName": "UpdateWorkTaskOutput",
              "input": [
                {
                  "name": "projectProjectId",
                  "type": "string",
                  "required": true,
                  "description": "Obra",
                  "fieldRef": "Project.projectId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "workTaskWorkTaskId",
                  "type": "string",
                  "required": true,
                  "description": "Tarefa de trabalho",
                  "fieldRef": "WorkTask.workTaskId",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "description",
                  "type": "string",
                  "required": true,
                  "description": "Descrição do trabalho a ser executado em campo.",
                  "ofEntity": "WorkTask",
                  "fieldRef": "WorkTask.description",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "dueDate",
                  "type": "string",
                  "required": true,
                  "description": "Data prevista para conclusão da tarefa no cronograma da obra.",
                  "ofEntity": "WorkTask",
                  "fieldRef": "WorkTask.dueDate",
                  "item": {
                    "fields": []
                  }
                },
                {
                  "name": "progressUpdate",
                  "type": "string",
                  "required": false,
                  "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa.",
                  "ofEntity": "WorkTask",
                  "fieldRef": "WorkTask.progressUpdate",
                  "item": {
                    "fields": []
                  }
                }
              ],
              "output": [
                {
                  "name": "workTaskId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "WorkTask"
                },
                {
                  "name": "projectId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "WorkTask"
                },
                {
                  "name": "assignedFieldWorkerId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "WorkTask"
                },
                {
                  "name": "description",
                  "type": "string",
                  "required": true,
                  "ofEntity": "WorkTask"
                },
                {
                  "name": "dueDate",
                  "type": "string",
                  "required": true,
                  "ofEntity": "WorkTask"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "WorkTask"
                },
                {
                  "name": "progressUpdate",
                  "type": "string",
                  "required": false,
                  "ofEntity": "WorkTask"
                }
              ],
              "ports": [
                "WorkTask",
                "Project"
              ],
              "rulesApplied": [
                "onlyAssignedWorkerReportsTaskProgress"
              ],
              "transactional": true,
              "steps": [
                "Load the Project through the Project port using projectProjectId and reject when it does not exist.",
                "Load the WorkTask through the WorkTask port using workTaskWorkTaskId and reject when it does not exist or does not belong to the selected project.",
                "Resolve the authenticated actor from session context and apply onlyAssignedWorkerReportsTaskProgress: when progressUpdate is being changed, require the actor id to equal assignedFieldWorkerId; include the rule id in validation error details when blocked.",
                "Update the task description, dueDate, and optional progressUpdate, then save it through the WorkTask port in the transaction.",
                "Return the complete outputShape projection from the saved WorkTask."
              ],
              "outputShape": {
                "kind": "object",
                "fields": [
                  {
                    "name": "workTaskId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.workTaskId"
                  },
                  {
                    "name": "projectId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.projectId"
                  },
                  {
                    "name": "assignedFieldWorkerId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.assignedFieldWorkerId"
                  },
                  {
                    "name": "description",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.description"
                  },
                  {
                    "name": "dueDate",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.dueDate"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.status"
                  },
                  {
                    "name": "progressUpdate",
                    "type": "string",
                    "required": false,
                    "fieldRef": "WorkTask.progressUpdate"
                  }
                ]
              }
            }
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "Repaired the usecase and function ports to include Project.",
          "Renamed public route and selected-entity inputs to projectProjectId and workTaskWorkTaskId exactly as declared by inputId.",
          "Applied the declared assigned-worker progress rule inline."
        ]
      }
    },
    "status": "completed",
    "stepId": 12,
    "interaction": null,
    "nextSteps": null
  }
}
