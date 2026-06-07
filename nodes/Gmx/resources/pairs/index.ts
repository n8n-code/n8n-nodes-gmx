import type { INodeProperties } from 'n8n-workflow';

export const pairsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pairs"
					]
				}
			},
			"options": [
				{
					"name": "Get Pairs",
					"value": "Get Pairs",
					"action": "Get Pairs",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pairs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pairs"
					],
					"operation": [
						"Get Pairs"
					]
				}
			}
		},
];
