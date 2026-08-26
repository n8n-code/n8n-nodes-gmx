import type { INodeProperties } from 'n8n-workflow';

export const relayDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Relay"
					]
				}
			},
			"options": [
				{
					"name": "Submit",
					"value": "Submit",
					"action": "Submit",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/relay/submit"
						}
					}
				},
				{
					"name": "Status",
					"value": "Status",
					"action": "Status",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/relay/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /relay/submit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relay"
					],
					"operation": [
						"Submit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "",
			"description": "Bare relay-router calldata, including the user's EIP-712 signature and no Gelato fee suffix.",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Relay"
					],
					"operation": [
						"Submit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To",
			"name": "to",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Relay"
					],
					"operation": [
						"Submit"
					]
				}
			}
		},
		{
			"displayName": "POST /relay/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Relay"
					],
					"operation": [
						"Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Task ID",
			"name": "taskId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "taskId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Relay"
					],
					"operation": [
						"Status"
					]
				}
			}
		},
];
