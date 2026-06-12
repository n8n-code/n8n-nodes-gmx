import type { INodeProperties } from 'n8n-workflow';

export const stakingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					]
				}
			},
			"options": [
				{
					"name": "Get Staking Power",
					"value": "Get Staking Power",
					"action": "Get Staking Power",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/staking/power"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /staking/power",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Staking"
					],
					"operation": [
						"Get Staking Power"
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
						"Staking"
					],
					"operation": [
						"Get Staking Power"
					]
				}
			}
		},
];
