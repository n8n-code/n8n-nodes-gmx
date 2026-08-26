import type { INodeProperties } from 'n8n-workflow';

export const riskOracleDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Oracle"
					]
				}
			},
			"options": [
				{
					"name": "Get Markets",
					"value": "Get Markets",
					"action": "Get Markets",
					"description": "Active GMX markets for this deployment's chain, proxied from the risk-oracle.\nEach entry is the config display name and the onchain market token it resolved to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/risk-oracle/markets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /risk-oracle/markets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risk Oracle"
					],
					"operation": [
						"Get Markets"
					]
				}
			}
		},
];
