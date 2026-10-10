import type { INodeProperties } from 'n8n-workflow';

export const whitelistsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Whitelists"
					]
				}
			},
			"options": [
				{
					"name": "Get Whitelists",
					"value": "Get Whitelists",
					"action": "Get Whitelists",
					"description": "Whitelists of an address, read from the keeper and refreshed every minute.\ndeposit.markets has only the markets whose direct deposits are whitelist-only: true when the address may deposit.\ndeposit.glvs has only the GLVs whose deposits are whitelist-only: true when the address may deposit.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/whitelists"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /whitelists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Whitelists"
					],
					"operation": [
						"Get Whitelists"
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
						"Whitelists"
					],
					"operation": [
						"Get Whitelists"
					]
				}
			}
		},
];
