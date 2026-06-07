import type { INodeProperties } from 'n8n-workflow';

export const subaccountsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					]
				}
			},
			"options": [
				{
					"name": "Fetch Status",
					"value": "Fetch Status",
					"action": "Fetch Status",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subaccounts/status"
						}
					}
				},
				{
					"name": "Prepare Approval",
					"value": "Prepare Approval",
					"action": "Prepare Approval",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subaccounts/approval/prepare"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /subaccounts/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Fetch Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subaccount Address",
			"name": "subaccountAddress",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subaccountAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Fetch Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account",
			"name": "account",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Fetch Status"
					]
				}
			}
		},
		{
			"displayName": "POST /subaccounts/approval/prepare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Prepare Approval"
					]
				}
			}
		},
		{
			"displayName": "Signing Network",
			"name": "signingNetwork",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "signingNetwork",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Prepare Approval"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Max Allowed Count",
			"name": "maxAllowedCount",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "maxAllowedCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Prepare Approval"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Expires At",
			"name": "expiresAt",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expiresAt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Prepare Approval"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Should Add",
			"name": "shouldAdd",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "shouldAdd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Prepare Approval"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subaccount Address",
			"name": "subaccountAddress",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subaccountAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Prepare Approval"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account",
			"name": "account",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subaccounts"
					],
					"operation": [
						"Prepare Approval"
					]
				}
			}
		},
];
