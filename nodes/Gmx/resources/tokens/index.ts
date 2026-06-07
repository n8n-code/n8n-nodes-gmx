import type { INodeProperties } from 'n8n-workflow';

export const tokensDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					]
				}
			},
			"options": [
				{
					"name": "Get Tokens",
					"value": "Get Tokens",
					"action": "Get Tokens",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tokens"
						}
					}
				},
				{
					"name": "Get Tokens Info",
					"value": "Get Tokens Info",
					"action": "Get Tokens Info",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tokens/info"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"Get Tokens"
					]
				}
			}
		},
		{
			"displayName": "GET /tokens/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"Get Tokens Info"
					]
				}
			}
		},
];
