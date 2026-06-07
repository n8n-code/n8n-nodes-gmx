import type { INodeProperties } from 'n8n-workflow';

export const buybackDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Buyback"
					]
				}
			},
			"options": [
				{
					"name": "Get Weekly Stats",
					"value": "Get Weekly Stats",
					"action": "Get Weekly Stats",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/buyback/weekly-stats"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /buyback/weekly-stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Buyback"
					],
					"operation": [
						"Get Weekly Stats"
					]
				}
			}
		},
];
