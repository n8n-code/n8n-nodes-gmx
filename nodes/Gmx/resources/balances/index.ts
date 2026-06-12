import type { INodeProperties } from 'n8n-workflow';

export const balancesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Balances"
					]
				}
			},
			"options": [
				{
					"name": "Get Wallet Balances",
					"value": "Get Wallet Balances",
					"action": "Get Wallet Balances",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balances/wallet"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /balances/wallet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Balances"
					],
					"operation": [
						"Get Wallet Balances"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Balances"
					],
					"operation": [
						"Get Wallet Balances"
					]
				}
			}
		},
];
