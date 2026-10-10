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
				},
				{
					"name": "Get Solana Pairs",
					"value": "Get Solana Pairs",
					"action": "Get Solana Pairs",
					"description": "Perpetual pairs of GMX on Solana, in the same format as /pairs. Funding is the paying side's rate in percent per\nhour, positive when longs pay. Served by the deployment that computes the protocol stats.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pairs/solana"
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
		{
			"displayName": "GET /pairs/solana",
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
						"Get Solana Pairs"
					]
				}
			}
		},
];
