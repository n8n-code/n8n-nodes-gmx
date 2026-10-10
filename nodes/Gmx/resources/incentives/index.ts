import type { INodeProperties } from 'n8n-workflow';

export const incentivesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Incentives"
					]
				}
			},
			"options": [
				{
					"name": "Get Usdg Boost Apr",
					"value": "Get Usdg Boost Apr",
					"action": "Get Usdg Boost Apr",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/incentives/usdg/boost-apr"
						}
					}
				},
				{
					"name": "Get Usdg Merkl Apr",
					"value": "Get Usdg Merkl Apr",
					"action": "Get Usdg Merkl Apr",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/incentives/usdg/merkl-apr"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /incentives/usdg/boost-apr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Incentives"
					],
					"operation": [
						"Get Usdg Boost Apr"
					]
				}
			}
		},
		{
			"displayName": "GET /incentives/usdg/merkl-apr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Incentives"
					],
					"operation": [
						"Get Usdg Merkl Apr"
					]
				}
			}
		},
];
